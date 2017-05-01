"use strict";

(function () {

    async function asyncFunc() {
        return 123;
    }

    asyncFunc()
        .then(x => console.log(x));

}());