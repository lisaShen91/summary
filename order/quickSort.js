// function order(data) {
//   let len = data.length;

//   if (len <= 1) return data;

//   let m = len % 2 === 0 ? len / 2 : (len - 1) / 2;
//   let i = 0,
//     l = [],
//     r = [],
//     v = data[m];
//   while (i < len) {
//     if (i === m) {
//       i++;
//       continue;
//     }
//     let cur = data[i];
//     cur > v ? r.push(cur) : l.push(cur);
//     i++;
//   }
//   return [...order(l), v, ...order(r)];
// }

var ary = [1, 9, 5, 7, 3];
console.log(order(ary));

function order(data) {
  let len = data.length;

  if (len <= 1) return data;

  let m = len % 2 === 0 ? len / 2 : (len - 1) / 2;
  let l = [],
    r = [],
    v = data[m];
  for (let i = 0; i < len; i++) {
    if (i === m) {
      continue;
    }
    let cur = data[i];
    cur > v ? r.push(cur) : l.push(cur);
  }
  return [...order(l), v, ...order(r)];
}
