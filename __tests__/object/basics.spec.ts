import {
	cloneObject,
	countObjectFields,
	extractObjectEntries,
	extractObjectKeys,
	extractObjectKeysDeep,
} from 'src/object/basics';
import { describe, expect, it } from 'vitest';

describe('object utils basics', () => {
	const obj = { a: 1, b: 2, c: 3, d: { p: 4, q: { x: [1, 2, 3] } } };
	const clone = cloneObject(obj);

	it('should perfectly clone a object using structuredClone()', () => {
		expect(clone).toEqual(obj);
		expect(clone).not.toBe(obj);
	});

	it('should clone using stable JSON serialization', () => {
		const clone = cloneObject(obj, true);
		expect(clone).toEqual(obj);
		expect(clone).not.toBe(obj);
	});

	it('should count object fields', () => {
		const obj = { a: 1, b: 2, c: 3 };
		expect(countObjectFields(obj)).toBe(3);
		expect(countObjectFields({})).toBe(0);
		// @ts-expect-error
		expect(countObjectFields(null)).toBe(0);
	});

	it('should extract surface level object keys', () => {
		const obj = { a: 1, b: 2, c: 3 };
		expect(extractObjectKeys(obj)).toEqual(['a', 'b', 'c']);
	});

	it('should extract object keys deep', () => {
		const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
		expect(extractObjectKeysDeep(obj)).toEqual(['a', 'b', 'c', 'd', 'e']);
	});

	it('should extract object entries', () => {
		const obj = { a: 1, b: 2, c: 3 };
		expect(extractObjectEntries(obj)).toEqual([
			['a', 1],
			['b', 2],
			['c', 3],
		]);
	});
});
