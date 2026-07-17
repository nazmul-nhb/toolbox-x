import { parseMs } from 'src/date/index';
import {
	convertMinutesToTime,
	extractHourMinute,
	extractMinutesFromUTC,
	extractTimeFromUTC,
	formatDate,
	formatDateRelative,
	formatRelativeDateNative,
	formatTimePart,
	formatUTCOffset,
	getCurrentDateTime,
	getNativeTimeZoneId,
	getTimestamp,
	getTimeZoneDetails,
	getTimeZoneIds,
	getTotalMinutes,
} from 'src/date/utils';
import { describe, expect, it } from 'vitest';

describe('date utils', () => {
	it('should extract hour and minute', () => {
		expect(extractHourMinute('14:30')).toEqual([14, 30]);
		expect(extractHourMinute('-05:45')).toEqual([-5, 45]);
	});

	it('should get total minutes', () => {
		expect(getTotalMinutes('02:30')).toBe(150);
		expect(getTotalMinutes('-01:15')).toBe(-75);
	});

	it('should get current date/time object', () => {
		expect(getCurrentDateTime()).toBeInstanceOf(Date);
	});

	it('should extract time and minutes from UTC string', () => {
		expect(extractTimeFromUTC('UTC+05:30')).toBe('05:30');
		expect(extractTimeFromUTC('UTC-04:00')).toBe('-04:00');
		expect(extractMinutesFromUTC('UTC+01:30')).toBe(90);
	});

	it('should convert minutes to time string', () => {
		expect(convertMinutesToTime(75)).toBe('1:15');
		expect(convertMinutesToTime(-45)).toBe('0:45');
	});

	it('should format UTC offsets', () => {
		expect(formatUTCOffset(330)).toBe('UTC+05:30');
		expect(formatUTCOffset(-240)).toBe('UTC-04:00');
	});

	it('should get native timezone ID and details', () => {
		const tz = getNativeTimeZoneId();
		expect(typeof tz).toBe('string');
		expect(tz.length).toBeGreaterThan(0);

		const details = getTimeZoneDetails();
		expect(details.tzIdentifier).toBe(tz);
		expect(details.tzNameLong).toBeDefined();
	});

	it('should get timezone IDs for UTC offset', () => {
		const zones = getTimeZoneIds('UTC+06:00');
		expect(Array.isArray(zones)).toBe(true);
	});

	it('should format date according to options', () => {
		const d = new Date('2026-06-15T01:30:00.000Z');
		const formatted = formatDate({ date: d, format: 'YYYY-MM-DD HH:mm', useUTC: true });
		expect(formatted).toBe('2026-06-15 01:30');
		expect(formatDate({ date: 'invalid' })).toBe('Invalid Date!');
	});

	it('should format time part', () => {
		// Mock local formatting or test format options
		const formatted = formatTimePart('14:30', 'hh:mm a');
		expect(formatted).toMatch(/^\d{2}:\d{2} [ap]m$/i);
	});

	it('should format date relatively', () => {
		const now = Date.now();
		expect(formatDateRelative(now - parseMs('5m') - 5000)).toBe('5m ago');
		expect(formatDateRelative(now + parseMs('2h') + 5000)).toBe('2h from now');
		expect(formatDateRelative('invalid')).toBe('Invalid Date!');
	});

	it('should format relative date natively', () => {
		const now = Date.now();
		const formatted = formatRelativeDateNative(now - parseMs('5m'), { fromDate: now });
		expect(formatted).toBe('5 minutes ago');
	});

	it('should retrieve timestamp using getTimestamp', () => {
		// Verify if getTimestamp is exported and what it does.
		const ts = getTimestamp();
		expect(typeof ts).toBe('string');
	});
});
