// var ArrayPrototypeSlice = Array.prototype.slice;
// Function.prototype.bind = function (otherThis) {
//   if (typeof this !== "function") {
//     // closest thing possible to the ECMAScript 5
//     // internal IsCallable function
//     throw new TypeError(
//       "Function.prototype.bind - what is trying to be bound is not callable"
//     );
//   }

//   var baseArgs = ArrayPrototypeSlice.call(arguments, 1),
//     baseArgsLength = baseArgs.length,
//     fToBind = this,
//     fNOP = function () {},
//     fBound = function () {
//       baseArgs.length = baseArgsLength; // reset to default base arguments
//       baseArgs.push.apply(baseArgs, arguments);
//       return fToBind.apply(
//         fNOP.prototype.isPrototypeOf(this) ? this : otherThis,
//         baseArgs
//       );
//     };

//   if (this.prototype) {
//     // Function.prototype doesn't have a prototype property
//     fNOP.prototype = this.prototype;
//   }

//   fBound.prototype = new fNOP();

//   return fBound;
// };
//es5
let ArrayPrototypeSlice = Array.prototype.slice;
Function.prototype.bind = function (ctx) {
  let args1 = ArrayPrototypeSlice.call(arguments, 1);
  let fn = this;
  let Fnop = function () {};
  let fBound = function () {
    let args2 = ArrayPrototypeSlice.call(arguments, 0);
    let args = args1.concat(args2);
    fn.apply(Fnop.prototype.isPrototypeOf(this) ? this : ctx, args);
  };
  if (this.prototype) {
    Fnop.prototype = this.prototype;
  }
  fBound.prototype = new Fnop();
  return fBound;
};
//es6
// Function.prototype.bind = function(ctx, ...rest) {
//     if (typeof this !== 'function') {
//         throw new Error('')
//     }
//     let fn = this;
//     let fBound = function(...args) {
//         fn.apply(fBound.prototype.isPrototypeOf(this) ? this : ctx, [...rest, ...args])
//     }
//     // fBound.prototype = Object.create(this.prototype);
//     return fBound;
// }

function Test(name) {
  this.name = name;
}
function test() {
  console.log(this.name);
}
var name = "aaa";
var obj = {
  name: "lisa",
};
let t = new (Test.bind(obj))("ttt");
console.log(t.name);
test.bind(obj)();


