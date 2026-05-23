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
	createControlledFormData as convertIntoFormData,
	createControlledFormData,
	createControlledFormData as createFormData,
} from 'src/form/convert';
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
export { parseFormData, serializeForm } from 'src/form/transform';
