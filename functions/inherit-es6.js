class Animal {
    constructor ( name ) {
        this.name = name;
        this.eat = function () {
            console.log( this.name + ' can eat;' );
        };
    }

    run() {
        console.log( this.name + ' can run;' );
    };
}

class Person extends Animal {
    constructor ( name ) {
        super( name );
        this.type = "person";
    }

    speak() {
        console.log( this.name + ' can speak;' );
    };
}

var p = new Person( 'lisa' );
// p.run();
console.log( p.name, p.type )
console.log( Object.keys( Person.prototype ) );

