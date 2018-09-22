// Require Third-party Dependencies
const ava = require("ava");

// Require Internal Dependencies
const { isTypeOf, getObjectType, isObjectOfType } = require("../src/utils.js");

ava("isTypeOf", function isString(assert) {
    // eslint-disable-next-line no-empty-function
    function hello() {}
    assert.is(isTypeOf("string")("hello"), true);
    assert.is(isTypeOf("string")(new String("hello")), false);
    assert.is(isTypeOf("string")(5), false);
    assert.is(isTypeOf("string")({}), false);
    assert.is(isTypeOf("number")(5), true);
    assert.is(isTypeOf("boolean")(true), true);
    assert.is(isTypeOf("symbol")(Symbol("hello")), true);
    assert.is(isTypeOf("undefined")(undefined), true);
    assert.is(isTypeOf("undefined")(void 0), true);
    // assert.is(isTypeOf("bigint")(50n), true);
    assert.is(isTypeOf("function")(hello), true);
    // eslint-disable-next-line no-empty-function
    assert.is(isTypeOf("function")(() => {}), true);
});

ava("isObjectOfType", function isObjectType(assert) {
    assert.is(isObjectOfType("Map")(new Map()), true);
    assert.is(isObjectOfType("Map")(5), false);
});

ava("getObjectType", function objectType(assert) {
    assert.is(getObjectType(new Map()), "Map");
    assert.is(getObjectType(new Set()), "Set");
    assert.is(getObjectType(new WeakMap()), "WeakMap");
    assert.is(getObjectType(new WeakSet()), "WeakSet");
    assert.is(getObjectType([]), "Array");
    assert.is(getObjectType({}), "Object");
    assert.is(getObjectType(new Date()), "Date");
    assert.is(getObjectType(/^hello/), "RegExp");
    assert.is(getObjectType(NaN), "Number");
    assert.is(getObjectType(Infinity), "Number");
    assert.is(getObjectType(undefined), "Undefined");
    assert.is(getObjectType(null), "Null");
    assert.is(getObjectType(new Boolean(1)), "Boolean");
    assert.is(getObjectType(new String("hello")), "String");
    assert.is(getObjectType(new Number(10)), "Number");
    assert.is(getObjectType(new Error()), "Error");
    assert.is(getObjectType(new TypeError()), "Error");
    assert.is(getObjectType(new ReferenceError()), "Error");
    assert.is(getObjectType(new RangeError()), "Error");
    assert.is(getObjectType(new SyntaxError()), "Error");
    assert.is(getObjectType(new EvalError()), "Error");
    assert.is(getObjectType(Math), "Math");
    assert.is(getObjectType(JSON), "JSON");
    assert.is(getObjectType(new Promise((resolve) => resolve())), "Promise");
    assert.is(getObjectType(new Array()), "Array");
    assert.is(getObjectType(new Int8Array()), "Int8Array");
    assert.is(getObjectType(Reflect), "Object");
});
