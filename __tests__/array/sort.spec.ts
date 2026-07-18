import { sortAnArray } from 'src/array/sort';
import { describe, expect, it } from 'vitest';

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
