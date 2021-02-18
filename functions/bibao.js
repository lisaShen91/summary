//闭包
// async function test() {
//     var i;
//     for (i = 0; i < 5; i++) {
//     	await new Promise(resolve => {
//             setTimeout(() => {
//                 console.log(i);
//                 resolve();
//             }, 0)
//         })
//     }
//     console.log(i);
// }
// test();

// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 0)
//     })(i)
// }
// console.log(i);


async function test() {
    for (var i = 0; i < 5; i++) {
        await getValue(i)
    }
    await console.log(i);
}

function getValue(i) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(i);
            resolve();
        }, 0)
    })
}

test();