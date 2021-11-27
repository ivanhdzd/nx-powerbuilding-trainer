/**
 * Parse string with boolean value to boolean.
 * @param {string} input to try to parse as boolean.
 * @returns {boolean | undefined} Boolean value if string is `true` of `false`, otherwise returns `undefined.`
 */
export function string2Boolean(input: string): boolean | undefined {
  if (input.toLowerCase() === 'false') return false;
  if (input.toLowerCase() === 'true') return true;
  return undefined;
}
