import {
	banglaToDigit,
	convertToRomanNumerals,
	digitToBangla,
	numberToWords,
	numberToWordsOrdinal,
	romanToInteger,
	wordsToNumber,
} from 'src/number/convert';
import { describe, expect, it } from 'vitest';

describe('number conversion utilities', () => {
	describe('numberToWords', () => {
		it('should convert integers to English words', () => {
			expect(numberToWords(0)).toBe('zero');
			expect(numberToWords(42)).toBe('forty-two');
			expect(numberToWords(-15)).toBe('minus fifteen');
			expect(numberToWords(1234)).toBe('one thousand two hundred and thirty-four');
		});

		it('should handle invalid inputs', () => {
			expect(numberToWords(NaN)).toBe('Invalid Number!');
			expect(numberToWords(10e22)).toContain('exceeds supported range');
		});
	});

	describe('convertToRomanNumerals and romanToInteger', () => {
		it('should convert integer to Roman numerals', () => {
			expect(convertToRomanNumerals(29)).toBe('XXIX');
			expect(convertToRomanNumerals(2026)).toBe('MMXXVI');
		});

		it('should throw error for values out of range', () => {
			expect(() => convertToRomanNumerals(0)).toThrow(RangeError);
			expect(() => convertToRomanNumerals(4000)).toThrow(RangeError);
		});

		it('should convert Roman numeral to integer', () => {
			expect(romanToInteger('XXIX')).toBe(29);
			expect(romanToInteger('mmxxvi')).toBe(2026);
		});

		it('should throw error for invalid Roman numeral characters', () => {
			expect(() => romanToInteger('abc')).toThrow();
			expect(() => romanToInteger('')).toThrow(TypeError);
		});
	});

	describe('numberToWordsOrdinal', () => {
		it('should convert numbers/words to their ordinal representation', () => {
			expect(numberToWordsOrdinal(1)).toBe('first');
			expect(numberToWordsOrdinal('23')).toBe('twenty-third');
			expect(numberToWordsOrdinal('twenty-three')).toBe('twenty-third');
			expect(numberToWordsOrdinal('hundred')).toBe('hundredth');
			expect(numberToWordsOrdinal('forty')).toBe('fortieth');
			expect(numberToWordsOrdinal('fortieth')).toBe('fortieth');
		});
	});

	describe('wordsToNumber', () => {
		it('should convert English words to numbers', () => {
			expect(wordsToNumber('forty-two')).toBe(42);
			expect(wordsToNumber('one hundred and seven')).toBe(107);
			expect(wordsToNumber('twenty-first')).toBe(21);
			expect(wordsToNumber('negative five')).toBe(-5);
			expect(wordsToNumber('invalid')).toBeNaN();
		});
	});

	describe('banglaToDigit', () => {
		it('should convert Bangla digits to Latin digits', () => {
			expect(banglaToDigit('১২৩')).toBe(123);
			expect(banglaToDigit('১২৩', false)).toBe('123');
			expect(banglaToDigit('১২৩abc', false)).toBe('123abc');
			expect(banglaToDigit('')).toBeNaN();
		});
	});

	describe('digitToBangla', () => {
		it('should convert Latin digits to Bangla digits', () => {
			expect(digitToBangla(123)).toBe('১২৩');
			expect(digitToBangla('456')).toBe('৪৫৬');
			expect(digitToBangla('12ab', false)).toBe('১২');
			expect(digitToBangla('12ab')).toBe('১২ab');
			expect(digitToBangla('')).toBe('');
		});
	});
});
