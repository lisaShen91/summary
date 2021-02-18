let dep  = [];
module.exports = {
    on: function on(fn) {
        deps.push(fn);
    },

    off: function off(fn) {
        let i = deps.indexOf(fn);
        deps.splice(i, 1);
    },

    once: function once(fn) {
        function cb() {
            fn();
            off(cb);
        }
        on(cb);
    },
    emit: function() {
        dep.forEach(fn => {
            fn();
        })
    }
}