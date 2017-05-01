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


function* generatorArray() {
    yield [510, 520, 530];
    yield* [510, 520, 530];
}

function* generator() {
    let arr = [yield 110, yield 120, yield 130];
    console.log('arr:', arr);
    console.log('arr:', arr[2]);
    yield 30;
    yield [210, 220, 230];
    yield* [210, 220, 230];
    yield 40;
    yield generatorArray();
    yield* generatorArray();
    yield 50;
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
console.log(iterator.next(11));
console.log(iterator.next(12));
console.log(iterator.next(13));
console.log(iterator.next(14));
console.log(iterator.next(15));
console.log(iterator.next(16));
console.log(iterator.next(17));



console.log('generatorReturn');

function* generatorReturn() {
    yield 1010;
    yield 1020;
    yield 1030; // skip
}

let iteratorReturn = generatorReturn();
console.log(iteratorReturn.next(1));
console.log(iteratorReturn.return(2));
console.log(iteratorReturn.next(3));
console.log(iteratorReturn.next(4));


console.log('generatorThrow');

function* generatorThrow() {
    yield 2010;
    yield 2020; // skip with error
    yield 2030;
}

let iteratorThrow = generatorThrow();
console.log(iteratorThrow.next(1));
// console.log(iteratorThrow.throw('error'));
console.log(iteratorThrow.throw(new Error('error')));
console.log(iteratorThrow.next(3));
console.log(iteratorThrow.next(4));


console.log('generatorTryCatch');
// need comment: console.log(iteratorThrow.throw(new Error('error'))); :103

function* generatorTryCatch() {
    try {
        yield 3010;
        yield 3020; // doesn't skip with error, but return undefined
        yield 3030;
    } catch (e) {
        console.error(e);
    }
}

let iteratorTryCatch = generatorTryCatch();
console.log(iteratorTryCatch.next(1));
console.log(iteratorTryCatch.throw(new Error('error')));
console.log(iteratorTryCatch.next(3));
console.log(iteratorTryCatch.next(4));