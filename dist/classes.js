'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        console.log(status);
        this._done = false;

        this.count += 1;
        console.log(this.count);
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log(this._done);
        }
    }, {
        key: 'done',
        get: function get() {
            console.log(this._done);
        },
        set: function set(value) {
            this._done = value;
            console.log(this._done);
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'start';
        }
    }]);

    return Task;
}();

Task.count = 11;

var task = new Task();
var task2 = new Task('finish');

console.log(typeof Task === 'undefined' ? 'undefined' : _typeof(Task));
console.log(typeof task === 'undefined' ? 'undefined' : _typeof(task));

task.done;
task.complete();
task.done;
task.done = false;
task.done;