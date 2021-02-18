function PromiseAllSettled(promises = []) {
    let len = promises.length;
    let resData = [];
    let n = 0;
    return new Promise(resolve => {
        function resolver(i, data) {
            n++;
            resData.splice(i, 0, data);
            if (n === len) {
                resolve(resData);
            }
        }
        for (let i = 0; i < len; i++) {
            let p = promises[i];

            if (p.then) {
                p.then(function(...rest) {
                    resolver(i, rest);
                }, function(...err) {
                    resolver(i, err);
                })
            } else {
                resolver(i, p);
            }
        }
    })
}