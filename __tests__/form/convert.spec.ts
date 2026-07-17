// @vitest-environment happy-dom

import { createFormData } from 'src/form/convert';
import { describe, expect, it } from 'vitest';

describe('form convert utils', () => {
	it('should convert flat objects to FormData', () => {
		const fd = createFormData({ name: 'John', age: 30 });
		expect(fd.get('name')).toBe('John');
		expect(fd.get('age')).toBe('30');
	});

	it('should support lowerCasing keys', () => {
		const fd = createFormData({ UserName: 'john_doe' }, { lowerCaseKeys: '*' });
		expect(fd.get('username')).toBe('john_doe');
		expect(fd.get('UserName')).toBeNull();
	});

	it('should ignore keys specified in ignoreKeys option', () => {
		const fd = createFormData(
			{ name: 'John', password: 'secret' },
			{ ignoreKeys: ['password'] }
		);
		expect(fd.get('name')).toBe('John');
		expect(fd.get('password')).toBeNull();
	});

	it('should serialize nested objects as JSON string by default', () => {
		const data = { user: { first: 'John', last: 'Doe' } };
		const fd = createFormData(data);
		expect(fd.get('user')).toBe(JSON.stringify(data.user));
	});
});
