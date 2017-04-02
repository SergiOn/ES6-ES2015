let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
    firstName: firstName,
    lastName: lastName,
    email: email
};

let personES6 = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    }
};

// console.log(person);
// console.log(personES6);

// personES6.sayHello();


let property = 'name';

let anotherPerson = {
    [property]: 'User'
};

// console.log(anotherPerson);

function create(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [`__${property}`]: value,
        [property.toUpperCase()]: value,
        [`get${property}`]() {
            return this[property];
        }
    }
}

// console.log(create('person', 'bodybilder'));

person = {
    firstName: firstName,
    lastName: lastName,
    email: email
};

Object.defineProperty(person, 'fullName', {
    get: function () {
        return `${this.firstName} ${this.lastName}`
    }
});

console.log(person.fullName);



personES6 = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(name) {
        this.firstName = name;
    }
};

console.log(personES6.fullName);
console.log(personES6.fullName = 'Black');
console.log(personES6.fullName);
