// let language = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// let js = language[0];
// let php = language[1];
// let py = language[2];
// let rb = language[3];

// let js, php, py, rb;
// [js, php, py, rb] = language;

// let [js, php, py, rb] = language;

let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

console.log(js, php, py, rb);


let scores = [3, 4, 5];

let [low, mid, high, higher] = scores;
console.log(low, mid, high, higher); // 3 4 5 undefined

let [low2, , high2] = scores;
console.log(low2, high2); // 3 5

let [low3, ...rest] = scores;
console.log(low3, rest); // 3 [4, 5]

let [low4, mid4, high4, higher4 = 50] = scores;
console.log(low4, mid4, high4, higher4); // 3 4 5 50


scores = [3, 4, [5, 6]];

let [low5, mid5, high5] = scores;
console.log(low5, mid5, high5); // 3 4 [5, 6]

let [low6, mid6, [high6, highter6]] = scores;
console.log(low6, mid6, high6, highter6); // 3 4 5 6


function computerScore([low, mid]) {
    console.log(low, mid);
}
computerScore([3, 4]); // 3 4

function getScores() {
    return [3, 4, 5];
}

let scor = getScores();
console.log(scor); // [3, 4, 5]

let [l, m, h] = getScores();
console.log(l, m, h); // 3 4 5


let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('Yes is', yes); // Yes is No
console.log('No is', no); // No is Yes