// Require Third-party Dependencies
const ava = require("ava");

// Require Internal Dependencies
const { isTypeOf } = require("../src/utils.js");

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
