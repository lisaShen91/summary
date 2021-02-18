// 题1
// let first = () =>
//     new Promise((resolve) => {
//         new Promise((resolve) => {
//             console.log(2); //2
//             setTimeout((resolve) => {
//                 console.log(5);
//                 resolve(6);
//             }, 0);
//             resolve(3);
//         }).then((res) => {
//             console.log('res', res); //3
//         });
//         resolve(4);
//     });

// first().then((res) => {
//     console.log('1res', res); //4
// });
// console.log(1);

//题2
// setTimeout(() => {
//     console.log(4)
// }, 0)

// new Promise(resolve => {
//     console.log(1);
//     for(let i = 0; i< 1000; i++) {
//         i === 999 && resolve();
//     }
//     console.log(2);
// }).then(function(){
//     console.log(5)
// });
// console.log(3)

//题3 //浏览器和node执行这个任务的结果不同
// async function async1(){
//     console.log('1')
//     await async2()
//     console.log('2')
// }
// async function async2(){
//     console.log('3')
// }
// console.log('4')
// setTimeout(function(){
//     console.log('5')
// },0)
// async1();
// new Promise(function(resolve){
//     console.log('6')
//     resolve();
// }).then(function(){
//     console.log('7')
// })
// console.log('8')


// 题5
console.log(1)
setTimeout(() => {
    console.log(2)
    process.nextTick(() => {
        console.log(3)
    });
    new Promise(resolve => {
        console.log(4);
        resolve();
    }).then(() => {
        console.log(5)
    })
})

process.nextTick(() => {
    console.log(6)
})

new Promise(resolve => {
    console.log(7);
    resolve();
}).then(() => {
    console.log(8)
})

setTimeout(() => {
    console.log(9);
    process.nextTick(() => {
        console.log(10)
    })
    new Promise(resolve => {
        console.log(11);
        resolve();
    }).then(() => {
        console.log(12)
    })
})





// console.log(1);

// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3)
//   });
// });

// new Promise((resolve, reject) => {
//   console.log(4)
//   resolve(5)
// }).then((data) => {
//   console.log(data);

//   Promise.resolve().then(() => {
//     console.log(6)
//   }).then(() => {
//     console.log(7)

//     setTimeout(() => {
//       console.log(8)
//     }, 0);
//   });
// })

// setTimeout(() => {
//   console.log(9);
// })

// console.log(10);
