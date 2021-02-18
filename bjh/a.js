let data = [2,3,4,5,2,3,6,7,3];

function getRepeatNumber(ary) {
    let obj = {};
    let newAry = [];
    for(let i = 0, len = ary.length; i < len; i++) {
        let item = ary[i];
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
    }
    for (let attr in obj) {
        if (obj[attr] > 1) {
            newAry.push(Number(attr));
        }
    }
    return newAry;
}