function steamrollArray(arr) {
  return arr.reduce(function(tempArr, item) {
     if (Array.isArray(item)) { 
       return tempArr.concat(steamrollArray(item));
      } 
     return tempArr.concat(item);
   }, []);
}
