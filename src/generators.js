"use strict";

function* generate() {
    console.log('start');
    yield;
    console.log('finish');
}

let iterator = generate();
console.dir(iterator);
iterator.next();
