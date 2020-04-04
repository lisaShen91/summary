//冒泡
function bubble(ary) {
    // let newAry = [];
    for (var i = 0, len = ary.length; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            console.log('before', ary[i], ary[j])
            if (ary[i] > ary[j]) {
                [ary[i], ary[j]] = [ary[j], ary[i]]
            }
            console.log('after', ary[i], ary[j])
        }

    }

    return ary;
}
//快速排序
function quickSort(ary) {
    if (ary.length <= 1) return ary;
    let midIndex = ary.length % 2 == 0 ? ary.length / 2 : (ary.length + 1) / 2;
    let middle = ary[midIndex];
    let left = [];
    let right = [];
    for (var i = 0; i < ary.length; i++) {
        if (i == midIndex) continue;
        ary[i] > middle ? right.push(ary[i]) : left.push(ary[i]);
    }
    return [...quickSort(left), middle, ...quickSort(right)]
}

function uniq(ary) {
    return Array.from(new Set(ary))
}
