import { generateAnagrams } from 'src/string/anagram';
import { describe, expect, it } from 'vitest';

describe('anagram.ts utils', () => {
	describe('generateAnagrams', () => {
		it('should return empty array if word is empty or invalid', () => {
			expect(generateAnagrams('')).toEqual([]);
			// @ts-expect-error
			expect(generateAnagrams(null)).toEqual([]);
			// @ts-expect-error
			expect(generateAnagrams(undefined)).toEqual([]);
		});

		it('should return single lowercase character if length is 1', () => {
			expect(generateAnagrams('A')).toEqual(['a']);
			expect(generateAnagrams('b')).toEqual(['b']);
		});

		it('should generate permutations of a word', () => {
			// Anagrams of 'cat': cat, cta, act, atc, tca, tac
			const result = generateAnagrams('cat');
			expect(result).toHaveLength(6);
			expect(result).toContain('cat');
			expect(result).toContain('act');
			expect(result).toContain('tac');
		});

		it('should handle duplicate letters efficiently', () => {
			// Permutations of 'aaa' should just be ['aaa']
			const result = generateAnagrams('aaa');
			expect(result).toEqual(['aaa']);

			// Permutations of 'aab': aab, aba, baa
			const result2 = generateAnagrams('aab');
			expect(result2).toHaveLength(3);
			expect(result2).toContain('aab');
			expect(result2).toContain('aba');
			expect(result2).toContain('baa');
		});

		it('should limit the number of outputs', () => {
			const result = generateAnagrams('east', { limit: 3 });
			expect(result.length).toBeLessThanOrEqual(3);
		});

		it('should return all outputs if limit is "all"', () => {
			// Permutations of 'east' (4 unique letters): 4! = 24
			const result = generateAnagrams('east', { limit: 'all' });
			expect(result).toHaveLength(24);
		});

		it('should filter results using a dictionary', () => {
			const dictionary = ['tone', 'note', 'net', 'one'];
			// Anagrams of 'tone': tone, toen, tnoe, tneo, teon, teno, otne, oten, onte, onet, oetn, oent, ntoe, nteo, note, noet, neto, neot, eton, etno, eotn, eont, etno, etc.
			// Only 'tone' and 'note' are in the dictionary
			const result = generateAnagrams('tone', { dictionary });
			expect(result).toHaveLength(2);
			expect(result).toContain('tone');
			expect(result).toContain('note');
			expect(result).not.toContain('one'); // different letters / length
		});

		it('should cache dictionary sets using WeakMap', () => {
			const dictionary = ['east', 'seat', 'sate', 'teaser'];
			// First run
			const res1 = generateAnagrams('east', { dictionary });
			expect(res1).toContain('east');
			expect(res1).toContain('seat');

			// Second run with the same dictionary reference to hit cache
			const res2 = generateAnagrams('east', { dictionary });
			expect(res2).toEqual(res1);
		});
	});
});
