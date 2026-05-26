import { DAYS, MONTHS, SORTED_TIME_FORMATS } from 'src/date/constants';
import { isString } from 'src/guards/primitives';
import { getOrdinal } from 'src/number/utilities';
import type {
	$GMTOffset,
	$TimeZoneIdentifier,
	DateArgs,
	FormatToken,
	TimeZoneNameNative,
	UTCOffset,
} from 'src/types/date';
import type { Maybe } from 'src/types/index';

/** Core formatting logic shared by `formatDate` and `Chronos`, `BanglaCalendar` classes */
export function _formatDateCore(format: string, dateComponents: Record<string, string>) {
	const tokenRegex = new RegExp(`^(${SORTED_TIME_FORMATS.join('|')})`);

	let result = '';

	let i = 0;
	while (i < format.length) {
		// Handle [escaped literal]
		if (format[i] === '[') {
			const end = format.indexOf(']', i);
			if (end !== -1) {
				result += format.slice(i + 1, end);
				i = end + 1;
				continue;
			}
		}

		// Try to match a format token
		const match = tokenRegex.exec(format.slice(i));

		if (match) {
			result += dateComponents[match[0]] ?? match[0];
			i += match[0].length;
		} else {
			result += format[i];
			i++;
		}
	}

	return result;
}

/** Core formatting logic shared by `formatDate` and `Chronos` class */
export function _formatDate(
	format: string,
	year: number,
	month: number,
	day: number,
	date: number,
	hours: number,
	minutes: number,
	seconds: number,
	milliseconds: number,
	offset: string
) {
	const paddedYear = _padZero(year, 4);

	const dateComponents: Record<FormatToken, string> = {
		YYYY: paddedYear,
		YY: paddedYear.slice(-2),
		yyyy: paddedYear,
		yy: paddedYear.slice(-2),
		M: String(month + 1),
		MM: _padZero(month + 1),
		mmm: MONTHS[month].slice(0, 3),
		mmmm: MONTHS[month],
		d: DAYS[day].slice(0, 2),
		dd: DAYS[day].slice(0, 3),
		ddd: DAYS[day],
		D: String(date),
		DD: _padZero(date),
		Do: getOrdinal(date),
		H: String(hours),
		HH: _padZero(hours),
		h: String(hours % 12 || 12),
		hh: _padZero(hours % 12 || 12),
		m: String(minutes),
		mm: _padZero(minutes),
		s: String(seconds),
		ss: _padZero(seconds),
		ms: String(milliseconds),
		mss: _padZero(milliseconds, 3),
		a: hours < 12 ? 'am' : 'pm',
		A: hours < 12 ? 'AM' : 'PM',
		Z: offset,
		ZZ: offset,
	};

	return _formatDateCore(format, dateComponents);
}

/** Normalize a time string by adding offset at the end */
export function _normalizeOffset(timeStr: string): string {
	return timeStr.replace(/([+-]\d{2})(?!:)/, '$1:00');
}

/** Converts milliseconds to seconds */
export const _toSeconds = (ms: number) => Math.floor(ms / 1000);

/** Converts timestamp seconds to JS `Date` */
export const _secToDate = (sec: number) => new Date(sec * 1000);

type $TzNameType = Intl.DateTimeFormatOptions['timeZoneName'];
type $TzId = Maybe<$TimeZoneIdentifier>;
type $ResolvedTzName<T extends $TzNameType> = Maybe<
	T extends 'long' ? TimeZoneNameNative : T extends 'longOffset' ? $GMTOffset : string
>;

/** Resolve `timeZoneName` value from `Intl.DateTimeFormat` */
export function _resolveNativeTzName<T extends $TzNameType>(tzId: $TzId, type: T, date?: Date) {
	try {
		const parts = new Intl.DateTimeFormat('en', {
			timeZone: tzId,
			timeZoneName: type,
		}).formatToParts(date);

		return parts.find((p) => p.type === 'timeZoneName')?.value as $ResolvedTzName<T>;
	} catch {
		return undefined;
	}
}

/** Convert `GMT±HH:mm` string to `UTC±HH:mm` format*/
export function _gmtToUtcOffset(gmt: Maybe<string>) {
	return gmt === 'GMT' ? 'UTC+00:00' : (gmt?.replace(/^GMT/, 'UTC') as Maybe<UTCOffset>);
}

/**
 * Convert number to string and pad at the start with zero (`'0'`)
 * @param value Value to convert and pad with
 * @param length Maximum length to pad, default is `2`
 * @returns The padded string
 */
export function _padZero(value: number, length = 2) {
	return String(value).padStart(length, '0');
}

/**
 * Convert a string, number, or `Date` object to a `Date` object.
 * - If the input is already a `Date`, it is returned as is.
 * - If it's a string, it is parsed into a `Date`.
 * - If it's a number, it is treated as a timestamp and converted to a `Date`.
 * @param value The date input to convert, which can be a `Date` object, a date string, a timestamp number, or undefined (which defaults to the current date and time).
 * @returns A `Date` object representing the input date.
 */
export function _dateArgsToDate(value: Maybe<DateArgs>): Date {
	return value instanceof Date
		? value
		: new Date(isString(value) ? value.replace(/['"]/g, '') : (value ?? Date.now()));
	// ! Needs more work on this
}
