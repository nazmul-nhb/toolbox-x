import { Paginator } from 'src/utils/Paginator';
import { describe, expect, it } from 'vitest';

describe('Paginator class', () => {
	it('should calculate offset and total pages correctly', () => {
		const pager = new Paginator({ totalItems: 45, itemsPerPage: 10, currentPage: 2 });

		expect(pager.totalPages()).toBe(5);
		expect(pager.offset()).toBe(10);
		expect(pager.skipCount()).toBe(10);
		expect(pager.hasPrevPage()).toBe(true);
		expect(pager.hasNextPage()).toBe(true);
		expect(pager.isFirstPage()).toBe(false);
		expect(pager.isLastPage()).toBe(false);
	});

	it('should handle page boundaries and navigation', () => {
		const pager = new Paginator({ totalItems: 25, itemsPerPage: 10, currentPage: 3 });

		// currentPage 3 should be clamped if out of range, or we can use next/prev checks
		expect(pager.nextPage()).toBeNull();
		expect(pager.prevPage()).toBe(2);
	});

	it('should produce a page list for UI display', () => {
		const pager = new Paginator({ totalItems: 100, itemsPerPage: 10, currentPage: 5 });
		const list = pager.pageList({ edgeCount: 1, siblingCount: 1 });
		expect(list).toEqual([1, 4, 5, 6, 10]);
	});

	it('should initialize from meta using fromMeta', () => {
		const pager = Paginator.fromMeta({ totalItems: 50, itemsPerPage: 10, currentPage: 3 });
		expect(pager.valueOf()).toBeDefined();
		expect(pager.totalPages()).toBe(5);
	});
});
