console.log('Person:');

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// let firstName = person.firstName,
//     lastName = person.lastName;

let {firstName, lastName} = person;
console.log(firstName, lastName); // John Doe

let {firstName: first, lastName: last} = person;
console.log(first, last); // John Doe

let {firstName: f, lastName: l, age = 25} = {firstName: 'John', lastName: 'Doe'};
console.log(f, l, age); // John Doe 25

let {['first' + 'Name']: ff, lastName: ll} = {firstName: 'John', lastName: 'Doe'};
console.log(ff, ll); // John Doe

let name = 'Name';
let {[`first${name}`]: fff, lastName: lll} = {firstName: 'John', lastName: 'Doe'};
console.log(fff, lll); // John Doe


console.log('User:');

let user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'facebook text',
        twitter: 'twitter text'
    }
};

let {firstName: usF, lastName: usL, social: {facebook}, agee = 25} = user;
console.log(usF, usL, facebook, agee);

let {social: {facebook: fb}} = user;
console.log(fb);


// function post(url, config) {
//     config.data;
//     config.cache;
// }
//
// function post(url, {data, cache}) {
//     console.log(url, data, cache);
// }

function post(url, {data: {firstName, lastName}, cache}) {
    console.log(url, firstName, lastName, cache);
    // console.log(data);
    // Uncaught ReferenceError: data is not defined
}

let result = post('api/users', {data: user, cache: false});


function getUserInfo() {
    return {
        firstName: 'John',
        lastName: 'Doe',
        social: {
            facebook: 'facebook text',
            twitter: 'twitter text'
        }
    };
}

let { firstName: J, lastName: D, social: { twitter: T } } = getUserInfo();

console.log(J, D, T);