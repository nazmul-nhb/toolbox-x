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

// describe('primitives guards', () => {
// 	// Test isNumber and variants
// 	it('should validate isNumber, isInteger, isPositiveInteger', () => {
// 		expect(isNumber(0)).toBe(true);
// 		expect(isNumber(42.5)).toBe(true);
// 		expect(isNumber(NaN)).toBe(false);
// 		expect(isInteger(42)).toBe(true);
// 		expect(isInteger(42.5)).toBe(false);
// 		expect(isPositiveInteger(42)).toBe(true);
// 		expect(isPositiveInteger(0)).toBe(false);
// 		expect(isPositiveInteger(-42)).toBe(false);
// 	});

// 	// Test isBigInt
// 	it('should validate isBigInt', () => {
// 		expect(isBigInt(123n)).toBe(true);
// 		expect(isBigInt(0n)).toBe(true);
// 		expect(isBigInt(123)).toBe(false);
// 		expect(isBigInt('123')).toBe(false);
// 	});

// 	// Test isBoolean and variants
// 	it('should validate isBoolean and isFalsy/isTruthy', () => {
// 		expect(isBoolean(true)).toBe(true);
// 		expect(isBoolean(false)).toBe(true);
// 		expect(isBoolean(1)).toBe(false);
// 		expect(isFalsy(false)).toBe(true);
// 		expect(isFalsy(0)).toBe(true);
// 		expect(isFalsy('')).toBe(true);
// 		expect(isFalsy(null)).toBe(true);
// 		expect(isFalsy(undefined)).toBe(true);
// 		expect(isFalsy(NaN)).toBe(true);
// 		expect(isFalsy(0n)).toBe(true);
// 		expect(isTruthy(true)).toBe(true);
// 		expect(isTruthy(42)).toBe(true);
// 		expect(isTruthy('hello')).toBe(true);
// 	});

// 	// Test isString and variants
// 	it('should validate isString and isNonEmptyString', () => {
// 		expect(isString('hello')).toBe(true);
// 		expect(isString('')).toBe(true);
// 		expect(isString(123)).toBe(false);
// 		expect(isNonEmptyString('hello')).toBe(true);
// 		expect(isNonEmptyString('')).toBe(false);
// 	});

// 	// Test Symbol
// 	it('should validate isSymbol', () => {
// 		expect(isSymbol(Symbol('test'))).toBe(true);
// 		expect(isSymbol(Symbol.for('test'))).toBe(true);
// 		expect(isSymbol('test')).toBe(false);
// 		expect(isSymbol(123)).toBe(false);
// 	});

// 	// Test isNull and isUndefined
// 	it('should validate isNull and isUndefined', () => {
// 		expect(isNull(null)).toBe(true);
// 		expect(isNull(undefined)).toBe(false);
// 		expect(isUndefined(undefined)).toBe(true);
// 		expect(isUndefined(null)).toBe(false);
// 	});

// 	// Test isPrimitive and isNormalPrimitive
// 	it('should validate isPrimitive and isNormalPrimitive', () => {
// 		expect(isPrimitive(null)).toBe(true);
// 		expect(isPrimitive(undefined)).toBe(true);
// 		expect(isPrimitive(42)).toBe(true);
// 		expect(isPrimitive('hello')).toBe(true);
// 		expect(isPrimitive(Symbol('a'))).toBe(true);
// 		expect(isPrimitive(123n)).toBe(true);
// 		expect(isPrimitive(true)).toBe(true);
// 		expect(isPrimitive({})).toBe(false);
// 		expect(isPrimitive([])).toBe(false);
// 		expect(isPrimitive(() => {})).toBe(false);
// 		expect(isPrimitive(new Date())).toBe(false);
// 		expect(isNormalPrimitive(null)).toBe(true);
// 		expect(isNormalPrimitive(undefined)).toBe(true);
// 		expect(isNormalPrimitive(42)).toBe(true);
// 		expect(isNormalPrimitive('hello')).toBe(true);
// 		expect(isNormalPrimitive(123n)).toBe(false);
// 		expect(isNormalPrimitive(true)).toBe(true);
// 		expect(isNormalPrimitive(Symbol('a'))).toBe(false);
// 		expect(isNormalPrimitive({})).toBe(false);
// 	});
// });
