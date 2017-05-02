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
        var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(5500 + request);
            }, 2000);
        });
    }

    var fetchJson = co.wrap(regeneratorRuntime.mark(function _callee() {
        var request, text;
        return regeneratorRuntime.wrap(function _callee$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.prev = 0;
                        _context7.next = 3;
                        return otherAsyncFunc();

                    case 3:
                        request = _context7.sent;
                        _context7.next = 6;
                        return otherAsyncFunc(request);

                    case 6:
                        text = _context7.sent;
                        return _context7.abrupt('return', JSON.parse(text + 80));

                    case 10:
                        _context7.prev = 10;
                        _context7.t0 = _context7['catch'](0);

                        console.log('ERROR: ' + _context7.t0.stack);

                    case 13:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee, this, [[0, 10]]);
    }));
    fetchJson(true).then(function (val) {
        console.log(val);
    });

    function fetchJsonAsync() {
        var request, text;
        return regeneratorRuntime.async(function fetchJsonAsync$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.prev = 0;
                        _context8.next = 3;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 3:
                        request = _context8.sent;
                        _context8.next = 6;
                        return regeneratorRuntime.awrap(otherAsyncFunc(request));

                    case 6:
                        text = _context8.sent;
                        return _context8.abrupt('return', JSON.parse(text + 1166));

                    case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8['catch'](0);

                        console.log('ERROR: ' + _context8.t0.stack);

                    case 13:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, null, this, [[0, 10]]);
    }
    fetchJsonAsync().then(function (val) {
        console.log(val);
    });
});

(function () {

    function asyncFunc() {
        return regeneratorRuntime.async(function asyncFunc$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        console.log('asyncFunc()'); // (A)
                        return _context9.abrupt('return', 'abc');

                    case 2:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, null, this);
    }
    asyncFunc().then(function (x) {
        return console.log('Resolved: ' + x);
    }); // (B)
    console.log('main'); // (C)

    // Output:
    // asyncFunc()
    // main
    // Resolved: abc
});

(function () {

    function otherAsyncFunc() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(5500);
            }, 2000);
        });
    }

    function asyncFunc() {
        return regeneratorRuntime.async(function asyncFunc$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        return _context10.abrupt('return', Promise.resolve(123));

                    case 1:
                    case 'end':
                        return _context10.stop();
                }
            }
        }, null, this);
    }
    asyncFunc().then(function (x) {
        return console.log(x);
    }); // 123

    function asyncFunc2() {
        return regeneratorRuntime.async(function asyncFunc2$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        return _context11.abrupt('return', Promise.reject(new Error('Problem!')));

                    case 1:
                    case 'end':
                        return _context11.stop();
                }
            }
        }, null, this);
    }
    //asyncFunc2()
    //.catch(err => console.error(err)); // Error: Problem!

    function asyncFunc3() {
        return regeneratorRuntime.async(function asyncFunc3$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        return _context12.abrupt('return', otherAsyncFunc());

                    case 1:
                    case 'end':
                        return _context12.stop();
                }
            }
        }, null, this);
    }
    asyncFunc3().then(function (x) {
        return console.log('asyncFunc3:', x);
    });

    function asyncFunc4() {
        return regeneratorRuntime.async(function asyncFunc4$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        _context13.next = 2;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 2:
                        return _context13.abrupt('return', _context13.sent);

                    case 3:
                    case 'end':
                        return _context13.stop();
                }
            }
        }, null, this);
    }
    asyncFunc4().then(function (x) {
        return console.log('asyncFunc4:', x);
    });
});

