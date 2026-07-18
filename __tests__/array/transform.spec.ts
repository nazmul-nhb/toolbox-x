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
