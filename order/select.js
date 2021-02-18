function order(data) {
  let minIndex;
  for (let i = 0, len = data.length; i < len; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (data[minIndex] > data[j]) {
        minIndex = j;
      }
    }
    let t = data[i];
    data[i] = data[minIndex];
    data[minIndex] = t;
  }
  return data;
}

var ary = [1, 9, 5, 7, 3];
console.log(order(ary));
