// var b = 1;
// var obj = {
//     a: b
// };
// //监听obj的变化

// Object.defineProperty(obj, 'a', {
//     configurable: true,
//     enumerable: true,
//     get() {
//         console.log('obj.a正在读取')
//         return b;
//     },
//     set(newVal) {
//         console.log('obj.a变了')
//         if (newVal !== b) {
//             b = newVal;
//         }
//     }
// });

// let handler = {
//     get(target, propKey, receiver) {
//         console.log(`${propKey.toString()}正在读取`)
//         return Reflect.get(target, propKey, receiver);
//     },
//     set(target, propKey, newVal, receiver) {
//         console.log(`${propKey.toString()}正在修改`)
//         Reflect.set(target, propKey, newVal, receiver);
//     }
// };

// let proxy = new Proxy(obj, handler)

// console.log(proxy.a)
// proxy.a = 3;
// console.log(proxy.a)

// let ary = [1];
// let p2 = new Proxy(ary, handler);
// console.log(p2);
// p2.push(2);
// console.log(p2);

var vm = {
    _data: {
        name: 'lisa',
        age: 12
    }
}

function proxy(target, sourceKey, key) {
    let get = function () {
        return target[sourceKey][key]
    }
    let set = function(val) {
        target[sourceKey][key] = val;
    }
    Object.defineProperty(target, key, {
        configurable: true,
        enumerable: true,
        set,
        get
    })
}
Object.keys(vm._data).forEach(key => {
    proxy.call(vm, vm, '_data', key);
})
console.log(vm.name, inBrowser)

var data = {
    name: 'lisa',
    age: 12
};

var computed = {
    greet
}