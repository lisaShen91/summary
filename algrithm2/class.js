let prop = "123";
class MyClass {
  // constructor() {
  //   // ...
  // }
  get prop() {
    console.log("getter");
    return prop;
  }
  set prop(value) {
    console.log("setter: " + value);
    prop = value;
  }
  get name() {
    return "lisa";
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

console.log(inst.prop);
// 'getter'
