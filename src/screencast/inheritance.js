class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 2;
        console.log('Create Task');
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return 'Task';
    }

    complete() {
        this.done = true;
        console.log(`Task "${this.title}" complete`);
    }
}

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Create SubTask');
    }

    complete() {
        super.complete();
        // this.done = true;
        console.log(`SubTask "${this.title}" complete`);
    }
}

Task.count = 1;

let task = new Task('Learn JavaScript');
let subTask = new SubTask('Learn ES6', task);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);
console.log(SubTask.count);

console.log(subTask instanceof SubTask);
console.log(subTask instanceof Task);

console.log(SubTask.getDefaultTitle());