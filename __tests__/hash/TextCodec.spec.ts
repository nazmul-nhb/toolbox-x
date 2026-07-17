import { TextCodec } from 'src/hash/TextCodec';
import { describe, expect, it } from 'vitest';

describe('TextCodec class', () => {
	const text = 'Hello';
	const hex = '48 65 6c 6c 6f';
	const binary = '01001000 01100101 01101100 01101100 01101111';
	const base64 = 'SGVsbG8=';

	it('should convert UTF-8 text to hex and vice versa', () => {
		expect(TextCodec.utf8ToHex(text)).toBe(hex);
		expect(TextCodec.hexToUtf8(hex)).toBe(text);
	});

	it('should convert UTF-8 text to binary and vice versa', () => {
		expect(TextCodec.utf8ToBinary(text)).toBe(binary);
		expect(TextCodec.binaryToUtf8(binary)).toBe(text);
	});

	it('should convert UTF-8 text to Base64 and vice versa', () => {
		expect(TextCodec.utf8ToBase64(text)).toBe(base64);

		expect(TextCodec.base64ToUtf8(base64)).toBe(text);
	});

	it('should validate hex, binary, and base64 strings', () => {
		expect(TextCodec.isValidHex(hex)).toBe(true);
		expect(TextCodec.isValidHex('invalid')).toBe(false);

		expect(TextCodec.isValidBinary(binary)).toBe(true);
		expect(TextCodec.isValidBinary('invalid')).toBe(false);

		expect(TextCodec.isValidBase64(base64)).toBe(true);
		expect(TextCodec.isValidBase64('invalid')).toBe(false);
	});
});
