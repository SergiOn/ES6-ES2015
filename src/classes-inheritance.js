// es6
class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 2;
        // console.log('Create Task');
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
        // console.log(`Task "${this.title}" complete`);
    }
}

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        // console.log('Create SubTask');
    }

    complete() {
        super.complete();
        // this.done = true;
        // console.log(`SubTask "${this.title}" complete`);
    }
}

Task.count = 1;

let task = new Task('Learn JavaScript');
let subTask = new SubTask('Learn ES6', task);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);


// es5
function TaskES5(title) {
    this._title = title;
    this.done = false;
    Task.count += 2;
}

Object.defineProperty(TaskES5, 'title', {
    get: function () {
        return this._title;
    },
    set: function (value) {
        this._title = value;
    }
});

TaskES5.getDefaultTitle = function () {
    return 'Task';
};

TaskES5.prototype.complete = function () {
    this.done = true;
};


function SubTaskES5(title, parent) {
    TaskES5.call(this, title);
    this.parent = parent;
}
SubTaskES5.prototype = Object.create(TaskES5.prototype);
SubTaskES5.prototype.constructor = SubTaskES5;

TaskES5.count = 1;


let taskES5 = new TaskES5('Learn JavaScript');
let subTaskES5 = new SubTaskES5('Learn ES6', task);

console.log(taskES5);
console.log(subTaskES5);