"use strict";

// function* generate() {
//     console.log('start');
//     yield 10;
//     yield 20;
//     yield 30;
//     console.log('finish');
// }

// function generate() {
//     let current = 1;
//     console.log('start');
//     return {
//         [Symbol.iterator]() {
//             return {
//                 next() {
//                     let result = {value: undefined, done: true};
//
//                     if (current <= 3) {
//                         result.value = current;
//                         result.done = false;
//                         current++;
//                     } else {
//                         console.log('finish');
//                     }
//
//                     return result;
//                 }
//             }
//         }
//     }
// }

// let iterator = generate()[Symbol.iterator]();
// console.dir(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = [range].map(regeneratorRuntime.mark);

function range(start, end) {
    var current;
    return regeneratorRuntime.wrap(function range$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    current = start;

                case 1:
                    if (!(current <= end)) {
                        _context.next = 6;
                        break;
                    }

                    _context.next = 4;
                    return current++;

                case 4:
                    _context.next = 1;
                    break;

                case 6:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function range2(start, end) {
    var current = start;
    return _defineProperty({}, Symbol.iterator, function () {
        return {
            next: function next() {
                var result = { value: undefined, done: true };

                if (current <= end) {
                    result.value = current;
                    result.done = false;
                    current++;
                }
                return result;
            }
        };
    });
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = range2(1, 10)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _num = _step2.value;

        console.log(_num);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}