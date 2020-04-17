class Observe {
    constructor() {
        this.subscribers = {};
    }
    on(type, cb) {
        if (this.subscribers[type]) {
            this.subscribers[type].push(cb);
        } else {
            this.subscribers[type] = [cb];
        }
    }

    emit(type, ...rest) {
        let cbs = this.subscribers[type];
        if (Array.isArray(cbs)) {
            cbs.forEach((cb) => {
                cb.call(this, ...rest);
            });
        }
    }

    off(type, cb) {
        let cbs = this.subscribers[type];
        if (Array.isArray(cbs)) {
            let index = cbs.find((item) => item === cb);
            cbs.splice(index, 1);
        }
    }

    once(type, cb) {
        function callback(...rest) {
            cb.apply(this, rest);
            this.off(type, cb);
        }
        this.on(type, callback.bind(this));
    }
}

let ob = new Observe();

/* function Test() {
    this.name = 'lisa';
    this.say = (function() {
        console.log(this.name);
    }).bind(this)
} */

class Test {
    constructor() {
        this.name = 'lisa';
        this.say = () => {

            console.log(this, this.name);
        }
    }
}

let t = new Test();

ob.once('tt', t.say);
ob.emit('tt');
ob.emit('tt');
ob.once('tt', t.say);
ob.emit('tt');
