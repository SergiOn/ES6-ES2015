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
});

(function () {

    function otherAsyncFunc(data) {
        return regeneratorRuntime.async(function otherAsyncFunc$(_context20) {
            while (1) {
                switch (_context20.prev = _context20.next) {
                    case 0:
                        return _context20.abrupt('return', new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                resolve(data * 100);
                            }, 2000);
                        }));

                    case 1:
                    case 'end':
                        return _context20.stop();
                }
            }
        }, null, this);
    }

    function asyncFunc(urls) {
        var _this = this;

        return regeneratorRuntime.async(function asyncFunc$(_context22) {
            while (1) {
                switch (_context22.prev = _context22.next) {
                    case 0:
                        return _context22.abrupt('return', urls.map(function _callee2(url) {
                            var content;
                            return regeneratorRuntime.async(function _callee2$(_context21) {
                                while (1) {
                                    switch (_context21.prev = _context21.next) {
                                        case 0:
                                            _context21.next = 2;
                                            return regeneratorRuntime.awrap(otherAsyncFunc(url));

                                        case 2:
                                            content = _context21.sent;
                                            return _context21.abrupt('return', content);

                                        case 4:
                                        case 'end':
                                            return _context21.stop();
                                    }
                                }
                            }, null, _this);
                        }));

                    case 1:
                    case 'end':
                        return _context22.stop();
                }
            }
        }, null, this);
    }
    asyncFunc([1, 2, 3, 4, 5]).then(function (x) {
        return console.log('asyncFunc:', x);
    });

    function asyncFunc2(urls) {
        var _this2 = this;

        var promiseArray;
        return regeneratorRuntime.async(function asyncFunc2$(_context24) {
            while (1) {
                switch (_context24.prev = _context24.next) {
                    case 0:
                        promiseArray = urls.map(function _callee3(url) {
                            return regeneratorRuntime.async(function _callee3$(_context23) {
                                while (1) {
                                    switch (_context23.prev = _context23.next) {
                                        case 0:
                                            _context23.next = 2;
                                            return regeneratorRuntime.awrap(otherAsyncFunc(url));

                                        case 2:
                                            return _context23.abrupt('return', _context23.sent);

                                        case 3:
                                        case 'end':
                                            return _context23.stop();
                                    }
                                }
                            }, null, _this2);
                        });
                        _context24.next = 3;
                        return regeneratorRuntime.awrap(Promise.all(promiseArray));

                    case 3:
                        return _context24.abrupt('return', _context24.sent);

                    case 4:
                    case 'end':
                        return _context24.stop();
                }
            }
        }, null, this);
    }
    asyncFunc2([1, 2, 3, 4, 5]).then(function (x) {
        return console.log('asyncFunc2:', x);
    });

    function asyncFunc3(urls) {
        var promiseArray;
        return regeneratorRuntime.async(function asyncFunc3$(_context25) {
            while (1) {
                switch (_context25.prev = _context25.next) {
                    case 0:
                        promiseArray = urls.map(function (url) {
                            return otherAsyncFunc(url);
                        });
                        _context25.next = 3;
                        return regeneratorRuntime.awrap(Promise.all(promiseArray));

                    case 3:
                        return _context25.abrupt('return', _context25.sent);

                    case 4:
                    case 'end':
                        return _context25.stop();
                }
            }
        }, null, this);
    }
    asyncFunc3([1, 2, 3, 4, 5]).then(function (x) {
        return console.log('asyncFunc3:', x);
    });

    function asyncFunc4(urls) {
        var promiseArray;
        return regeneratorRuntime.async(function asyncFunc4$(_context26) {
            while (1) {
                switch (_context26.prev = _context26.next) {
                    case 0:
                        _context26.next = 2;
                        return regeneratorRuntime.awrap(urls.map(function (url) {
                            return otherAsyncFunc(url);
                        }));

                    case 2:
                        promiseArray = _context26.sent;
                        return _context26.abrupt('return', Promise.all(promiseArray));

                    case 4:
                    case 'end':
                        return _context26.stop();
                }
            }
        }, null, this);
    }
    asyncFunc4([1, 2, 3, 4, 5]).then(function (x) {
        return console.log('asyncFunc4:', x);
    });
});

