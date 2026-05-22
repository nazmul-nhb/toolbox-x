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
} from './dom/query';

export {
	getFromLocalStorage,
	getFromSessionStorage,
	removeFromLocalStorage,
	removeFromSessionStorage,
	saveToLocalStorage,
	saveToSessionStorage,
} from './dom/storage';

export { copyToClipboard, smoothScrollTo, toggleFullScreen } from './dom/utils';

// ! Form Utilities
export {
	createControlledFormData as convertIntoFormData,
	createControlledFormData,
	createControlledFormData as createFormData,
} from './form/convert';
export {
	isCustomFile,
	isCustomFileArray,
	isFileArray,
	isFileList,
	isFileOrBlob,
	isFileUpload,
	isOriginFileObj,
	isValidFormData,
} from './form/guards';
export { parseFormData, serializeForm } from './form/transform';
