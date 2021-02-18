// var ary = [1,2,4,4,5];

function findRepeat( data ) {
    let bucket = new Array( Math.pow( 10, 4 ) * 2 + 1 ).fill( 0 );
    for ( let i = 0;i < data.length;i++ ) {
        if ( bucket[data[i]] ) {
            console.log( data[i] )
        } else {
            bucket[data[i]]++
        }
    }
}

// findRepeat(ary)
function mergeArray( ary1, ary2 ) {
    let i = 0;
    let j = 0;
    let newArray = [];
    while ( i < ary1.length && j < ary2.length ) {
        if ( ary1[i] <= ary2[j] ) {
            newArray.push( ary1[i++] );
        } else {
            newArray.push( ary2[j++] );
        }
    }
    while ( i < ary1.length ) {
        newArray.push( ary1[i++] );
    }
    while ( j < ary2.length ) {
        newArray.push( ary2[j++] );
    }
    return newArray;
}

// let ary = mergeArray([1,2,3], [2, 5, 6]);
// let ary2 = mergeArray2([1,2,3], [2, 5, 6]);
// console.log(ary, ary2);

function mergeArray2( ary1, ary2 ) {
    let newArray = ary1.concat( ary2 );

    let bucket = new Array( 7 ).fill( 0 );
    for ( let i = 0, len = newArray.length;i < len;i++ ) {
        bucket[newArray[i]]++
    }
    let ary = [];
    for ( let i = 0;i < bucket.length;i++ ) {
        while ( bucket[i] > 0 ) {
            ary.push( i );
            bucket[i]--;
        }
    }
    return ary;
}

var removeDuplicates = function ( nums, n ) {
    let k = 0;
    for ( let i = 2;i < nums.length;i++ ) {
        if ( nums[i] !== nums[k] ) {
            nums[k + 2] = nums[i];
            k++;
        }
    }
    return k + 2;
};

var ary = [1, 1, 1, 1, 2, 3, 3, 3, 3, 4];
let k = removeDuplicates( ary, 0 );
console.log( k );