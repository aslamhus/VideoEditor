/******/ // The require scope
/******/ var t = {
    /******/ // define getter functions for harmony exports
    /******/ d: (e, i) => {
      /******/ /******/ for (var h in i)
        t.o(i, h) &&
          !t.o(e, h) &&
          /******/ Object.defineProperty(e, h, { enumerable: !0, get: i[h] });
      /******/
      /******/
    },
    /******/ o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    /******/
  },
  e = {};
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/
/**
 * Create Crop Svg
 * @param {Object} cropDimensions - width and height values for the desired crop, i.e. 16 x 9
 * @property {Number} cropDimensions.width
 * @property {Number} cropDimensions.height
 * @param {Object} viewBox - literal width and height values of the svg. These values determine the svg
 * viewbox.
 * @property {Number} viewBox.width
 * @property {Number} viewBox.height
 * @returns
 */
function createCropSVG(t = { width: 3, height: 2 }, e = { width: 640, height: 480 }) {
  const i = 'xMidYMid slice',
    h = 'xMidYMid slice';
  let r;
  switch (getAspectType(t)) {
    case 'portrait':
      // console.info('crop is portrait');
      r = h;
      break;
    case 'landscape':
    case 'square':
      // console.log('crop is square');
      r = i;
  }
  // console.log('preserveAspectRatio', preserveAspectRatio);
  const n = 'http://www.w3.org/2000/svg',
    c = document.createElementNS(n, 'svg');
  c.setAttribute('width', '100%'),
    c.setAttribute('height', '100%'),
    c.setAttribute('viewBox', `0 0 ${e.width} ${e.height}`),
    c.setAttribute('preserveAspectRatio', r);
  const s = document.createElementNS(n, 'defs'),
    o = document.createElementNS(n, 'style');
  o.textContent =
    '\n      .cls-1 {\n          fill: #0c0c0c;\n          fill-rule: evenodd;\n          opacity: 1;\n      }';
  const a = document.createElementNS(n, 'path');
  a.classList.add('cls-1');
  const d = (function getCropPathDefinition({ viewBox: t, cropDimensions: e }) {
    // you may need to dynamically set the padding-bottom of video container to the svg aspect ratio. It's set in the css right now.
    // you will also need to make sure crop is changed for the timeline frames.
    /**
     *
     *
     * M - move to
     * H - draws horizontal line
     * V - draws vertical line
     * Z - close path
     *
     * - create container of 640x480 Z  Move 157,1 HLine to 472, VLine to 481, Hline back to 157, V back to 1, close
     * path("M 0 0 H 640 V 480 H 0 V 0 Z M 157 1 H 472 V 481 H 157 V 1 Z");
     *
     *
     * cW / cH = svgW / svgH
     * 3 / 2 = 640 / 480
     *
     * for landscape:
     *
     * 2/3 = 640 / 480
     * ratio = 480 / 2 = 240
     * cropAspect = 3/2
     * cropWidth =
     */
    let i;
    // const viewBoxAspectType = getAspectType(viewBox);
    const h = getAspectType(e),
      r = e.width / e.height,
      n = t.width / t.height;
    switch (h) {
      case 'portrait':
        i = r < n ? 'width' : 'height';
      case 'square':
      case 'landscape':
        i = r > n ? 'width' : 'height';
    }
    const [c, s] = (function getRectLiteralDimensionsFromAspect({
      aspect: t = { width: r, height: h },
      rect: e = { width: r, height: h },
      anchor: i,
    }) {
      let h, r, n;
      const c = t.height / t.width;
      if ('height' == i)
        // find width
        (n = e.height / t.height), (h = e.height), (r = h / c);
      else {
        if ('width' != i)
          throw new TypeError(
            'unexpected anchor value. Must be either width or height but found: ' + i
          );
        // find height
        (n = e.width / t.width), (r = e.width), (h = r * c);
      }
      return [r, h];
    })({ aspect: e, rect: t, anchor: i });
    const o = ((t.width - c) / 2).toFixed(2),
      a = o,
      d = parseInt(a) + parseInt(c);
    const p = ((t.height - s) / 2).toFixed(2),
      w = p,
      g = parseInt(w) + parseInt(s),
      l = `M0,0H${t.width}V${t.height}H0V0ZM${a},${w}H${d}V${g}H${a}V1Z`;
    return l;
  })({ viewBox: e, cropDimensions: t });
  return a.setAttribute('d', d), c.append(s), s.append(o), c.append(a), c;
}
function getAspectType({ width: t, height: e }) {
  return t > e ? 'landscape' : t < e ? 'portrait' : 'square';
}
/* harmony export */ t.d(e, {
  /* harmony export */ k: () => /* binding */ createCropSVG,
  /* harmony export */
});
var i = e.k;
export { i as createCropSVG };
