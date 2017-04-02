'use strict';

var browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (var browser in browsers) {
    console.log(browser);
}

for (var _browser in browsers) {
    console.log(browsers[_browser]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _browser2 = _step.value;

        console.log(_browser2);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log(browsers);