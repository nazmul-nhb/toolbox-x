import { parseMSec } from 'src/date/parse';
import type { TimeWithUnit } from 'src/types/date';
import { describe, expect, it } from 'vitest';

describe('parseMSec', () => {
	it('should parse numbers and numeric strings as seconds', () => {
		expect(parseMSec(10)).toBe(10000);
		expect(parseMSec('10')).toBe(10000);
		expect(parseMSec(10, true)).toBe(10);
	});

	it('should parse various time units correctly', () => {
		expect(parseMSec('100ms')).toBe(100);
		expect(parseMSec('1s')).toBe(1000);
		expect(parseMSec('2m')).toBe(120000);
		expect(parseMSec('1h')).toBe(3600000);
		expect(parseMSec('1d')).toBe(86400000);
	});

	it('should return NaN for invalid strings', () => {
		// @ts-expect-error
		expect(parseMSec('120 unknown')).toBeNaN();
		// @ts-expect-error
		expect(parseMSec(null)).toBeNaN();
	});

	it('should throw RangeError for too long strings', () => {
		const longStr = '1'.repeat(101) + 's';
		expect(() => parseMSec(longStr as TimeWithUnit)).toThrow(RangeError);
	});
});
