//桶排序： 需要知道数组的极限值：最大值和最小值 max - min + 1作为桶的size
function merge( ary1, ary2 ) {
    let newArray = ary1.concat( ary2 );

    let bucket = new Array(7).fill( 0 );
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
let a1 = [1, 2, 3, 0, 0, 0];
let a2 = [2, 5, 6];
let r = merge( a1, a2);
console.log( r );