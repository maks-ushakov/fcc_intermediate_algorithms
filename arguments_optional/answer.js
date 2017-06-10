function addTogether() {
  //If first argument isn't a valid number, return undefined.
 if(isNaN(arguments[0]) || typeof(arguments[0]) !== 'number') {
       return;
   }
  
  var x = arguments[0];
  // if get 2 argumets
  // sums two arguments together
  if(arguments.length > 1) {
    return halfSum(arguments[1]);
  }
  
  //If only one argument is provided, then return a function that expects one argument and returns the sum.
  return halfSum;
  
  function halfSum (y) {
    // If second argument isn't a valid number, return undefined.
    if (!isNaN(y) && typeof(y) === 'number') {
        return   x + y;
     }
  }
}
