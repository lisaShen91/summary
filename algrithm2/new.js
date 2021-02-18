function selfNew(fn, ...rest) {
  let obj = Object.create(fn.prototype);
  fn.call(obj, ...rest);
  return obj;
}

function Test(name) {
    this.name = name;
}

let t1 = selfNew(Test, 1);
let t2 = selfNew(Test, 2);
console.log(t1 === t2);
console.log(t1.name, t2.name);
