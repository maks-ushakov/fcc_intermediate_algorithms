function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  arr = collection.filter(function(item) {
    for (var i = 0; i < keys.length; i++) {
       if (!item.hasOwnProperty(keys[i]) || item[keys[i]] !== source[keys[i]]) {
         return false;
       }
      }
    return true;
  } );
  
  // Only change code above this line
  return arr;
}
