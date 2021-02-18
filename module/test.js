const { on } = require( "./onwatcher" );
let watcher = require( './onwatcher' );

// console.log( watcher );

var obj = {
    a: 1,
    b: {
        c: 1,
    }
}


let o = new Proxy( {}, {
    get( target, prop, Refect ) {
        console.log('get', prop);
        return Refect.get( target, prop );
    },
    set( target, prop, value, Reflect ) {
        console.log(`set ${prop} to ${value}`);
        return Reflect.set( target, prop, value );
    },
});

o.a = 4;
console.log(o.a);

