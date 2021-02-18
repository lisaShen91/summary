var addTwoNumbers = function(l1, l2) {
    function add(v1, v2, pre = 0) {
        let v = v1 + v2 + pre;
        return {value: v % 10, pre: v >= 10 ? 1 : 0}
    }
    let r = [], p = 0, result;
    for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
        if (l1[i] != undefined && l2[i] !== undefined) {
          result = add(l1[i], l2[i], p);
        } else if (l1[i] !== undefined) {
            result = add(l1[i], 0, p);
        } else if (l2[i] !== undefined) {
            result = add(0, l2[i], p);
        }
        let value = result.value;
        p = result.pre;
        r.push(value);
    }
    if (p != 0) {
        r.push(p);
    }
    return r;
};

// let v1 = [2,4,3];
// let v2 = [5,6,4];
// let v1 = [0];
// let v2 = [0];
let v1 = [9,9,9,9,9,9,9], v2 = [9,9,9,9];

let r = addTwoNumbers(v1, v2);
console.log(r);