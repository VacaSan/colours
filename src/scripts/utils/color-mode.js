function colorMode (color) {
  if (color.startsWith('#'))
    return {
      from: 'hex',
      to: 'rgb'
    }
  return {
    from: 'rgb',
    to: 'hex'
  };
}

module.exports = colorMode;
