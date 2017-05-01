'use strict';

var staticLanguage = ['C', 'C++', 'Java'];
var dynamicLanguage = ['JavaScript', 'PHP', 'Ruby'];

var language = [].concat(staticLanguage, ['C#'], dynamicLanguage, ['Python']);

console.log(language);

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);

function spread() {
    for (var _len = arguments.length, n = Array(_len), _key = 0; _key < _len; _key++) {
        n[_key] = arguments[_key];
    }

    console.log(n);
}

spred(15, 20, 25, 30);