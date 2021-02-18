console.log(1);

async function async1() {
  console.log(2);
  await async2();
  console.log(3);
}

async function async2() {
  return new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
}

setTimeout(() => {
  console.log(6);
}, 0);

async1();

console.log(7); // 1247536