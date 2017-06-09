function sumPrimes(num) {
  var sum = 0;
  var primes = [];
  var i = 2;
   while( i <= num ) {
     if(isPrime(i)) {
        primes.push(i);
        sum += i;
     }
     i += i > 2 ? 2 : 1; 
  }
  return sum;
  
function isPrime(suspect) {
    var sqrt = Math.sqrt(suspect);
    for (var j = 0; j < primes.length && j < sqrt; j++) {
      if (i % primes[j] === 0 || suspect === 1) {
         return false;  
      }
     }
    return true;
  }
}
