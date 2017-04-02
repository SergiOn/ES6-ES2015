class Task {
    constructor(status = Task.getDefaultTitle()) {
        console.log(status);
        this._done = false;

        this.count += 1;
        console.log(this.count);
    }

    static getDefaultTitle() {
        return 'start';
    }

    get done() {
        console.log(this._done);
    }

    set done(value) {
        this._done = value;
        console.log(this._done);
    }

    complete() {
        this.done = true;
        console.log(this._done);
    }
}

Task.count = 11;

let task = new Task();
let task2 = new Task('finish');

console.log(typeof Task);
console.log(typeof task);


task.done;
task.complete();
task.done;
task.done = false;
task.done;



