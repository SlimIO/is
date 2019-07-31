"use strict";

// Require Third-party Dependencies
const ava = require("ava");

// Require Package
const is = require("..");

ava("is.number of NaN", function isNull(assert) {
    assert.false(is.number(NaN));
    assert.true(is.number(10));
    assert.false(is.number("10"));
});

ava("is.nullValue", function isNull(assert) {
    assert.true(is.nullValue(null));
    assert.false(is.nullValue(undefined));
    assert.false(is.nullValue(""));
});

ava("is.nullOrUndefined", function nullOrUndefined(assert) {
    assert.true(is.nullOrUndefined(null));
    assert.true(is.nullOrUndefined(undefined));
    assert.true(is.nullOrUndefined(void 0));
    assert.false(is.nullOrUndefined(""));
    assert.false(is.nullOrUndefined({}));
});

ava("is.boundFonction", function boundFunction(assert) {
    /**
     * @function fn
     */
    function fn() {
        // Do nothing
    }
    assert.false(is.boundFunction(fn));
    assert.true(is.boundFunction(fn.bind(null)));
});

ava("is.truthy", function truthy(assert) {
    assert.true(is.truthy("unicorn"));
    assert.true(is.truthy("🦄"));
    assert.true(is.truthy(new Set()));
    assert.true(is.truthy(Symbol("hey")));
    assert.true(is.truthy(true));
});

ava("is.falsy", function falsy(assert) {
    assert.true(is.falsy(false));
    assert.true(is.falsy(0));
    assert.true(is.falsy(""));
    assert.true(is.falsy(null));
    assert.true(is.falsy(undefined));
    assert.true(is.falsy(NaN));
});

ava("is.plainObject", function plainObject(assert) {
    assert.true(is.plainObject({ hello: "world" }));
    assert.true(is.plainObject(Object.create(null)));
    // eslint-disable-next-line no-new-object
    assert.true(is.plainObject(new Object()));
    assert.false(is.plainObject(null));
    assert.false(is.plainObject(undefined));
    assert.false(is.plainObject([]));
    assert.false(is.plainObject(5));
});

ava("is.object", function object(assert) {
    assert.true(is.object({}));
    assert.true(is.object(Object.create(null)));
    assert.false(is.object(null));
});

ava("is.classObject", function classObject(assert) {
    /**
     * @function cPrototype
     */
    function cPrototype() {
        // Do nothing
    }

    // eslint-disable-next-line
    class User {}
    // eslint-disable-next-line
    class Admin extends User {}

    const uT = new User();
    assert.true(is.classObject(User));
    assert.true(is.classObject(Admin));
    assert.false(is.classObject(uT));
    // eslint-disable-next-line new-cap
    assert.false(is.classObject(new cPrototype()));
    assert.false(is.classObject({}));
    assert.false(is.classObject([]));
});

ava("is.iterable", function iterable(assert) {
    const customIterable = {};
    customIterable[Symbol.iterator] = function* custom() {
        yield 1;
        yield 2;
        yield 3;
    };

    /**
     * @generator generator
     */
    function* generator() {
        yield 1;
        yield 2;
    }
    assert.true(is.iterable([]));
    assert.true(is.iterable(""));
    assert.true(is.iterable(new Uint8Array()));
    assert.true(is.iterable(new Map()));
    assert.true(is.iterable(new Set()));
    assert.true(is.iterable(customIterable));
    assert.true(is.iterable(generator()));
    assert.false(is.iterable({}));
    assert.false(is.iterable(null));
});

// TODO: Test not complete enought
ava("is.asyncIterable", function asyncIterable(assert) {
    assert.true(is.asyncIterable({
        [Symbol.asyncIterator]: () => {
            // do nothing
        }
    }));
});

// TODO: Test not complete enought
ava("is.generator", function generator(assert) {
    /**
     * @generator
     */
    function* generator() {
        yield 1;
        yield 2;
    }
    assert.true(is.generator(generator()));
    assert.false(is.generator({}));
});

ava("is.directInstanceOf", function directInstanceOf(assert) {
    const error = new Error();
    assert.true(is.directInstanceOf(error, Error));
    assert.true(is.directInstanceOf({}, Object));
    assert.true(is.directInstanceOf([], Array));
});

ava("is.primitive", function primitive(assert) {
    assert.true(is.primitive("hello"));
    assert.true(is.primitive(5));
    assert.true(is.primitive(null));
    assert.true(is.primitive(true));
    assert.true(is.primitive(Symbol("yo")));
    assert.true(is.primitive(undefined));
    assert.true(is.primitive(void 0));
    assert.false(is.primitive({}));
    assert.false(is.primitive([]));
});

ava("is.nan", function nan(assert) {
    assert.true(is.nan(NaN));
    assert.true(is.nan(Number("lol")));
    assert.false(is.nan("hello"));
});

ava("is.integer", function integer(assert) {
    assert.true(is.integer(10));
    assert.false(is.integer(0.5));
});

ava("is.emptyString", function integer(assert) {
    assert.true(is.emptyString(""));
    assert.false(is.emptyString(0.5));
    assert.false(is.emptyString("hello"));
});

ava("is.typedArray", function typedArray(assert) {
    const typedArrays = [
        new Int8Array(0),
        new Uint8Array(0),
        new Uint8ClampedArray(0),
        new Uint16Array(0),
        new Int32Array(0),
        new Uint32Array(0),
        new Float32Array(0),
        new Float64Array(0)
    ];
    for (const type of typedArrays) {
        assert.true(is.typedArray(type));
    }

    assert.false(is.typedArray({}));
    assert.false(is.typedArray([]));
});

ava("is.utils.getObjectType", function integer(assert) {
    assert.is(is.utils.getObjectType("hello"), "String");
    assert.is(is.utils.getObjectType(new Map()), "Map");
});
