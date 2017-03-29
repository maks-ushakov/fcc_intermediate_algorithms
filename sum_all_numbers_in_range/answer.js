function sumAll(arr) {
  var maxNum = Math.max.apply(null, arr);
  var minNum = Math.min.apply(null, arr);
  var sum = 0;
  for (var i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
}
