import {
	areInvalidNumbers,
	isEven,
	isFibonacci,
	isMultiple,
	isOdd,
	isPerfectSquare,
} from 'src/number/guards';
import { describe, expect, it } from 'vitest';

describe('guards number', () => {
	it('isEven()', () => {
		expect(isEven(2)).toBe(true);
		expect(isEven(3)).toBe(false);
		// @ts-expect-error
		expect(isEven(undefined)).toBe(false);
	});

	it('isOdd()', () => {
		expect(isOdd(2)).toBe(false);
		expect(isOdd(3)).toBe(true);
		// @ts-expect-error
		expect(isOdd(undefined)).toBe(false);
	});

	it('isMultiple()', () => {
		expect(isMultiple(20, 4)).toBe(true);
		expect(isMultiple(3, 4)).toBe(false);
	});

	it('isPerfectSquare()', () => {
		expect(isPerfectSquare(4)).toBe(true);
		expect(isPerfectSquare(9)).toBe(true);
		expect(isPerfectSquare(2)).toBe(false);
	});

	it('isFibonacci()', () => {
		expect(isFibonacci(0)).toBe(true);
		expect(isFibonacci(1)).toBe(true);
		expect(isFibonacci(2)).toBe(true);
		expect(isFibonacci(3)).toBe(true);
		expect(isFibonacci(5)).toBe(true);
		expect(isFibonacci(8)).toBe(true);
		expect(isFibonacci(13)).toBe(true);
		expect(isFibonacci(21)).toBe(true);
		expect(isFibonacci(34)).toBe(true);
		expect(isFibonacci(4)).toBe(false);
		expect(isFibonacci(6)).toBe(false);
		expect(isFibonacci(7)).toBe(false);
		expect(isFibonacci(10)).toBe(false);
	});

	it('areInvalidNumbers()', () => {
		expect(areInvalidNumbers(2, 3, 4)).toBe(false);
		expect(areInvalidNumbers(2, NaN, 4)).toBe(true);
		expect(areInvalidNumbers(2, Infinity, 4)).toBe(true);
		expect(areInvalidNumbers(2, -Infinity, 4)).toBe(true);
	});
});
