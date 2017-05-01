'use strict';

console.log('Person:');

var person = {
    firstName: 'John',
    lastName: 'Doe'
};

// let firstName = person.firstName,
//     lastName = person.lastName;

var firstName = person.firstName,
    lastName = person.lastName;

console.log(firstName, lastName); // John Doe

var first = person.firstName,
    last = person.lastName;

console.log(first, last); // John Doe

var _firstName$lastName = { firstName: 'John', lastName: 'Doe' },
    f = _firstName$lastName.firstName,
    l = _firstName$lastName.lastName,
    _firstName$lastName$a = _firstName$lastName.age,
    age = _firstName$lastName$a === undefined ? 25 : _firstName$lastName$a;

console.log(f, l, age); // John Doe 25

var _firstName$lastName2 = { firstName: 'John', lastName: 'Doe' },
    ff = _firstName$lastName2['first' + 'Name'],
    ll = _firstName$lastName2.lastName;

console.log(ff, ll); // John Doe

var name = 'Name';
var _firstName$lastName3 = { firstName: 'John', lastName: 'Doe' },
    fff = _firstName$lastName3['first' + name],
    lll = _firstName$lastName3.lastName;

console.log(fff, lll); // John Doe


console.log('User:');

var user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'facebook text',
        twitter: 'twitter text'
    }
};

var usF = user.firstName,
    usL = user.lastName,
    facebook = user.social.facebook,
    _user$agee = user.agee,
    agee = _user$agee === undefined ? 25 : _user$agee;

console.log(usF, usL, facebook, agee);

var fb = user.social.facebook;

console.log(fb);

// function post(url, config) {
//     config.data;
//     config.cache;
// }
//
// function post(url, {data, cache}) {
//     console.log(url, data, cache);
// }

function post(url, _ref) {
    var _ref$data = _ref.data,
        firstName = _ref$data.firstName,
        lastName = _ref$data.lastName,
        cache = _ref.cache;

    console.log(url, firstName, lastName, cache);
    // console.log(data);
    // Uncaught ReferenceError: data is not defined
}

var result = post('api/users', { data: user, cache: false });

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

var _getUserInfo = getUserInfo(),
    J = _getUserInfo.firstName,
    D = _getUserInfo.lastName,
    T = _getUserInfo.social.twitter;

console.log(J, D, T);