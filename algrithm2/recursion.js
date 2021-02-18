//1-100求和

function add (sum = 0, num = 10) {
    if (num < 0) {
        return sum;
    } 
    sum += num;
    num--;
    return add(sum, num);
}

let r = add(0, 2);
console.log(r);