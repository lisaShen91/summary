/**
 * Promise
 */
class P {
    constructor(fn) {
        this.value = '';
        this.cbs = [];
        this.resolve = (...rest) => {
            let f = this.cbs.shift();
            f(...rest, this.resolve);
        };
        fn(this.resolve);
    }

    then(fn) {
        this.cbs.push(fn);
        return this;
    }
}

function a() {
    return new Promise(function (resolve, reject) {
        console.log('get...');
        setTimeout(function () {
            reject(1);
        }, 1000);
    });
}
function b() {
    return new Promise(function (resolve) {
        console.log('get...');
        setTimeout(function () {
            resolve(2);
        }, 2000);
    });
}

const c = () => 3;

// a()
//     .then(function (value, resolve) {
//         console.log('get...', value);
//         setTimeout(function () {
//             resolve(2);
//         }, 1000);
//     })
//     .then(function (value, resolve) {
//         console.log('get...', value);
//     });
/**
 * 封装 Promise.all
 * @param {f} promises
 */
Promise.all1 = function (promises) {
    if (!Array.isArray(promises)) {
        throw new TypeError('You must pass array');
    }

    return new Promise(function (resolve, reject) {
        var result = [],
            count = promises.length;

        function rejecter(reason, p) {
            reject(reason, p);
        }

        function resolver(value, p) {
            let i = promises.indexOf(p);
            result.splice(i, 0, value);

            if (--count == 0) {
                resolve(result);
            }
        }

        for (var i = 0; i < promises.length; i++) {
            let p = promises[i];
            if (!p.then) {
                resolver(p, p);
                return;
            }

            p.then(
                (val) => {
                    resolver(val, p);
                },
                (err) => {
                    rejecter(err, p);
                }
            );
        }
    });
};
// Promise.all1([a(), b(), c()]).then(res => {
//     console.log(`res`, res)
// }, err => {
//     console.log('err', err);
// });

// Promise.all([a(), b(), c()]).then(res => {
//     console.log(`res`, res)
// }, err => {
//     console.log('err', err);
// });

/**
 * 封装Promise.race
 * @param {*} promises
 */
Promise.race1 = function (promises) {
    if (!Array.isArray(promises)) {
        throw new TypeError('You must pass array');
    }

    return new Promise(function (resolve, reject) {
        function rejecter(reason, p) {
            reject(reason, p);
        }

        function resolver(value, p) {
            resolve(value);
        }

        for (var i = 0; i < promises.length; i++) {
            let p = promises[i];
            p.then(resolver, rejecter);
        }
    });
};

Promise.race1([a(), b()]).then(
    (res) => {
        console.log(`res`, res);
    },
    (err) => {
        console.log('err', err);
    }
);

Promise.race([a(), b()]).then(
    (res) => {
        console.log(`res`, res);
    },
    (err) => {
        console.log('err', err);
    }
);

/**
 * promise封装ajax
 */
function ajax({method = 'get', path, body = null, headers = {}}) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, path);

        for (let k in headers) {
            let v = headers[key];
            xhr.setRequestHeader(k, v);
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    resolve.call(undefined, xhr.responseText);
                } else {
                    reject.call(undefined, xhr);
                }
            }
        };
        xhr.send(body);
    });
}

ajax()
