'use strict';

var symbol = Symbol.for('name');
var symbol2 = Symbol.for('name');
console.log(symbol);
console.log(symbol2);
console.log(symbol === symbol2);

var name = Symbol.keyFor(symbol);
console.log(name);