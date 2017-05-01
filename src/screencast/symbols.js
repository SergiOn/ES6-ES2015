let password = Symbol();

let user = {
    username: 'r2d2',
    [password]: 'c3po',
    password: 'some pass'
};

console.log(user);  // Object {username: "r2d2", Symbol(password): "c3po"}
console.log(user.password);  // undefined
console.log(user[Symbol('password')]);  // undefined
console.log(Object.keys(user));  // ["username"]
console.log(Object.getOwnPropertyNames(user));  // ["username"]
console.log(Object.getOwnPropertySymbols(user));  // [Symbol(password)]

// let password = user[Symbol.for('password')];
// console.log(password);  // c3po


let object = {
    iterator: 0,
    [Symbol.iterator]() {}
};