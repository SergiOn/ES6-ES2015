"use strict";

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