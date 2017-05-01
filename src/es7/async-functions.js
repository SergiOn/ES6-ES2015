"use strict";

(function () {

    async function asyncFunc() {
        return 123;
    }

    asyncFunc()
        .then((x) => console.log(x));

});

(function () {

    async function asyncFunc() {
        throw new Error('Problem!');
    }

    asyncFunc()
        .catch(err => console.log(err));

});

(function () {
    function otherAsyncFunc() {
        return new Promise((res) => {
            setTimeout(function () {
                res(5500);
            }, 2000);
        });
    }

    async function asyncFunc() {
        const result = await otherAsyncFunc();
        console.log(result);
        return String(result);
    }
    asyncFunc().then((x) => console.log(x));

    // Equivalent to:
    function asyncFunc2() {
        return otherAsyncFunc()
            .then(result => {
                console.log(result);
            });
    }
    asyncFunc2();

});

(function () {

    function otherAsyncFunc() {
        return new Promise((res) => {
            setTimeout(function () {
                res(5500);
            }, 2000);
        });
    }

    async function asyncFunc() {
        const result1 = await otherAsyncFunc();
        console.log(result1);
        const result2 = await otherAsyncFunc();
        console.log(result2);
    }
    // asyncFunc();

    // Equivalent to:
    function promiseFunc() {
        otherAsyncFunc()
            .then((result1) => {
                console.log(result1);
                return otherAsyncFunc();
            })
            .then((result2) => {
                console.log(result2);
            });
    }
    promiseFunc();

});

(function () {

    function otherAsyncFunc() {
        return new Promise((res) => {
            setTimeout(function () {
                res(5500);
            }, 2000);
        });
    }

    async function asyncFunc() {
        const [result1, result2] = await Promise.all([
            otherAsyncFunc(),
            otherAsyncFunc()
        ]);
        console.log(result1, result2);
    }
    // asyncFunc();

    // Equivalent to:
    function promiseFunc() {
        Promise.all([
            otherAsyncFunc(),
            otherAsyncFunc()
        ])
        .then(([result1, result2]) => {
            console.log(result1, result2);
        });
    }
    promiseFunc();

});

(function () {

    function otherAsyncFunc() {
        return new Promise((res, rej) => {
            setTimeout(function () {
                rej(new Error('Error'));
            }, 2000);
        });
    }

    async function asyncFunc() {
        try {
            console.log(await otherAsyncFunc());
        } catch (e) {
            console.warn(e);
        }
    }
    asyncFunc();

    // Equivalent to:
    function promiseFunc() {
        otherAsyncFunc()
            .catch(err => {
                console.error(err);
            });
    }
    promiseFunc();

});

(function () {

    function otherAsyncFunc() {
        return new Promise((res, rej) => {
            setTimeout(function () {
                rej(new Error('Error'));
            }, 2000);
        });
    }

    async function asyncFunc() {}
    asyncFunc();

    // Equivalent to:
    function promiseFunc() {}
    promiseFunc();

}());