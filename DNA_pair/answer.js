function pairElement(str) {
  //DNA pair are: A-T G-C
  // write all DNA pairs
  var dnaPairs = {
    "A": "T",
    "C": "G",
    "G": "C",
    "T": "A"
  };
  return str.split('') // Take siglle Nucleo from string and make Array 
            .map(function(nucleo) {
                // For each Nucleo in Array find pair and return DNApair
              return [nucleo, dnaPairs[nucleo]];
            });
}

