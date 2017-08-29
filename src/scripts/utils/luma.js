var toArray = require('./to-array').rgb;

function luma (rgb) {
  var arr = toArray(rgb);
  return arr[0] * 0.2126 + arr[1] * 0.7152 + arr[2] * 0.0722;
}

module.exports = luma;
