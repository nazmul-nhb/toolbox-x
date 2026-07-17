// @vitest-environment happy-dom

import {
	getFromLocalStorage,
	getFromSessionStorage,
	removeFromLocalStorage,
	removeFromSessionStorage,
	saveToLocalStorage,
	saveToSessionStorage,
} from 'src/dom/storage';
import { describe, expect, it } from 'vitest';

describe('dom storage utils', () => {
	it('should save, retrieve, and remove items from localStorage', () => {
		saveToLocalStorage('test-key', { foo: 'bar' });
		expect(getFromLocalStorage('test-key')).toEqual({ foo: 'bar' });

		removeFromLocalStorage('test-key');
		expect(getFromLocalStorage('test-key')).toBeNull();
	});

	it('should save, retrieve, and remove items from sessionStorage', () => {
		saveToSessionStorage('test-session', [1, 2, 3]);
		expect(getFromSessionStorage('test-session')).toEqual([1, 2, 3]);

		removeFromSessionStorage('test-session');
		expect(getFromSessionStorage('test-session')).toBeNull();
	});

	it('should return null if JSON parsing fails or item does not exist', () => {
		localStorage.setItem('invalid-json', '{invalid');
		expect(getFromLocalStorage('invalid-json')).toBeNull();
	});
});
