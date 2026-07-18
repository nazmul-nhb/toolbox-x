import {
	convertObjectValues,
	deleteFields,
	pickFields,
	pickObjectFieldsByCondition,
	remapFields,
} from 'src/object/convert';

import { describe, expect, it } from 'vitest';

describe('object conversion utils', () => {
	it('should convert object values', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const converted = convertObjectValues(obj, { convertTo: 'string', keys: ['a'] });
		expect(converted).toEqual({ a: '1', b: 2, c: 3 });
	});

	it('should convert values of array of objects', () => {
		const obj = [
			{ a: '1', b: { x: [{ y: 2 }] }, c: { d: '666' } },
			{ a: '4', b: { x: [{ y: 5 }] }, c: { d: '666' } },
		];
		const converted = convertObjectValues(obj, { convertTo: 'number', keys: ['a', 'c.d'] });
		expect(converted).toEqual([
			{ a: 1, b: { x: [{ y: 2 }] }, c: { d: 666 } },
			{ a: 4, b: { x: [{ y: 5 }] }, c: { d: 666 } },
		]);
	});

	it('should delete fields', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const converted = deleteFields(obj, ['a', 'c']);
		expect(converted).toEqual({ b: 2 });
	});

	it('should pick fields', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const converted = pickFields(obj, ['a', 'c']);
		expect(converted).toEqual({ a: 1, c: 3 });
	});

	it('should pick object fields by condition', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const converted = pickObjectFieldsByCondition(obj, (_, value) => value > 1);
		expect(converted).toEqual({ b: 2, c: 3 });
	});

	it('should remap fields', () => {
		const obj = { a: 1, b: 2, c: 3 };
		const converted = remapFields(obj, { a1: 'a', b2: 'b', c3: 'c' });
		expect(converted).toEqual({ a1: 1, b2: 2, c3: 3 });
	});
});
