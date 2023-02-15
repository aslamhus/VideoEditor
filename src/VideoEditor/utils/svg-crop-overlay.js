/******/ // The require scope
/******/ var t = {
    /******/ // define getter functions for harmony exports
    /******/ d: (e, i) => {
      /******/ /******/ for (var n in i)
        t.o(i, n) &&
          !t.o(e, n) &&
          /******/ Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
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
  const i = 'xMidYMid slice';
  let n = 'xMinYMid slice';
  t.height > t.width && (n = i);
  const o = 'http://www.w3.org/2000/svg',
    r = document.createElementNS(o, 'svg');
  r.setAttribute('width', '100%'),
    r.setAttribute('height', '100%'),
    r.setAttribute('viewBox', `0 0 ${e.width} ${e.height}`),
    r.setAttribute('preserveAspectRatio', n);
  const h = document.createElementNS(o, 'defs'),
    c = document.createElementNS(o, 'style');
  c.textContent =
    '\n      .cls-1 {\n          fill: #0c0c0c;\n          fill-rule: evenodd;\n          opacity: 1;\n      }';
  const s = document.createElementNS(o, 'path');
  s.classList.add('cls-1');
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
    let i, n, o;
    const r = e.height / e.width;
    e.height > e.width
      ? // portrait, find width
        ((i = t.height / e.height), (o = t.height), (n = o / r))
      : // landscape, find height
        ((i = t.width / e.width), (n = t.width), (o = n * r));
    // get literal crop height/width from svg dimensions
    const h = ((t.width - n) / 2).toFixed(2),
      c = h,
      s = parseInt(c) + parseInt(n),
      d = ((t.height - o) / 2).toFixed(2),
      a = d,
      p = parseInt(a) + parseInt(o),
      l = `M0,0H${t.width}V${t.height}H0V0ZM${c},${a}H${s}V${p}H${c}V1Z`;
    return l;
  })({ viewBox: e, cropDimensions: t });
  return s.setAttribute('d', d), r.append(h), h.append(c), r.append(s), r;
}
/* harmony export */ t.d(e, {
  /* harmony export */ k: () => /* binding */ createCropSVG,
  /* harmony export */
});
var i = e.k;
export { i as createCropSVG };
