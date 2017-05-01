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

var _marked = [generator].map(regeneratorRuntime.mark);

function generator() {
    var arr;
    return regeneratorRuntime.wrap(function generator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 110;

                case 2:
                    _context.t0 = _context.sent;
                    _context.next = 5;
                    return 120;

                case 5:
                    _context.t1 = _context.sent;
                    _context.next = 8;
                    return 130;

                case 8:
                    _context.t2 = _context.sent;
                    arr = [_context.t0, _context.t1, _context.t2];

                    console.log('arr:', arr);
                    console.log('arr:', arr[2]);
                    _context.next = 14;
                    return 30;

                case 14:
                    _context.next = 16;
                    return 40;

                case 16:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iterator = generator();
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next(3));
console.log(iterator.next(4));
console.log(iterator.next(5));