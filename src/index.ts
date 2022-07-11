export function isBrowser () {
  return typeof window !== "undefined";
}

export function isServer () {
  return !isBrowser();
}

export function isNode () {
  return typeof process !== "undefined";
}

export function isDeno () {
  // @ts-expect-error That's OK
  return typeof Deno !== "undefined";
}
