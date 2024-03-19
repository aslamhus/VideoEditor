export function getTranslateX(el) {
  const styles = getComputedStyle(el);
  var matrix = new WebKitCSSMatrix(styles.transform);
  return matrix.m41;
}

/**
 * Convert decimal to time index
 *
 * @param {number} timeIndex
 * @param {number} precision 1|2|3 - the decimal point precision
 *
 * @returns {string} - the time in mm : ss
 */
export const convertDecimalToTime = (timeIndex, precision = 2) => {
  let minutes = 0,
    seconds = 0;
  if (timeIndex > 60) {
    minutes = Math.floor(parseFloat(timeIndex) / 60);
    seconds = parseFloat(timeIndex) % 60;
  } else {
    seconds = parseFloat(timeIndex);
  }
  seconds = Number(seconds).toFixed(precision);
  //add 0s
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${minutes}:${seconds}`;
};

export const isMobile = () => {
  return window.matchMedia('(max-width: 768px)').matches;
};

export const createElement = (tag, { properties, style, attributes }) => {
  const el = document.createElement(tag);
  // set properties
  if (properties) {
    Object.keys(properties).forEach((key) => {
      el[key] = properties[key];
    });
  }
  // set style
  if (style) {
    Object.keys(style).forEach((key) => {
      el.style[key] = style[key];
    });
  }
  // set attributes
  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      el.setAttribute(key, attributes[key]);
    });
  }
  return el;
};
