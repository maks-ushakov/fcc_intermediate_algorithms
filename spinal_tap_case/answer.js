function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/(\w)[_]?([A-Z])/g,"$1 $2")
            .toLowerCase()
            .replace(/\s/g, "-");
}
