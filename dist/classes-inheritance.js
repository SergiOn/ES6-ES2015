'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// es6
var Task = function () {
    function Task(title) {
        _classCallCheck(this, Task);

        this._title = title;
        this.done = false;
        Task.count += 2;
        // console.log('Create Task');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            // console.log(`Task "${this.title}" complete`);
        }
    }, {
        key: 'title',
        get: function get() {
            return this._title;
        },
        set: function set(value) {
            this._title = value;
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Task';
        }
    }]);

    return Task;
}();

var SubTask = function (_Task) {
    _inherits(SubTask, _Task);

    function SubTask(title, parent) {
        _classCallCheck(this, SubTask);

        var _this = _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this, title));

        _this.parent = parent;
        // console.log('Create SubTask');
        return _this;
    }

    _createClass(SubTask, [{
        key: 'complete',
        value: function complete() {
            _get(SubTask.prototype.__proto__ || Object.getPrototypeOf(SubTask.prototype), 'complete', this).call(this);
            // this.done = true;
            // console.log(`SubTask "${this.title}" complete`);
        }
    }]);

    return SubTask;
}(Task);

Task.count = 1;

var task = new Task('Learn JavaScript');
var subTask = new SubTask('Learn ES6', task);

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
    get: function get() {
        return this._title;
    },
    set: function set(value) {
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

var taskES5 = new TaskES5('Learn JavaScript');
var subTaskES5 = new SubTaskES5('Learn ES6', task);

console.log(taskES5);
console.log(subTaskES5);