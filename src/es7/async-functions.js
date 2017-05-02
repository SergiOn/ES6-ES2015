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

    function otherAsyncFunc(request = 0) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(5500 + request);
            }, 2000);
        });
    }

    const fetchJson = co.wrap(function* () {
        try {
            let request = yield otherAsyncFunc();
            let text = yield otherAsyncFunc(request);
            return JSON.parse(text + 80);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    });
    fetchJson(true)
        .then(function (val) {
            console.log(val);
        });


    async function fetchJsonAsync() {
        try {
            let request = await otherAsyncFunc();
            let text = await otherAsyncFunc(request);
            return JSON.parse(text + 1166);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    }
    fetchJsonAsync().then(function (val) {
        console.log(val);
    });

});

(function () {

    async function asyncFunc() {
        console.log('asyncFunc()'); // (A)
        return 'abc';
    }
    asyncFunc().
    then(x => console.log(`Resolved: ${x}`)); // (B)
    console.log('main'); // (C)

    // Output:
    // asyncFunc()
    // main
    // Resolved: abc

});

(function () {

    function otherAsyncFunc() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(5500);
            }, 2000);
        });
    }

    async function asyncFunc() {
        return Promise.resolve(123);
    }
    asyncFunc()
        .then(x => console.log(x)); // 123

    async function asyncFunc2() {
        return Promise.reject(new Error('Problem!'));
    }
    //asyncFunc2()
        //.catch(err => console.error(err)); // Error: Problem!

    async function asyncFunc3() {
        return otherAsyncFunc();
    }
    asyncFunc3()
        .then(x => console.log('asyncFunc3:', x));

    async function asyncFunc4() {
        return await otherAsyncFunc();
    }
    asyncFunc4()
        .then(x => console.log('asyncFunc4:', x));

});

(function () {

    function otherAsyncFunc() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(5500);
            }, 2000);
        });
    }

    async function asyncFunc() {
        const value = otherAsyncFunc(); // missing `await`!
        const value2 = otherAsyncFunc(); // missing `await`!
        return { value, value2 };
    }
    asyncFunc()
        .then(x => console.log('asyncFunc:', x));

    async function asyncFunc2() {
        const value = await otherAsyncFunc();
        const value2 = await otherAsyncFunc();
        return { value, value2 };
    }
    asyncFunc2()
        .then(x => console.log('asyncFunc2:', x));

});


(function () {

    function otherAsyncFunc() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(5500);
            }, 2000);
        });
    }

    async function asyncFunc() {
        const value = otherAsyncFunc();
        console.log('asyncFunc:value', value);
        const value2 = otherAsyncFunc();
        console.log('asyncFunc:value2', value2);
        return 'asyncFunc';
    }
    asyncFunc()
        .then(x => console.log('asyncFunc:', x));

    async function asyncFunc2() {
        const value = await otherAsyncFunc();
        console.log('asyncFunc2:value', value);
        const value2 = await otherAsyncFunc();
        console.log('asyncFunc2:value2', value2);
        return 'asyncFunc2';
    }
    asyncFunc2()
        .then(x => console.log('asyncFunc2:', x));

    async function asyncFunc3() {
        const value = await otherAsyncFunc();
        const value2 = await otherAsyncFunc();
        console.log('asyncFunc3:value', value);
        console.log('asyncFunc3:value2', value2);
        return 'asyncFunc3';
    }
    asyncFunc3()
        .then(x => console.log('asyncFunc3:', x));

    async function asyncFunc4() {
        const [result1, result2] = await Promise.all([
            otherAsyncFunc(),
            otherAsyncFunc(),
        ]);
        console.log([result1, result2]);
        return [result1, result2];
    }
    asyncFunc4()
        .then(x => console.log('asyncFunc4:', x));

})();