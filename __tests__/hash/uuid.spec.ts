import {
	decodeUUID,
	isUUIDv1,
	isUUIDv3,
	isUUIDv4,
	isUUIDv5,
	isUUIDv6,
	isUUIDv7,
	isUUIDv8,
	uuid,
} from 'src/hash/uuid';
import { describe, expect, it } from 'vitest';

describe('UUID generator and decoder', () => {
	it('should generate UUIDs of different versions', () => {
		const v1 = uuid({ version: 'v1' });
		const v3 = uuid({
			version: 'v3',
			namespace: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
			name: 'test',
		});
		const v4 = uuid({ version: 'v4' });
		const v5 = uuid({
			version: 'v5',
			namespace: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
			name: 'test',
		});
		const v6 = uuid({ version: 'v6' });
		const v7 = uuid({ version: 'v7' });
		const v8 = uuid({ version: 'v8' });

		expect(isUUIDv1(v1)).toBe(true);
		expect(isUUIDv3(v3)).toBe(true);
		expect(isUUIDv4(v4)).toBe(true);
		expect(isUUIDv5(v5)).toBe(true);
		expect(isUUIDv6(v6)).toBe(true);
		expect(isUUIDv7(v7)).toBe(true);
		expect(isUUIDv8(v8)).toBe(true);
	});

	it('should support uppercase formatting', () => {
		const v4 = uuid({ uppercase: true });
		expect(v4).toBe(v4.toUpperCase());
	});

	it('should decode time-based UUIDs', () => {
		const v7 = uuid({ version: 'v7' });
		const decoded = decodeUUID(v7);
		expect(decoded).not.toBeNull();
		expect(decoded!.version).toBe(7);
		expect(decoded!.timestamp).toBeLessThanOrEqual(Date.now());
	});

	it('should return null for invalid UUIDs', () => {
		expect(decodeUUID('invalid-uuid')).toBeNull();
	});
});
