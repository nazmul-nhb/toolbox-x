export {
	generateQueryParams as createQueryParams,
	generateQueryParams as formatQueryParams,
	generateQueryParams,
	getQueryParams,
	parseQueryString as getQueryStringAsObject,
	parseQueryString,
	parseQueryString as queryStringToObject,
	parseQueryStringLiteral as literalQueryStringToObject,
	parseQueryStringLiteral,
	updateQueryParam,
} from 'src/dom/query';
export {
	getFromLocalStorage,
	getFromSessionStorage,
	removeFromLocalStorage,
	removeFromSessionStorage,
	saveToLocalStorage,
	saveToSessionStorage,
} from 'src/dom/storage';
export { copyToClipboard, smoothScrollTo, toggleFullScreen } from 'src/dom/utils';

// ! Form Utilities
export {
	createFormData,
	createFormData as convertToFormData,
} from 'src/form/convert';
// ! Guards
export {
	isCustomFile,
	isCustomFileArray,
	isFileArray,
	isFileList,
	isFileOrBlob,
	isFileUpload,
	isOriginFileObj,
	isValidFormData,
} from 'src/form/guards';
// ! Transform
export { parseFormData, serializeForm } from 'src/form/transform';
