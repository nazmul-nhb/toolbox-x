import { cp, mkdir, rename, stat } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import type { Plugin } from 'rolldown';
import { bundleAnalyzerPlugin } from 'rolldown/experimental';
import { defineConfig } from 'tsdown';

const statFileName = 'BUNDLE_STATS.md';

export default defineConfig({
	entry: [
		'src/index.ts',
		'src/colors/index.ts',
		'src/converter/index.ts',
		'src/date/index.ts',
		'src/dom/index.ts',
		'src/guards/index.ts',
		'src/hash/index.ts',
		'src/http-status/index.ts',
		'src/pluralizer/index.ts',
		'src/stylog/index.ts',
		'src/verbalizer/index.ts',
		'src/change-case.ts',
		'src/constants.ts',
		'src/paginator.ts',
		'src/types/*.ts',
	],
	globalName: 'Toolbox',
	format: ['esm', 'cjs'],
	dts: true,
	minify: false,
	exports: true,
	unbundle: false,
	treeshake: true,
	plugins: [
		bundleAnalyzerPlugin({
			format: 'md',
			fileName: statFileName,
		}),
		moveFilePlugin({
			file: statFileName,
			fromDir: 'dist',
			to: statFileName,
		}),
	],
	checks: {
		pluginTimings: false,
	},
	banner: `/**
 * Copyright 2026 - present Nazmul Hassan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
`,
});

export interface MoveFilePluginOptions {
	/**
	 * Generated output directory.
	 *
	 * Example: "dist"
	 */
	fromDir: string;

	/**
	 * File inside the generated directory.
	 *
	 * Example: "index.d.ts"
	 */
	file: string;

	/**
	 * Destination path.
	 *
	 * Example: "docs/index.d.ts"
	 */
	to: string;

	/**
	 * Copy instead of move.
	 *
	 * @default false
	 */
	copy?: boolean;
}

async function resolveDestination(source: string, to: string) {
	try {
		if ((await stat(to)).isDirectory()) {
			return join(to, basename(source));
		}
	} catch {
		// Doesn't exist yet. That's perfectly fine.
	}

	// treat "." specially
	if (to === '.' || to === './') {
		return join(to, basename(source));
	}

	return to;
}

/**
 * Moves (or copies) a generated file after the bundle is written.
 */
export function moveFilePlugin(options: MoveFilePluginOptions): Plugin {
	return {
		name: 'move-file',

		async closeBundle() {
			const source = join(options.fromDir, options.file);
			const destination = await resolveDestination(source, options.to);

			await mkdir(dirname(destination), { recursive: true });

			if (options.copy) {
				await cp(source, destination, { force: true });
			} else {
				await rename(source, destination);
			}
		},
	};
}
