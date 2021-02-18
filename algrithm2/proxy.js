var obj = {
  a: 1,
  b: {
    a: 2,
  },
};

// let p = new Proxy(obj, {
//   get(target, key) {
//     console.log(`${key}被读取了`);
//     return Reflect.get(target, key);
//   },
//   set(target, key, newValue, value) {
//     console.log(`${key}被设置了`);
//     Reflect.set(target, key, newValue, value);
//   },
// });

// p.a = 3;
// console.log(p.a);

let v = obj.a;

Object.defineProperty(obj, "a", {
  get() {
    console.log("get");
    return v;
  },
  set(v) {
    console.log("set");
    obj.a = v;
  },
});

obj.a = 5;
