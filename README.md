# SlimIO IS
NodeJS JavaScript Type checker (Primitives, Objects, etc..)

Package heavily inspired by `@sindresorhus/is`. This package aims to work on NodeJS (no browser support).

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @slimio/is
# or
$ yarn add @slimio/is
```

## Usage example

```js
const is = require("@slimio/is");

console.log(is.string("hello")); // true;
console.log(is.map(new Map())); // true
```

The `is` variable is an Object with a lot of methods (check the below API section).

## API

All methods can be called as follow: `is.{methodName}`. All methods return a `boolean` value.

### Primitives

| method | example |
| --- | --- |
| string | `is.string("hello")` |
| number | `is.number(10)` |
| boolean | `is.boolean(true)` |
| bool | `is.bool(false)` |
| symbol | `is.symbol(Symbol("foo"))` |
| undefined | `is.undefined(undefined)` |
| bigint | `is.bigint(50n)` |
| nullValue | `is.nullValue(null)` |
| nullOrUndefined | `is.nullOrUndefined(null | undefined)` |
| primitive | `is.primitive("hello")` |

> is.null is not available because of a name restriction.

### Objects

| method | example |
| --- | --- |
| promise | `is.promise(new Promise())` |
| classObject | `is.classObject(new Class{})` |
| array | `is.array([])` |
| object | `is.nullValue({})` |
| plainObject | `is.plainObject(Object.create(null))` |
| set | `is.set(new Set())` |
| map | `is.map(new Map())` |
| weakMap | `is.weakMap(new WeakMap())` |
| weakSet | `is.weakSet(new WeakSet())` |
| error | `is.error(new Error("ooppss!"))` |
| date | `is.date(new Date())` |
| regExp | `is.regExp(/^hello world$/)` |
| buffer | `is.buffer(Buffer.from("hello"))` |

> is.class is not available because of a name restriction.

### Functions & Iterators

| method | example |
| --- | --- |
| func | `is.func(new Function())` |
| generatorFunction | N/A |
| asyncFunction | `is.asyncFunction(async function() {})` |
| boundFunction | `is.boundFunction((function(){}).bind(null))` |
| iterable | `is.iterable([1, 2])` |
| asyncIterable | N/A |
| generator | N/A |

> is.function has been reduced to is.func because of a name restriction.

### Typed Arrays

| method | example |
| --- | --- |
| typedArray | `is.typedArray(new int8Array())` |
| int8Array | `is.int8Array(new int8Array())` |
| uint8Array | `is.uint8Array(new uint8Array())` |
| uint8ClampedArray | `is.uint8ClampedArray(new uint8ClampedArray())` |
| int16Array | `is.int16Array(new int16Array())` |
| uint16Array | `is.uint16Array(new uint16Array())` |
| int32Array | `is.int32Array(new int32Array())` |
| uint32Array | `is.uint32Array(new uint32Array())` |
| float32Array | `is.float32Array(new float32Array())` |
| float64Array | `is.float64Array(new float64Array())` |
| arrayBuffer | `is.arrayBuffer(new ArrayBuffer())` |
| sharedArrayBuffer | `is.sharedArrayBuffer(new SharedArrayBuffer())` |
| dataView | `is.dataView(new DataView(new ArrayBuffer(8)))` |

### Misc

| method | example |
| --- | --- |
| nan | `is.nan(Number("booom!"))` |
| integer | `is.integer(5 / 10)` |
| directInstanceOf | `is.directInstanceOf(Object, {})` |
| truthy | `is.truthy(true)` |
| falsy | `is.falsy("")` |

## Why

- Only focus on javascript type checking (without any other fancy feature).
- Come with a well writed TypeScript definition.
- Documented and tested (100% Coverage).
- Focus on NodeJS support.
- Maintained by the SlimIO team.
- Is concerned about being stable.

## Licence

MIT
