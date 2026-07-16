import { generateRandomID, trimString, truncateString } from 'src/string/basics';
import { describe, expect, it, vi } from 'vitest';

describe('basics.ts utils', () => {
	describe('truncateString', () => {
		it('should return empty string if input is empty or invalid', () => {
			expect(truncateString('')).toBe('');
			// @ts-expect-error
			expect(truncateString(null)).toBe('');
			// @ts-expect-error
			expect(truncateString(undefined)).toBe('');
		});

		it('should truncate string to default max length of 100 with ellipsis', () => {
			const longStr = 'a'.repeat(150);
			expect(truncateString(longStr)).toBe('a'.repeat(100) + '...');
		});

		it('should not truncate if string length is within max length', () => {
			const shortStr = 'hello';
			expect(truncateString(shortStr, 10)).toBe('hello');
			expect(truncateString(shortStr, 5)).toBe('hello');
		});

		it('should truncate using custom number length', () => {
			expect(truncateString('hello world', 5)).toBe('hello...');
		});

		it('should truncate using options object', () => {
			expect(
				truncateString('hello world', {
					maxLength: 5,
					suffix: '---',
				})
			).toBe('hello---');
		});

		it('should trim string if trim option is true', () => {
			expect(
				truncateString('  hello   world  ', {
					maxLength: 11,
					trim: true,
				})
			).toBe('hello world');

			expect(
				truncateString('  hello   world  ', {
					maxLength: 5,
					trim: true,
				})
			).toBe('hello...');
		});

		it('should return empty string if trimmed string becomes empty', () => {
			expect(
				truncateString('   ', {
					maxLength: 5,
					trim: true,
				})
			).toBe('');
		});

		it('should handle zero or negative maxLength as default or non-truncated behavior', () => {
			// If optionsOrLength <= 0, maxLength defaults to 100
			const longStr = 'a'.repeat(150);
			expect(truncateString(longStr, 0)).toBe(longStr.slice(0, 100) + '...');
			expect(truncateString(longStr, -5)).toBe(longStr.slice(0, 100) + '...');
		});
	});

	describe('generateRandomID', () => {
		it('should generate a 16-character alphanumeric ID by default', () => {
			const id = generateRandomID();
			expect(id).toMatch(/^[a-z0-9]{16}$/);
		});

		it('should support custom length', () => {
			const id = generateRandomID({ length: 8 });
			expect(id).toMatch(/^[a-z0-9]{8}$/);
		});

		it('should prepend prefix and append suffix', () => {
			const id = generateRandomID({ prefix: 'pre', suffix: 'suff' });
			expect(id.startsWith('pre')).toBe(true);
			expect(id.endsWith('suff')).toBe(true);
			// Without separator, they are just concatenated
			expect(id).toMatch(/^pre[a-z0-9]{16}suff$/);
		});

		it('should use custom separator', () => {
			const id = generateRandomID({ prefix: 'pre', suffix: 'suff', separator: '-' });
			const parts = id.split('-');
			expect(parts[0]).toBe('pre');
			expect(parts[1]).toMatch(/^[a-z0-9]{16}$/);
			expect(parts[2]).toBe('suff');
		});

		it('should include timestamp when timeStamp is true', () => {
			const mockTime = 1600000000000;
			vi.spyOn(Date, 'now').mockReturnValue(mockTime);

			const id = generateRandomID({ timeStamp: true, separator: '-' });
			const parts = id.split('-');
			expect(parts[0]).toBe('1600000000000');
			expect(parts[1]).toMatch(/^[a-z0-9]{16}$/);

			vi.restoreAllMocks();
		});

		it('should respect caseOption upper and lower', () => {
			const upperId = generateRandomID({ caseOption: 'upper' });
			expect(upperId).toBe(upperId.toUpperCase());
			expect(upperId).not.toBe(upperId.toLowerCase());

			const lowerId = generateRandomID({ caseOption: 'lower' });
			expect(lowerId).toBe(lowerId.toLowerCase());
		});

		it('should ignore empty prefix/suffix or whitespace', () => {
			const id = generateRandomID({ prefix: '  ', suffix: ' \n ', separator: '-' });
			expect(id).not.toContain('-');
			expect(id).toMatch(/^[a-z0-9]{16}$/);
		});
	});

	describe('trimString', () => {
		it('should return empty string if input is empty or falsy', () => {
			expect(trimString('')).toBe('');
			// @ts-expect-error
			expect(trimString(null)).toBe('');
			// @ts-expect-error
			expect(trimString(undefined)).toBe('');
		});

		it('should trim surrounding whitespaces and normalize internal whitespaces', () => {
			expect(trimString('   hello    world   ')).toBe('hello world');
			expect(trimString('\t\n hello \r\n world \t')).toBe('hello world');
		});

		it('should map over array of strings', () => {
			const input = ['  foo  ', '  bar   baz  ', ''];
			expect(trimString(input)).toEqual(['foo', 'bar baz', '']);
		});

		it('should throw TypeError if input is of invalid type', () => {
			// @ts-expect-error
			expect(() => trimString(123)).toThrow(TypeError);
			// @ts-expect-error
			expect(() => trimString({})).toThrow(TypeError);
		});
	});
});
