export const HTTP_METHODS = /* @__PURE__ */ Object.freeze({
	GET: {
		description:
			'The GET method requests a representation of the specified resource.\nRequests using GET should only retrieve data and should not contain a request content.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET',
		specs: 'https://httpwg.org/specs/rfc9110.html#GET',
		isSafe: true,
		isIdempotent: true,
		isCacheable: true,
	},
	HEAD: {
		description:
			'The HEAD method asks for a response identical to a GET request, but without a response body.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/HEAD',
		specs: 'https://httpwg.org/specs/rfc9110.html#HEAD',
		isSafe: true,
		isIdempotent: true,
		isCacheable: true,
	},
	OPTIONS: {
		description:
			'The OPTIONS method describes the communication options for the target resource.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/OPTIONS',
		specs: 'https://httpwg.org/specs/rfc9110.html#OPTIONS',
		isSafe: true,
		isIdempotent: true,
		isCacheable: false,
	},
	TRACE: {
		description:
			'The TRACE method performs a message loop-back test along the path to the target resource.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/TRACE',
		specs: 'https://httpwg.org/specs/rfc9110.html#TRACE',
		isSafe: true,
		isIdempotent: true,
		isCacheable: false,
	},
	PUT: {
		description:
			'The PUT method replaces all current representations of the target resource with the request content.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PUT',
		specs: 'https://httpwg.org/specs/rfc9110.html#PUT',
		isSafe: false,
		isIdempotent: true,
		isCacheable: false,
	},
	DELETE: {
		description: 'The DELETE method deletes the specified resource.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/DELETE',
		specs: 'https://httpwg.org/specs/rfc9110.html#DELETE',
		isSafe: false,
		isIdempotent: true,
		isCacheable: false,
	},
	POST: {
		description:
			'The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST',
		specs: 'https://httpwg.org/specs/rfc9110.html#POST',
		isSafe: false,
		isIdempotent: false,
		isCacheable: 'conditional',
	},
	PATCH: {
		description: 'The PATCH method applies partial modifications to a resource.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PATCH',
		specs: 'https://httpwg.org/specs/rfc9110.html#PATCH',
		isSafe: false,
		isIdempotent: false,
		isCacheable: 'conditional',
	},
	CONNECT: {
		description:
			'The CONNECT method establishes a tunnel to the server identified by the target resource.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/CONNECT',
		specs: 'https://httpwg.org/specs/rfc9110.html#CONNECT',
		isSafe: false,
		isIdempotent: false,
		isCacheable: false,
	},
} satisfies Record<MethodNames, MethodDetails>);

export type MethodNames =
	| 'CONNECT'
	| 'DELETE'
	| 'GET'
	| 'HEAD'
	| 'OPTIONS'
	| 'PATCH'
	| 'POST'
	| 'PUT'
	| 'TRACE';

export type MethodDetails = {
	/** Description of the method name */
	description: string;
	/** Link to the MDN docs */
	link: string;
	/** Links to HTTP Semantics and Specifications */
	specs: string;
	/**
	 * Whether the method is safe.
	 * Meaning that the request does not alter the state of the server
	 */
	isSafe: boolean;
	/**
	 * Whether the method is idempotent.
	 * Meaning that an identical request can be made once or several times in a row with the same effect while leaving the server in the same state.
	 */
	isIdempotent: boolean;
	/**
	 * Whether the method is cacheable.
	 * Meaning that the response to the request can be stored by a cache and reused for subsequent requests.
	 */
	isCacheable: boolean | 'conditional';
};
