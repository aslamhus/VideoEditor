// import Croppie from '../../../node_modules/croppie/croppie.js';
import Croppie from './croppie-test.js';
import 'croppie/croppie.css';
// custom cropper styles
import './cropper.css';

/**
 * Crop steps
 *
 * 1. add crop div which conta
 * 3. add crop-overlay div which contains:
 *
 * - cloned element in same position as original
 * - 8 resize buttons on
 *  each corner and mid point of each side to
 * 4. Original element
 * 4.
 *
 */

class Cropper {
  constructor({ src, el, viewport, boundary, points, scale }) {
    if (!el) {
      throw new TypeError('Cropper element cannot be null');
    }
    console.log('points', points, scale);

    el.addEventListener('update', this.handleUpdate.bind(this));
    this.src = src;
    this.viewport = viewport;
    this.boundary = boundary;
    this.croppie = new Croppie(el, {
      viewport,
      boundary,
      showZoomer: true,
      customClass: 'cropper',
      // enableOrientation: true,
      // enableResize: true,
    });
    this.croppie.bind({
      url: this.src,
      points,
      zoom: scale,
      // orientation: 1,
    });
    this.el = el;
    this.elementValues = { x: null, y: null, zoom: null };
    // croppie values
    this.points = null;
    this.zoom = null;
    this.orientation = null;
    //
    this.zoomRangeInput = el.querySelector('input[type=range]');
    this.img = el.querySelector('img');
    this.hidden = false;
    this.zoom = 0;
    this.x = 0;
    this.y = 0;
    this.origin = 0;
    // this.getInitialElementValues();
    this.touchdown = this.touchdown.bind(this);
    this.touchup = this.touchup.bind(this);
    this.handleZoomRangeChange = this.handleZoomRangeChange.bind(this);
    this.update = this.update.bind(this);
    this.attachEvents();
    this.initialValues = { x: null, y: null, zoom: null };

    // this.resetInitialValues();
  }

  getTransformStyles() {
    const img = this.el.querySelector('.cropper img');
    return { transform: img.style.transform, transformOrigin: img.style.transformOrigin };
  }

  getCropData() {
    return this.croppie.get();
  }

  getInitialValues() {
    return this.initialValues;
  }

  getInitialElementValues() {
    const [x, y] = this.getTransformCoordinates(this.el);
    const zoom = this.getScale(this.el);
    this.elementValues = { x, y, zoom };
  }

  getScale(el) {
    const { width } = el.getBoundingClientRect();
    return width / el.offsetWidth;
  }

  getRelativeTransformStyle() {
    // get relative zoom
    // console.log('---------- crop finished');
    const ratio = this.elementValues.zoom / this.initialValues.zoom;
    const { xDelta, yDelta, zoomDelta: zoom } = this.getCropDelta();
    const relativeScale = ((zoom || 0) + Number(this.initialValues.zoom)) * ratio;

    return {
      x: this.x,
      y: this.y,
      deltaX: xDelta,
      deltaY: yDelta,
      relativeScale,
      scale: this.zoom,
      transformOrigin: this.origin,
    };
  }

  getCropDelta() {
    const delta = {
      zoomDelta: this.zoom ? this.zoom - this.initialValues.zoom : 0,
      xDelta: this.x ? this.x - this.initialValues.x : 0,
      yDelta: this.y ? this.y - this.initialValues.y : 0,
    };
    // console.log('delta', delta);
    return delta;
  }

  getTransformOrigin(transformOrigin) {
    return transformOrigin.replace(/px/gi, '').split(' ');
  }

  /**
   * Get result
   *
   * @returns {Promise<DataURI>} - a promise that resolves  dataURI of the cropped element
   */
  getResult() {
    return this.croppie.result();
  }

  getZoomRangeValue() {
    return this.zoomRangeInput.value;
  }

  getZoomRangeMinMax() {
    return { min: this.zoomRangeInput.min, max: this.zoomRangeInput.max };
  }

  /**
   *
   * @returns {Array} - [x,y]
   */
  getTransformCoordinates(el) {
    const img = el.querySelector('img');
    const matrix = new WebKitCSSMatrix(img.style.transform);
    return [matrix.m41, matrix.m42];
  }

  /* events */

