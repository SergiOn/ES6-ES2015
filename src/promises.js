function applyForVisa(documents) {
    console.log('Processing of an application');

    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let visa = {visa: true};
            Math.random() > 0 ? resolve(visa) : reject('The visa is denied: lack of documents');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('Visa received');
    return visa;
}

function bookHotel(documents) {
    console.log(documents);
    // return new Promise((resolve) => {
    //     setTimeout(function () {
    //         console.info('book hotel');
    //         resolve('hotel');
    //     }, 2000);
    // });
    return Promise.reject('don`t book hotel');
    // return Promise.resolve('book hotel');
}

function buyTickets(documents) {
    console.log(documents);
    return new Promise((resolve) => {
        setTimeout(function () {
            console.info('buy tickets');
            resolve('tickets');
        }, 2000);
    });
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
