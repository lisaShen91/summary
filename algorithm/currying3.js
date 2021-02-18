// ```
// const sub = function(a, b, c, d) {
//     return a+b+c+d;
// }
// const multi = function(a, b, c) {
//     return a*b*c;
// }
// const subCurry = curry(sub);
// sub(1,2,3,4) === subCurry(1)(2)(3)(4)

// const multiCurry = curry(multi);
// multi(1,2,3) === multiCurry(1)(2)(3)

// ```

function curry( fn, ...args ) {
    return function ( ...rest ) {
        let allArgs = [...args, ...rest];
        return allArgs.length < fn.length ? curry( fn, ...allArgs ) : fn.apply( null, allArgs );
    }
}

const sub = function ( a, b, c, d ) {
    return a + b + c + d;
}
const multi = function ( a, b, c ) {
    return a * b * c;
}
const subCurry = curry( sub );
console.log( sub( 1, 2, 3, 4 ) === subCurry( 1 )( 2, 3, 4 ) )

const multiCurry = curry( multi );
console.log( multi( 1, 2, 3 ) === multiCurry( 1 )( 2 )( 3 ) );