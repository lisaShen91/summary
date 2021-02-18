//双循环
function uniq1(ary) {
    let newAry = [];
    for (let i = 0; i < ary.length; i++) {
        let isExist = false;
        for (let j = 0; j < newAry.length; j++) {
            if (ary[i] === newAry[j]) {
                isExist = true;
                break;
            }
        }
        if (isExist === false) {
            newAry.push(ary[i]);
        }
    }
    return newAry;
}
//es6
function uniq2(ary) {
    const set = new Set(ary);
    return [...set];
}
// underscore
function uniq3(ary) {
    return _.uniq(ary);
}
// 排序后相邻比较
function uniq4(ary) {
    let newAry = ary.slice().sort();
    for (let i = 0; i < newAry.length; i++) {
        let j = i + 1;
        if (newAry[i] === newAry[j]) {
            newAry.splice(i, 1);
        }
    }
    return newAry;
}
//对象属性
function uniq5(ary) {
    let obj = {};
    let newAry = [];
    ary.forEach(val => {
        obj[val + typeof val] = val;
    });
    for (let attr in obj) {
        newAry.push(obj[attr]);
    }
    return newAry;
}
