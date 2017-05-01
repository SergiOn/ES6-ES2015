"use strict";

(function () {

    function asyncFunc() {
        return regeneratorRuntime.async(function asyncFunc$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", 123);

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, null, this);
    }

    asyncFunc().then(function (x) {
        return console.log(x);
    });
})();