  attachEvents() {
    this.zoomRangeInput.addEventListener('change', this.handleZoomRangeChange);
    window.addEventListener('pointerdown', this.touchdown);
    window.addEventListener('pointerup', this.touchup);
  }

  removeEvents() {
    this.zoomRangeInput.removeEventListener('change', this.handleZoomRangeChange);
    window.removeEventListener('pointerdown', this.touchdown);
    window.removeEventListener('pointerup', this.touchup);
  }

  handleCrop(blob) {
    this.croppie.result('blob').then(function (blob) {
      console.log('blob');
    });
  }

  handleUpdate(event) {
    const {
      detail: { points, zoom, orientation },
    } = event;
    this.points = points;
    this.zoom = zoom;
    this.orientation = orientation;
  }
  handleZoomRangeChange(event) {
    const {
      target: { value },
    } = event;
    if (!this.initialValues?.zoom) {
      this.initialValues.zoom = value;
      const img = this.el.querySelector('img');
      this.origin = this.getTransformOrigin(img.style.transformOrigin);
    }
    this.zoom = value;
  }

  touchdown(event) {
    if (!this.initialValues.x) {
      const [x, y] = this.getTransformCoordinates(this.el);
      // const { x, y } = this.el.querySelector('.cr-overlay').getBoundingClientRect();
      this.initialValues.x = x;
      this.initialValues.y = y;
      // console.log('initialValues', x, y);
    }
  }

  /**
   *
   *
   * Touchup
   *
   * set current values (only after establishing baseline)
   *
   * @param {Event} event
   */
  touchup(event) {
    const { target } = event;
    if (target.closest('.cropper') == null) {
      event.preventDefault();
      return false;
    }
    // const [x, y] = this.getTransformCoordinates(this.el);
    const img = this.el.querySelector('img');
    // const { x, y } = this.el.querySelector('.cr-overlay').getBoundingClientRect();
    const [x, y] = this.getTransformCoordinates(this.el);
    this.x = x;
    this.y = y;
    this.origin = this.getTransformOrigin(img.style.transformOrigin);
    // const [originX, originY] = this.origin;
    // const [imgX, imgY] = this.getTransformCoordinates(this.el);
    // const minusOrigin = { x: Number(originX) + imgX, y: Number(originY) + imgY };
    // console.log('minusOrigin', minusOrigin);
    // console.log('---------- touchup');
    // console.log('current transform origin', this.origin);
    // console.log('current zoom', this.zoom);
    // console.log('current x', x);
    // console.log('deltaX', this.getCropDelta().xDelta);

    // pc = preview
    // console.log('adjX', `(${center.x} - ${pc.x}) * (1 - ${scale});`);
  }

  /**
   * Update src
   * @param {string} src - src url
   * @returns {Promise} - returns a promise that resolves when the croppie src has been loaded
   */
  updateSrc(src) {
    const { points, zoom, orientation } = this.croppie.get();
    console.log('croppie get', { points, zoom });
    console.log('saved values', { points: this.points, zoom: this.zoom });
    return this.croppie.bind({
      url: src,
      points,
      zoom,
    });
  }

  update() {
    const { points, zoom, orientation } = this.croppie.get();

    console.log('updating croppie', { points, zoom });
    this.croppie.setZoom(zoom);
    // return this.croppie.bind({
    //   url: this.src,
    //   points,
    //   zoom,
    // });
  }

  resetInitialValues() {
    // this.initialValues = { x: null, y: null, zoom: null };
    const [x, y] = this.getTransformCoordinates(this.el);
    // const { x, y } = this.el.querySelector('.cr-overlay').getBoundingClientRect();
    this.initialValues.x = x;
    this.initialValues.y = y;
    this.x = x;
    this.y = y;
    // this.initialValues.zoom = this.zoomRangeInput.value;
  }

  hide() {
    this.removeEvents();
    this.el.style.visibility = 'hidden';
    this.hidden = true;
  }

  show() {
    this.resetInitialValues();
    this.attachEvents();
    this.el.style.visibility = 'visible';
    this.hidden = false;
  }

  destroy() {
    this.croppie.destroy();
  }

  getResult() {
    return this.croppie.get();
  }
}

export default Cropper;
