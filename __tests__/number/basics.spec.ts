import {
	calculateHCF,
	calculateLCM,
	convertToDecimal,
	factorial,
	getAverage,
	getDecimalPlaces,
	getFactors,
	getRandomNumber,
	reverseNumber,
	roundNumber,
	safeAdd,
	sumDigits,
	sumNumbers,
} from 'src/number/basics';
import { describe, expect, it } from 'vitest';

describe('number basics utilities', () => {
	describe('getRandomNumber', () => {
		it('should generate a random number within default range (0 to 100)', () => {
			const num = getRandomNumber();
			expect(num).toBeGreaterThanOrEqual(0);
			expect(num).toBeLessThanOrEqual(100);
		});

		it('should swap min and max if min > max', () => {
			const num = getRandomNumber({ min: 10, max: 5 });
			expect(num).toBeGreaterThanOrEqual(5);
			expect(num).toBeLessThanOrEqual(10);
		});

		it('should return min if min === max', () => {
			expect(getRandomNumber({ min: 5, max: 5 })).toBe(5);
		});

		it('should handle exclusive ranges', () => {
			const num = getRandomNumber({
				min: 5,
				max: 7,
				includeMin: false,
				includeMax: false,
			});
			expect(num).toBe(6);
		});

		it('should handle inclusive-min and exclusive-max ranges', () => {
			const num = getRandomNumber({
				min: 5,
				max: 6,
				includeMin: true,
				includeMax: false,
			});
			expect(num).toBe(5);
		});

		it('should handle exclusive-min and inclusive-max ranges', () => {
			const num = getRandomNumber({
				min: 5,
				max: 6,
				includeMin: false,
				includeMax: true,
			});
			expect(num).toBe(6);
		});
	});

	describe('convertToDecimal', () => {
		it('should round numbers to specified decimal places', () => {
			expect(convertToDecimal(1.2345)).toBe(1.23);
			expect(convertToDecimal(1.2345, { decimalPlaces: 3 })).toBe(1.234);
			expect(convertToDecimal('1.2345', { decimalPlaces: 1, isString: true })).toBe(
				'1.2'
			);
		});

		it('should throw TypeError on invalid inputs', () => {
			// @ts-expect-error
			expect(() => convertToDecimal('invalid')).toThrow(TypeError);
		});
	});

	describe('calculateHCF and calculateLCM', () => {
		it('should calculate HCF/GCD correctly', () => {
			expect(calculateHCF(12, 18, 30)).toBe(6);
			expect(calculateHCF()).toBe(0);
		});

		it('should calculate LCM correctly', () => {
			expect(calculateLCM(4, 5, 6)).toBe(60);
			expect(calculateLCM()).toBe(0);
		});
	});

	describe('factorial', () => {
		it('should compute factorial correctly', () => {
			expect(factorial(5)).toBe(120);
			expect(factorial(0)).toBe(1);
			expect(factorial(1)).toBe(1);
		});

		it('should return undefined for invalid, negative or non-integer inputs', () => {
			expect(factorial(-1)).toBeUndefined();
			expect(factorial(5.5)).toBeUndefined();
			// @ts-expect-error
			expect(factorial('abc')).toBeUndefined();
		});
	});

	describe('getFactors', () => {
		it('should compute positive integer factors correctly', () => {
			expect(getFactors(12)).toEqual([1, 2, 3, 4, 6, 12]);
			expect(getFactors(7)).toEqual([1, 7]);
			expect(getFactors(1)).toEqual([1]);
		});

		it('should return empty array for negative, non-integer or invalid inputs', () => {
			expect(getFactors(-4)).toEqual([]);
			expect(getFactors(5.5)).toEqual([]);
			// @ts-expect-error
			expect(getFactors('abc')).toEqual([]);
		});
	});

	describe('sumDigits', () => {
		it('should sum all digits of a number', () => {
			expect(sumDigits(123)).toBe(6);
			expect(sumDigits(-45)).toBe(9);
			expect(sumDigits('100.5')).toBeNaN();
		});
	});

	describe('sumNumbers', () => {
		it('should sum multiple numbers', () => {
			expect(sumNumbers(1, 2, 3)).toBe(6);
			expect(sumNumbers('1', '2.5')).toBe(3.5);
			expect(sumNumbers()).toBe(0);
		});
	});

	describe('reverseNumber', () => {
		it('should reverse the digits of a number', () => {
			expect(reverseNumber(123)).toBe(321);
			expect(reverseNumber(-456)).toBe(-654);
			expect(reverseNumber(120)).toBe(21);
		});
	});

	describe('getAverage', () => {
		it('should calculate the average of numbers', () => {
			expect(getAverage(1, 2, 3)).toBe(2);
			// @ts-expect-error
			expect(getAverage('1', '2.5', 'invalid')).toBe(1.75);
			expect(getAverage()).toBe(NaN);
		});
	});

	describe('getDecimalPlaces', () => {
		it('should compute the number of decimal places', () => {
			expect(getDecimalPlaces(123.456)).toBe(3);
			expect(getDecimalPlaces('123.45600')).toBe(3);
			expect(getDecimalPlaces(123)).toBe(0);
			expect(getDecimalPlaces('1e-6')).toBe(6);
			expect(getDecimalPlaces('1.00')).toBe(0);
		});

		it('should throw TypeError on invalid input', () => {
			// @ts-expect-error
			expect(() => getDecimalPlaces('invalid')).toThrow(TypeError);
		});
	});

	describe('safeAdd', () => {
		it('should add numbers safely mitigating floating point errors', () => {
			expect(safeAdd(0.1, 0.2)).toBe(0.3);
			expect(safeAdd(1, '2', 3.456)).toBe(6.456);
		});
	});

	describe('roundNumber', () => {
		it('should round numbers to specified decimal places', () => {
			expect(roundNumber(1234.56, -2)).toBe(1200);
			expect(roundNumber(1234.56, 1)).toBe(1234.6);
		});
	});
});
