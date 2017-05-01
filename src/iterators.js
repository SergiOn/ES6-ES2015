"use strict";

// let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// for (let xman of xmen) {
//     console.log(xman);
// }


// let iterator = xmen[Symbol.iterator]();
// let next = iterator.next();
//
// while (!next.done) {
//     console.log(next.value);
//     next = iterator.next();
// }


/*
let randomGenerator = {
    generate() {
        return this[Symbol.iterator]();
    },

    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 10;
                count += 1;

                return { value, done };
            }
        }
    }
};


let random = randomGenerator.generate();
console.log(random.next().value);
*/


class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        let tasks = this.tasks;
        let index = 0;

        return {
            next() {
                let result = { value: undefined, done: true };

                if (index < tasks.length) {
                    result.value = tasks[index];
                    result.done = false;
                    index++;
                }

                return result;
            }
        }
    }
}

let taskList = new TaskList();
taskList.addTasks('1ts', '2ts', '3ts');

for (let task of taskList) {
    console.log(task);
}
