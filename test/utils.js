"use strict";

// Require Third-party Dependencies
const ava = require("ava");

// Require Internal Dependencies
const { isTypeOf, getObjectType, isObjectOfType } = require("../src/utils.js");

// Helper
const Objects = [{}, [], new Map(), new Set(), new WeakMap(), new WeakSet(), new Date(), /regex/];

ava("isTypeOf", function isString(assert) {
    const typeOfString = isTypeOf("string");
    const typeOfObject = isTypeOf("object");
    const typeOfFunction = isTypeOf("function");

    // eslint-disable-next-line no-empty-function
    /**
     * @function hello
     */
    function hello() {
        // do thing
    }
    assert.true(typeOfString("hello"));
    // eslint-disable-next-line no-new-wrappers
    assert.false(typeOfString(new String("hello")));
    assert.false(typeOfString(5));
    assert.false(typeOfString({}));
    assert.true(isTypeOf("number")(5));
    assert.true(isTypeOf("boolean")(true));
    assert.true(isTypeOf("symbol")(Symbol("hello")));
    assert.true(isTypeOf("symbol")(Symbol.iterator));
    assert.true(isTypeOf("undefined")(undefined));
    assert.true(isTypeOf("undefined")(void 0));
    // assert.is(isTypeOf("bigint")(50n), true);

    assert.true(typeOfFunction(hello));
    // eslint-disable-next-line no-empty-function
    assert.true(typeOfFunction(() => {}));
    assert.true(typeOfFunction(Math.sin));
    assert.true(typeOfFunction(class User {}));

    assert.true(typeOfObject(null));
    for (const obj of Objects) {
        assert.true(typeOfObject(obj));
    }
});

ava("isObjectOfType", function isObjectType(assert) {
    assert.true(isObjectOfType("Map")(new Map()));
    assert.false(isObjectOfType("Map")(5));
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
    /* eslint-disable no-new-wrappers */
    assert.is(getObjectType(new Boolean(1)), "Boolean");
    assert.is(getObjectType(new String("hello")), "String");
    assert.is(getObjectType(new Number(10)), "Number");
    /* eslint-enable no-new-wrappers */
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
