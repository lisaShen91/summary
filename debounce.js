/* function debounce(fn, wait = 50, immediate = false) {
    let timer, ctx, args;
    const later = () =>
        setTimeout(() => {
            timer = null;
            if (!immediate) {
                fn.apply(ctx, args);
                ctx = args = null;
            }
        }, wait);
    return function (...params) {
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
} */

function debounce(fn, wait, immediate) {
    let timer;
    return function (...rest) {
        if (immediate) {
            fn.apply(this, rest);
        } else {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(() => {
                fn.apply(this, rest);
            }, wait);
        }
    };
}
let fn = function () {
    let name = 'lisa';
    console.log(name);
};
let delayFn = debounce(fn, 3000, true);
delayFn();
delayFn();

// function Test(name, immediate) {
//     this.name = name;
//     this.outputName = debounce(
//         function (wait) {
//             return new Promise((resolve) => {
//                 setTimeout(resolve, wait);
//             }).then(() => {
//                 console.log(this.name);
//             });
//         },
//         3000,
//         immediate
//     );
// }
// Test.cancel = function () {
//     console.log('cancel');
// };

// let t = new Test('lisa1');

// t.outputName(300);
// t.outputName(300);
