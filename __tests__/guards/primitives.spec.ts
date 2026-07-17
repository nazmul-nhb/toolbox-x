import {
	isBigInt,
	isBoolean,
	isFalsy,
	isInteger,
	isNonEmptyString,
	isNormalPrimitive,
	isNull,
	isNumber,
	isPositiveInteger,
	isPrimitive,
	isString,
	isSymbol,
	isTruthy,
	isUndefined,
} from 'src/guards/primitives';
import { describe, expect, it } from 'vitest';

describe('primitives guards', () => {
	it('should validate isString', () => {
		expect(isString('hello')).toBe(true);
		expect(isString(123)).toBe(false);
	});

	it('should validate isNumber', () => {
		expect(isNumber(123)).toBe(true);
		expect(isNumber(NaN)).toBe(false);
		expect(isNumber('123')).toBe(false);
	});

	it('should validate isBoolean', () => {
		expect(isBoolean(true)).toBe(true);
		expect(isBoolean(false)).toBe(true);
		expect(isBoolean(null)).toBe(false);
	});

	it('should validate isBigInt', () => {
		expect(isBigInt(10n)).toBe(true);
		expect(isBigInt(10)).toBe(false);
	});

	it('should validate isSymbol', () => {
		expect(isSymbol(Symbol('x'))).toBe(true);
		expect(isSymbol('x')).toBe(false);
	});

	it('should validate isNull and isUndefined', () => {
		expect(isNull(null)).toBe(true);
		expect(isNull(undefined)).toBe(false);
		expect(isUndefined(undefined)).toBe(true);
		expect(isUndefined(null)).toBe(false);
	});

	it('should validate isPrimitive', () => {
		expect(isPrimitive('abc')).toBe(true);
		expect(isPrimitive(123)).toBe(true);
		expect(isPrimitive(null)).toBe(true);
		expect(isPrimitive({})).toBe(false);
		expect(isPrimitive([])).toBe(false);
	});

	it('should validate isTruthy and isFalsy', () => {
		expect(isTruthy('abc')).toBe(true);
		expect(isTruthy(0)).toBe(false);
		expect(isFalsy(0)).toBe(true);
		expect(isFalsy('abc')).toBe(false);
	});

	it('should validate isInteger and isPositiveInteger', () => {
		expect(isInteger(10)).toBe(true);
		expect(isInteger(10.5)).toBe(false);
		expect(isPositiveInteger(10)).toBe(true);
		expect(isPositiveInteger(-10)).toBe(false);
	});

	it('should validate isNonEmptyString', () => {
		expect(isNonEmptyString('a')).toBe(true);
		expect(isNonEmptyString('   ')).toBe(true);
		expect(isNonEmptyString('')).toBe(false);
	});

	it('should validate isNormalPrimitive', () => {
		expect(isNormalPrimitive('abc')).toBe(true);
		expect(isNormalPrimitive(Symbol('x'))).toBe(false);
	});
});
