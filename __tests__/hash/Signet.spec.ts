import { Signet } from 'src/hash/Signet';
import { describe, expect, it } from 'vitest';

describe('Signet class', () => {
	const secret = 'my-jwt-secret-key-that-is-at-least-32-chars';
	const payload = { userId: 123, role: 'admin' };

	it('should sign and verify a token successfully', () => {
		const signet = new Signet(secret);
		const token = signet.sign(payload, { expiresIn: '1h' });

		expect(typeof token).toBe('string');
		expect(token.split('.')).toHaveLength(3);

		const result = signet.verify(token);
		expect(result.isValid).toBe(true);
		// @ts-expect-error
		expect(result.payload.userId).toBe(123);
		// @ts-expect-error
		expect(result.payload.role).toBe('admin');
	});

	it('should decode a token without verifying signature', () => {
		const signet = new Signet(secret);
		const token = signet.sign(payload);

		const decoded = signet.decode(token);
		expect(decoded.payload.userId).toBe(123);
	});

	it('should fail verification if token signature is invalid', () => {
		const signet = new Signet(secret);
		const token = signet.sign(payload);

		const tamperedToken = token + 'tampered';
		const result = signet.verify(tamperedToken);

		expect(result.isValid).toBe(false);
		// @ts-expect-error
		expect(result.error).toBeDefined();
	});

	it('should check for expiration', () => {
		const signet = new Signet(secret);
		// Sign a token that has already expired (-1s)
		const token = signet.sign(payload, { expiresIn: '-1s' });
		const result = signet.verify(token);

		expect(result.isValid).toBe(false);
		// @ts-expect-error
		expect(result.error).toMatch(/expired/i);
	});
});
