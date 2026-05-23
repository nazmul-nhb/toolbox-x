import { isObjectWithKeys } from 'src/guards';
import { isString } from 'src/guards/primitives';
import type { CustomFile, FileUpload, OriginFileObj } from 'src/types/form';

/**
 * * Checks if a given value is a valid {@link FormData} & it's not empty.
 * - **N.B.** Be cautious when using this in SSR (Server-Side Rendering) environments (such as `Next.js` Server Components), as it may not work as expected.
 * @param value - The value to check.
 * @returns `true` if the value is a valid {@link FormData} and not empty, otherwise `false`.
 */
export function isValidFormData(value: unknown): value is FormData {
	if (!(value instanceof FormData)) return false;

	if ('entries' in value) {
		if (typeof value.entries !== 'function') {
			console.warn('`FormData.entries()` is not supported!');
			return false;
		}

		return Array.from(value.entries())?.length > 0;
	}

	return false;
}

/**
 * * Checks if a given value is an {@link OriginFileObj}.
 * - **N.B.** Be cautious when using this in SSR (Server-Side Rendering) environments (such as `Next.js` Server Components), as it may not work as expected.
 * @param value - The value to check.
 * @returns `true` if the value is a valid {@link OriginFileObj}, otherwise `false`.
 */
export function isOriginFileObj(value: unknown): value is OriginFileObj {
	return isObjectWithKeys(value, ['uid']) && isString(value.uid);
}

/**
 * * Checks if a given value is a {@link CustomFile}.
 * - **N.B.** Be cautious when using this in SSR (Server-Side Rendering) environments (such as `Next.js` Server Components), as it may not work as expected.
 * @param value - The value to check.
 * @returns `true` if the value is a valid {@link CustomFile}, otherwise `false`.
 */
export function isCustomFile(value: unknown): value is CustomFile {
	return isObjectWithKeys(value, ['originFileObj']) && isOriginFileObj(value.originFileObj);
}

/**
 * * Checks if a given value is an array of {@link CustomFile} objects.
 * - **N.B.** Be cautious when using this in SSR (Server-Side Rendering) environments (such as `Next.js` Server Components), as it may not work as expected.
 * @param value - The value to check.
 * @returns `true` if the value is a valid `CustomFile[]`, otherwise `false`.
 */
export function isCustomFileArray(value: unknown): value is CustomFile[] {
	return Array.isArray(value) && value?.length > 0 && value?.every(isCustomFile);
}

/**
 * * Checks if a given value is an array of `File/Blob` objects.
 * - **N.B.** Be cautious when using this in SSR (Server-Side Rendering) environments (such as `Next.js` Server Components), as it may not work as expected.
 * @param value - The value to check.
 * @returns `true` if the value is a valid `File[]` or `Blob[]`, otherwise `false`.
 */
export function isFileArray(value: unknown): value is File[] | Blob[] {
	return Array.isArray(value) && value?.length > 0 && value?.every(isFileOrBlob);
}

/**
 * * Checks if a given value is an instance of {@link FileList}.
 * @param value - The value to check.
 * @returns `true` if the value is a valid {@link FileList}, otherwise `false`.
 */
export function isFileList(value: unknown): value is FileList {
	return typeof FileList !== 'undefined' && value instanceof FileList;
}

/**
 * * Checks if a given value is an instance of {@link File} or {@link Blob}.
 * @param value - The value to check.
 * @returns `true` if the value is an instance of {@link File} or {@link Blob}, otherwise `false`.
 */
export function isFileOrBlob(value: unknown): value is File | Blob {
	return (
		(typeof File !== 'undefined' && value instanceof File) ||
		(typeof Blob !== 'undefined' && value instanceof Blob)
	);
}

/**
 * * Checks if a given value is a {@link FileUpload} object.
 * @param value - The value to check.
 * @returns `true` if the value is a valid {@link FileUpload}, otherwise `false`.
 */
export function isFileUpload(value: unknown): value is FileUpload {
	return (
		(isObjectWithKeys(value, ['file']) &&
			(isCustomFile(value.file) || isFileOrBlob(value.file))) ||
		(isObjectWithKeys(value, ['fileList']) && isCustomFileArray(value.fileList))
	);
}
