//指定重试
let i = 0;
let times = 5;

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            i < times - 1 ? reject(1) : resolve(2);
            i++;
        }, 1000);
    });
}

function retry(times) {
    return new Promise(async (resolve, reject) => {
        let i = 0,
            isSuccessful = false;
        while (i < times && !isSuccessful) {
            await getData().then((res) => {
                isSuccessful = true;
                resolve(res);
            }, console.log);
            i++;
        }
        reject(false);
    });
}

retry(times).then((res) => {
    console.log('success', res);
}).catch(console.log);
