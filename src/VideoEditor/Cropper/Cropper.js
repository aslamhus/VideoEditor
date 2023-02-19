import Croppie from 'croppie';
import '../../../node_modules/croppie/croppie.css';

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
  constructor({ src, el, viewport, boundary }) {
    if (!el) {
      throw new TypeError('Cropper element cannot be null');
    }

    el.addEventListener('update', this.handleUpdate.bind(this));
    this.croppie = new Croppie(el, {
      viewport,
      boundary,
      showZoomer: true,
      customClass: 'cropper',
      // enableOrientation: true,
      // enableResize: true,
    });
    this.croppie.bind({
      url: src,
      // orientation: 1,
    });
    this.el = el;
    this.elementValues = { x: null, y: null, zoom: null };
    this.initialValues = { x: null, y: null, zoom: null };
    this.zoomRangeInput = el.querySelector('input[type=range]');
    this.img = el.querySelector('img');
    this.hidden = false;
    this.zoom = 0;
    this.x = 0;
    this.y = 0;
    this.origin = 0;
    this.getInitialElementValues();
    this.attachEvents();
  }

  attachEvents() {
    this.zoomRangeInput.addEventListener('change', this.handleZoomRangeChange.bind(this));
    window.addEventListener('pointerdown', this.touchdown.bind(this));
    window.addEventListener('pointerup', this.touchup.bind(this));
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
      const { x, y } = this.el.querySelector('.cr-overlay').getBoundingClientRect();
      this.initialValues.x = x;
      this.initialValues.y = y;
    }
  }

  getTransformOrigin(transformOrigin) {
    return transformOrigin.replace(/px/gi, '').split(' ');
  }

  touchup(event) {
    // const [x, y] = this.getTransformCoordinates(this.el);
    const img = this.el.querySelector('img');
    const { x, y } = this.el.querySelector('.cr-overlay').getBoundingClientRect();
    this.x = x;
    this.y = y;
    this.origin = this.getTransformOrigin(img.style.transformOrigin);
    // const [originX, originY] = this.origin;
    // const [imgX, imgY] = this.getTransformCoordinates(this.el);
    // const minusOrigin = { x: Number(originX) + imgX, y: Number(originY) + imgY };
    // console.log('minusOrigin', minusOrigin);
    console.log('----------');
    console.log('current transform origin', this.origin);
    console.log('current zoom', this.zoom);
    console.log('current x,y', x, y);
  }

  getZoomRangeValue() {
    return this.zoomRangeInput.value;
  }

  handleCrop(blob) {
    //on button click
    this.croppie.result('blob').then(function (blob) {
      // do something with cropped blob
      console.log('blob');
    });
  }

  handleUpdate(event) {
    const {
      detail: { points, zoom, orientation },
    } = event;
    if (!this.initialValues) {
      // this.initialValues = { points, zoom, orientation };
      // console.log('initial', { points, zoom });
    } else {
      // console.log('update', { points, zoom });
    }
    // this.getInitialValues();
  }

  /**
   *
   * @param {string} src - src url
   */
  updateSrc(src) {
    const { points, zoom, orientation } = this.croppie.get();
    this.croppie.bind({
      url: src,
      points,
      zoom,
    });
  }

  show() {
    this.el.style.display = '';
    this.hidden = false;
  }

  hide() {
    this.el.style.display = 'none';
    this.hidden = true;
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

  destroy() {
    this.croppie.destroy();
  }

  getRelativeTransformStyle() {
    // get relative zoom
    const ratio = this.elementValues.zoom / this.initialValues.zoom;
    const delta = this.getCropDelta();
    const relativeScale = ((delta.zoomDelta || 0) + Number(this.initialValues.zoom)) * ratio;
    // get relative x and y
    const x = delta.xDelta;
    const y = delta.yDelta;
    // const relativeX =
    console.log('relativeScale', relativeScale);
    // console.log('--------- ---------');
    // console.log('initial x', this.initialValues.x);
    // console.log('element x', this.elementValues.x);
    // console.log('current x', this.x);
    // console.log('deltax,deltay', x, y);

    return { x, y, scale: relativeScale };
  }

  getCropDelta() {
    const delta = {
      zoomDelta: this.zoom - this.initialValues.zoom,
      xDelta: this.x - this.initialValues.x,
      yDelta: this.y - this.initialValues.y,
    };
    return delta;
  }

  /**
   * Get result
   *
   * @returns {Promise<DataURI>} - a promise that resolves  dataURI of the cropped element
   */
  getResult() {
    return this.croppie.result();
  }
}

export default Cropper;
