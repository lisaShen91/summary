function quickSort(ary) {
    let len = ary.length;
    if (ary.length <= 1) return ary;
    let midIndex = len % 2 == 0 ? len / 2 : (len + 1) / 2;
    let midValue = ary[midIndex];
    let left = [],
        right = [];
    for (let i = 0; i < len; i++) {
        if (i === midIndex) continue;
        let curValue = ary[i];
        curValue > midValue ? right.push(curValue) : left.push(curValue);
    }
    return [...quickSort(left), midValue, ...quickSort(right)];
}

function bubbleSort(ary) {
    for (let i = 0, len = ary.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (ary[i] > ary[j]) {
                [ary[j], ary[i]] = [ary[i], ary[j]];
            }
        }
    }
}

function selectSort(ary) {
    let minIndex;
    for (let i = 0; i < ary.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < ary.length; j++) {
            if (ary[minIndex] > ary[j]) {
                minIndex = j;
            }
        }
        [ary[minIndex], ary[i]] = [ary[i], ary[minIndex]];
    }
}
