function myInstanceof( left, right ) {
    let prototype = Object.getPrototypeOf( left );
    if ( !prototype ) {
        return false;
    }
    if ( prototype.constructor === right ) {
        return true;
    }
    return myInstanceof( prototype, right );
}

function Car1( make, model, year ) {
    this.make = make;
    this.model = model;
    this.year = year;
}
function Car( make, model, year ) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car( 'Honda', 'Accord', 1998 );

// console.log( auto instanceof Car );
// // expected output: true

// console.log( auto instanceof Object );
// // expected output: true

function selfInstanceof( instance, constructor ) {
    function isMap( obj ) {
        if ( !obj.__proto__ ) return false;
        if (obj.__proto__.constructor === constructor ) {
            return true
        }
        return isMap( obj.__proto__.constructor.prototype );
    }
    return isMap( instance );
}

function selfInstanceof2(instance, constructor) {
    function isMap(obj) {
        let prototype = Object.getPrototypeOf(obj);
        if (!prototype) return false;
        if (prototype.constructor === constructor) {
            return true;
        }
        return isMap(prototype);
    }
    return isMap(instance);
}

function selfInstanceof3(instance, constructor) {
    let targetPrototype = constructor.prototype;
    function isMap(obj) {
        let prototype = Object.getPrototypeOf(obj);
        if (!prototype) return false;
        if (prototype === targetPrototype) {
            return true;
        }
        return isMap(prototype);
    }
    return isMap(instance);
}
//不使用递归
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    while (true) {
        if (proto == null) return false;
        if (pro == right.prototype) return true;
        proto = Object.getPrototypeof(proto);
    }
}

console.log( selfInstanceof(auto, Car1));
// expected output: true

console.log( selfInstanceof(auto, Object) );
// expected output: true

console.log( selfInstanceof2(auto, Car1));
// expected output: true

console.log( selfInstanceof2(auto, Object) );
// expected output: true

console.log( selfInstanceof3(auto, Car1));
// expected output: true

console.log( selfInstanceof3(auto, Object) );
// expected output: true