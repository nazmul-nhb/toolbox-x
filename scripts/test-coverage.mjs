// @ts-check

import { readFile, stat, writeFile } from 'node:fs/promises';
import { relative } from 'node:path';
import prettier from 'prettier';

/**
 * @typedef {object} CoverageMetric
 * @property {number} total
 * @property {number} covered
 * @property {number} skipped
 * @property {number} pct
 */

/**
 * @typedef {object} FileCoverage
 * @property {CoverageMetric} lines
 * @property {CoverageMetric} statements
 * @property {CoverageMetric} functions
 * @property {CoverageMetric} branches
 * @property {CoverageMetric} [branchesTrue]
 */

/**
 * @typedef {Record<string, FileCoverage>} CoverageSummary
 */

/**
 * @typedef {object} CoverageFile
 * @property {string} path
 * @property {CoverageMetric} lines
 * @property {CoverageMetric} statements
 * @property {CoverageMetric} functions
 * @property {CoverageMetric} branches
 * @property {CoverageMetric} [branchesTrue]
 */

const COVERAGE_JSON = 'coverage/coverage-summary.json';

const sourceMtime = (await stat(COVERAGE_JSON)).mtime.toISOString();

/** @type {CoverageSummary} */
const summary = JSON.parse(await readFile(COVERAGE_JSON, 'utf8'));

const total = summary.total;

/** @type {CoverageFile[]} */
const files = Object.entries(summary)
	.filter(([key]) => key !== 'total')
	.map(([file, coverage]) => ({
		path: relative(process.cwd(), file).replaceAll('\\', '/'),
		...coverage,
	}))
	.filter((file) => file.statements.total > 0)
	.sort((a, b) => a.path.localeCompare(b.path));

/**
 * @typedef {object} ModuleCoverage
 * @property {number} files
 * @property {number} statements
 * @property {number} branches
 * @property {number} functions
 * @property {number} lines
 */

/** @type {Map<string, ModuleCoverage>} */
const modules = new Map();

for (const file of files) {
	const [, moduleName] = file.path.split('/');

	const current = modules.get(moduleName) ?? {
		files: 0,
		statements: 0,
		branches: 0,
		functions: 0,
		lines: 0,
	};

	current.files++;
	current.statements += file.statements.pct;
	current.branches += file.branches.pct;
	current.functions += file.functions.pct;
	current.lines += file.lines.pct;

	modules.set(moduleName, current);
}

const moduleRows = [...modules.entries()]
	.map(([name, value]) => ({
		name,
		files: value.files,
		statements: value.statements / value.files,
		branches: value.branches / value.files,
		functions: value.functions / value.files,
		lines: value.lines / value.files,
	}))
	.sort((a, b) => a.name.localeCompare(b.name));

/** @type {CoverageFile[]} */
const best = (() => {
	const perfect = files.filter((file) => file.statements.pct === 100);

	if (perfect.length >= 10) {
		return perfect.sort((a, b) => a.path.localeCompare(b.path));
	}

	const remaining = files
		.filter((file) => file.statements.pct < 100)
		.sort((a, b) => b.statements.pct - a.statements.pct)
		.slice(0, 10 - perfect.length);

	return [...perfect, ...remaining];
})();

const worst = [...files].sort((a, b) => a.statements.pct - b.statements.pct).slice(0, 10);

/** @type {Record<string, number>} */
const distribution = {
	'100%': 0,
	'95–99%': 0,
	'90–94%': 0,
	'80–89%': 0,
	'70–79%': 0,
	'<70%': 0,
};

for (const file of files) {
	const pct = file.statements.pct;

	if (pct === 100) distribution['100%']++;
	else if (pct >= 95) distribution['95–99%']++;
	else if (pct >= 90) distribution['90–94%']++;
	else if (pct >= 80) distribution['80–89%']++;
	else if (pct >= 70) distribution['70–79%']++;
	else distribution['<70%']++;
}

const markdown = `<!-- source-mtime: ${sourceMtime} -->

# Test Coverage Report (Summary)

Generated: ${new Date().toUTCString()}

## Overall

| Metric | Covered | Total | Coverage |
|--------|--------:|------:|---------:|
| Statements | ${total.statements.covered} | ${total.statements.total} | ${total.statements.pct}% |
| Branches | ${total.branches.covered} | ${total.branches.total} | ${total.branches.pct}% |
| Functions | ${total.functions.covered} | ${total.functions.total} | ${total.functions.pct}% |
| Lines | ${total.lines.covered} | ${total.lines.total} | ${total.lines.pct}% |

## Files

| File | Statements | Branches | Functions | Lines |
|------|-----------:|---------:|----------:|------:|
${files
	.map(
		(file) =>
			`| ${file.path} | ${file.statements.pct.toFixed(2)}% | ${file.branches.pct.toFixed(2)}% | ${file.functions.pct.toFixed(2)}% | ${file.lines.pct.toFixed(2)}% |`
	)
	.join('\n')}

## Modules

| Module | Files | Statements | Branches | Functions | Lines |
|--------|------:|-----------:|---------:|----------:|------:|
${moduleRows
	.map(
		(module) =>
			`| ${module.name} | ${module.files} | ${module.statements.toFixed(2)}% | ${module.branches.toFixed(2)}% | ${module.functions.toFixed(2)}% | ${module.lines.toFixed(2)}% |`
	)
	.join('\n')}

## Lowest Coverage

| File | Statements |
|------|-----------:|
${worst.map((file) => `| ${file.path} | ${file.statements.pct.toFixed(2)}% |`).join('\n')}

## Highest Coverage

| File | Statements |
|------|-----------:|
${best.map((file) => `| ${file.path} | ${file.statements.pct.toFixed(2)}% |`).join('\n')}

## Distribution

| Range | Files |
|-------|------:|
${Object.entries(distribution)
	.map(([range, count]) => `| ${range} | ${count} |`)
	.join('\n')}
`;

/**
 * Returns the source mtime stored in the report, or null if unavailable.
 *
 * @param {string} file
 * @returns {Promise<string | null>}
 */
async function getStoredSourceMtime(file) {
	try {
		const content = await readFile(file, 'utf8');

		const match = content.match(/^<!--\s*source-mtime:\s*(.+?)\s*-->/);

		return match?.[1] ?? null;
	} catch {
		return null;
	}
}

try {
	const previousMtime = await getStoredSourceMtime('TEST_COVERAGE.md');

	if (previousMtime !== sourceMtime) {
		const formatted = await prettier.format(markdown, {
			parser: 'markdown',
		});

		await writeFile('TEST_COVERAGE.md', formatted);
	}
} catch (err) {
	console.error(String(err));
}
