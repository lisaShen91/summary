//ES5 原型式继承
function Animal( name ) {
    this.name = name;
    this.eat = function () {
        console.log( this.name + ' can eat;' );
    };
}
Animal.prototype.run = function () {
    console.log( this.name + ' can run;' );
};
function Person( name ) {
    Animal.call( this, name );
    this.type = "person";
}
Person.prototype = Object.create( Animal.prototype );
Object.defineProperty( Person.prototype, 'constructor', { value: Person, configurable: true, enumerable: false, writable: true } )
// Person.prototype.constructor = Person; //这样会导致constructor属性变为可枚举

// console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'constructor'));
// console.log(Object.keys(Person.prototype));

Person.prototype.speak = function () {
    console.log( this.name + ' can speak;' );
};

var p = new Person( 'lisa' );
console.log( Person.prototype.__proto__, Animal.prototype );
p.run();
p.speak();
console.log( p.type, p.name );


//自己实现new方法
function newSelf( fn, ...rest ) {
    let obj = Object.create( fn.prototype );
    fn.call( obj, ...rest );
    return obj;
}
// var a = newSelf(Person, 'lisa');

// console.log(a.name, a.__proto__, a.__proto__.__proto__)


// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.eat = function() {
//             console.log(this.name + ' can eat;');
//         };
//     }

//     run() {
//         console.log(this.name + ' can run;');
//     };
// }

// class Person extends Animal {
//     constructor(name) {
//         super(name);
//         this.type = "person";
//     }

//     speak() {
//         console.log(this.name + ' can speak;');
//     };
// }

// var p = new Person('lisa');
// // p.run();
// console.log(p.name, p.type)
// console.log(Object.keys(Person.prototype));

