import { computeTextDiff, getCharacterDifferences } from 'src/string/diff';
import { describe, expect, it } from 'vitest';

describe('diff.ts utils', () => {
	describe('computeTextDiff', () => {
		it('should detect unchanged, added, and removed lines', () => {
			const original = 'line1\nline2\nline3';
			const modified = 'line1\nline4\nline3';

			const result = computeTextDiff(original, modified);

			expect(result.stats).toEqual({
				linesAdded: 0,
				linesRemoved: 0,
				linesChanged: 1, // line2 -> line4 is paired as changed since they are similar enough
				linesUnchanged: 2,
			});

			expect(result.lines).toHaveLength(3);
			expect(result.lines[0]).toEqual({
				type: 'unchanged',
				original: 'line1',
				modified: 'line1',
				originalLineNum: 1,
				modifiedLineNum: 1,
			});
			expect(result.lines[1]).toEqual({
				type: 'modified',
				original: 'line2',
				modified: 'line4',
				originalLineNum: 2,
				modifiedLineNum: 2,
			});
			expect(result.lines[2]).toEqual({
				type: 'unchanged',
				original: 'line3',
				modified: 'line3',
				originalLineNum: 3,
				modifiedLineNum: 3,
			});
		});

		it('should detect simple additions and removals when similarity is below threshold', () => {
			const original = 'hello world\nsome completely different content';
			const modified = 'hello world\nnew text here';

			const result = computeTextDiff(original, modified);

			expect(result.stats).toEqual({
				linesAdded: 1,
				linesRemoved: 1,
				linesChanged: 0, // No pairing because similarity is too low
				linesUnchanged: 1,
			});
		});

		it('should handle completely added or removed files', () => {
			const resultAdd = computeTextDiff('', 'line1\nline2');
			expect(resultAdd.stats.linesAdded).toBe(2);

			const resultRemove = computeTextDiff('line1\nline2', '');
			expect(resultRemove.stats.linesRemoved).toBe(2);
		});
	});

	describe('getCharacterDifferences', () => {
		it('should return empty arrays when both inputs are empty', () => {
			expect(getCharacterDifferences('', '')).toEqual({
				original: [],
				modified: [],
			});
		});

		it('should highlight all characters in the non-empty string when one is empty', () => {
			const res1 = getCharacterDifferences('', 'ab');
			expect(res1.original).toEqual([]);
			expect(res1.modified).toEqual([
				{ text: 'a', highlighted: true },
				{ text: 'b', highlighted: true },
			]);

			const res2 = getCharacterDifferences('xy', '');
			expect(res2.original).toEqual([
				{ text: 'x', highlighted: true },
				{ text: 'y', highlighted: true },
			]);
			expect(res2.modified).toEqual([]);
		});

		it('should highlight only character differences', () => {
			const result = getCharacterDifferences('cat', 'car');
			expect(result.original).toEqual([
				{ text: 'c', highlighted: false },
				{ text: 'a', highlighted: false },
				{ text: 't', highlighted: true },
			]);
			expect(result.modified).toEqual([
				{ text: 'c', highlighted: false },
				{ text: 'a', highlighted: false },
				{ text: 'r', highlighted: true },
			]);
		});

		it('should highlight character insertions and deletions', () => {
			const result = getCharacterDifferences('hello', 'hello world');
			expect(result.original).toEqual([
				{ text: 'h', highlighted: false },
				{ text: 'e', highlighted: false },
				{ text: 'l', highlighted: false },
				{ text: 'l', highlighted: false },
				{ text: 'o', highlighted: false },
			]);
			expect(result.modified).toEqual([
				{ text: 'h', highlighted: false },
				{ text: 'e', highlighted: false },
				{ text: 'l', highlighted: false },
				{ text: 'l', highlighted: false },
				{ text: 'o', highlighted: true },
				{ text: ' ', highlighted: true },
				{ text: 'w', highlighted: true },
				{ text: 'o', highlighted: false },
				{ text: 'r', highlighted: true },
				{ text: 'l', highlighted: true },
				{ text: 'd', highlighted: true },
			]);
		});
	});
});
