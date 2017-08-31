var isValid = require('../is-valid/');
var toArray = require('../utils/to-array');

function InvalidColor (message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InvalidColor.prototype = Object.create(Error.prototype);
InvalidColor.prototype.name = 'InvalidColor';

function toHEX (c) {
  var val = parseInt(c).toString(16);
  // prepends 0 if needed
  return (val.length == 1) ? '0' + val : val;
}

function toRGB (c) {
  return parseInt(c, 16);
}

// transform rgb to hex color mode
function rgb (color) {
  // check if input is valid
  if (!isValid.rgb(color)) {
    throw new InvalidColor('Invalid color: ' + color);
  }
  var result = toArray.rgb(color).map(toHEX).join('');
  return {
    hex: '#' + result,
    rgb: color
  };
}

// transforms hex to rgb color mode
function hex (color) {
  // check if input is valid
  if (!isValid.hex(color)) {
    throw new InvalidColor('Invalid color: ' + color)
  }
  var result = toArray.hex(color.slice(1)).map(toRGB).join(', ');
  return {
    hex: color,
    rgb: 'rgb(' + result + ')'
  };
}

module.exports = {
  hex,
  rgb
}
