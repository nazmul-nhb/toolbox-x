import { getCountryByPhone } from 'src/utils/xtras';
import { describe, expect, it } from 'vitest';

describe('getCountryByPhone', () => {
	const country1 = [
		{
			country_code: '1',
			country_name: 'Canada',
			iso_code: 'CAN',
			iso_code_short: 'CA',
		},
		{
			country_code: '1',
			country_name: 'United States',
			iso_code: 'USA',
			iso_code_short: 'US',
		},
	];

	const bd = {
		country_name: 'Bangladesh',
		country_code: '880',
		iso_code_short: 'BD',
		iso_code: 'BGD',
	};

	it('should return an empty array for invalid input', () => {
		// @ts-expect-error
		expect(getCountryByPhone(undefined)).toEqual([]);
		// @ts-expect-error
		expect(getCountryByPhone(null)).toEqual([]);
		expect(getCountryByPhone(NaN)).toEqual([]);
		expect(getCountryByPhone(Infinity)).toEqual([]);
		expect(getCountryByPhone(-Infinity)).toEqual([]);
		expect(getCountryByPhone('')).toEqual([]);
	});

	it('should return an empty array for empty string', () => {
		expect(getCountryByPhone('')).toEqual([]);
	});

	it('should return canada and usa for number starting with 1', () => {
		expect(getCountryByPhone(123)).toEqual(country1);
	});

	it('should return an array with one country for a valid phone number', () => {
		expect(getCountryByPhone('+8801623732187')).toEqual([bd]);
	});

	it('should return an array with multiple countries for a valid phone number', () => {
		expect(getCountryByPhone('+8801623732187')).toEqual([bd]);
	});

	it('should return an array with multiple countries for a phone number with a country code that matches multiple countries', () => {
		expect(getCountryByPhone('+8801623732187')).toEqual([bd]);
	});
});
