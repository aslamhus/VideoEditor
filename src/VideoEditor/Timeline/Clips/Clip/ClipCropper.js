import Cropper from '../../../Cropper/Cropper';
import { computeCrop } from '../../../Cropper/utils';

class ClipCropper {
  constructor({ video, crop }) {
    this.video = video;
    this.crop = crop;
    this.cropper = null;
  }

  async init(initialCrop) {
    let points, scale;
    if (initialCrop) {
      const { x, y, w, h } = initialCrop;
      points = [
        parseFloat(x),
        parseFloat(y),
        parseFloat(w) + parseFloat(x),
        parseFloat(h) + parseFloat(y),
      ];
      scale = parseFloat(initialCrop?.scale);
    }
    this.video.style.width = 'auto';
    const src = await this.getCurrentVideoFrameUrlObject().catch((error) => {
      console.error('cropper faied to init', error);
    });
    const vidContainer = document.querySelector('.video-container');
    const cropContainer = vidContainer.querySelector('.crop-container');
    const { width: containerWidth, height: containerHeight } = vidContainer.getBoundingClientRect();
    let [x, y, cropWidth, cropHeight] = computeCrop({
      cropWidth: this.crop.width,
      cropHeight: this.crop.height,
      width: containerWidth,
      height: containerHeight,
    });
    // viewport not working for landscape - check computerCrop method.
    // const viewport = { width: cropWidth, height: cropHeight };
    // const vpWidth = (cropWidth / containerWidth) * 100;
    // const vpHeight = (cropHeight / containerHeight) * 100;
    // console.log('viewport', `${vpWidth.toFixed(2)}%`, `${vpHeight.toFixed(2)}%`);
    if (cropWidth / cropHeight == this.video.videoWidth / this.video.videoHeight) {
      cropWidth = '100%';
      cropHeight = '100%';
    }
    const viewport = { width: cropWidth, height: cropHeight };
    const boundary = { width: '100%', height: '100%' };
    this.cropper = new Cropper({ src, el: cropContainer, viewport, boundary, points, scale });
  }

  async handleToggleCropper(toggle) {
    const svg = document.querySelector('svg');
    if (toggle) {
      if (this.cropper) {
        // show cropper
        // hide svg and video
        this.video.style.visibility = 'hidden';
        svg.style.visibility = 'hidden';
        // update cropper src
        this.getCurrentVideoFrameUrlObject().then((url) => {
          this.cropper.updateSrc(url);
          this.cropper.show();
        });
      } else {
        // initialize cropper
        await this.initCropper(this.transformations?.crop);
        this.cropper.show();
      }
    } else {
      // hide and apply cropper crop
      this.video.style.visibility = 'visible';
      svg.style.visibility = 'visible';
      this.applyCrop();
    }
  }

  applyCrop() {
    this.cropVideo({
      styles: this.cropper.getTransformStyles(),
      // data: this.cropper.getCropData(),
      // delta: this.cropper.getCropDelta(),
      // initial: this.cropper.getInitialValues(),
      // relativeTransform: this.cropper.getRelativeTransformStyle(),
    });
    this.cropper.hide();
  }

  /**
   * Get crop
   *
   * @returns {object} - {w,h,x,y,scale}
   */
  getCrop() {
    if (!this.cropper) return {};
    const {
      points,
      points: [aX, aY, bX, bY],
      zoom,
    } = this.cropper.getResult();
    const w = bX - aX;
    const h = bY - aY;
    const x = aX;
    const y = aY;
    return { w, h, x, y, scale: zoom.toFixed(3) };
  }

  cropVideo({ styles, data, delta, initial, relativeTransform }) {
    this.video.style.transform = styles.transform;
    this.video.style.transformOrigin = styles.transformOrigin;
  }

  getCurrentVideoFrameUrlObject() {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      // set the resolution
      canvas.width = this.video.videoWidth;
      canvas.height = this.video.videoHeight;
      // console.log('frameHeight, Width', frameHeight, frameWidth);
      const vidContainer = document.querySelector('.video-container');
      const { width, height } = vidContainer.getBoundingClientRect();
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.style.border = '1px solid red';
      canvas.getContext('2d').drawImage(this.video, 0, 0);
      canvas.toBlob(
        (blob) => {
          const urlObject = URL.createObjectURL(blob);
          resolve(urlObject);
        },
        'image/jpg',
        100
      );
    });
  }
}

export default ClipCropper;
