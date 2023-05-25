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
