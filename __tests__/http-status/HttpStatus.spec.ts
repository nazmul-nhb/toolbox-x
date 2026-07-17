import { HttpStatus, httpStatus } from 'src/http-status/HttpStatus';
import { describe, expect, it } from 'vitest';

describe('HttpStatus class and instance', () => {
	it('should retrieve status details by code', () => {
		const ok = httpStatus.getByCode(200);
		expect(ok).toBeDefined();
		expect(ok.name).toBe('OK');
		expect(ok.readableName).toBe('Ok');
		expect(ok.category).toBe('success');
	});

	it('should retrieve status details by name', () => {
		const notFound = httpStatus.getByName('NOT_FOUND');
		expect(notFound).toBeDefined();
		expect(notFound.code).toBe(404);
	});

	it('should allow adding custom codes', () => {
		const registry = new HttpStatus();
		registry.addCode({
			code: 799,
			name: 'CUSTOM_ERR',
			readableName: 'Custom Error',
			message: 'Custom error message',
			description: 'Description of custom error',
			category: 'clientError',
		});

		const custom = registry.getByCode(799);
		expect(custom).toBeDefined();
		expect(custom!.readableName).toBe('Custom Error');
	});

	it('should populate static groups', () => {
		expect(HttpStatus.Groups.success).toContain(200);
		expect(HttpStatus.Groups.clientError).toContain(404);
	});
});
