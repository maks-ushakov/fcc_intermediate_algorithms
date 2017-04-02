/**
 * Check if the predicate is truthy on all elements of a collection
 *
 * @param Array collectuin
 * @param String pre - predicate
 *
 * @return Boolean
 */
function truthCheck(collection, pre) {
	// check every collections element 
  return collection.every(function(elem) {
    return (elem.hasOwnProperty(pre) && !!elem[pre]);                          
   });
}
