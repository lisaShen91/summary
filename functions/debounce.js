// 简版
var debounce1 = function (fn, wait) {
    var t;
    return function() {
        if (t) {
            clearTimeout(t);
            t = null;
        }
        t = setTimeout(fn, wait);
    }
};

// 标准版
function debounce(fn, wait = 50, immediate = false) {
    let timer, ctx, args;
    const later = () =>
        setTimeout(() => {
            timer = null;
            if (!immediate) {
                fn.apply(ctx, args);
                ctx = args = null;
            }
        }, wait);
    return function(...params) {
        if (!timer) {
            timer = later();
            if (immediate) {
                fn.apply(this, params);
            } else {
                ctx = this;
                args = params;
            }
        } else {
            clearTimeout(timer);
            timer = later();
        }
    };
}

var f = () => {
    console.log('12');
};

var delayedFn = debounce(f, 3000);
console.time();
delayedFn();
delayedFn();
console.timeEnd();


function throttle(func, interval) {
    var context = this;
    var canRun = true;
    var timer;
    return function() {
        if (!canRun) return;
        canRun = false;
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
            func.call(context);
            canRun = true;
        }, interval)
    }
}


