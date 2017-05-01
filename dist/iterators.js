"use strict";

// let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// for (let xman of xmen) {
//     console.log(xman);
// }


// let iterator = xmen[Symbol.iterator]();
// let next = iterator.next();
//
// while (!next.done) {
//     console.log(next.value);
//     next = iterator.next();
// }


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var randomGenerator = _defineProperty({
    generate: function generate() {
        return this[Symbol.iterator]();
    }
}, Symbol.iterator, function () {
    var count = 0;
    return {
        next: function next() {
            var value = Math.ceil(Math.random() * 100);
            var done = count > 10;
            count += 1;

            return { value: value, done: done };
        }
    };
});

var random = randomGenerator[Symbol.iterator]();
console.log(random.next().value);