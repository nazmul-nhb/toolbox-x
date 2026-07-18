/** biome-ignore-all lint/correctness/noPrecisionLoss: <it is a test file> */
import {
	banglaToDigit,
	convertToRomanNumerals,
	digitToBangla,
	numberToWords,
	numberToWordsOrdinal,
	romanToInteger,
	wordsToNumber,
} from 'src/number/convert';
import { describe, expect, it, test } from 'vitest';

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

describe('convertToRomanNumerals', () => {
	it('converts single-digit numbers', () => {
		expect(convertToRomanNumerals(1)).toBe('I');
		expect(convertToRomanNumerals(4)).toBe('IV');
		expect(convertToRomanNumerals(9)).toBe('IX');
	});

	it('converts double-digit numbers', () => {
		expect(convertToRomanNumerals(29)).toBe('XXIX');
		expect(convertToRomanNumerals(44)).toBe('XLIV');
		expect(convertToRomanNumerals(58)).toBe('LVIII');
		expect(convertToRomanNumerals(99)).toBe('XCIX');
	});

	it('converts triple-digit numbers', () => {
		expect(convertToRomanNumerals(399)).toBe('CCCXCIX');
		expect(convertToRomanNumerals(444)).toBe('CDXLIV');
		expect(convertToRomanNumerals(999)).toBe('CMXCIX');
	});

	it('converts numbers up to 3999', () => {
		expect(convertToRomanNumerals(1000)).toBe('M');
		expect(convertToRomanNumerals(1987)).toBe('MCMLXXXVII');
		expect(convertToRomanNumerals(3999)).toBe('MMMCMXCIX');
	});

	it('throws RangeError for numbers out of range', () => {
		expect(() => convertToRomanNumerals(0)).toThrow(RangeError);
		expect(() => convertToRomanNumerals(-5)).toThrow(RangeError);
		expect(() => convertToRomanNumerals(4000)).toThrow(RangeError);
	});
});

describe('romanToInteger', () => {
	it('converts simple Roman numerals', () => {
		expect(romanToInteger('I')).toBe(1);
		expect(romanToInteger('IV')).toBe(4);
		expect(romanToInteger('IX')).toBe(9);
	});

	it('converts mixed numerals', () => {
		expect(romanToInteger('XXIX')).toBe(29);
		expect(romanToInteger('XLIV')).toBe(44);
		expect(romanToInteger('LVIII')).toBe(58);
		expect(romanToInteger('XCIX')).toBe(99);
	});

	it('converts large numerals', () => {
		expect(romanToInteger('CCCXCIX')).toBe(399);
		expect(romanToInteger('CDXLIV')).toBe(444);
		expect(romanToInteger('CMXCIX')).toBe(999);
		expect(romanToInteger('MCMLXXXVII')).toBe(1987);
		expect(romanToInteger('MMMCMXCIX')).toBe(3999);
	});

	it('accepts lowercase input', () => {
		expect(romanToInteger('i')).toBe(1);
		expect(romanToInteger('xiv')).toBe(14);
		expect(romanToInteger('mmxxv')).toBe(2025);
	});

	it('throws error on empty or non-string input', () => {
		expect(() => romanToInteger('')).toThrow(TypeError);
		// @ts-expect-error testing invalid type
		expect(() => romanToInteger(null)).toThrow(TypeError);
	});

	it('throws error on invalid characters', () => {
		expect(() => romanToInteger('ABC')).toThrow(Error);
		expect(() => romanToInteger('VX')).toThrow(Error); // malformed Roman numeral
		expect(() => romanToInteger('IIII')).toThrow(Error); // invalid repetition
	});

	it('throws error if result out of range', () => {
		// theoretically only possible if input > 3999
		expect(() => romanToInteger('MMMM')).toThrow(RangeError);
	});

	it('round-trip consistency', () => {
		for (const num of [1, 4, 9, 29, 44, 58, 99, 399, 444, 999, 1987, 3999]) {
			const roman = convertToRomanNumerals(num);
			const arabic = romanToInteger(roman);
			expect(arabic).toBe(num);
		}
	});
});

