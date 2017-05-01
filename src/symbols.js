let symbol = Symbol.for('name');
let symbol2 = Symbol.for('name');
console.log(symbol);
console.log(symbol2);
console.log(symbol === symbol2);

let name = Symbol.keyFor(symbol);
console.log(name);
