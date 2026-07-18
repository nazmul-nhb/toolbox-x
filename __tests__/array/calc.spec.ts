import {
	averageByField,
	groupAndAverageByField,
	groupAndSumByField,
	sumByField,
	sumFieldDifference,
} from 'src/array/calc';
import { describe, expect, it } from 'vitest';

describe('Array Calc', () => {
	const input = [
		{ id: 1, name: 'John', age: 30 },
		{ id: 2, name: 'Jane', age: 25 },
		{ id: 3, name: 'Bob', age: 35 },
		{ id: 4, name: 'Jane', age: 40 },
	];

	it('sumByField', () => {
		const output = sumByField(input, 'age');
		expect(output).toEqual(130);
	});

	it('averageByField', () => {
		const output = averageByField(input, 'age');
		expect(output).toEqual(130 / 4);
	});

	it('groupAndSumByField', () => {
		const output = groupAndSumByField(input, 'name', 'age');

		expect(output).toEqual([{ John: 30 }, { Jane: 65 }, { Bob: 35 }]);
	});

	it('groupAndAverageByField', () => {
		const output = groupAndAverageByField(input, 'name', 'age');

		expect(output).toEqual([{ John: 30 }, { Jane: 32.5 }, { Bob: 35 }]);
	});

	it('sumFieldDifference', () => {
		const output = sumFieldDifference(input, 'age', 'id');
		expect(output).toEqual(120);
	});
});
