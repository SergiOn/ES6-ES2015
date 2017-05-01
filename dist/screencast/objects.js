'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email
};

var personES6 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
    }
};

// console.log(person);
// console.log(personES6);

// personES6.sayHello();


var property = 'name';

var anotherPerson = _defineProperty({}, property, 'User');

// console.log(anotherPerson);

function create(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, '__' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function undefined() {
        return this[property];
    }), _ref;
}

// console.log(create('person', 'bodybilder'));

person = {
    firstName: firstName,
    lastName: lastName,
    email: email
};

Object.defineProperty(person, 'fullName', {
    get: function get() {
        return this.firstName + ' ' + this.lastName;
    }
});

console.log(person.fullName);

personES6 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(name) {
        this.firstName = name;
    }
};

console.log(personES6.fullName);
console.log(personES6.fullName = 'Black');
console.log(personES6.fullName);