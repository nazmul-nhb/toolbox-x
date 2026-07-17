// @vitest-environment happy-dom

import {
	generateQueryParams,
	getQueryParams,
	parseQueryString,
	parseQueryStringLiteral,
	updateQueryParam,
} from 'src/dom/query';
import { describe, expect, it, vi } from 'vitest';

describe('dom query utils', () => {
	it('should generate query params from object', () => {
		expect(generateQueryParams({ a: '1', b: 2 })).toBe('?a=1&b=2');
		expect(generateQueryParams({ filters: { val: 'test' } })).toBe('?val=test');
		expect(generateQueryParams({ list: ['x', 'y'] })).toBe('?list=x&list=y');
	});

	it('should get query params from window location', () => {
		vi.stubGlobal('window', {
			location: {
				search: '?foo=bar&baz=qux',
			},
		});

		const params = getQueryParams();
		expect(params).toEqual({ foo: 'bar', baz: 'qux' });

		vi.unstubAllGlobals();
	});

	it('should update query param in location', () => {
		const replaceStateSpy = vi.fn();
		vi.stubGlobal('window', {
			location: {
				href: 'https://example.com/page?foo=bar',
			},
			history: {
				replaceState: replaceStateSpy,
			},
		});

		updateQueryParam('foo', 'baz');
		expect(replaceStateSpy).toHaveBeenCalled();
		const calledUrl = replaceStateSpy.mock.calls[0][2];
		expect(calledUrl).toContain('foo=baz');

		vi.unstubAllGlobals();
	});

	it('should parse query strings into objects', () => {
		expect(parseQueryString('?foo=bar&num=123&flag=true')).toEqual({
			foo: 'bar',
			num: 123,
			flag: true,
		});

		expect(parseQueryString('foo=bar&foo=baz')).toEqual({
			foo: ['bar', 'baz'],
		});
	});

	it('should parse query strings literally without primitive parsing', () => {
		expect(parseQueryStringLiteral('?foo=bar&num=123&flag=true')).toEqual({
			foo: 'bar',
			num: '123',
			flag: 'true',
		});
	});
});
