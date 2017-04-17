// function declaration
function TaskDecl() {

}

// function expression
let TaskExpr = function TaskExprClosures() {

};


// class declaration
class TaskClassDecl {
    constructor() {

    }
}
let taskClassDecl = new TaskClassDecl();

// class expression
let TaskClassExpr = class {
    constructor() {

    }
};
let taskClassExpr = new TaskClassExpr();

// inheritance expression
let SubTaskExpr = class extends TaskClassExpr {

};
let subTaskExpr = new SubTaskExpr();