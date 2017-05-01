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

var _marked = [generator].map(regeneratorRuntime.mark);

function generator() {
    var result;
    return regeneratorRuntime.wrap(function generator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return;

                case 2:
                    result = _context.sent;
                    _context.next = 5;
                    return;

                case 5:
                    console.log('Result1:', result);
                    _context.next = 8;
                    return;

                case 8:
                    console.log('Result2:', result);
                    _context.next = 11;
                    return;

                case 11:
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