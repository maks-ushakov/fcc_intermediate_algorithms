function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.filter(inArray(arr2));
  return newArr.concat(arr2.filter(inArray(arr1)));

  /**
   *  Check item in array 
   *  @array check 
   *  @number item
   *
   *  @return boolean
   */  
  function inArray (check) {
    return function (item) {
       return check.indexOf(item) === -1;
    };
  }
}
