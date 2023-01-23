// These methods are inspired of the work done on @sindresorhus/is: https://github.com/sindresorhus/is

/**
 * @namespace utils
 * @description utils methods
 */

/**
 * @function getObjectType
 * @memberof utils#
 * @description Known the name of a given JavaScript Object
 * @param {*} value any Object value
 * @returns {string | null}
 *
 * @example
 * getObjectType({}); // Object
 * getObjectType(new Map()); // Map
 * getObjectType(new Set()); // Set
 */
function getObjectType(value) {
  // Object.prototype.toString.call will return object like [object Map], [object Set] etc
  // Slice from index 8 to value.length - 1
  return Object.prototype.toString.call(value).slice(8, -1);
}

/**
 * @function isTypeOf
 * @memberof utils#
 * @description Known if a value if equal to the given Primitive type
 * @param {!string} type Primitive type
 * @returns {is.typeOf}
 *
 * @example
 * const isTypeString = isTypeOf("string");
 * isTypeString("hey"); // true
 * isTypeString(5); // false
 */
function isTypeOf(type) {
  // eslint-disable-next-line valid-typeof
  return (value) => typeof value === type;
}

/**
 * @function isObjectOfType
 * @memberof utils#
 * @description Known if an Object name if equal to the closure Object name
 * @param {!string} type JavaScript Object
 * @returns {is.typeOf}
 *
 * @example
 * const isTypeMap = isObjectOfType("Map");
 * isTypeMap(new Map()); // true
 * isTypeMap({}); // false
 */
function isObjectOfType(type) {
  return (value) => getObjectType(value) === type;
}

module.exports = {
  getObjectType,
  isTypeOf,
  isObjectOfType
};

