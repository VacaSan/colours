var validate = require('../validate/');
var toArray = require('../utils/to-array').rgb;

// transform rgb to hex color mode
function rgb (rgb) {
  // check if input is valid
  if (!validate.rgb(rgb)) {
    console.error('Invalid input type. Expected input to be a valid rgb value. Received:', rgb);
    return null;
  }
  var result = toArray(rgb).map(function (c) {
    var val = parseInt(c).toString(16);
    // prepends 0 if needed
    return (val.length == 1)
            ? '0' + val
            : val;
  }).join('');
  return {
    hex: '#' + result,
    rgb
  };
}

module.exports = rgb;
