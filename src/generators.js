"use strict";

function* generate() {
    console.log('start');
    yield 10;
    yield 20;
    yield 30;
    console.log('finish');
}

let iterator = generate();
console.dir(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
