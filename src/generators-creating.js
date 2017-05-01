"use strict";

/*
function* generator() {}
function * generator2() {}
function *generator3() {}

let generator4 = function () {};

let obj = {
    *generator() {}
};

class SomeClass {
    *generator() {}
}
*/

/*
function* generator() {
    let result = yield 10;
    yield 20;
    console.log('Result1:', result);
    yield 30;
    console.log('Result2:', result);
    yield 40;
}

let iterator = generator();
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next(3));
console.log(iterator.next(4));
console.log(iterator.next(5));
*/


function* generator() {
    let arr = [yield 110, yield 120, yield 130];
    console.log('arr:', arr);
    console.log('arr:', arr[2]);
    yield 30;
    yield* [210, 220, 230];
    yield 40;
}

let iterator = generator();
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next(3));
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next(6));
console.log(iterator.next(7));
console.log(iterator.next(8));
console.log(iterator.next(9));
console.log(iterator.next(10));
