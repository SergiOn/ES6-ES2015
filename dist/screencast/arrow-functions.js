"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var add = function add(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};

(function () {
    console.log('module');
})();

console.log(typeof add === 'undefined' ? 'undefined' : _typeof(add));
console.log(add(2, 5));
console.log(square(3));

var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        window.setTimeout(function () {
            console.log('Hello, my name is', _this.name);
            console.log(_this);
        }, 2000);
    }
};
person.greet();

// let Task = () => console.log('task');
// let task = new Task();
/*
 Uncaught TypeError: Task is not a constructor
 at <anonymous>:2:12
*/

/*
Don't work in arrow functions

.bind()
.call()
.apply()

*/