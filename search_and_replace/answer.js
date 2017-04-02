function myReplace(str, before, after) {
  return str.replace(before, function(beforeWord) {
	if(beforeWord[0].toUpperCase() === beforeWord[0]) {
		after = after[0].toUpperCase() + after.slice(1);
	}
	return after;
  });
}
