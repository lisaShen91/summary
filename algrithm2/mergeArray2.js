//合并升序数组 并仍然保持排序
var a1 = [1, 7, 9];
var a2 = [2, 5, 7, 9, 11];

function mergeArray(ary1, ary2) {
  if (ary2[0] > ary1[ary1.length - 1]) {
    return [...ary1, ...ary2];
  } else if (ary2[ary2.length - 1] < ary1[0]) {
    return [...ary2, ...ary1];
  } else {
    for (let i = 0, l = ary2.length; i < l; i++) {
      let v = ary2[i];
      for (let j = 0; j < ary1.length; j++) {
        console.log(j);
        if (v < ary1[j]) {
            continue;
        }
        if (v > ary1[j]) {
          if (ary1[j + 1] && v < ary1[j + 1]) {
            ary1.splice(j + 1, 0, v);
          } else {
            ary1.push(v);
          }
          break;
        } else if (v === ary1[j]) {
          break;
        } 
      }
    }
  }
  return ary1;
}

console.log(mergeArray(a1, a2));
