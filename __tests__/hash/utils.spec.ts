import {
	base64ToBytes,
	bytesToBase64,
	bytesToHex,
	bytesToUtf8,
	concatBytes,
	hexToBytes,
	hmacSha256,
	intTo4BytesBE,
	randomAlphaNumeric,
	randomBytes,
	randomHex,
	randomNumeric,
	sha256Bytes,
	utf8ToBytes,
} from 'src/hash/utils';
import { describe, expect, it } from 'vitest';

describe('hash utility functions', () => {
	it('should generate random bytes, hex, numeric, and alphanumeric strings', () => {
		const bytes = randomBytes(10);
		expect(bytes).toBeInstanceOf(Uint8Array);
		expect(bytes.length).toBe(10);

		const hex = randomHex(8);
		expect(hex).toMatch(/^[0-9a-f]{8}$/);

		const num = randomNumeric(6);
		expect(num).toMatch(/^[0-9]{6}$/);

		const alphanum = randomAlphaNumeric(10);
		expect(alphanum).toMatch(/^[0-9a-z]{10}$/i);
	});

	it('should convert UTF-8 string to bytes and vice versa', () => {
		const str = 'Hello world! 🌍';
		const bytes = utf8ToBytes(str);
		expect(bytesToUtf8(bytes)).toBe(str);
	});

	it('should convert bytes to hex and vice versa', () => {
		const hex = 'deadbeef';
		const bytes = hexToBytes(hex);
		expect(bytesToHex(bytes)).toBe(hex);
	});

	it('should convert bytes to Base64 and vice versa', () => {
		const bytes = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
		const b64 = bytesToBase64(bytes);
		expect(b64).toBe('SGVsbG8=');
		expect(base64ToBytes(b64)).toEqual(bytes);
	});

	it('should concatenate multiple Uint8Arrays', () => {
		const b1 = new Uint8Array([1, 2]);
		const b2 = new Uint8Array([3, 4]);
		const combined = concatBytes(b1, b2);
		expect(combined).toEqual(new Uint8Array([1, 2, 3, 4]));
	});

	it('should compute hmacSha256 and sha256Bytes', () => {
		const key = utf8ToBytes('key');
		const msg = utf8ToBytes('message');
		const hmac = hmacSha256(key, msg);
		expect(hmac).toBeInstanceOf(Uint8Array);
		expect(hmac.length).toBe(32);

		const sha = sha256Bytes(msg);
		expect(sha).toBeInstanceOf(Uint8Array);
		expect(sha.length).toBe(32);
	});

	it('should convert integer to 4-byte big-endian representation', () => {
		expect(intTo4BytesBE(0x12345678)).toEqual(new Uint8Array([0x12, 0x34, 0x56, 0x78]));
	});
});
