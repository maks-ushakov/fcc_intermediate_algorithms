function translatePigLatin(str) {
  var vowels = ["a", "o", "u", "i", "e"];
  var pigLatinStr = "";
  if (vowels.indexOf(str[0]) !== -1) {
    pigLatinStr = str + "way";
  } else {
    var strArr = str.split('');
    while(vowels.indexOf(strArr[0]) === -1) {
      strArr.push(strArr.shift());
    }
    pigLatinStr = strArr.join('') + "ay";
  }
  return pigLatinStr;
}
