'use strict';

function applyForVisa(documents, resolve, reject) {
    console.log('Processing of an application');
    setTimeout(function () {
        var visa = {};
        Math.random() > 0.5 ? resolve(visa) : reject('The visa is denied: lack of documents');
    }, 2000);
}

function bookHotel(documents, resolve, reject) {}

function buyTickets(documents, resolve, reject) {}

applyForVisa({}, function (visa) {
    console.info('Visa received');
    bookHotel(visa, function (reservation) {
        buyTickets(reservation, function (reservation) {}, function (reason) {
            console.error(reason);
        });
    }, function (reason) {
        console.error(reason);
    });
}, function (reason) {
    console.error(reason);
});