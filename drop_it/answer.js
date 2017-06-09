function dropElements(arr, func) {
  // Drop them elements.
  var counter = arr.length; // stop infinite loop
  while (!func(arr[0]) && counter-- > 0) {
    arr.shift();
  }
  return arr;
}
