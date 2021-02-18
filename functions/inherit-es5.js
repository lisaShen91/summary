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
Person.prototype = Object.create(Animal.prototype );
Object.defineProperty(Person.prototype, 'constructor', { value: Person, configurable: true, enumerable: false, writable: true } )
// Person.prototype.constructor = Person; //这样会导致constructor属性变为可枚举

Person.prototype.speak = function () {
    console.log( this.name + ' can speak;' );
};

var p = new Person( 'lisa' );
p.run();
p.speak();

