// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
var merge = function ( nums1, m, nums2, n ) {
    let i = nums1.length - 1
    m--
    n--
    while ( n >= 0 ) {
        if ( nums1[m] > nums2[n] ) {
            nums1[i--] = nums1[m--]
        } else {
            nums1[i--] = nums2[n--]
        }
    }
};
let a1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let a2 = [2, 5, 6];
let n = 3;
let r = merge( a1, m, a2, n );
console.log( r );