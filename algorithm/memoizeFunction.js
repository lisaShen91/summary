function memoizeFunction(fn) {
    let cache = {};
    return function(...rest) {
        let k = rest[0];
        if (cache[k]) {
            console.log(1);
            return cache[k];
        } else {
            let v = fn.apply(null, rest);
            cache[k] = v;
            return v;
        }
    }
}
const fibonacci = memoizeFunction(function(n) {
    return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
console.log(fibonacci(100)); // 输出354224848179262000000
console.log(fibonacci(100));