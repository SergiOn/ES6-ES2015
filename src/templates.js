function greet(name) {
    console.log(`Hello ${name}`)
}

greet('name');


function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('johb@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');


function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('5', '7');


let name = 'MrName';

console.log(upperName`Hello ${name} ${'55'}`);

function upperName(literals, ...values) {
    return literals[0].toUpperCase() + values;
}
