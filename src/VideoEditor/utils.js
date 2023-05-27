export function getTranslateX(el) {
  const styles = getComputedStyle(el);
  var matrix = new WebKitCSSMatrix(styles.transform);
  return matrix.m41;
}

export function decomposeMatrix(el) {
  function deltaTransformPoint(matrix, point) {
    var dx = point.x * matrix.a + point.y * matrix.c + 0;
    var dy = point.x * matrix.b + point.y * matrix.d + 0;
    return { x: dx, y: dy };
  }
  // @see https://gist.github.com/2052247
  const styles = getComputedStyle(el);
  var matrix = new WebKitCSSMatrix(styles.transform);

  // calculate delta transform point
  var px = deltaTransformPoint(matrix, { x: 0, y: 1 });
  var py = deltaTransformPoint(matrix, { x: 1, y: 0 });

  // calculate skew
  var skewX = (180 / Math.PI) * Math.atan2(px.y, px.x) - 90;
  var skewY = (180 / Math.PI) * Math.atan2(py.y, py.x);

  return {
    translateX: matrix.e,
    translateY: matrix.f,
    scaleX: Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b),
    scaleY: Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d),
    skewX: skewX,
    skewY: skewY,
    rotation: skewX, // rotation is the same as skew x
  };
}

export function getTranslateOrigin(el) {
  const styles = getComputedStyle(el);
  const origin = styles.transformOrigin.replace(/px/g, '').split(' ');
  return origin;
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
