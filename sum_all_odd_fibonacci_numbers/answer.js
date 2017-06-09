function sumFibs(num) {
  var sum = 0;
  var prev = 0;
  var fib = 1;
  var temp;
  while (fib <= num) {
    sum += fib * (fib % 2); // (1 * 1) + (1 * 1) + (2 * 0 )
    
    // Get next fibonacci numger
    temp = fib;
    fib += prev;
    prev = temp;
  }
  return sum;
}
