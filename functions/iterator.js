function makeIterator( array ) {
    let index = 0;
    return {
        next: function () {
            return index === array.length ?
                { done: true } : {
                    value: array[index++]
                }
        }
    }
}

// let array = [1, 2, 5];
// let interator = makeIterator( array );
// let r = interator.next();
// console.log( r );
// r = interator.next();
// console.log( r );
// r = interator.next();
// console.log( r );
// r = interator.next();
// console.log( r );

// interface Iterator {
//     [Symbol.iterator]() : Iterator,
// }
// interface Iterator {
//     next(value ?: any): IterationResult,
// }
// interface IterationResult {
//     value: any,
//     done: boolean,
// }

// class RangeIterator {
//     constructor(start, stop) {
//         this.value = start;
//         this.stop = stop;
//     }
//     [Symbol.iterator]() {
//         return this;
//     }

//     next() {
//         let value = this.value;
//         if (value < this.stop) {
//             this.value++;
//             return {value, done: false}
//         }
//         return {value: undefined, done: true}
//     }
// }

// function range(start, stop) {
//     return new RangeIterator(start, stop);
// }
// for (let v of range(1, 5)) {
//     console.log(v);
// }

//迭代器 指针实现
function Obj( value ) {
    this.value = value;
    this.next = null;
}

Obj.prototype[Symbol.iterator] = function () {
    let current = this;
    function next() {
        if ( current ) {
            let value = current.value;
            current = current.next;
            return { value: value };
        }
        return { done: true }
    }
    return {
        next
    }
}

let o = new Obj( 1 );
let o2 = new Obj( 3 );
let o3 = new Obj( 5 );

o.next = o2;
o2.next = o3;

console.log(o);

for ( let i of o ) {
    console.log( i );
}