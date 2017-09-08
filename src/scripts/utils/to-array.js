// expands hex to 6 digit form
function expand (color) {
  var expanded = '';
  for (var i in color)
    expanded += color[i] + color[i];
  return expanded;
}

// creates an array of rgb values
function hex (color) {
  var result = [];
  color = color.slice(1);
  // expands hex if shorthand form
  if (color.length == 3)
    color = expand(color);
  for (var i = 0; i < color.length; i += 2)
    result.push(color.substring(i, i+2));
  return result;
}

function rgb (color) {
  return color.slice(4, -1).replace(/ /g, '').split(',');
}

module.exports = {
  hex,
  rgb
};
