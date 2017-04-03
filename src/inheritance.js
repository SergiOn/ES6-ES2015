class Task {
    constructor(title) {
        this.title = title;
        this.done = false;
        console.log('Create Task');
    }
}

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Create SubTask');
    }
}

let task = new Task('Learn JavaScript');
let subTask = new SubTask('Learn ES6', task);

console.log(task);
console.log(subTask);

console.log(subTask instanceof SubTask);
console.log(subTask instanceof Task);

