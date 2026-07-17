import {
	isBase64,
	isBinaryString,
	isBrowser,
	isDateString,
	isEmail,
	isEmailArray,
	isEnvironment,
	isHexString,
	isIPAddress,
	isNode,
	isNumericString,
	isPhoneNumber,
	isURL,
	isUUID,
} from 'src/guards/specials';
import { describe, expect, it } from 'vitest';

describe('specials type guards', () => {
	it('should validate isEmail', () => {
		expect(isEmail('test@example.com')).toBe(true);
		expect(isEmail('invalid')).toBe(false);
		expect(isEmailArray(['test@example.com', 'admin@example.com'])).toBe(true);
	});

	it('should validate isURL', () => {
		expect(isURL('https://google.com')).toBe(true);
		expect(isURL('invalid')).toBe(false);
	});

	it('should validate isUUID', () => {
		expect(isUUID('123e4567-e89b-12d3-a456-426614174000')).toBe(true);
		expect(isUUID('invalid')).toBe(false);
	});

	it('should validate isIPAddress', () => {
		expect(isIPAddress('192.168.1.1')).toBe(true);
		expect(isIPAddress('abc')).toBe(false);
	});

	it('should validate isBase64', () => {
		expect(isBase64('SGVsbG8gV29ybGQ=')).toBe(true);
		expect(isBase64('invalid')).toBe(false);
	});

	it('should validate isPhoneNumber', () => {
		expect(isPhoneNumber('+1234567890')).toBe(true);
		expect(isPhoneNumber('abc')).toBe(false);
	});

	it('should validate isHexString', () => {
		expect(isHexString('1a2b3c')).toBe(true);
		expect(isHexString('nothex')).toBe(false);
	});

	it('should validate isBinaryString', () => {
		expect(isBinaryString('01010101')).toBe(true);
		expect(isBinaryString('012')).toBe(false);
	});

	it('should validate isNumericString', () => {
		expect(isNumericString('123')).toBe(true);
		expect(isNumericString('12.3')).toBe(true);
		expect(isNumericString('abc')).toBe(false);
	});

	it('should validate isDateString', () => {
		expect(isDateString('2026-06-15')).toBe(true);
		expect(isDateString('invalid')).toBe(false);
	});

	it('should validate environments', () => {
		expect(typeof isBrowser()).toBe('boolean');
		expect(typeof isNode()).toBe('boolean');
		expect(isEnvironment('test')).toBe(true); // Since process.env.NODE_ENV is usually 'test' in vitest
	});
});
