function order(ary) {
  for (let i = 0, len = ary.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (ary[i] > ary[j]) {
        let t = ary[j];
        ary[j] = ary[i];
        ary[i] = t;
        console.log(ary);
      }
    }
  }
  return ary;
}
