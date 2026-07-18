import { Verbalizer, verbalizer } from 'src/verbalizer/Verbalizer';
import { beforeAll, describe, expect, it, test } from 'vitest';

describe('Verbalizer class and instance', () => {
	it('should support class instantiation', () => {
		const custom = new Verbalizer();
		expect(custom.toPast('run')).toBe('ran');
	});

	it('should conjugate verbs to past tense', () => {
		expect(verbalizer.toPast('run')).toBe('ran');
		expect(verbalizer.toPast('go')).toBe('went');
		expect(verbalizer.toPast('walk')).toBe('walked');
		expect(verbalizer.toPast('')).toBe('');
	});

	it('should conjugate verbs to past participle', () => {
		expect(verbalizer.toParticiple('run')).toBe('run');
		expect(verbalizer.toParticiple('go')).toBe('gone');
		expect(verbalizer.toParticiple('walk')).toBe('walked');
		expect(verbalizer.toParticiple('')).toBe('');
	});

	it('should conjugate verbs back to base form', () => {
		expect(verbalizer.toBase('ran')).toBe('run');
		expect(verbalizer.toBase('went')).toBe('go');
		expect(verbalizer.toBase('walked')).toBe('walk');
		expect(verbalizer.toBase('')).toBe('');
	});

	it('should preserve casing of original verb', () => {
		expect(verbalizer.toPast('Run')).toBe('Ran');
		expect(verbalizer.toPast('RUN')).toBe('RAN');
	});
});

describe('Verb form checks', () => {
	// Add some irregulars for testing
	beforeAll(() => {
		verbalizer.addIrregular('go', 'went', 'gone');
		verbalizer.addIrregular('run', 'ran', 'run');
		verbalizer.addIrregular('be', 'was', 'been');
		verbalizer.addIrregular('put', 'put', 'put');
	});

	describe('isBase()', () => {
		test('returns true for base forms', () => {
			expect(verbalizer.isBase('go')).toBe(true);
			expect(verbalizer.isBase('run')).toBe(true);
			expect(verbalizer.isBase('be')).toBe(true);
			expect(verbalizer.isBase('put')).toBe(true);
			expect(verbalizer.isBase('walk')).toBe(true); // regular
			expect(verbalizer.isBase('mummify')).toBe(true); // regular
			expect(verbalizer.isBase('stop')).toBe(true); // regular
			expect(verbalizer.isBase('mine')).toBe(true); // regular
			expect(verbalizer.isBase('')).toBe(false);
		});

		test('returns false for non-base forms', () => {
			expect(verbalizer.isBase('went')).toBe(false);
			expect(verbalizer.isBase('ran')).toBe(false);
			expect(verbalizer.isBase('was')).toBe(false);
			expect(verbalizer.isBase('been')).toBe(false);
			expect(verbalizer.isBase('walked')).toBe(false);
			expect(verbalizer.isBase('mummified')).toBe(false);
			expect(verbalizer.isBase('stopped')).toBe(false);
			expect(verbalizer.isBase('mined')).toBe(false);
		});
	});

	describe('isPast()', () => {
		test('returns true for past tense forms', () => {
			expect(verbalizer.isPast('went')).toBe(true);
			expect(verbalizer.isPast('ran')).toBe(true);
			expect(verbalizer.isPast('was')).toBe(true);
			expect(verbalizer.isPast('put')).toBe(true);
			expect(verbalizer.isPast('walked')).toBe(true); // regular
			expect(verbalizer.isPast('mummified')).toBe(true); // regular
			expect(verbalizer.isPast('stopped')).toBe(true); // regular
			expect(verbalizer.isPast('mined')).toBe(true); // regular
			expect(verbalizer.isPast('')).toBe(false);
		});

		test('returns false for non-past forms', () => {
			expect(verbalizer.isPast('go')).toBe(false);
			expect(verbalizer.isPast('gone')).toBe(false);
			expect(verbalizer.isPast('be')).toBe(false);
			expect(verbalizer.isPast('walk')).toBe(false);
			expect(verbalizer.isPast('mummify')).toBe(false);
			expect(verbalizer.isPast('stop')).toBe(false);
			expect(verbalizer.isPast('mine')).toBe(false);
			expect(verbalizer.isPast('')).toBe(false);
		});
	});

	describe('isParticiple()', () => {
		test('returns true for past participle forms', () => {
			expect(verbalizer.isParticiple('gone')).toBe(true);
			expect(verbalizer.isParticiple('run')).toBe(true);
			expect(verbalizer.isParticiple('been')).toBe(true);
			expect(verbalizer.isParticiple('put')).toBe(true);
			expect(verbalizer.isParticiple('walked')).toBe(true); // regular
			expect(verbalizer.isParticiple('mummified')).toBe(true); // regular
			expect(verbalizer.isParticiple('stopped')).toBe(true); // regular
			expect(verbalizer.isParticiple('mined')).toBe(true); // regular
			expect(verbalizer.isParticiple('')).toBe(false);
		});

		test('returns false for non-participle forms', () => {
			expect(verbalizer.isParticiple('go')).toBe(false);
			expect(verbalizer.isParticiple('ran')).toBe(false);
			expect(verbalizer.isParticiple('was')).toBe(false);
			expect(verbalizer.isParticiple('walk')).toBe(false);
			expect(verbalizer.isParticiple('mummify')).toBe(false);
			expect(verbalizer.isParticiple('stop')).toBe(false);
			expect(verbalizer.isParticiple('mine')).toBe(false);
		});
	});

	describe('Consistency checks', () => {
		const verbs = ['go', 'run', 'walk', 'be', 'put', 'mummify', 'mine', 'stop', 'panic'];

		test('base → past → base should round-trip correctly', () => {
			for (const v of verbs) {
				const past = verbalizer.toPast(v);
				expect(verbalizer.toBase(past)).toBe(v);
			}
		});

		test('base → participle → base should round-trip correctly', () => {
			for (const v of verbs) {
				const part = verbalizer.toParticiple(v);
				expect(verbalizer.toBase(part)).toBe(v);
			}
		});
	});
});

describe('Manipulate Custom Rules', () => {
	beforeAll(() => {
		verbalizer.addIrregular('go', 'went', 'gone');
		verbalizer.addIrregular('run', 'ran', 'run');
		verbalizer.addIrregular('be', 'was', 'been');
		verbalizer.addIrregular('put', 'put', 'put');
	});

	it('should add custom irregular rules', () => {
		verbalizer.addBaseRule(/(john)$/i, '$1ny');
		expect(verbalizer.toBase('John')).toBe('Johnny');
	});
});

describe('Restore Case', () => {
	it('should restore case', () => {
		expect(verbalizer.toBase('baKed')).toBe('baKe');
		expect(verbalizer.toBase('BaKed')).toBe('BaKe');
		expect(verbalizer.toBase('BAKED')).toBe('BAKE');
		expect(verbalizer.toBase('BakEd')).toBe('BakE');
	});
});
