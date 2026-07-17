import {
	isArray,
	isArrayOfType,
	isDate,
	isEmptyObject,
	isError,
	isFunction,
	isJSON,
	isMap,
	isMethodDescriptor,
	isNotEmptyObject,
	isObject,
	isObjectWithKeys,
	isPromise,
	isRegExp,
	isReturningPromise,
	isSet,
	isValidArray,
} from 'src/guards/non-primitives';
import { isNumber } from 'src/guards/primitives';
import { describe, expect, it } from 'vitest';

describe('non-primitives guards', () => {
	it('should validate isArray and isValidArray', () => {
		expect(isArray([1, 2])).toBe(true);
		expect(isValidArray([1, 2])).toBe(true);
		expect(isValidArray([])).toBe(false);
	});

	it('should validate isArrayOfType', () => {
		expect(isArrayOfType([1, 2, 3], isNumber)).toBe(true);
		expect(isArrayOfType([1, '2', 3], isNumber)).toBe(false);
	});

	it('should validate isObject and Object emptiness', () => {
		expect(isObject({})).toBe(true);
		expect(isObject(null)).toBe(false);
		expect(isEmptyObject({})).toBe(true);
		expect(isEmptyObject({ a: 1 })).toBe(false);
		expect(isNotEmptyObject({ a: 1 })).toBe(true);
	});

	it('should validate isFunction', () => {
		expect(isFunction(() => {})).toBe(true);
		expect(isFunction({})).toBe(false);
	});

	it('should validate isPromise and isReturningPromise', () => {
		const p = Promise.resolve();
		expect(isPromise(p)).toBe(true);
		expect(isPromise({})).toBe(false);

		async function asyncFn() {}
		expect(isReturningPromise(asyncFn)).toBe(true);
	});

	it('should validate isMap and isSet', () => {
		expect(isMap(new Map())).toBe(true);
		expect(isSet(new Set())).toBe(true);
	});

	it('should validate isRegExp', () => {
		expect(isRegExp(/abc/)).toBe(true);
		expect(isRegExp('abc')).toBe(false);
	});

	it('should validate isError', () => {
		expect(isError(new Error('err'))).toBe(true);
		expect(isError({})).toBe(false);
	});

	it('should validate isDate', () => {
		expect(isDate(new Date())).toBe(true);
		expect(isDate('2026-06-15')).toBe(false);
	});

	it('should validate isJSON', () => {
		expect(isJSON('{"a":1}')).toBe(true);
		expect(isJSON('invalid')).toBe(false);
		expect(isJSON({})).toBe(false);
	});

	it('should validate isObjectWithKeys', () => {
		expect(isObjectWithKeys({ a: 1, b: 2 }, ['a', 'b'])).toBe(true);
		expect(isObjectWithKeys({ a: 1 }, ['a', 'b'])).toBe(false);
	});

	it('should validate isMethodDescriptor', () => {
		const descriptor = { value: () => {} };
		expect(isMethodDescriptor(descriptor)).toBe(true);
	});
});
