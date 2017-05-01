"use strict";

// function* generate() {
//     console.log('start');
//     yield 10;
//     yield 20;
//     yield 30;
//     console.log('finish');
// }


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function generate() {
    var current = 1;
    console.log('start');
    return _defineProperty({}, Symbol.iterator, function () {
        return {
            next: function next() {
                var result = { value: undefined, done: true };

                if (current <= 3) {
                    result.value = current;
                    result.done = false;
                    current++;
                } else {
                    console.log('finish');
                }

                return result;
            }
        };
    });
}

var iterator = generate()[Symbol.iterator]();
console.dir(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());