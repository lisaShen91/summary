//合并升序数组 并仍然保持排序
var a1 = [1, 7, 9];
var a2 = [2, 5, 7, 9];

function mergeArray(ary1, ary2) {
  let newArray = [...new Set([...ary1, ...ary2])];
  for (let i = 0, l = newArray.length; i < l; i++) {
    for (let j = i; j < l; j++) {
      if (newArray[i] > newArray[j]) {
        [newArray[j], newArray[i]] = [newArray[i], newArray[j]];
      }
    }
  }
  return newArray;
}

console.log(mergeArray(a1, a2));
