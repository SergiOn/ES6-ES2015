"use strict";

let add = (x, y) => x + y;

let square = x => x * x;

(() => {
   console.log('module');
})();

console.log(typeof add);
console.log(add(2, 5));
console.log(square(3));


let person = {
    name: 'Bob',
    greet: function() {
        window.setTimeout(() => {
            console.log('Hello, my name is', this.name);
            console.log(this);
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