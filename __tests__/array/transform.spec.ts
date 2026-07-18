import {
	createOptionsArray,
	findMissingElements,
	getDuplicates,
	moveArrayElement,
	removeDuplicatesFromArray,
	rotateArray,
	splitArray,
	splitArrayByProperty,
} from 'src/array/transform';
import { describe, expect, it } from 'vitest';

describe('Array Transform', () => {
	it('createOptionsArray', () => {
		const input = [
			{ id: 1, name: 'John', age: 30 },
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 3, name: 'Bob', age: 35 },
			{ id: 4, name: 'Jane', age: 40 },
		];

		const output = createOptionsArray(input, {
			firstFieldKey: 'age',
			secondFieldKey: 'name',
			firstFieldName: 'Age',
			secondFieldName: 'Name',
			retainNumberValue: true,
		});

		expect(output).toEqual([
			{ Name: 'John', Age: 30 },
			{ Name: 'Jane', Age: 25 },
			{ Name: 'Bob', Age: 35 },
			{ Name: 'Jane', Age: 40 },
		]);
	});

	it('findMissingElements', () => {
		const input1 = [1, 2, 3, 4, 5];
		const input2 = [1, 2, 3, 4, 5, 6];
		const output1 = findMissingElements(input1, input2, 'from-second');
		expect(output1).toEqual([6]);

		const output2 = findMissingElements(input1, input2, 'from-first');
		expect(output2).toEqual([]);
	});

	it('splitArrayByProperty', () => {
		const input = [
			{ id: 1, name: 'John', age: 30 },
			{ id: 2, name: 'John', age: 25 },
			{ id: 3, name: 'Bob', age: 35 },
			{ id: 4, name: 'Jane', age: 40 },
		];

		const output = splitArrayByProperty(input, 'name');

		expect(output).toEqual([
			[
				{ id: 1, name: 'John', age: 30 },
				{ id: 2, name: 'John', age: 25 },
			],
			[{ id: 3, name: 'Bob', age: 35 }],
			[{ id: 4, name: 'Jane', age: 40 }],
		]);
	});

	it('getDuplicates', () => {
		const input = [
			{ id: 1, name: 'John', age: 30 },
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 3, name: 'Bob', age: 35 },
			{ id: 4, name: 'Jane', age: 40 },
		];

		const output = getDuplicates(input);

		expect(output).toEqual([]);

		const input2 = [
			{ id: 5, name: 'John', age: 30 },
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 3, name: 'Bob', age: 35 },
			{ id: 4, name: 'Jane', age: 40 },
			{ id: 5, name: 'John', age: 30 },
		];

		const output2 = getDuplicates(input2);

		expect(output2).toEqual([{ id: 5, name: 'John', age: 30 }]);
	});

	it('moveArrayElement', () => {
		const input = [1, 2, 3, 4, 5];
		const output = moveArrayElement(input, 2, 0);
		expect(output).toEqual([3, 1, 2, 4, 5]);
	});

	it('removeDuplicatesFromArray', () => {
		const input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
		const output = removeDuplicatesFromArray(input);
		expect(output).toEqual([1, 2, 3, 4, 5]);
	});

	it('rotateArray', () => {
		const input = [1, 2, 3, 4, 5];
		const output = rotateArray(input, 2);
		expect(output).toEqual([4, 5, 1, 2, 3]);
	});

	it('splitArray', () => {
		const input = [1, 2, 3, 4, 5];
		const output = splitArray(input, 2);
		expect(output).toEqual([[1, 2], [3, 4], [5]]);
	});
});

