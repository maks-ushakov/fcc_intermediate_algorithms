function uniteUnique(arr) {
  return Array.prototype.reduce.call(arguments, function(newArr, item){
    return newArr.concat(item.filter(inArray(newArr)));
  },[]);
  
// Return true if array has item
  function inArray(arr) {
      return function (item) {
        return arr.indexOf(item) === -1;
      };
    }
}
