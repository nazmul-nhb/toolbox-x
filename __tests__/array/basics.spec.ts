import {
	filterArrayOfObjects,
	flattenArray,
	getLastArrayElement,
	isInvalidOrEmptyArray,
	shuffleArray,
} from 'src/array/basics';
import { describe, expect, it, test } from 'vitest';

describe('Array Basics', () => {
	it('flattenArray', () => {
		const input = [1, [2, 3], [4, [5, 6]]];
		const output = flattenArray(input);
		expect(output).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it('filterArrayOfObjects', () => {
		const input = [
			{ id: 1, name: 'John', age: 30 },
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 3, name: 'Bob', age: 35 },
		];
		const output = filterArrayOfObjects(input, { id: (id) => id === 2 });
		expect(output).toEqual([{ id: 2, name: 'Jane', age: 25 }]);
	});

	it('isInvalidOrEmptyArray', () => {
		const input = [1, 2, 3];
		const output = isInvalidOrEmptyArray(input);
		expect(output).toBe(false);
	});

	it('shuffleArray', () => {
		const input = [1, 2, 3, 4, 5];
		const output = shuffleArray(input);
		expect(output).not.toEqual(input);
	});

	it('getLastArrayElement', () => {
		const input = [1, 2, 3];
		const output = getLastArrayElement(input);
		expect(output).toEqual(3);
	});
});

describe('flattenArray', () => {
	test('should flatten a deeply nested array', () => {
		expect(flattenArray([1, [2, [3, [4, 5]]]])).toEqual([1, 2, 3, 4, 5]);
	});

	test('should return the same array if already flat', () => {
		expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
	});

	test('should wrap a non-array value in an array', () => {
		expect(flattenArray(42)).toEqual([42]);
	});

	test('should handle an empty array', () => {
		expect(flattenArray([])).toEqual([]);
	});

	test('should handle mixed data types', () => {
		expect(flattenArray([1, 'a', [true, [null, [{ key: 'value' }]]]])).toEqual([
			1,
			'a',
			true,
			null,
			{ key: 'value' },
		]);
	});

	test('should handle an array with a single element', () => {
		expect(flattenArray([5])).toEqual([5]);
	});

	test('should handle an array with multiple empty arrays', () => {
		expect(flattenArray([[], [[], [[]]]])).toEqual([]);
	});
});

describe('filterArrayOfObjects', () => {
	const sampleData = [
		{ id: 1, name: 'Alice', age: 25, active: true },
		{ id: 2, name: 'Bob', age: 30, active: false },
		{ id: 3, name: 'Charlie', age: 35, active: true },
		{ id: 4, name: 'David', age: 40, active: false },
	];

	it('should filter objects based on a single condition', () => {
		const result = filterArrayOfObjects(sampleData, {
			age: (age) => age! > 30,
		});
		expect(result).toEqual([
			{ id: 3, name: 'Charlie', age: 35, active: true },
			{ id: 4, name: 'David', age: 40, active: false },
		]);
	});

	it('should filter objects based on multiple conditions', () => {
		const result = filterArrayOfObjects(sampleData, {
			age: (age) => age! > 25,
			active: (active) => active === true,
		});
		expect(result).toEqual([{ id: 3, name: 'Charlie', age: 35, active: true }]);
	});

	it('should return all objects if conditions object is empty', () => {
		const result = filterArrayOfObjects(sampleData, {});
		expect(result).toEqual(sampleData);
	});

	it('should return an empty array if no objects match the condition', () => {
		const result = filterArrayOfObjects(sampleData, {
			age: (age) => age! > 50,
		});
		expect(result).toEqual([]);
	});

	it('should handle missing properties in objects', () => {
		const mixedData = [
			{ id: 1, name: 'Alice', age: 25 },
			{ id: 2, name: 'Bob' }, // Missing age
		];
		const result = filterArrayOfObjects(mixedData, {
			age: (age) => (age ?? 0) > 20,
		});
		expect(result).toEqual([{ id: 1, name: 'Alice', age: 25 }]);
	});

	it('should throw an error if input is not an array', () => {
		// @ts-expect-error Intentional wrong input for test
		expect(() => filterArrayOfObjects(null, {})).toThrow(
			'The provided input is not a valid array!'
		);
	});
});

describe('isInvalidOrEmptyArray', () => {
	test('should return true for an empty array', () => {
		expect(isInvalidOrEmptyArray([])).toBe(true);
	});

	test('should return true for a non-array value', () => {
		expect(isInvalidOrEmptyArray(null)).toBe(true);
		expect(isInvalidOrEmptyArray(undefined)).toBe(true);
		expect(isInvalidOrEmptyArray(42)).toBe(true);
		expect(isInvalidOrEmptyArray('hello')).toBe(true);
		expect(isInvalidOrEmptyArray(false)).toBe(true);
		expect(isInvalidOrEmptyArray({})).toBe(true);
		expect(isInvalidOrEmptyArray(() => {})).toBe(true);
	});

	test('should return true for an array with only null or undefined', () => {
		expect(isInvalidOrEmptyArray([null, undefined])).toBe(true);
	});

	test('should return true for an array with only empty objects', () => {
		expect(isInvalidOrEmptyArray([{}, {}])).toBe(true);
	});

	test('should return true for an array with only empty arrays', () => {
		expect(isInvalidOrEmptyArray([[], []])).toBe(true);
	});

	test('should return true for a mix of empty objects, empty arrays, null, and undefined', () => {
		expect(isInvalidOrEmptyArray([null, undefined, {}, []])).toBe(true);
	});

	test('should return false for a non-empty array with valid elements', () => {
		expect(isInvalidOrEmptyArray([1, 2, 3])).toBe(false);
		expect(isInvalidOrEmptyArray(['hello'])).toBe(false);
		expect(isInvalidOrEmptyArray([{ key: 'value' }])).toBe(false);
		expect(isInvalidOrEmptyArray([[1]])).toBe(false);
		expect(isInvalidOrEmptyArray([true])).toBe(false);
	});

	test('should return false for an array with at least one meaningful value', () => {
		expect(isInvalidOrEmptyArray([null, undefined, {}, [], 'valid'])).toBe(false);
	});
});

describe('shuffleArray', () => {
	it('should return the same array if it is empty', () => {
		expect(shuffleArray([])).toEqual([]);
	});

	it('should return the same array if it contains only empty values', () => {
		const emptyValues = [null, undefined, {}, []];
		expect(shuffleArray(emptyValues)).toEqual(emptyValues);
	});

	it('should return the same array if it is not an array (isValidEmptyArray check)', () => {
		expect(shuffleArray([])).toEqual([]);
		// @ts-expect-error Intentional wrong input for test
		expect(shuffleArray(null)).toEqual(null);
		// @ts-expect-error Intentional wrong input for test
		expect(shuffleArray(undefined)).toEqual(undefined);
		// @ts-expect-error Intentional wrong input for test
		expect(shuffleArray({})).toEqual({});
	});

	it('should shuffle the array but keep the same elements', () => {
		const array = [1, 2, 3, 4, 5];
		const shuffled = shuffleArray(array);
		expect(shuffled).toHaveLength(array.length);
		expect(shuffled.sort()).toEqual(array.sort()); // Elements remain the same
	});

	it('should not modify the original array', () => {
		const array = [1, 2, 3, 4, 5];
		const originalCopy = [...array];
		shuffleArray(array);
		expect(array).toEqual(originalCopy);
	});

	it('should handle arrays with different data types', () => {
		const array = [1, 'a', null, { key: 'value' }, [1, 2]];
		const shuffled = shuffleArray(array);
		expect(shuffled).toHaveLength(array.length);
		expect(shuffled.sort((a, b) => (String(a) > String(b) ? 1 : -1))).toEqual(
			array.sort((a, b) => (String(a) > String(b) ? 1 : -1))
		);
	});
});
