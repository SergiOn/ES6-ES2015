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

var _marked = [generatorArray, generator, generatorReturn, generatorThrow, generatorTryCatch].map(regeneratorRuntime.mark);

function generatorArray() {
    return regeneratorRuntime.wrap(function generatorArray$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return [510, 520, 530];

                case 2:
                    return _context.delegateYield([510, 520, 530], 't0', 3);

                case 3:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function generator() {
    var arr;
    return regeneratorRuntime.wrap(function generator$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return 110;

                case 2:
                    _context2.t0 = _context2.sent;
                    _context2.next = 5;
                    return 120;

                case 5:
                    _context2.t1 = _context2.sent;
                    _context2.next = 8;
                    return 130;

                case 8:
                    _context2.t2 = _context2.sent;
                    arr = [_context2.t0, _context2.t1, _context2.t2];

                    console.log('arr:', arr);
                    console.log('arr:', arr[2]);
                    _context2.next = 14;
                    return 30;

                case 14:
                    _context2.next = 16;
                    return [210, 220, 230];

                case 16:
                    return _context2.delegateYield([210, 220, 230], 't3', 17);

                case 17:
                    _context2.next = 19;
                    return 40;

                case 19:
                    _context2.next = 21;
                    return generatorArray();

                case 21:
                    return _context2.delegateYield(generatorArray(), 't4', 22);

                case 22:
                    _context2.next = 24;
                    return 50;

                case 24:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

var iterator = generator();
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

function generatorReturn() {
    return regeneratorRuntime.wrap(function generatorReturn$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return 1010;

                case 2:
                    _context3.next = 4;
                    return 1020;

                case 4:
                    _context3.next = 6;
                    return 1030;

                case 6:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked[2], this);
}

var iteratorReturn = generatorReturn();
console.log(iteratorReturn.next(1));
console.log(iteratorReturn.return(2));
console.log(iteratorReturn.next(3));
console.log(iteratorReturn.next(4));

console.log('generatorThrow');

function generatorThrow() {
    return regeneratorRuntime.wrap(function generatorThrow$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.next = 2;
                    return 2010;

                case 2:
                    _context4.next = 4;
                    return 2020;

                case 4:
                    _context4.next = 6;
                    return 2030;

                case 6:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked[3], this);
}

var iteratorThrow = generatorThrow();
console.log(iteratorThrow.next(1));
// console.log(iteratorThrow.throw('error'));
console.log(iteratorThrow.throw(new Error('error')));
console.log(iteratorThrow.next(3));
console.log(iteratorThrow.next(4));

console.log('generatorTryCatch');
// need comment: console.log(iteratorThrow.throw(new Error('error'))); :103

function generatorTryCatch() {
    return regeneratorRuntime.wrap(function generatorTryCatch$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return 3010;

                case 3:
                    _context5.next = 5;
                    return 3020;

                case 5:
                    _context5.next = 7;
                    return 3030;

                case 7:
                    _context5.next = 12;
                    break;

                case 9:
                    _context5.prev = 9;
                    _context5.t0 = _context5['catch'](0);

                    console.error(_context5.t0);

                case 12:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked[4], this, [[0, 9]]);
}

var iteratorTryCatch = generatorTryCatch();
console.log(iteratorTryCatch.next(1));
console.log(iteratorTryCatch.throw(new Error('error')));
console.log(iteratorTryCatch.next(3));
console.log(iteratorTryCatch.next(4));