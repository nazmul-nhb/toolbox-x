// @vitest-environment happy-dom

import {
	isCustomFile,
	isCustomFileArray,
	isFileArray,
	isFileOrBlob,
	isOriginFileObj,
	isValidFormData,
} from 'src/form/guards';
import { describe, expect, it } from 'vitest';

describe('form guards', () => {
	it('should validate isValidFormData', () => {
		const fd = new FormData();
		expect(isValidFormData(fd)).toBe(false); // empty

		fd.append('foo', 'bar');
		expect(isValidFormData(fd)).toBe(true);
		expect(isValidFormData({})).toBe(false);
	});

	it('should validate file and blob objects', () => {
		const blob = new Blob(['hello'], { type: 'text/plain' });
		const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });

		expect(isFileOrBlob(blob)).toBe(true);
		expect(isFileOrBlob(file)).toBe(true);
		expect(isFileOrBlob({})).toBe(false);

		expect(isFileArray([file, blob])).toBe(true);
		expect(isFileArray([file, {}])).toBe(false);
	});

	it('should validate OriginFileObj and CustomFile', () => {
		const origin = { uid: '12345' };
		expect(isOriginFileObj(origin)).toBe(true);
		expect(isOriginFileObj({})).toBe(false);

		const custom = { originFileObj: origin };
		expect(isCustomFile(custom)).toBe(true);
		expect(isCustomFile({})).toBe(false);

		expect(isCustomFileArray([custom])).toBe(true);
	});
});