(function () {

    function otherAsyncFunc() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(5500);
            }, 2000);
        });
    }

    function asyncFunc() {
        var value, value2;
        return regeneratorRuntime.async(function asyncFunc$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        value = otherAsyncFunc(); // missing `await`!

                        value2 = otherAsyncFunc(); // missing `await`!

                        return _context14.abrupt('return', { value: value, value2: value2 });

                    case 3:
                    case 'end':
                        return _context14.stop();
                }
            }
        }, null, this);
    }
    asyncFunc().then(function (x) {
        return console.log('asyncFunc:', x);
    });

    function asyncFunc2() {
        var value, value2;
        return regeneratorRuntime.async(function asyncFunc2$(_context15) {
            while (1) {
                switch (_context15.prev = _context15.next) {
                    case 0:
                        _context15.next = 2;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 2:
                        value = _context15.sent;
                        _context15.next = 5;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 5:
                        value2 = _context15.sent;
                        return _context15.abrupt('return', { value: value, value2: value2 });

                    case 7:
                    case 'end':
                        return _context15.stop();
                }
            }
        }, null, this);
    }
    asyncFunc2().then(function (x) {
        return console.log('asyncFunc2:', x);
    });
});

(function () {

    function otherAsyncFunc() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(5500);
            }, 2000);
        });
    }

    function asyncFunc() {
        var value, value2;
        return regeneratorRuntime.async(function asyncFunc$(_context16) {
            while (1) {
                switch (_context16.prev = _context16.next) {
                    case 0:
                        value = otherAsyncFunc();

                        console.log('asyncFunc:value', value);
                        value2 = otherAsyncFunc();

                        console.log('asyncFunc:value2', value2);
                        return _context16.abrupt('return', 'asyncFunc');

                    case 5:
                    case 'end':
                        return _context16.stop();
                }
            }
        }, null, this);
    }
    asyncFunc().then(function (x) {
        return console.log('asyncFunc:', x);
    });

    function asyncFunc2() {
        var value, value2;
        return regeneratorRuntime.async(function asyncFunc2$(_context17) {
            while (1) {
                switch (_context17.prev = _context17.next) {
                    case 0:
                        _context17.next = 2;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 2:
                        value = _context17.sent;

                        console.log('asyncFunc2:value', value);
                        _context17.next = 6;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 6:
                        value2 = _context17.sent;

                        console.log('asyncFunc2:value2', value2);
                        return _context17.abrupt('return', 'asyncFunc2');

                    case 9:
                    case 'end':
                        return _context17.stop();
                }
            }
        }, null, this);
    }
    asyncFunc2().then(function (x) {
        return console.log('asyncFunc2:', x);
    });

    function asyncFunc3() {
        var value, value2;
        return regeneratorRuntime.async(function asyncFunc3$(_context18) {
            while (1) {
                switch (_context18.prev = _context18.next) {
                    case 0:
                        _context18.next = 2;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 2:
                        value = _context18.sent;
                        _context18.next = 5;
                        return regeneratorRuntime.awrap(otherAsyncFunc());

                    case 5:
                        value2 = _context18.sent;

                        console.log('asyncFunc3:value', value);
                        console.log('asyncFunc3:value2', value2);
                        return _context18.abrupt('return', 'asyncFunc3');

                    case 9:
                    case 'end':
                        return _context18.stop();
                }
            }
        }, null, this);
    }
    asyncFunc3().then(function (x) {
        return console.log('asyncFunc3:', x);
    });

    function asyncFunc4() {
        var _ref5, _ref6, result1, result2;

        return regeneratorRuntime.async(function asyncFunc4$(_context19) {
            while (1) {
                switch (_context19.prev = _context19.next) {
                    case 0:
                        _context19.next = 2;
                        return regeneratorRuntime.awrap(Promise.all([otherAsyncFunc(), otherAsyncFunc()]));

                    case 2:
                        _ref5 = _context19.sent;
                        _ref6 = _slicedToArray(_ref5, 2);
                        result1 = _ref6[0];
                        result2 = _ref6[1];

                        console.log([result1, result2]);
                        return _context19.abrupt('return', [result1, result2]);

                    case 8:
                    case 'end':
                        return _context19.stop();
                }
            }
        }, null, this);
    }
    asyncFunc4().then(function (x) {
        return console.log('asyncFunc4:', x);
    });
})();