/**
 * @namespace utils
 * @desc utils methods
 */

/**
 * @function getObjectType
 * @memberof utils#
 * @desc Known the name of a given JavaScript Object
 * @param {*} value any Object value
 * @returns {String | null}
 *
 * @example
 * getObjectType({}); // Object
 * getObjectType(new Map()); // Map
 * getObjectType(new Set()); // Set
 */
function getObjectType(value) {
    const objectName = Object.prototype.toString.call(value).slice(8, -1);

    return objectName ? objectName : null;
}

/**
 * @function isTypeOf
 * @memberof utils#
 * @desc Known if a value if equal to the given Primitive type
 * @param {!String} type Primitive type
 * @returns {Boolean}
 *
 * @example
 * const isTypeString = isTypeOf("string");
 * isTypeString("hey"); // true
 * isTypeString(5); // false
 */
function isTypeOf(type) {
    return (value) => typeof value === type;
}

/**
 * @function isObjectOfType
 * @memberof utils#
 * @desc Known if an Object name if equal to the closure Object name
 * @param {!String} type JavaScript Object
 * @returns {Boolean}
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

