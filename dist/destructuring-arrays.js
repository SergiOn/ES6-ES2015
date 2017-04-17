'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// let language = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// let js = language[0];
// let php = language[1];
// let py = language[2];
// let rb = language[3];

// let js, php, py, rb;
// [js, php, py, rb] = language;

// let [js, php, py, rb] = language;

var js = 'JavaScript',
    php = 'PHP',
    py = 'Python',
    rb = 'Ruby';


console.log(js, php, py, rb);

var scores = [3, 4, 5];

var _scores = scores,
    _scores2 = _slicedToArray(_scores, 4),
    low = _scores2[0],
    mid = _scores2[1],
    high = _scores2[2],
    higher = _scores2[3];

console.log(low, mid, high, higher); // 3 4 5 undefined

var _scores3 = scores,
    _scores4 = _slicedToArray(_scores3, 3),
    low2 = _scores4[0],
    high2 = _scores4[2];

console.log(low2, high2); // 3 5

var _scores5 = scores,
    _scores6 = _toArray(_scores5),
    low3 = _scores6[0],
    rest = _scores6.slice(1);

console.log(low3, rest); // 3 [4, 5]

var _scores7 = scores,
    _scores8 = _slicedToArray(_scores7, 4),
    low4 = _scores8[0],
    mid4 = _scores8[1],
    high4 = _scores8[2],
    _scores8$ = _scores8[3],
    higher4 = _scores8$ === undefined ? 50 : _scores8$;

console.log(low4, mid4, high4, higher4); // 3 4 5 50


scores = [3, 4, [5, 6]];

var _scores9 = scores,
    _scores10 = _slicedToArray(_scores9, 3),
    low5 = _scores10[0],
    mid5 = _scores10[1],
    high5 = _scores10[2];

console.log(low5, mid5, high5); // 3 4 [5, 6]

var _scores11 = scores,
    _scores12 = _slicedToArray(_scores11, 3),
    low6 = _scores12[0],
    mid6 = _scores12[1],
    _scores12$ = _slicedToArray(_scores12[2], 2),
    high6 = _scores12$[0],
    highter6 = _scores12$[1];

console.log(low6, mid6, high6, highter6); // 3 4 5 6


function computerScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    console.log(low, mid);
}
computerScore([3, 4]); // 3 4

function getScores() {
    return [3, 4, 5];
}

var scor = getScores();
console.log(scor); // [3, 4, 5]

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    l = _getScores2[0],
    m = _getScores2[1],
    h = _getScores2[2];

console.log(l, m, h); // 3 4 5


var yes = 'Yes';
var no = 'No';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];

console.log('Yes is', yes); // Yes is No
console.log('No is', no); // No is Yes