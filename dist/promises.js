'use strict';

function applyForVisa(documents) {
    console.log('Processing of an application');

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var visa = { visa: true };
            Math.random() > 0.4 ? resolve(visa) : reject('The visa is denied: lack of documents');
        }, 2000);
    });
    return promise;
}

function bookHotel(documents) {
    console.log(documents);
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.info('book hotel');
            resolve('hotel');
        }, 2000);
    });
}

function buyTickets(documents) {
    console.log(documents);
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.info('buy tickets');
            resolve('tickets');
        }, 2000);
    });
}

applyForVisa({}).then(function (visa) {
    console.info('Visa received');
    return visa;
}).then(bookHotel).then(buyTickets).then(function (res) {
    return console.log(res);
}).catch(function (error) {
    return console.error(error);
});