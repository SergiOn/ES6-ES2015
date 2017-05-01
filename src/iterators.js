let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
    console.log(xman);
}

console.log(typeof xmen[Symbol.iterator]);

let iterator = xmen[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
