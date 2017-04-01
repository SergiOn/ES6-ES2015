// function greet(greeting, name) {
//     console.log(`${greeting} ${name}`);
// }

function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');


// function sum(...values) {
//     let sum = 0;
//
//     values.forEach((value) => {
//         sum += value;
//     });
//
//     console.log(sum);
// }


function sum(...values) {
    console.log(values.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    }));
}

sum(5, 7, 2, 10);
