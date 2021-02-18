let newInstance = (function() {
    let instance = null;

    function Test() {
        this.name = 'lisa';
        this.age = 31;
        this.say = function () {
            console.log(`my name is ${this.name}, i am ${this.age} years old.`);
        };
    }

    return {
        getInstance() {
            if (instance === null) {
                instance = new Test();
            }
            return instance;
        },
    };
})();
let i1 = newInstance.getInstance();
let i2 = newInstance.getInstance();

console.log(i1 === i2);
let instance = null;
