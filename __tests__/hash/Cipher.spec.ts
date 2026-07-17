import { Cipher } from 'src/hash/Cipher';
import { describe, expect, it } from 'vitest';

describe('Cipher class', () => {
	const secret = 'my-super-secret-key';
	const plaintext = 'Hello World! This is a test.';

	it('should encrypt and decrypt a string successfully', () => {
		const cipher = new Cipher(secret);
		const token = cipher.encrypt(plaintext);

		expect(typeof token).toBe('string');
		expect(token.length).toBeGreaterThan(0);

		const decrypted = cipher.decrypt(token);
		expect(decrypted).toBe(plaintext);
	});

	it('should validate if a token is valid using isValid', () => {
		const cipher = new Cipher(secret);
		const token = cipher.encrypt(plaintext);

		expect(cipher.isValid(token)).toBe(true);
		expect(cipher.isValid('invalid-base64')).toBe(false);
	});

	it('should throw error for invalid secret on creation', () => {
		expect(() => new Cipher('')).toThrow('Secret must be non-empty string!');
	});

	it('should fail decryption if token has been tampered with', () => {
		const cipher = new Cipher(secret);
		const token = cipher.encrypt(plaintext);

		// Tamper with the last character of the base64 token
		const tamperedToken = token.slice(0, -1) + (token.endsWith('A') ? 'B' : 'A');

		expect(cipher.isValid(tamperedToken)).toBe(false);
		expect(() => cipher.decrypt(tamperedToken)).toThrow();
	});
});
