let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
    console.log(xman);
}

console.log(typeof xmen[Symbol.iterator]);
console.log(xmen[Symbol.iterator]());
