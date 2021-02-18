let newInstance = (() => {
    let instance = null;
    function Test() {
        this.name = 'lisa';
        this.age = 31;
        this.say = function () {
            console.log(`my name is ${this.name}, i am ${this.age} years old.`);
        };
    }
    return function () {
        if (instance === null) {
            instance = new Test();
        }
        return instance;
    };
})();

let i1 = newInstance();
let i2 = newInstance();

console.log(i1, i2, i1 === i2);
