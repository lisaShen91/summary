//扰乱字符串
var ary = [1, 2, 4, 5, 6, 7];
let a = 1;
ary.sort(() => {
    // a = -a;
    return Math.random() - 0.5;
});

console.log(ary);


