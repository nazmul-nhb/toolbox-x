import {
	convertArrayToString,
	countInstanceMethods,
	countStaticMethods,
	getClassDetails,
	getInstanceGetterNames,
	getInstanceMethodNames,
	getStaticGetterNames,
	getStaticMethodNames,
	parseJSON,
	stableStringify,
	stripJsonEdgeGarbage,
} from 'src/utils/miscellaneous';
import { describe, expect, it } from 'vitest';

describe('convertArrayToString', () => {
	it('should convert an array to a string', () => {
		expect(convertArrayToString(['a', 'b', 'c'])).toBe('a, b, c');
		expect(convertArrayToString(['a', 'b', 'c'], { separator: '-' })).toBe('a-b-c');
		expect(convertArrayToString(['a', 'b', 'c'], { separator: '' })).toBe('abc');
	});

	it('should convert an array of objects to a string', () => {
		expect(
			convertArrayToString(
				[
					{ a: 1, b: 2 },
					{ a: 3, b: 4 },
				],
				{ target: 'a' }
			)
		).toBe('1, 3');
		expect(
			convertArrayToString(
				[
					{ a: 1, b: 2 },
					{ a: 3, b: 4 },
				],
				{ target: 'b', separator: '-' }
			)
		).toBe('2-4');
		expect(
			convertArrayToString(
				[
					{ a: 1, b: 2 },
					{ a: 3, b: 4 },
				],
				{ target: 'a', separator: '' }
			)
		).toBe('13');
	});
});

class TestClass {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	get testName() {
		return this.name;
	}

	static testStaticMethod() {
		return 'testStaticMethod';
	}

	testMethod() {
		return 'testMethod';
	}
}

describe('countInstanceMethods', () => {
	it('should count the number of instance methods', () => {
		expect(countInstanceMethods(TestClass)).toBe(1);
	});
});

describe('countStaticMethods', () => {
	it('should count the number of static methods', () => {
		expect(countStaticMethods(TestClass)).toBe(1);
	});
});

describe('getInstanceMethodNames', () => {
	it('should return an array of instance method names', () => {
		expect(getInstanceMethodNames(TestClass)).toEqual(['testMethod']);
	});
});

describe('getStaticMethodNames', () => {
	it('should return an array of static method names', () => {
		expect(getStaticMethodNames(TestClass)).toEqual(['testStaticMethod']);
	});
});

describe('getInstanceGetterNames', () => {
	it('should return an array of instance getter names', () => {
		expect(getInstanceGetterNames(TestClass)).toEqual(['testName']);
	});
});

describe('getStaticGetterNames', () => {
	it('should return an array of static getter names', () => {
		expect(getStaticGetterNames(TestClass)).toEqual([]);
	});
});

describe('getClassDetails', () => {
	it('should return an object with instance and static method counts', () => {
		expect(getClassDetails(TestClass)).toEqual({
			instanceMethods: ['testMethod'],
			staticMethods: ['testStaticMethod'],
			instanceGetters: ['testName'],
			staticGetters: [],
			instanceCount: 1,
			staticCount: 1,
			totalGetters: 1,
			totalMethods: 2,
		});
	});

	it('should return an object with instance and static method counts for a class with no methods', () => {
		class TestClass2 {}

		expect(getClassDetails(TestClass2)).toEqual({
			instanceMethods: [],
			staticMethods: [],
			instanceGetters: [],
			staticGetters: [],
			instanceCount: 0,
			staticCount: 0,
			totalGetters: 0,
			totalMethods: 0,
		});
	});
});

describe('stableStringify', () => {
	const obj = {
		a: 1,
		b: 2,
		c: 3,
		d: null,
		e: undefined,
		h: 'hello',
		f: true,
		g: false,
		j: new Date('2023-01-01T00:00:00.000Z'),
	};

	it('should return a stable JSON string', () => {
		expect(stableStringify(obj)).toBe(
			'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}'
		);
	});
});

describe('stripJsonEdgeGarbage', () => {
	it('should remove trailing garbage characters', () => {
		expect(
			stripJsonEdgeGarbage(
				'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}'
			)
		).toBe(
			'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}'
		);
	});

	it('should remove leading garbage characters', () => {
		expect(
			stripJsonEdgeGarbage(
				'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}'
			)
		).toBe(
			'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}'
		);
	});

	it('should not remove garbage characters if they are not at the start or end', () => {
		expect(
			stripJsonEdgeGarbage(
				'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}'
			)
		).toBe(
			'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}'
		);
	});
});

describe('parseJSON', () => {
	it('should parse JSON string to object', () => {
		expect(
			parseJSON(
				'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}'
			)
		).toEqual({
			a: 1,
			b: 2,
			c: 3,
			d: null,
			e: null,
			f: true,
			g: false,
			h: 'hello',
			j: '2023-01-01T00:00:00.000Z',
		});
	});

	it('should parse JSON string to object with primitive conversion', () => {
		expect(
			parseJSON(
				'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z"}',
				true
			)
		).toEqual({
			a: 1,
			b: 2,
			c: 3,
			d: null,
			e: null,
			f: true,
			g: false,
			h: 'hello',
			j: '2023-01-01T00:00:00.000Z',
		});
	});

	it('should return empty object for malformed JSON', () => {
		expect(
			parseJSON(
				'{"a":1,"b":2,"c":3,"d":null,"e":null,"f":true,"g":false,"h":"hello","j":"2023-01-01T00:00:00.000Z'
			)
		).toEqual({});
	});

	it('should return empty object for invalid JSON', () => {
		expect(parseJSON('invalid json')).toEqual({});
	});
});
