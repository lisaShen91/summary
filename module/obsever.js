class Observer {
    constructor() {
        this.clients = [];
    }
    listen(fn) {
        this.clients.push(fn);
    }
    trigger(...rest) {
        this.clients.forEach(fn => fn.call(this, ...rest))
    }
};

var ob = new Observer();

ob.listen(function(name, price) {
    console.log(`名字是${name},价格是${price}`)
})

ob.trigger('lisa', 90);


var ary = [{
    name: 'lisa',
    age: 30
}, {
    name: 'lisa',
    age: 30
}, {
    name: 'lisa',
    age: 31
},{
    name: 'lily',
    age: 30
}];
