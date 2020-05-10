/**
 * returns a hex notation
 * @param {Colour} color
 * @returns {string}
 */
function hex({ red, green, blue }) {
  return (
    "#" + [red, green, blue].map(c => c.toString(16).padStart(2, "0")).join("")
  );
}

/**
 * returns a rgba notation
 * @param {Colour} color
 * @returns {string}
 */
function rgba({ red, green, blue, alpha = 1 }) {
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/**
 * returns a hsla notation
 * Conversion formula adapted from http://en.wikipedia.org/wiki/HSL_color_space
 * @param {Colour} color
 * @returns {string}
 */
function hsla({ red: r, green: g, blue: b, alpha = 1 }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let hue;
  let saturation;
  let lightness = (max + min) / 2;

  if (max === min) {
    hue = saturation = 0; // achromatic
  } else {
    const delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case red:
        hue = (green - blue) / delta + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / delta + 2;
        break;
      case blue:
        hue = (red - green) / delta + 4;
        break;
      default:
        break;
    }

    hue /= 6;
  }

  const h = Math.round(hue * 360);
  const s = Math.round(saturation * 100);
  const l = Math.round(lightness * 100);

  return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
}

export { hex, rgba, hsla };

/**
 * Colour or color is a property of light as seen by people.
 * Most of the world's spelling of the word is colour,
 * the word color is used in American English.
 * @typedef Colour
 * @type {object}
 * @property {number} red
 * @property {number} green
 * @property {number} blue
 * @property {number} [alpha=1]
 */
