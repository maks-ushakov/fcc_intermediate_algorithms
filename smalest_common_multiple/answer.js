
function smallestCommons(arr) {
  /*
  Get prime diveders for each array's element
  remove repeated elements
  multiply rest dividers
  */
   
  
  var maxInRange = Math.max.apply(null, arr);
  var minInRange = Math.min.apply(null, arr);

  var byPrimeDividers = [];
  var dividers = [];
  //  Get prime diveders for each array's element
  for ( i = minInRange; i <= maxInRange; i++) {
    byPrimeDividers.push(getPrimeDividers(i));
  }
  
  // remove repeated elements
  byPrimeDividers.forEach(function (item) {
    for (var i = 0; i < dividers.length; i++) {
       for (var j = 0;  j < item.length; j++) {
        if (dividers[i] === item[j]) {
          item.splice(j,1);
          i++;
          j--;
        }
      }
    }
    dividers = dividers.concat(item);
  });
  
  // multiply rest dividers
  return dividers.reduce(function(akk, item) {
    return akk * item;
  });
                    
  function getPrimeDividers(num) {
    // get primes
    var dividers = [];
    for (var i = 2; i <= num; i++) {
      while((num % i) === 0) {
        dividers.push(i);
        num /= i;
      }
    }
    
    return dividers.slice();
  }
}
