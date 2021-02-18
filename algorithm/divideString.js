//按照指定数量分割字符串
function divideString(str, num) {
    let ary = [];
    let newStrAry = str.split('');
    for (let i = 0; i < Math.ceil(newStrAry.length / num); i++) {
        ary.push(newStrAry.slice(i * num, (i + 1) * num).join(''));
    }
    return ary.join(',');
}
function divideArray(newStrAry, num) {
    let ary = [];
    for (let i = 0; i < Math.ceil(newStrAry.length / num); i++) {
        ary.push(newStrAry.slice(i * num, (i + 1) * num).join(''));
    }
    return ary.join(',');
}
let r = divideArray([1,2,3,4], 3);
console.log(r);

