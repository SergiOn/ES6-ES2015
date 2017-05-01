"use strict";

var _marked = [generate].map(regeneratorRuntime.mark);

function generate() {
    return regeneratorRuntime.wrap(function generate$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('start');
                    _context.next = 3;
                    return;

                case 3:
                    console.log('finish');

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iterator = generate();
console.dir(iterator);
iterator.next();