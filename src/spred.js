let staticLanguage = ['C', 'C++', 'Java'];
let dynamicLanguage = ['JavaScript', 'PHP', 'Ruby'];

let language = [...staticLanguage, 'C#', ...dynamicLanguage, 'Python'];

console.log(language);


function add(x, y, z) {
    console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers);

function spred(...n) {
    console.log(n);
}

spred(15, 20, 25, 30);