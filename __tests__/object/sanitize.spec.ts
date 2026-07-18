import { parseObjectValues, sanitizeData } from 'src/object/sanitize';
import type { Numeric } from 'src/types/index';
import { describe, expect, it } from 'vitest';

describe('parseObjectValues', () => {
	type Config = {
		debug: 'true';
		port: Numeric;
		title: string;
		nullable: 'null';
	};

	const config: Config = {
		debug: 'true',
		port: '3000',
		title: 'My App',
		nullable: 'null',
	} as const;

	const result = parseObjectValues(config);

	it('should parse object values', () => {
		expect(result).toEqual({
			debug: true,
			port: 3000,
			title: 'My App',
			nullable: null,
		});
	});

	it('should parse nested object values', () => {
		type Nested = {
			a: {
				b: {
					c: 'true';
					d: 'false';
					e: 'null';
					f: 'undefined';
					g: '123';
				};
			};
			h: 'true';
			i: 'false';
			j: 'null';
			k: 'undefined';
			l: '123';
		};

		const nested: Nested = {
			a: {
				b: {
					c: 'true',
					d: 'false',
					e: 'null',
					f: 'undefined',
					g: '123',
				},
			},
			h: 'true',
			i: 'false',
			j: 'null',
			k: 'undefined',
			l: '123',
		};

		const result = parseObjectValues(nested);

		expect(result).toEqual({
			a: { b: { c: true, d: false, e: null, f: undefined, g: 123 } },
			h: true,
			i: false,
			j: null,
			k: undefined,
			l: 123,
		});
	});

	it('should parse object values with nested arrays', () => {
		type UserData = {
			id: Numeric;
			preferences: {
				darkMode: 'true' | 'false';
				fontSize: Numeric;
			};
			history: {
				date: string;
				count: Numeric;
			}[];
		};

		const userData: UserData = {
			id: '123',
			preferences: {
				darkMode: 'true',
				fontSize: '14',
			},
			history: [
				{ date: '2023-01-01', count: '4' },
				{ date: '2023-01-02', count: '5' },
				{ date: '2023-01-01', count: '6' },
			],
		};

		const result = parseObjectValues(userData);

		expect(result).toEqual({
			id: 123,
			preferences: {
				darkMode: true,
				fontSize: 14,
			},
			history: [
				{ date: '2023-01-01', count: 4 },
				{ date: '2023-01-02', count: 5 },
				{ date: '2023-01-01', count: 6 },
			],
		});
	});

	it('should parse nested JSON object values', () => {
		const json = {
			json: `{
				"a": 1,
				"b": 2,
				"c": 3
			}`,
		};

		const result = parseObjectValues(json);

		expect(result).toEqual({
			json: {
				a: 1,
				b: 2,
				c: 3,
			},
		});
	});

	it('should parse numeric string values', () => {
		const obj = {
			a: '1',
			b: '2',
			c: '3',
		};

		const result = parseObjectValues(obj);

		expect(result).toEqual({
			a: 1,
			b: 2,
			c: 3,
		});
	});

	it('should disable nested parsing', () => {
		const nested = {
			value: '42',
			children: [{ val: '10' }],
		};

		const result = parseObjectValues(nested, false);

		expect(result).toEqual({
			value: 42,
			children: [{ val: '10' }],
		});
	});
});

describe('sanitizeData', () => {
	it('should sanitize string', () => {
		const input = '  hello  world  ';
		const result = sanitizeData(input);
		expect(result).toEqual('hello world');
	});

	it('should sanitize string array', () => {
		const input = ['  foo ', 'bar  ', '  baz  '];
		const result = sanitizeData(input);
		expect(result).toEqual(['foo', 'bar', 'baz']);
	});

	it('should sanitize object', () => {
		const input = {
			name: '  John Doe  ',
			age: null,
			address: { city: '  NYC  ', zip: '' },
			tags: [],
		};

		const result = sanitizeData(input, { ignoreFalsy: true, ignoreEmpty: true });
		expect(result).toEqual({ name: 'John Doe', address: { city: 'NYC' } });
	});

	it('should sanitize object with advanced filtering', () => {
		const input = {
			apiKey: '  secret  ',
			debug: ' false ',
			settings: {
				timeout: ' 30 ',
				nullValue: null,
				emptyObj: {},
			},
			ignored: 'should not appear',
		};

		const result = sanitizeData(
			input,
			{
				keysToIgnore: ['ignored'],
				trimStrings: true,
				ignoreNullish: true,
				ignoreEmpty: true,
				requiredKeys: ['apiKey'],
			},
			'partial'
		); // Output: { apiKey: "secret", debug: false, settings: { timeout: 30 } }

		expect(result).toEqual({
			apiKey: 'secret',
			debug: 'false',
			settings: {
				timeout: '30',
			},
		});
	});
});
