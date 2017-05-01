"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {

    function asyncFunc() {
        return regeneratorRuntime.async(function asyncFunc$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', 123);

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, null, this);
    }

    asyncFunc().then(function (x) {
        return console.log(x);
    });
});

(function () {

    function asyncFunc() {
        return regeneratorRuntime.async(function asyncFunc$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        throw new Error('Problem!');

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, null, this);
    }

    asyncFunc().catch(function (err) {
        return console.log(err);
    });
});

(function () {
    function otherAsyncFunc() {
        return new Promise(function (res) {
            setTimeout(function () {
                res(5500);
            }, 2000);
        });
    }

    function asyncFunc() {
        var result;
        return regeneratorRuntime.async(function asyncFunc$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 2:
                        result = _context3.sent;

                        console.log(result);
                        return _context3.abrupt('return', String(result));

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, null, this);
    }
    asyncFunc().then(function (x) {
        return console.log(x);
    });

    // Equivalent to:
    function asyncFunc2() {
        return otherAsyncFunc().then(function (result) {
            console.log(result);
        });
    }
    asyncFunc2();
});

(function () {

    function otherAsyncFunc() {
        return new Promise(function (res) {
            setTimeout(function () {
                res(5500);
            }, 2000);
        });
    }

    function asyncFunc() {
        var result1, result2;
        return regeneratorRuntime.async(function asyncFunc$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 2:
                        result1 = _context4.sent;

                        console.log(result1);
                        _context4.next = 6;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 6:
                        result2 = _context4.sent;

                        console.log(result2);

                    case 8:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, null, this);
    }
    // asyncFunc();

    // Equivalent to:
    function promiseFunc() {
        otherAsyncFunc().then(function (result1) {
            console.log(result1);
            return otherAsyncFunc();
        }).then(function (result2) {
            console.log(result2);
        });
    }
    promiseFunc();
});

(function () {

    function otherAsyncFunc() {
        return new Promise(function (res) {
            setTimeout(function () {
                res(5500);
            }, 2000);
        });
    }

    function asyncFunc() {
        var _ref, _ref2, result1, result2;

        return regeneratorRuntime.async(function asyncFunc$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return regeneratorRuntime.awrap(Promise.all([otherAsyncFunc(), otherAsyncFunc()]));

                    case 2:
                        _ref = _context5.sent;
                        _ref2 = _slicedToArray(_ref, 2);
                        result1 = _ref2[0];
                        result2 = _ref2[1];

                        console.log(result1, result2);

                    case 7:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, null, this);
    }
    // asyncFunc();

    // Equivalent to:
    function promiseFunc() {
        Promise.all([otherAsyncFunc(), otherAsyncFunc()]).then(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                result1 = _ref4[0],
                result2 = _ref4[1];

            console.log(result1, result2);
        });
    }
    promiseFunc();
});

(function () {

    function otherAsyncFunc() {
        return new Promise(function (res, rej) {
            setTimeout(function () {
                rej(new Error('Error'));
            }, 2000);
        });
    }

    function asyncFunc() {
        return regeneratorRuntime.async(function asyncFunc$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.prev = 0;
                        _context6.t0 = console;
                        _context6.next = 4;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 4:
                        _context6.t1 = _context6.sent;

                        _context6.t0.log.call(_context6.t0, _context6.t1);

                        _context6.next = 11;
                        break;

                    case 8:
                        _context6.prev = 8;
                        _context6.t2 = _context6['catch'](0);

                        console.warn(_context6.t2);

                    case 11:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, null, this, [[0, 8]]);
    }
    asyncFunc();

    // Equivalent to:
    function promiseFunc() {
        otherAsyncFunc().catch(function (err) {
            console.error(err);
        });
    }
    promiseFunc();
});

(function () {

    function otherAsyncFunc() {
        return new Promise(function (res, rej) {
            setTimeout(function () {
                rej(new Error('Error'));
            }, 2000);
        });
    }

    function asyncFunc() {
        return regeneratorRuntime.async(function asyncFunc$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, null, this);
    }
    asyncFunc();

    // Equivalent to:
    function promiseFunc() {}
    promiseFunc();
})();