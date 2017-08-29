function rgb (color) {
  if (color.startsWith('rgb(') && color.endsWith(')')) {
    var rgbValues = color.slice(4, -1).replace(/ /g, '').split(',');
    return rgbValues.every(function (c) {
      return /^\d+$/.test(c) && parseInt(c) <= 255;
    });
  }
  return false;
}

module.exports = rgb;
