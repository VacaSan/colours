function colorMode (color) {
  if (color.startsWith('#'))
    return {
      input: 'hex',
      output: 'rgb'
    }
  return {
    input: 'rgb',
    output: 'hex'
  };
}

module.exports = colorMode;
