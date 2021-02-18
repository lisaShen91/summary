// 实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中
const timeout = ms =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

const ajax1 = () =>
    timeout(2000).then(() => {
        console.log('1');
        return 1;
    });

const ajax2 = () =>
    timeout(1000).then(() => {
        console.log('2');
        return 2;
    });

const ajax3 = () =>
    timeout(2000).then(() => {
        console.log('3');
        return 3;
    });

const mergePromise = ajaxArray => {
    return new Promise(async resolve => {
        let data = [];
        for (var i = 0; i < ajaxArray.length; i++) {
            let res = await ajaxArray[i]();
            data.push(res);
        }
        resolve(data);
    });
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});
