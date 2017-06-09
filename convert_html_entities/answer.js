function convertHTML(str) {
  // List of HTML entities
  var entities = {
    "&" : "&amp;",
    ">" : "&gt;",
    "<" : "&lt;",
    "\"" : "&quot;",
    "'"  : "&apos;"
  };
  //  reg = /&|>|<|\"|'/g
   var reg = new RegExp(Object.keys(entities).join("|"), "g");
   return str.replace(reg, function(match) {
     return entities[match];
  } );
}
