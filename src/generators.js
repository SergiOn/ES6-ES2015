"use strict";

// function* generate() {
//     console.log('start');
//     yield 10;
//     yield 20;
//     yield 30;
//     console.log('finish');
// }


function generate() {
    let current = 1;
    console.log('start');
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = {value: undefined, done: true};

                    if (current <= 3) {
                        result.value = current;
                        result.done = false;
                        current++;
                    } else {
                        console.log('finish');
                    }

                    return result;
                }
            }
        }
    }
}

let iterator = generate()[Symbol.iterator]();
console.dir(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
