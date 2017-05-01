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


let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id < 100 ? id++ : undefined;
                let done = !value;

                return { value, done };
            }
        }
    }
};


for (let id of idGenerator) {
    console.log(id);
}