describe('wordsToNumber — valid cardinal conversions', () => {
	test.each<[string, number]>([
		// ones
		['zero', 0],
		['one', 1],
		['two', 2],
		['nine', 9],
		// teens
		['ten', 10],
		['eleven', 11],
		['nineteen', 19],
		// tens
		['twenty', 20],
		['thirty', 30],
		['ninety-nine', 99],
		['ninety nine', 99], // space instead of hyphen
		['forty-two', 42],
		['forty two', 42],
		// hundreds
		['one hundred', 100],
		['one hundred and one', 101],
		['one hundred one', 101],
		['two hundred thirty-four', 234],
		['two hundred and thirty four', 234],
		// thousands
		['one thousand', 1000],
		['one thousand one', 1001],
		['two thousand three hundred', 2300],
		['twelve thousand three hundred forty-five', 12345],
		// millions
		['one million', 1_000_000],
		['one million two hundred thirty-four thousand five hundred sixty-seven', 1_234_567],
		// mixed whitespace and commas
		['1,234', 1234],
		['042', 42],
		// numeric strings
		['123', 123],
		['3.14', 3.14],
		// negative forms
		['minus five', -5],
		['negative forty-two', -42],
		// more combinations
		['seven hundred thirteen thousand nine hundred and one', 713_901],
		['forty five thousand six hundred seventy eight', 45_678],
	])('parses "%s" → %d', (input, expected) => {
		const got = wordsToNumber(input);
		// use toBeCloseTo for possible float input like '3.14'
		if (!Number.isInteger(expected)) {
			expect(got).toBeCloseTo(expected);
		} else {
			expect(got).toBe(expected);
		}
	});
});

describe('wordsToNumber — ordinals and ordinal-like inputs', () => {
	test.each<[string, number]>([
		['first', 1],
		['second', 2],
		['third', 3],
		['fourth', 4],
		['fifth', 5],
		['tenth', 10],
		['eleventh', 11],
		['twelfth', 12],
		['twentieth', 20],
		['thirtieth', 30],
		['fiftieth', 50], // best-effort -> 50
		['hundredth', 100], // best-effort -> 100
		['thousandth', 1000], // best-effort -> 1000
		['twenty-first', 21],
		['twenty first', 21],
		['one hundred and first', 101],
		['one hundred first', 101],
		['one thousandth', 1000],
		['one millionth', 1_000_000],
	])('parses ordinal "%s" → %d', (input, expected) => {
		const got = wordsToNumber(input);
		expect(got).toBe(expected);
	});
});

describe('wordsToNumber — edge cases and anomalies', () => {
	test.each<[string, number]>([
		// stray "and"
		['and', NaN],
		['one and', NaN],
		// mixed words that include unexpected tokens
		['seventy-seven cats', NaN],
		['one hundred bananas', NaN],
		// empty / whitespace
		['', NaN],
		['   ', NaN],
		// unknown words
		['foobar', NaN],
		['one zillion', NaN],
	])('parses anomalous "%s" → NaN', (input, _expected) => {
		const got = wordsToNumber(input);
		expect(Number.isNaN(got)).toBe(true);
	});
});

describe('wordsToNumber — precision and large values', () => {
	test.each<[string, number]>([
		['one thousand two hundred thirty-four', 1234],
		[
			'twelve million three hundred forty-five thousand six hundred seventy-eight',
			12_345_678,
		],
		['one billion', 1_000_000_000],
		// non-integer numeric strings preserved
		['0.0', 0],
		['0003.140', 3.14],
	])('parses large/precision "%s" → %d', (input, expected) => {
		const got = wordsToNumber(input);
		if (!Number.isInteger(expected)) {
			expect(got).toBeCloseTo(expected);
		} else {
			expect(got).toBe(expected);
		}
	});
});

describe('wordsToNumber — robustness for token separators', () => {
	test.each<[string, number]>([
		['twenty-five', 25],
		['twenty five', 25],
		['twenty   five', 25],
		[' twenty five ', 25],
		['thirty, five', NaN], // comma inside words is not valid (except numeric comma like "1,234")
		['1,000,000', 1_000_000],
	])('parses token variations "%s"', (input, expected) => {
		const got = wordsToNumber(input);
		if (Number.isNaN(expected)) {
			expect(Number.isNaN(got)).toBe(true);
		} else {
			expect(got).toBe(expected);
		}
	});
});

/**
 * Small helper to avoid strict equality for values beyond MAX_SAFE_INTEGER
 * and for decimals. It scales big numbers down so toBeCloseTo works reliably.
 * @param {number} got
 * @param {number} expected
 */
