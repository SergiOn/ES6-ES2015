"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function declaration
function TaskDecl() {}

// function expression
var TaskExpr = function TaskExprClosures() {};

// class declaration

var TaskClassDecl = function TaskClassDecl() {
    _classCallCheck(this, TaskClassDecl);
};

var taskClassDecl = new TaskClassDecl();

// class expression
var TaskClassExpr = function TaskClassExpr() {
    _classCallCheck(this, TaskClassExpr);
};
var taskClassExpr = new TaskClassExpr();

// inheritance expression
var SubTaskExpr = function (_TaskClassExpr) {
    _inherits(SubTaskExpr, _TaskClassExpr);

    function SubTaskExpr() {
        _classCallCheck(this, SubTaskExpr);

        return _possibleConstructorReturn(this, (SubTaskExpr.__proto__ || Object.getPrototypeOf(SubTaskExpr)).apply(this, arguments));
    }

    return SubTaskExpr;
}(TaskClassExpr);
var subTaskExpr = new SubTaskExpr();