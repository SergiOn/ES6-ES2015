'use strict';

var _user;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var password = Symbol();

var user = (_user = {
    username: 'r2d2'
}, _defineProperty(_user, password, 'c3po'), _defineProperty(_user, 'password', 'some pass'), _user);

console.log(user); // Object {username: "r2d2", Symbol(password): "c3po"}
console.log(user.password); // undefined
console.log(user[Symbol('password')]); // undefined
console.log(Object.keys(user)); // ["username"]
console.log(Object.getOwnPropertyNames(user)); // ["username"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(password)]

// let password = user[Symbol.for('password')];
// console.log(password);  // c3po