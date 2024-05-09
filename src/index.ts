export const IS_BROWSER =
	typeof window !== "undefined" && typeof document !== "undefined";

export const IS_SERVER = !IS_BROWSER;

// @ts-expect-error Deno
export const IS_DENO = typeof Deno !== "undefined";

// Some frameworks, like nuxt3, will polyfill the global process object.
export const IS_NODE = typeof process !== "undefined" && !IS_DENO;

export const IS_ELECTRON =
	process.versions.electron && !(process as any).defaultApp;
