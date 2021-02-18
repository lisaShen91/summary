//只可以被1和自己整除
function isPrime(n) {
    if (n === 1) return true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function allPrime(m) {
    let ary = [];
    for (let i = 1; i < m; i++) {
        if (isPrime(i)) {
            ary.push(i);
        }
    }
    return ary;
}

console.log(allPrime(100));
