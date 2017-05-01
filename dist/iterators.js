'use strict';

var xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// for (let xman of xmen) {
//     console.log(xman);
// }


var iterator = xmen[Symbol.iterator]();
var next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}