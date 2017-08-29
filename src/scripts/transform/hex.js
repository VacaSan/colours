var validate = require('../validate/');
var toArray = require('../utils/to-array').hex;

// transforms hex to rgb color mode
function hex (hex) {
  // check if input is valid
  if (!validate.hex(hex)) {
    console.error('Invalid input type. Expected input to be a valid hex value. Received:', hex);
    return null;
  }
  var result = toArray(hex.slice(1)).map(function (c) {
    return parseInt(c, 16);
  }).join(', ');
  return {
    hex,
    rgb: 'rgb(' + result + ')'
  };
}

module.exports = hex;
