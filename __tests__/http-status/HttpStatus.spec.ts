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

	it('should list all or by category', () => {
		expect(httpStatus.list()).toHaveLength(63);
		expect(httpStatus.list('success')).toHaveLength(10);
		expect(httpStatus.list('clientError')).toHaveLength(29);
		expect(httpStatus.list('serverError')).toHaveLength(11);
		expect(httpStatus.list('informational')).toHaveLength(4);
		expect(httpStatus.list('redirection')).toHaveLength(9);
	});

	it('should add or override codes', () => {
		httpStatus.addOrOverrideCode({
			code: 999,
			name: 'NEW_OK',
			category: 'success',
			description: 'New OK',
			readableName: 'New OK',
			message: 'New OK',
		});
		expect(httpStatus.getByCode(999)).toBeDefined();
		expect(httpStatus.getByCode(999)?.name).toBe('NEW_OK');
	});

	it('should set custom message', () => {
		const res1 = httpStatus.setMessage(200, 'hello World');
		const res2 = httpStatus.setMessage(222, 'hello World');

		expect(res1).toBe(true);
		expect(res2).toBe(false);

		expect(httpStatus.getByCode(200)?.message).toBe('hello World');
	});

	it('should populate static groups', () => {
		expect(HttpStatus.Groups.success).toContain(200);
		expect(HttpStatus.Groups.clientError).toContain(404);
	});
});
