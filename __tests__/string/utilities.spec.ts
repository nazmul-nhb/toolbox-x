import {
	countWords,
	extractNumbersFromString,
	getLevenshteinDistance,
} from 'src/string/utilities';
import { describe, expect, it } from 'vitest';

describe('utilities.ts utils', () => {
	describe('countWords', () => {
		it('should count words in simple english strings', () => {
			expect(countWords('hello world')).toBe(2);
			expect(countWords('   this is   a   test   ')).toBe(4);
		});

		it('should support multiple languages and scripts', () => {
			// German with umlauts
			expect(countWords('München ist schön')).toBe(3);
			// Spanish
			expect(countWords('¿Cómo estás?')).toBe(2);
			// Bangla
			expect(countWords('আমি বাংলা ভালোবাসি')).toBe(3);
		});

		it('should treat numbers as words and count them', () => {
			expect(countWords('Room 101')).toBe(2);
			expect(countWords('123 456')).toBe(2);
		});

		it('should handle apostrophes and hyphens inside words', () => {
			expect(countWords("don't run")).toBe(2);
			expect(countWords('user-friendly')).toBe(1);
			expect(countWords('state-of-the-art')).toBe(1);
		});

		it('should return 0 for empty or null strings', () => {
			expect(countWords('')).toBe(0);
			// @ts-expect-error
			expect(countWords(null)).toBe(0);
		});
	});

	describe('extractNumbersFromString', () => {
		it('should extract integers from a string', () => {
			expect(extractNumbersFromString('There are 3 apples and 10 oranges')).toEqual([
				3, 10,
			]);
		});

		it('should return empty array if no digits are present', () => {
			expect(extractNumbersFromString('no numbers here')).toEqual([]);
		});
	});

	describe('getLevenshteinDistance', () => {
		it('should return 0 for identical strings', () => {
			expect(getLevenshteinDistance('kitten', 'kitten')).toBe(0);
		});

		it('should compute distance correctly', () => {
			expect(getLevenshteinDistance('kitten', 'sitting')).toBe(3);
			expect(getLevenshteinDistance('abc', 'yabx')).toBe(2); // insert y, substitute c -> x
		});

		it('should handle empty strings', () => {
			expect(getLevenshteinDistance('', 'hello')).toBe(5);
			expect(getLevenshteinDistance('world', '')).toBe(5);
			expect(getLevenshteinDistance('', '')).toBe(0);
		});
	});
});
