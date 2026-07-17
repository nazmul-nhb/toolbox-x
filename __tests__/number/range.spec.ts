import { getNumbersInRange } from 'src/number/range';
import { describe, expect, it } from 'vitest';

describe('getNumbersInRange', () => {
	it('should generate any numbers in range by default', () => {
		const nums = getNumbersInRange('any', { min: 1, max: 5 });
		expect(nums).toEqual([1, 2, 3, 4, 5]);
	});

	it('should generate prime numbers in range', () => {
		const nums = getNumbersInRange('prime', { min: 1, max: 20 });
		expect(nums).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
	});

	it('should generate odd numbers in range', () => {
		const nums = getNumbersInRange('odd', { min: 1, max: 10 });
		expect(nums).toEqual([1, 3, 5, 7, 9]);
	});

	it('should generate even numbers in range', () => {
		const nums = getNumbersInRange('even', { min: 1, max: 10 });
		expect(nums).toEqual([2, 4, 6, 8, 10]);
	});

	it('should generate natural numbers in range', () => {
		const nums = getNumbersInRange('natural', { min: -5, max: 5 });
		expect(nums).toEqual([1, 2, 3, 4, 5]);
	});

	it('should handle random type and return correct length', () => {
		const nums = getNumbersInRange('random', { min: 1, max: 5 });
		expect(nums).toHaveLength(5);
	});

	it('should respect includeMin and includeMax options', () => {
		const nums = getNumbersInRange('any', {
			min: 1,
			max: 5,
			includeMin: false,
			includeMax: false,
		});
		expect(nums).toEqual([2, 3, 4]);
	});

	it('should return as string when getAsString is true', () => {
		const str = getNumbersInRange('any', { min: 1, max: 3, getAsString: true as const });
		expect(str).toBe('1, 2, 3');
	});

	it('should support multiplesOf filter', () => {
		const nums = getNumbersInRange('any', { min: 1, max: 20, multiplesOf: 5 });
		expect(nums).toEqual([5, 10, 15, 20]);
	});
});
