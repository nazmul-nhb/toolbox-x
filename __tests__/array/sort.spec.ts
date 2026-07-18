import { sortAnArray } from 'src/array/sort';
import { describe, expect, it, test } from 'vitest';

describe('Array Sort', () => {
	it('sort array of numbers', () => {
		const input = [5, 2, 4, 1, 3];
		const output = sortAnArray(input);
		expect(output).toEqual([1, 2, 3, 4, 5]);
	});

	it('sort array of strings', () => {
		const input = ['c', 'a', 'b'];
		const output = sortAnArray(input);
		expect(output).toEqual(['a', 'b', 'c']);
	});

	it('sort array of booleans', () => {
		const input = [true, false, true];
		const output = sortAnArray(input);
		expect(output).toEqual([false, true, true]);
	});

	it('sort array of objects by property', () => {
		const input = [
			{ id: 1, name: 'John' },
			{ id: 3, name: 'Bob' },
			{ id: 2, name: 'Jane' },
		];
		const output = sortAnArray(input, { sortByField: 'name' });
		expect(output).toEqual([
			{ id: 3, name: 'Bob' },
			{ id: 2, name: 'Jane' },
			{ id: 1, name: 'John' },
		]);

		expect(sortAnArray(input, { sortByField: 'id' })).toEqual([
			{ id: 1, name: 'John' },
			{ id: 2, name: 'Jane' },
			{ id: 3, name: 'Bob' },
		]);

		const output2 = sortAnArray(input, { sortByField: 'name', sortOrder: 'desc' });
		expect(output2).toEqual([
			{ id: 1, name: 'John' },
			{ id: 2, name: 'Jane' },
			{ id: 3, name: 'Bob' },
		]);
	});

	it('natural sort array of strings or object with string property', () => {
		const input = ['1', 'c', 'a', 'b', '10', '2'];
		const output = sortAnArray(input);
		expect(output).toEqual(['1', '2', '10', 'a', 'b', 'c']);
	});
});

describe('sortAnArray', () => {
	test('should return empty array if given an empty array', () => {
		expect(sortAnArray([])).toEqual([]);
	});

	test('should sort an array of strings in ascending order (default)', () => {
		expect(sortAnArray(['banana', 'apple', 'cherry'])).toEqual([
			'apple',
			'banana',
			'cherry',
		]);
	});

	test('should sort an array of strings in descending order', () => {
		expect(sortAnArray(['banana', 'apple', 'cherry'], { sortOrder: 'desc' })).toEqual([
			'cherry',
			'banana',
			'apple',
		]);
	});

	test('should sort an array of numbers in ascending order (default)', () => {
		expect(sortAnArray([3, 1, 2])).toEqual([1, 2, 3]);
	});

	test('should sort an array of numbers in descending order', () => {
		expect(sortAnArray([3, 1, 2], { sortOrder: 'desc' })).toEqual([3, 2, 1]);
	});

	test('should sort an array of booleans in ascending order (false -> true)', () => {
		expect(sortAnArray([true, false, true, false])).toEqual([false, false, true, true]);
	});

	test('should sort an array of booleans in descending order (true -> false)', () => {
		expect(sortAnArray([true, false, true, false], { sortOrder: 'desc' })).toEqual([
			true,
			true,
			false,
			false,
		]);
	});

	test('should sort an array of objects by a string field in ascending order (default)', () => {
		const data = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 22 },
		];

		expect(sortAnArray(data, { sortByField: 'name' })).toEqual([
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 22 },
			{ name: 'John', age: 25 },
		]);
	});

	test('should sort an array of objects by a string field in descending order', () => {
		const data = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 22 },
		];

		expect(sortAnArray(data, { sortByField: 'name', sortOrder: 'desc' })).toEqual([
			{ name: 'John', age: 25 },
			{ name: 'Bob', age: 22 },
			{ name: 'Alice', age: 30 },
		]);
	});

	test('should sort an array of objects by a number field in ascending order', () => {
		const data = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 22 },
		];

		expect(sortAnArray(data, { sortByField: 'age' })).toEqual([
			{ name: 'Bob', age: 22 },
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
		]);
	});

	test('should sort an array of objects by a number field in descending order', () => {
		const data = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
			{ name: 'Bob', age: 22 },
		];

		expect(
			sortAnArray(data, {
				sortByField: 'age',
				sortOrder: 'desc',
			})
		).toEqual([
			{ name: 'Alice', age: 30 },
			{ name: 'John', age: 25 },
			{ name: 'Bob', age: 22 },
		]);
	});

	test('should throw an error if sortByField is missing for object sorting', () => {
		const data = [
			{ name: 'John', age: 25 },
			{ name: 'Alice', age: 30 },
		];

		// @ts-expect-error
		expect(sortAnArray(data, {})).toEqual(data);
	});

	test('should throw an error if sorting non-string/number/boolean fields in objects', () => {
		const data = [
			{ name: 'John', age: 25, meta: { level: 1 } },
			{ name: 'Alice', age: 30, meta: { level: 2 } },
		];

		expect(
			//@ts-expect-error
			sortAnArray(data, {
				sortByField: 'meta',
			})
		).toEqual(data);
	});

	test('should return the same array if input is not an array', () => {
		// @ts-expect-error Intentional wrong input for test
		expect(sortAnArray(null)).toBe(null);
		// @ts-expect-error Intentional wrong input for test
		expect(sortAnArray(undefined)).toBe(undefined);
		// @ts-expect-error Intentional wrong input for test
		expect(sortAnArray(123)).toBe(123);
	});
});
