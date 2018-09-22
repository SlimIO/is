// Require Internal Dependencies
const { getObjectType, isTypeOf, isObjectOfType } = require("./src/utils");

/**
 * @const Primitives
 * @desc All JavaScript Primitives
 * @type {Set<String>}
 */
const Primitives = new Set(["string", "number", "boolean", "undefined", "null", "symbol", "bigint"]);

/**
 * @const TypedArrayTypes
 * @desc All JavaScript Typed Array Types
 * @type {Set<String>}
 */
const TypedArrayTypes = new Set([
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array"
]);

/**
 * @const TypeName
 * @desc All (String) TypeName
 * @type {is.TypeName}
 */
const TypeName = {
	null: 'null',
	boolean: 'boolean',
	undefined: 'undefined',
	string: 'string',
	number: 'number',
	symbol: 'symbol',
	Function: 'Function',
	GeneratorFunction: 'GeneratorFunction',
	AsyncFunction: 'AsyncFunction',
	Observable: 'Observable',
	Array: 'Array',
	Buffer: 'Buffer',
	Object: 'Object',
	RegExp: 'RegExp',
	Date: 'Date',
	Error: 'Error',
	Map: 'Map',
	Set: 'Set',
	WeakMap: 'WeakMap',
	WeakSet: 'WeakSet',
	Int8Array: 'Int8Array',
	Uint8Array: 'Uint8Array',
	Uint8ClampedArray: 'Uint8ClampedArray',
	Int16Array: 'Int16Array',
	Uint16Array: 'Uint16Array',
	Int32Array: 'Int32Array',
	Uint32Array: 'Uint32Array',
	Float32Array: 'Float32Array',
	Float64Array: 'Float64Array',
	ArrayBuffer: 'ArrayBuffer',
	SharedArrayBuffer: 'SharedArrayBuffer',
	DataView: 'DataView',
	Promise: 'Promise',
	URL: 'URL'
}

// Export all methods
module.exports = {
    undefined: isTypeOf("undefined"),
    string: isTypeOf("string"),
    number: isTypeOf("number"),
    function: isTypeOf("function"),
    boolean: isTypeOf("boolean"),
    symbol: isTypeOf("symbol"),
    bigint: isTypeOf("bigint"),
    func: isTypeOf("function"),
    nullable: (value) => value === null,
    nullOrUndefined(value) {
        return this.null(value) || typeof value === "undefined";
    },
    array: Array.isArray,
    buffer: Buffer.isBuffer,
    primitive: (value) => Primitives.has(value),
    promise: isObjectOfType("Promise"),
    generatorFunction: isObjectOfType("GeneratorFunction"),
    asyncFunction: isObjectOfType("AsyncFunction"),
    boundFunction(value) {
        return this.function(value) && !value.hasOwnProperty("prototype");
    },
    regExp: isObjectOfType("RegExp"),
    date: isObjectOfType("Date"),
    error: isObjectOfType("Error"),
    map: isObjectOfType("Map"),
    set: isObjectOfType("Set"),
    weakMap: isObjectOfType("WeakMap"),
    weakSet: isObjectOfType("WeakSet"),
    int8Array: isObjectOfType("Int8Array"),
    uint8Array: isObjectOfType("Uint8Array"),
    uint8ClampedArray: isObjectOfType("uint8ClampedArray"),
    int16Array: isObjectOfType("int16Array"),
    uint16Array: isObjectOfType("uint16Array"),
    int32Array : isObjectOfType("int32Array"),
    uint32Array: isObjectOfType("uint32Array"),
    float32Array : isObjectOfType("float32Array"),
    float64Array: isObjectOfType("float64Array"),
    arrayBuffer: isObjectOfType("ArrayBuffer"),
    sharedArrayBuffer: isObjectOfType("SharedArrayBuffer"),
    dataView: isObjectOfType("DataView"),
    nan: (value) => Number.isNaN(value),
    integer: (value) => Number.isInteger(value),
    plainObject(value) {
        const prototype = Object.getPrototypeOf(value);

        return getObjectType(value) === "Object" && (prototype === null || prototype === Object.getPrototypeOf({}));
    },
    typedArray(value) {
        const objectType = getObjectType(value);

		return objectType === null ? false : TypedArrayTypes.has(objectType);
    },
    directInstanceOf(instance, focusClass) {
        return Object.getPrototypeOf(instance) === focusClass.prototype;
    },
    classObject(value) {
        return this.function(value) && value.toString().startsWith("class ");
    },
    object(value) {
        return !this.nullOrUndefined(value) && (this.function(value) || typeof value === "object");
    },
    iterable(value) {
        return !this.nullOrUndefined(value) && this.function(value[Symbol.iterator])
    },
    asyncIterable(value) {
        return !this.nullOrUndefined(value) && this.function(value[Symbol.asyncIterator])
    },
    generator(value) {
        return this.iterable(value) && this.function(value.next) && this.function(value.throw);
    },
    TypeName: Object.freeze(TypeName)
}
