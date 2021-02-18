var merge = function ( nums1, m, nums2, n ) {
    let newAry = [];
    let i = 0;
    let j = 0;
    while ( i < m && j < n ) {
        if ( nums1[i] < nums2[j] ) {
            newAry.push( nums1[i++] )
        } else {
            newAry.push( nums2[j++] );
        }
    }
    while ( i < m ) {
        newAry.push( nums1[i++] )
    }
    while ( j < n ) {
        newAry.push( nums2[j++] )
    }
    return newAry
};
let a1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let a2 = [2, 5, 6];
let n = 3;
let r = merge( a1, m, a2, n );
console.log( r );