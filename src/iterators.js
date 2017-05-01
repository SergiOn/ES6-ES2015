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


let randomGenerator = {
    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 10;
                count += 1;

                return { value, done };
            }
        }
    }
};


for (let id of randomGenerator) {
    console.log(id);
}
