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

describe('createFormData', () => {
	const file1 = new File(['file1'], 'file1.txt', { type: 'text/plain' });
	const file2 = new File(['file2'], 'file2.txt', { type: 'text/plain' });

	const data = {
		user: {
			name: ' John Doe ',
			age: 30,
			preferences: { theme: 'dark' },
		},
		files: [file1, file2],
	};

	const formData = createFormData(data, {
		trimStrings: true,
		lowerCaseValues: ['user.name'],
		dotNotateNested: ['user'],
		breakArray: ['files'],
	});

	const result = Object.fromEntries(formData);

	it('should return an object with the correct values', () => {
		expect(result).toEqual({
			'user.name': 'john doe',
			'user.age': '30',
			'user.preferences.theme': 'dark',
			'files[0]': file1,
			'files[1]': file2,
		});
	});
});
