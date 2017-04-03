function convertToRoman(num) {
	var baseRoman = ["I", "V", "X", "L", "C", "D", "M"];
	var roman = [];
	var arabArr = ("" + num).split('').reverse();

	for (var i = 0; i < arabArr.length; i++) {
		// eq. insertBefore
		roman.splice(0, 0, singleRoman(arabArr[i], baseRoman.slice(2 * i, 2 * i + 3)));
	}

	return roman.join('');

	/*
	 * Converts single decimal number to Roman number from range
	 *
	 * @param Number num - decimal number (0 - 9)
	 * @param Array range - should have minimal number, half-range number and next number
	 *
	 * @return String - uppercase roman number
	 *
	 * example: singleRoman(4, ["I", "V", "X"]) return "IV"
	 *			singleRoman(4, ["C", "D", "M"]) return "CD"
	 *
	 */			
  
  function singleRoman (num, range) {
    /* range = [current, 5current, next] */
    var result = "";
    switch (+num) {
      case 1:
      case 2:
      case 3:
        for (var i = 0; i < num; i++) {
          result += range[0];
        }
         break;
      case 4:
        result += range[0];
      case 5:
      case 6:
      case 7:
      case 8:
        result += range[1] + singleRoman(num - 5, range);
         break;
      case 9:
        result += range[0] + range[2];
        break;
    }
    return result;
  }
}
