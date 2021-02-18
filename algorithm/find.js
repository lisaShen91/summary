//二分查找
function binarySearch(ary, val) {
    let mid = Math.floor(ary.length / 2);
    let low = 0;
    let high = ary.length - 1;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (val === ary[mid]) {
            return mid;
        } else {
            if (val > ary[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}
// let index = binarySearch([1, 2, 3, 4, 5, 6], 4);
// console.log(index);

var myString = 'aaabcdeeeghhhffiooo';
function maxRepeactString(str) {
    //定义一个对象，对象的每个属性是出现连续重复的字符，属性的属性值是该字符重复的个数
    var res = {};
    for (var i = 0, j = i + 1; i < str.length; i++) {
        while (str[i] == str[j]) {
            j++;
            res[str[i]] = j - i + 1;
        }
    }
    return res;
}

//查找最多出现的字母,单不一定是最长子串
function maxRepeatStr(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    let max = Math.max(...Object.values(obj));
    let maxRepeat = [];
    for (let attr in obj) {
        if (obj[attr] === max) {
            maxRepeat.push(attr);
        }
    }
    console.log(`出现最多${max}的字母有${maxRepeat.join(',')}`);
}
