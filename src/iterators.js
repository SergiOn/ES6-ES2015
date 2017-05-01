let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// for (let xman of xmen) {
//     console.log(xman);
// }


let iterator = xmen[Symbol.iterator]();
let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}
