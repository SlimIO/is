/// <reference types="node" />

declare namespace is {
    // Primitives
    export function string(value: any): boolean;
    export function number(value: any): boolean;
    export function undefined(value: any): boolean;
    export function boolean(value: any): boolean;
    export function nullable(value: any): boolean;
    export function symbol(value: any): boolean;
    export function bigint(value: any): boolean;
    export function nullOrUndefined(value: any): boolean;
    export function primitive(value: any): boolean;

    // Functions
    export function func(value: any): boolean;
    export function generatorFunction(value: any): boolean;
    export function asyncFunction(value: any): boolean;
    export function boundFunction(value: any): boolean;

    // Iterable & Generator
    export function iterable(value: any): boolean;
    export function asyncIterable(value: any): boolean;
    export function generator(value: any): boolean;

    // Objects
    export function classObject(value: any): boolean;
    export function array(value: any): boolean;
    export function object(value: any): boolean;
    export function plainObject(value: any): boolean;
    export function set(value: any): boolean;
    export function map(value: any): boolean;
    export function set(value: any): boolean;
    export function weakMap(value: any): boolean;
    export function weakSet(value: any): boolean;
    export function error(value: any): boolean;
    export function date(value: any): boolean;
    export function regExp(value: any): boolean;

    // TypedArray & Buffers
    export function buffer(value: any): boolean;
    export function int8Array(value: any): boolean;
    export function uint8Array(value: any): boolean;
    export function uint8ClampedArray(value: any): boolean;
    export function int16Array(value: any): boolean;
    export function uint16Array(value: any): boolean;
    export function int32Array(value: any): boolean;
    export function uint32Array(value: any): boolean;
    export function float32Array(value: any): boolean;
    export function float64Array(value: any): boolean;
    export function arrayBuffer(value: any): boolean;
    export function sharedArrayBuffer(value: any): boolean;
    export function dataView(value: any): boolean;

    // Misc
    export function nan(value: any): boolean;
    export function integer(value: any): boolean;
    export function directInstanceOf(value: any): boolean;

    interface TypeName {
        readonly null: 'null',
        readonly boolean: 'boolean',
        readonly undefined: 'undefined',
        readonly string: 'string',
        readonly number: 'number',
        readonly symbol: 'symbol',
        readonly Function: 'Function',
        readonly GeneratorFunction: 'GeneratorFunction',
        readonly AsyncFunction: 'AsyncFunction',
        readonly Array: 'Array',
        readonly Buffer: 'Buffer',
        readonly Object: 'Object',
        readonly RegExp: 'RegExp',
        readonly Date: 'Date',
        readonly Error: 'Error',
        readonly Map: 'Map',
        readonly Set: 'Set',
        readonly WeakMap: 'WeakMap',
        readonly WeakSet: 'WeakSet',
        readonly Int8Array: 'Int8Array',
        readonly Uint8Array: 'Uint8Array',
        readonly Uint8ClampedArray: 'Uint8ClampedArray',
        readonly Int16Array: 'Int16Array',
        readonly Uint16Array: 'Uint16Array',
        readonly Int32Array: 'Int32Array',
        readonly Uint32Array: 'Uint32Array',
        readonly Float32Array: 'Float32Array',
        readonly Float64Array: 'Float64Array',
        readonly ArrayBuffer: 'ArrayBuffer',
        readonly SharedArrayBuffer: 'SharedArrayBuffer',
        readonly DataView: 'DataView',
        readonly Promise: 'Promise'
    }

    export const TypeName: TypeName;
}

export as namespace is;
export = is;
