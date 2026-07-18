import {
	filterArrayOfObjects,
	flattenArray,
	getLastArrayElement,
	isInvalidOrEmptyArray,
	shuffleArray,
} from 'src/array/basics';
import { describe, expect, it } from 'vitest';

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