(function () {

    function otherAsyncFunc(data) {
        return regeneratorRuntime.async(function otherAsyncFunc$(_context27) {
            while (1) {
                switch (_context27.prev = _context27.next) {
                    case 0:
                        return _context27.abrupt('return', new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                resolve(data * 100);
                            }, 2000);
                        }));

                    case 1:
                    case 'end':
                        return _context27.stop();
                }
            }
        }, null, this);
    }

    function asyncFunc(urls) {
        var _this3 = this;

        return regeneratorRuntime.async(function asyncFunc$(_context29) {
            while (1) {
                switch (_context29.prev = _context29.next) {
                    case 0:
                        urls.forEach(function _callee4(url) {
                            var content;
                            return regeneratorRuntime.async(function _callee4$(_context28) {
                                while (1) {
                                    switch (_context28.prev = _context28.next) {
                                        case 0:
                                            _context28.next = 2;
                                            return regeneratorRuntime.awrap(otherAsyncFunc(url));

                                        case 2:
                                            content = _context28.sent;

                                            console.log('asyncFunc:', content);

                                        case 4:
                                        case 'end':
                                            return _context28.stop();
                                    }
                                }
                            }, null, _this3);
                        });

                    case 1:
                    case 'end':
                        return _context29.stop();
                }
            }
        }, null, this);
    }
    asyncFunc([1, 2, 3, 4, 5]).then(function (x) {
        return console.log('asyncFunc:', x);
    });

    function asyncFunc2(urls) {
        var _this4 = this;

        return regeneratorRuntime.async(function asyncFunc2$(_context31) {
            while (1) {
                switch (_context31.prev = _context31.next) {
                    case 0:
                        urls.forEach(function _callee5(url) {
                            var content;
                            return regeneratorRuntime.async(function _callee5$(_context30) {
                                while (1) {
                                    switch (_context30.prev = _context30.next) {
                                        case 0:
                                            content = otherAsyncFunc(url);

                                            console.log('asyncFunc2:', content); // pending

                                        case 2:
                                        case 'end':
                                            return _context30.stop();
                                    }
                                }
                            }, null, _this4);
                        });

                    case 1:
                    case 'end':
                        return _context31.stop();
                }
            }
        }, null, this);
    }
    asyncFunc2([1, 2, 3, 4, 5]);

    function asyncFunc3(urls) {
        return regeneratorRuntime.async(function asyncFunc3$(_context32) {
            while (1) {
                switch (_context32.prev = _context32.next) {
                    case 0:
                        urls.forEach(function (url) {
                            var content = otherAsyncFunc(url);
                            console.log('asyncFunc3:', content); // pending
                        });

                    case 1:
                    case 'end':
                        return _context32.stop();
                }
            }
        }, null, this);
    }
    asyncFunc3([1, 2, 3, 4, 5]);

    function asyncFunc4(urls) {
        return regeneratorRuntime.async(function asyncFunc4$(_context33) {
            while (1) {
                switch (_context33.prev = _context33.next) {
                    case 0:
                        urls.forEach(function (url) {
                            // const content = await otherAsyncFunc(url);
                            // console.log('asyncFunc4:', content); // ^ Uncaught SyntaxError: Unexpected identifier
                        });

                    case 1:
                    case 'end':
                        return _context33.stop();
                }
            }
        }, null, this);
    }
    asyncFunc4([1, 2, 3, 4, 5]);

    function logContent(urls) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, url, content;

        return regeneratorRuntime.async(function logContent$(_context34) {
            while (1) {
                switch (_context34.prev = _context34.next) {
                    case 0:
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context34.prev = 3;
                        _iterator = urls[Symbol.iterator]();

                    case 5:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context34.next = 14;
                            break;
                        }

                        url = _step.value;
                        _context34.next = 9;
                        return regeneratorRuntime.awrap(otherAsyncFunc(url));

                    case 9:
                        content = _context34.sent;

                        console.log('logContent:', content); // steps

                    case 11:
                        _iteratorNormalCompletion = true;
                        _context34.next = 5;
                        break;

                    case 14:
                        _context34.next = 20;
                        break;

                    case 16:
                        _context34.prev = 16;
                        _context34.t0 = _context34['catch'](3);
                        _didIteratorError = true;
                        _iteratorError = _context34.t0;

                    case 20:
                        _context34.prev = 20;
                        _context34.prev = 21;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 23:
                        _context34.prev = 23;

                        if (!_didIteratorError) {
                            _context34.next = 26;
                            break;
                        }

                        throw _iteratorError;

                    case 26:
                        return _context34.finish(23);

                    case 27:
                        return _context34.finish(20);

                    case 28:
                    case 'end':
                        return _context34.stop();
                }
            }
        }, null, this, [[3, 16, 20, 28], [21,, 23, 27]]);
    }
    logContent([1, 2, 3, 4, 5]);

    function logContent2(urls) {
        var _this5 = this;

        return regeneratorRuntime.async(function logContent2$(_context36) {
            while (1) {
                switch (_context36.prev = _context36.next) {
                    case 0:
                        _context36.next = 2;
                        return regeneratorRuntime.awrap(Promise.all(urls.map(function _callee6(url) {
                            var content;
                            return regeneratorRuntime.async(function _callee6$(_context35) {
                                while (1) {
                                    switch (_context35.prev = _context35.next) {
                                        case 0:
                                            _context35.next = 2;
                                            return regeneratorRuntime.awrap(otherAsyncFunc(url));

                                        case 2:
                                            content = _context35.sent;

                                            console.log('logContent2:', content);

                                        case 4:
                                        case 'end':
                                            return _context35.stop();
                                    }
                                }
                            }, null, _this5);
                        })));

                    case 2:
                    case 'end':
                        return _context36.stop();
                }
            }
        }, null, this);
    }
    logContent2([1, 2, 3, 4, 5]);
})();