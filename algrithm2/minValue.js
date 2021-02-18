function order2(ary, k) {
    let newAry = [];
    for (let j = 0; j < k; j++) {
      let min = j;
      for (let i = j + 1, len = ary.length; i < len; i++) {
        if (ary[i] < ary[min]) {
          min = i;
        }
      }
      if (j !== min) {
        let t = ary[j];
        ary[j] = ary[min];
        ary[min] = t;
      }
      newAry.push(ary[j]);
    }
    return newAry;
  }