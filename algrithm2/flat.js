function flat(array, depth) {
  let newAry = [];
  for (let i = 0, len = array.length; i < len; i++) {
    let value = array[i];
    if (!value) continue;
    let item =
      Array.isArray(value) && depth > 0 ? flat(value, depth - 1) : [value];
    newAry.push(...item);
  }
  return newAry;
}

function flat2(array, deep = 1) {
  if (deep > 0) {
    return array.reduce(
      (pre, cur) => pre.concat(Array.isArray(cur) ? flat2(cur, deep - 1) : cur),
      []
    );
  }
  return array.slice();
}

function flat3(array, depth) {
    let result = [];
    array.forEach(item => {
        if (Array.isArray(item) && depth > 0) {
            result = result.concat(flat3(item, depth - 1));
        } else {
            item != void 0 && result.push(item);
        }
    });
    return result;
}

let array = [1, [2, [, 4]], [6], 5];
let depth = 3;
let r = flat(array, depth);
console.log(r);
let r2 = flat2(array, depth);
console.log(r2);
let r3 = flat3(array, depth);
console.log(r3);
console.log(array.flat(depth));
