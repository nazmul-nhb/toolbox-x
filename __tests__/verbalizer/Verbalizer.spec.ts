import { Verbalizer, verbalizer } from 'src/verbalizer/Verbalizer';
import { describe, expect, it } from 'vitest';

describe('Verbalizer class and instance', () => {
	it('should support class instantiation', () => {
		const custom = new Verbalizer();
		expect(custom.toPast('run')).toBe('ran');
	});

	it('should conjugate verbs to past tense', () => {
		expect(verbalizer.toPast('run')).toBe('ran');
		expect(verbalizer.toPast('go')).toBe('went');
		expect(verbalizer.toPast('walk')).toBe('walked');
	});

	it('should conjugate verbs to past participle', () => {
		expect(verbalizer.toParticiple('run')).toBe('run');
		expect(verbalizer.toParticiple('go')).toBe('gone');
		expect(verbalizer.toParticiple('walk')).toBe('walked');
	});

	it('should conjugate verbs back to base form', () => {
		expect(verbalizer.toBase('ran')).toBe('run');
		expect(verbalizer.toBase('went')).toBe('go');
		expect(verbalizer.toBase('walked')).toBe('walk');
	});

	it('should preserve casing of original verb', () => {
		expect(verbalizer.toPast('Run')).toBe('Ran');
		expect(verbalizer.toPast('RUN')).toBe('RAN');
	});
});
