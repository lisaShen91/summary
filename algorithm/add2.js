function ListNode(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
}
var addTwoNumbers = function(l1, l2) {
    let pre = 0;
    let sum = new ListNode(0);
    let head = sum;
    while(pre|| l1 || l2) {
        let v1 = l1.value || 0;
        let v2 = l2.value || 0;
        let s = v1 + v2 + pre;
        pre = s < 10 ? 0 : 1;
        sum.next = new ListNode(s % 10);
        sum = sum.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return head.next;
};

let v1 = {
    value: 2,
    next: {
        value: 4,
        next: {
            value: 3,
            next: null
        }
    }
};
let v2 = {
    value: 5,
    next: {
        value: 6,
        next: {
            value: 4,
            next: null
        }
    }
};

let r = addTwoNumbers(v1, v2);
console.log(r);