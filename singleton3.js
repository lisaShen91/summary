let newInstance = (() => {
    let instance = new Test();
    function Test() {
        this.name = 'lisa';
        this.age = 31;
        this.say = function () {
            console.log(`my name is ${this.name}, i am ${this.age} years old.`);
        };
    }
    return function () {
        return instance;
    };
})();

let i1 = newInstance();
let i2 = newInstance();

console.log(i1, i2, i1 === i2);
