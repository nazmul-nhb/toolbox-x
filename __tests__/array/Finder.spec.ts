import { Finder } from 'src/array/Finder';
import { sortAnArray } from 'src/array/sort';
import { describe, expect, it } from 'vitest';

describe('Array Finder', () => {
	const sampleData = [
		{ id: 1, name: 'John', age: 30 },
		{ id: 2, name: 'Jane', age: 25 },
		{ id: 3, name: 'Bob', age: 35 },
		{ id: 4, name: 'Jane', age: 40 },
	];

	const finder = new Finder(sampleData);

	it('findAll', () => {
		const result = finder.findAll('jane', 'name');
		expect(result).toEqual([
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 4, name: 'Jane', age: 40 },
		]);
	});

	it('clearCache', () => {
		const finder = new Finder(sampleData);
		expect(finder.findAll('jane', 'name', { cacheKey: 'test' })).toEqual([
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 4, name: 'Jane', age: 40 },
		]);
		finder.clearCache('test');
		finder.clearCache();
	});

	it('findAll should return [] for empty source', () => {
		const finder = new Finder<(typeof sampleData)[number]>([]);
		const result = finder.findAll('nothing', 'name');
		expect(result).toEqual([]);
	});

	it('findAll with forceBinary', () => {
		const finder = new Finder(sampleData);
		const result = finder.findAll('jane', 'name', { forceBinary: true });
		expect(result).toEqual([
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 4, name: 'Jane', age: 40 },
		]);
	});

	it('findAll with fuzzy', () => {
		const finder = new Finder(sampleData);
		const result = finder.findAll('jne', 'name', { fuzzy: true });
		expect(result).toEqual([
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 4, name: 'Jane', age: 40 },
		]);
	});

	it('findOne', () => {
		const result = finder.findOne('jane', 'name');
		expect(result).toEqual({ id: 2, name: 'Jane', age: 25 });
	});

	it('findOne should return undefined', () => {
		const finder = new Finder(sampleData);
		const result = finder.findOne('nothing', 'name');
		expect(result).toBeUndefined();
	});

	it('findOne should return undefined for empty source', () => {
		const finder = new Finder<(typeof sampleData)[number]>([]);
		const result = finder.findOne('nothing', 'name');
		expect(result).toBeUndefined();
	});

	it('findOne with forceBinary', () => {
		const finder = new Finder(sampleData);
		const result = finder.findOne('jane', 'name', { forceBinary: true });
		expect(result).toEqual({ id: 2, name: 'Jane', age: 25 });
	});

	it('findOne with fuzzy', () => {
		const finder = new Finder(sampleData);
		const result = finder.findOne('jne', 'name', { fuzzy: true });
		expect(result).toEqual({ id: 2, name: 'Jane', age: 25 });
	});

	it('binarySearch', () => {
		const result = finder.binarySearch(
			sortAnArray(sampleData, { sortByField: 'name' }),
			'jane',
			(item) => item.name,
			true
		);
		expect(result).toEqual({ id: 2, name: 'Jane', age: 25 });
	});

	it('fuzzySearch', () => {
		const result = finder.fuzzySearch(sampleData, 'jane', (item) => item.name, true);
		expect(result).toEqual({ id: 2, name: 'Jane', age: 25 });
	});

	it('findAllAsync', async () => {
		const result = await finder.findAllAsync(
			() => new Promise((resolve) => setTimeout(() => resolve(sampleData), 100)),
			'jane',
			'name'
		);
		expect(result).toEqual([
			{ id: 2, name: 'Jane', age: 25 },
			{ id: 4, name: 'Jane', age: 40 },
		]);
	});

	it('findOneAsync', async () => {
		const result = await finder.findOneAsync(
			() => new Promise((resolve) => setTimeout(() => resolve(sampleData), 100)),
			'Jane',
			'name'
		);
		expect(result).toEqual({ id: 2, name: 'Jane', age: 25 });
	});
});