describe('createOptionsArray', () => {
	it('should map default value and label keys when no renaming is provided', () => {
		const data = [
			{ id: 1, name: 'Item A' },
			{ id: 2, name: 'Item B' },
		];

		const result = createOptionsArray(data, {
			firstFieldKey: 'id',
			secondFieldKey: 'name',
		});

		expect(result).toEqual([
			{ value: '1', label: 'Item A' },
			{ value: '2', label: 'Item B' },
		]);
	});

	it('should map with custom field names when specified', () => {
		const data = [
			{ id: 101, name: 'Alpha' },
			{ id: 102, name: 'Beta' },
		];

		const result = createOptionsArray(data, {
			firstFieldKey: 'id',
			secondFieldKey: 'name',
			firstFieldName: 'key',
			secondFieldName: 'text',
		});

		expect(result).toEqual([
			{ key: '101', text: 'Alpha' },
			{ key: '102', text: 'Beta' },
		]);
	});

	it('should handle missing object fields gracefully', () => {
		const data = [{ id: 1 }, { name: 'Only Name' }, {}];

		const result = createOptionsArray(data, {
			firstFieldKey: 'id',
			secondFieldKey: 'name',
		});

		expect(result).toEqual([
			{ value: '1', label: '' },
			{ value: '', label: 'Only Name' },
			{ value: '', label: '' },
		]);
	});

	it('should convert non-string values to strings', () => {
		const data = [
			{ id: 123, name: 'Item X' },
			{ id: true, name: false },
		];

		const result = createOptionsArray(data, {
			firstFieldKey: 'id',
			secondFieldKey: 'name',
		});

		expect(result).toEqual([
			{ value: '123', label: 'Item X' },
			{ value: 'true', label: 'false' },
		]);
	});
});

describe('removeDuplicatesFromArray', () => {
	it('should remove duplicate numbers', () => {
		const input = [1, 2, 2, 3, 3, 3, 4];
		const result = removeDuplicatesFromArray(input);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it('should remove duplicate strings', () => {
		const input = ['apple', 'banana', 'apple', 'orange', 'banana'];
		const result = removeDuplicatesFromArray(input);
		expect(result).toEqual(['apple', 'banana', 'orange']);
	});

	it('should remove duplicate objects', () => {
		const input = [
			{ id: 1, name: 'Item A' },
			{ id: 2, name: 'Item B' },
			{ id: 1, name: 'Item A' },
		];
		const result = removeDuplicatesFromArray(input);
		expect(result).toEqual([
			{ id: 1, name: 'Item A' },
			{ id: 2, name: 'Item B' },
		]);
	});

	it('should remove duplicate nested arrays', () => {
		const input = [
			[1, 2],
			[1, 2], // duplicate sub-array
			[3, 4],
		];
		const result = removeDuplicatesFromArray(input);
		expect(result).toEqual([
			[1, 2],
			[3, 4],
		]);
	});

	it('should remove duplicate mixed array (numbers, strings, objects)', () => {
		const input = [
			1,
			'banana',
			{ id: 1, name: 'Item A' },
			1, // duplicate primitive
			{ id: 1, name: 'Item A' }, // duplicate object
		];
		const result = removeDuplicatesFromArray(input);
		expect(result).toEqual([1, 'banana', { id: 1, name: 'Item A' }]);
	});

	it('should return an empty array for an empty input array', () => {
		const input: number[] = [];
		const result = removeDuplicatesFromArray(input);
		expect(result).toEqual([]);
	});

	it('should remove duplicate deeply nested objects', () => {
		const input = [
			{ id: 1, details: { name: 'Item A', price: 10 } },
			{ id: 2, details: { name: 'Item B', price: 20 } },
			{ id: 1, details: { name: 'Item A', price: 10 } }, // duplicate nested object
		];
		const result = removeDuplicatesFromArray(input);
		expect(result).toEqual([
			{ id: 1, details: { name: 'Item A', price: 10 } },
			{ id: 2, details: { name: 'Item B', price: 20 } },
		]);
	});

	it('should handle complex data types (Date)', () => {
		const input = [
			{ id: 1, date: new Date('2022-01-01') },
			{ id: 2, date: new Date('2022-01-02') },
			{ id: 1, date: new Date('2022-01-01') }, // duplicate date object
		];
		const result = removeDuplicatesFromArray(input);
		expect(result).toEqual([
			{ id: 1, date: new Date('2022-01-01') },
			{ id: 2, date: new Date('2022-01-02') },
		]);
	});
});
