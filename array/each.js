// Array.prototype.forEach = function (callback, thisArg) {
//   var T, k;
// //   var O = Object(this);
// var O = this;
//   var len = O.length >>> 0;
//   if (arguments.length > 1) {
//     T = thisArg;
//   }
//   k = 0;
//   while (k < len) {
//     var kValue;

//     // a. Let Pk be ToString(k).
//     //    This is implicit for LHS operands of the in operator
//     // b. Let kPresent be the result of calling the HasProperty
//     //    internal method of O with argument Pk.
//     //    This step can be combined with c
//     // c. If kPresent is true, then
//     if (k in O) {
//       // i. Let kValue be the result of calling the Get internal
//       // method of O with argument Pk.
//       kValue = O[k];

//       // ii. Call the Call internal method of callback with T as
//       // the this value and argument list containing kValue, k, and O.
//       callback.call(T, kValue, k, O);
//     }
//     // d. Increase k by 1.
//     k++;
//   }
//   return undefined;
// };



Array.prototype.forEach = function(callback, thisArg) {
    let data = this;
    for(let i = 0, len = data.length; i < len; i++) {
        callback.call(thisArg, data[i], i, data);
    }
}

var ary = [1, 2, 3, 4];
ary.forEach((value, i, item) => {
  console.log(value, i, item);
});
