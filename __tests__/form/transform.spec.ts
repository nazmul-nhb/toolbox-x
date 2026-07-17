// @vitest-environment happy-dom

import { parseFormData, serializeForm } from 'src/form/transform';
import { describe, expect, it } from 'vitest';

describe('form transform utils', () => {
	it('should serialize an HTMLFormElement correctly', () => {
		const form = document.createElement('form');
		const input1 = document.createElement('input');
		input1.name = 'username';
		input1.value = 'john';
		form.appendChild(input1);

		const input2 = document.createElement('input');
		input2.name = 'email';
		input2.value = 'john@example.com';
		form.appendChild(input2);

		const data = serializeForm(form);
		expect(data).toEqual({
			username: 'john',
			email: 'john@example.com',
		});

		const queryString = serializeForm(form, true);
		expect(queryString).toBe('?username=john&email=john%40example.com');
	});

	it('should parse FormData back to an object', () => {
		const fd = new FormData();
		fd.append('foo', 'bar');
		fd.append('num', '42');
		fd.append('flag', 'false');

		const parsed = parseFormData(fd);
		expect(parsed).toEqual({
			foo: 'bar',
			num: 42,
			flag: false,
		});
	});

	it('should parse query strings back to an object', () => {
		const query = '?foo=bar&num=42&flag=true';
		const parsed = parseFormData(query);
		expect(parsed).toEqual({
			foo: 'bar',
			num: 42,
			flag: true,
		});
	});
});
