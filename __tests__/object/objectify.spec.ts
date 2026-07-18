import {
	extractNewFields,
	extractUpdatedAndNewFields,
	extractUpdatedFields,
	flattenObjectDotNotation,
	flattenObjectKeyValue,
	mergeAndFlattenObjects,
	mergeObjects,
	parseJsonToObject,
} from 'src/object/objectify';
import { describe, expect, it } from 'vitest';

describe('objectify', () => {
	describe('flattenObjectKeyValue', () => {
		it('should flatten object key value', () => {
			const obj = { a: 1, b: 2, c: 3 };
			const result = flattenObjectKeyValue(obj);
			expect(result).toEqual({ a: 1, b: 2, c: 3 });
		});
	});

	describe('flattenObjectDotNotation', () => {
		it('should flatten object dot notation', () => {
			const obj = { a: { b: { c: 3 } } };
			const result = flattenObjectDotNotation(obj);
			expect(result).toEqual({ 'a.b.c': 3 });
		});
	});

	describe('parseJsonToObject', () => {
		it('should parse json to object', () => {
			const json = `{
				"a": 1,
				"b": 2,
				"c": 3
			}`;
			const result = parseJsonToObject(json);
			expect(result).toEqual({
				a: 1,
				b: 2,
				c: 3,
			});
		});

		it('should return empty object if input is not an object', () => {
			expect(parseJsonToObject('[]')).toEqual({});
			expect(parseJsonToObject('null')).toEqual({});
			expect(parseJsonToObject('true')).toEqual({});
			expect(parseJsonToObject('false')).toEqual({});
			expect(parseJsonToObject('"string"')).toEqual({});
			expect(parseJsonToObject('123')).toEqual({});
		});

		it('should return empty object if parsing fails', () => {
			expect(parseJsonToObject('{')).toEqual({});
			expect(parseJsonToObject('{')).toEqual({});
		});

		it('should parse primitives', () => {
			const json = `{
				"a": "1",
				"b": "2",
				"c": "3"
			}`;
			const result = parseJsonToObject(json, true);
			expect(result).toEqual({ a: 1, b: 2, c: 3 });
		});
	});

	describe('mergeObjects', () => {
		it('should merge objects', () => {
			const obj1 = { a: 1, b: 2, c: 3 };
			const obj2 = { a: 4, b: 5, d: 6 };
			const result = mergeObjects(obj1, obj2);
			expect(result).toEqual({ a: 4, b: 5, c: 3, d: 6 });
			expect(result).not.toBe(obj1);
			expect(result).not.toBe(obj2);
		});
	});

	describe('mergeAndFlattenObjects', () => {
		it('should merge and flatten objects', () => {
			const obj1 = { a: 1, b: { c: 3 } };
			const obj2 = { a: 4, b: { d: 6 } };
			const result = mergeAndFlattenObjects(obj1, obj2);
			expect(result).toEqual({ a: 4, 'b.c': 3, 'b.d': 6 });
			expect(result).not.toBe(obj1);
			expect(result).not.toBe(obj2);
		});
	});

	describe('extractUpdatedFields', () => {
		it('should extract updated fields', () => {
			const obj1 = { a: 1, b: 2, c: 3 };
			const obj2 = { a: 4, b: 5, d: 6 };
			const result = extractUpdatedFields(obj1, obj2);
			expect(result).toEqual({ a: 4, b: 5 });
			expect(result).not.toBe(obj1);
			expect(result).not.toBe(obj2);
		});
	});

	describe('extractUpdatedAndNewFields', () => {
		it('should extract updated and new fields', () => {
			const obj1 = { a: 1, b: 2, c: 3 };
			const obj2 = { a: 4, b: 5, d: 6 };
			const result = extractUpdatedAndNewFields(obj1, obj2);
			expect(result).toEqual({ a: 4, b: 5, d: 6 });
			expect(result).not.toBe(obj1);
			expect(result).not.toBe(obj2);
		});

		it('should extract nested updated and new fields', () => {
			const obj1 = { a: 1, b: { c: 3, d: 4 } };
			const obj2 = { a: 4, b: { c: 5, e: 6 } };
			const result = extractUpdatedAndNewFields(obj1, obj2);
			expect(result).toEqual({ a: 4, b: { c: 5, e: 6 } });
			expect(result).not.toBe(obj1);
			expect(result).not.toBe(obj2);
		});

		// it('should handle (and nested) empty objects', () => {
		// 	const obj1 = { a: 1, b: { c: { x: 3 }, d: 4 } };
		// 	const obj2 = { a: 4, b: { c: {}, e: {} } };
		// 	const result = extractUpdatedAndNewFields(obj1, obj2);
		// 	expect(result).toEqual({ a: 4, b: { c: {} } });
		// 	expect(result).not.toBe(obj1);
		// 	expect(result).not.toBe(obj2);
		// });
	});

	describe('extractNewFields', () => {
		it('should extract new fields', () => {
			const obj1 = { a: 1, b: 2, c: 3 };
			const obj2 = { a: 4, b: 5, d: 6 };
			const result = extractNewFields(obj1, obj2);
			expect(result).toEqual({ d: 6 });
			expect(result).not.toBe(obj1);
			expect(result).not.toBe(obj2);
		});

		it('should extract nested new fields', () => {
			const obj1 = { a: 1, b: { c: 3, d: 4 } };
			const obj2 = { a: 4, b: { c: 5, e: { f: 6 } } };
			const result = extractNewFields(obj1, obj2);
			expect(result).toEqual({ b: { e: { f: 6 } } });
			expect(result).not.toBe(obj1);
			expect(result).not.toBe(obj2);
		});
	});
});
