var isValid = require('../is-valid/');
var toArray = require('../utils/to-array');

var parse = {
  hex: function (c) {
    var val = parseInt(c).toString(16);
    return (val.length == 1) ? "0" + val : val;
  },
  rgb: function (c) {
    return parseInt(c, 16);
  }
}

function transform (input, from, to) {
  if (!isValid[from](input))
    throw new Error("Invalid " + from.toUpperCase() + " value: " + input);

  var arr = toArray[from](input);
  var output = arr.map(parse[to]);

  return {
    [from]: format(arr, from),
    [to]: format(output, to)
  }
}

function format (input, mode) {
  switch (mode) {
    case "rgb": return "rgb(" + input.join(", ") + ")";
    case "hex": return "#" + input.join("");
    default: return undefined;
  }
}

module.exports = transform;
