export class Watcher {
    constructor() {
        this.types = {}
    }

    on(type, fn) {
        let eType = this.types[type]
        if (eType) {
            eType.push(fn);
        } else {
            eType = [];
        }
    }
    off(type, fn) {
        let eType = this.types[type];
        let i = eType.indexOf(fn);
        eType.splice(i, 1);
    }
    once(type, fn) {
        function cb () {
            fn();
            this.off(type, cb);
        }
        this.on(type, cb);
    }

    emit(type) {
        let eType = this.types[type];
        eType.forEach(fn => {
            fn();
        })
    }
}
