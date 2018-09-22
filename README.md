# is
SlimIO is (JavaScript Primitives &amp; Objects type checker)

Package heavily inspired by `@sindresorhus/is`. This package aims to work on NodeJS (no browser support).

## Why

- Only focus on javascript type checking (without any other fancy feature).
- Come with a well writed TypeScript definition.
- Documented and tested (100% Coverage).
- Focus on NodeJS support.
- Maintained by the SlimIO team (Not by incompetent beginners).
- Is concerned about being stable

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

## API
