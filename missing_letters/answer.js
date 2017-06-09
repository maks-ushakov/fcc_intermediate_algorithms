function fearNotLetter(str) {
  // get charcode for first letter
  var start = str.charCodeAt(0);
  // look each letter in string
  for (var i = 1; i < str.length; i++) {
    if(str.charCodeAt(i) !== start + i) {
      return String.fromCharCode(start + i);
    }
  }
}
