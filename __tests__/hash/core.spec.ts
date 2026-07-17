import { md5, sha1, sha256 } from 'src/hash/core';
import { describe, expect, it } from 'vitest';

describe('core hash functions', () => {
	it('should compute MD5 correctly', () => {
		expect(md5('hello')).toBe('5d41402abc4b2a76b9719d911017c592');
	});

	it('should compute SHA-1 correctly', () => {
		expect(sha1('hello')).toBe('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d');
	});

	it('should compute SHA-256 correctly', () => {
		expect(sha256('hello')).toBe(
			'2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
		);
	});

	it('should throw TypeError if sha256 is called with non-string', () => {
		// @ts-expect-error
		expect(() => sha256(null)).toThrow(TypeError);
	});
});
