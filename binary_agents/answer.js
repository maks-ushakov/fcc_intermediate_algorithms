function binaryAgent(str) {
  return str.split(" ")
            .map(function(item) {return String.fromCharCode(parseInt(item,2));})
            .join('');
}