function expectNumberApproximately(got: number, expected: number) {
	const absExp = Math.abs(expected);

	// If it's a decimal or beyond safe integer, use scaled close-to
	const needsApprox = !Number.isInteger(expected) || absExp > Number.MAX_SAFE_INTEGER;

	if (!needsApprox) {
		expect(got).toBe(expected);
		return;
	}

	// Choose a scale so ULPs don't dominate—keep it simple.
	// 1e18 works well for 10^18–10^20; 1e15 for 10^15–10^18, else 1.
	const scale = absExp >= 1e18 ? 1e18 : absExp >= 1e15 ? 1e15 : 1;

	// precision=1 => within 0.5 of scaled value, which is generous enough
	// to accommodate float rounding at huge magnitudes.
	expect(got / scale).toBeCloseTo(expected / scale, 1);
}

describe('wordsToNumber — very large cardinals (up to 10^20)', () => {
	test.each<[string, number]>([
		// trillions
		['one trillion', 1_000_000_000_000],
		[
			'one trillion two hundred thirty-four billion five hundred sixty-seven million eight hundred ninety thousand one hundred twenty-three',
			1_234_567_890_123,
		],

		// quadrillions (10^15)
		['one quadrillion', 1_000_000_000_000_000],
		['nine quadrillion', 9_000_000_000_000_000],
		[
			'ninety-nine quadrillion nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine',
			99_999_999_999_999_999, // (we’ll compare approximately)
		],

		// quintillions (10^18)
		['one quintillion', 1_000_000_000_000_000_000],
		['two quintillion three hundred million', 2_000_000_000_300_000_000],
		// [
		// 	'forty-two quintillion five hundred sixty-seven trillion eight hundred ninety billion twelve',
		// 	42_567_890_000_000_000_012, // ~4.256789e19
		// ],

		// full upper limit: one hundred quintillion = 10^20
		['one hundred quintillion', 100_000_000_000_000_000_000],
	])('parses large "%s"', (input, expected) => {
		const got = wordsToNumber(input);
		expectNumberApproximately(got, expected);
	});
});

describe('wordsToNumber — very large with "and" / spacing variants', () => {
	test.each<[string, number]>([
		[
			'one hundred and twenty-three trillion four hundred and fifty-six billion seven hundred and eighty-nine million and twelve',
			123_456_789_000_012,
		],
		['twelve quadrillion and three', 12_000_000_000_000_003],
		['one quintillion and one', 1_000_000_000_000_000_001],
	])('parses "%s"', (input, expected) => {
		const got = wordsToNumber(input);
		expectNumberApproximately(got, expected);
	});
});

describe('wordsToNumber — very large ordinals', () => {
	test.each<[string, number]>([
		['thousandth', 1_000],
		['millionth', 1_000_000],
		['billionth', 1_000_000_000],
		['quadrillionth', 1_000_000_000_000_000],
		['quintillionth', 1_000_000_000_000_000_000],
		['one hundred quintillionth', 100_000_000_000_000_000_000],
	])('parses ordinal "%s"', (input, expected) => {
		const got = wordsToNumber(input);
		expectNumberApproximately(got, expected);
	});
});

describe('wordsToNumber — negatives at scale', () => {
	test.each<[string, number]>([
		['minus one trillion', -1_000_000_000_000],
		['negative two quadrillion three hundred', -2_000_000_000_000_300],
		['minus one quintillion two hundred thirty-four thousand', -1_000_000_000_000_234_000],
	])('parses negative "%s"', (input, expected) => {
		const got = wordsToNumber(input);
		expectNumberApproximately(got, expected);
	});
});

describe('wordsToNumber — numeric strings with big commas', () => {
	test.each<[string, number]>([
		['1,000,000,000,000', 1_000_000_000_000],
		['1,000,000,000,000,000', 1_000_000_000_000_000],
		['1,000,000,000,000,000,000', 1_000_000_000_000_000_000],
		['100,000,000,000,000,000,000', 100_000_000_000_000_000_000],
	])('parses numeric "%s"', (input, expected) => {
		const got = wordsToNumber(input);
		expectNumberApproximately(got, expected);
	});
});

describe('wordsToNumber — unsupported beyond configured scales', () => {
	test.each<string>([
		'one sextillion', // not present in your THOUSANDS map (by design)
		'sextillionth',
	])('returns NaN for "%s"', (input) => {
		const got = wordsToNumber(input);
		expect(Number.isNaN(got)).toBe(true);
	});
});
