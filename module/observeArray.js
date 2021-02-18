function Observe() {
  let prototype = Array.prototype;
  let obj = Object.create(prototype);
  let arrayMethods = [
    "push",
    "pops",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse",
  ];
  arrayMethods.forEach((method) => {
    let originalMethod = prototype[method];
    def(obj, method, function (...rest) {
      let r = originalMethod.apply(this, rest);
      switch (method) {
        case "push":
        case "unshift":
          inserted = rest;
          break;
        case "splice":
          inserted = rest.slice(2);
          break;
      }
      if (inserted) {
        observeArray(inserted);
      }
      console.log(" current observed");
      return r;
    });
  });
  return obj;
}

function def(obj, value, val) {
  Object.defineProperty(obj, value, {
    configurable: true,
    enumerable: true,
    writable: true,
    value: val,
  });
}

function defineReactive(obj, attr, val) {
  let descriptor = Object.getOwnPropertyDescriptor(obj, attr);
  let getter = descriptor.get;
  let setter = descriptor.set;

  if (!getter || setter) {
    val = obj[attr];
  }

  Object.defineProperty(obj, attr, {
    configurable: true,
    enumerable: true,
    get() {
      let value = getter ? getter.call(obj) : val;
      console.log(`${attr} is observed`);
      return value;
    },
    set(newVal) {
      const value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      // setter.call(obj, newVal);
      console.log(`${attr} is updated`);
      val = newVal;
    },
  });
}

function observeArray(ary) {
  //重写部分原型方法 修改原型链
  ary.__proto__ = Observe();
}

var ary = [];
observeArray(ary);
ary.push(1, 2);

let data = {
  a: 1,
  b: {
    c: 1,
  },
};

Object.keys(data).forEach((key) => {
  defineReactive(data, key);
});

data.a = 2;
