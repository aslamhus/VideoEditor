import PlayHead from './PlayHead/PlayHead.js';
import Controls from './Controls/Controls.js';
import RangeSelector from './RangeSelector/RangeSelector.js';
import Cropper from '../Cropper/Cropper.js';
import './timeline.css';

class Timeline {
  constructor({ video, duration, frameTotalLimit = 10, crop }) {
    this.video = video;
    // video
    if (!isFinite(duration)) {
      throw new Error('Video duration is non finite number: ' + duration);
    }
    this.duration = duration;
    this.frameTotalLimit = frameTotalLimit; // eventually will be timeline width divided by frame width
    this.frameInterval = this.duration / this.frameTotalLimit;
    this.crop = crop || { width: video.videoWidth, height: video.videoHeight };
    this.cropAspectRatio = this.crop.height / this.crop.width;
    // this.cropAspectRatio = this.crop.width / this.crop.height;
    this.cropper = null;
    this.timeline = null;
    this.playHead = new PlayHead({
      className: 'play-head',
      name: 'play',
      anchor: 'left',
      initialIndex: 0,
      getVideoDuration: this.getVideoDuration.bind(this),
      getTimelineElement: this.getTimelineElement.bind(this),
      isDraggable: false,
    });
    this.rangeSelector = new RangeSelector({
      video,
      playHead: this.playHead,
      getTimelineElement: this.getTimelineElement.bind(this),
      getVideoDuration: this.getVideoDuration.bind(this),
      setVideoTimeIndex: this.setVideoTimeIndex.bind(this),
    });

    this.controls = new Controls({
      video,
      onPlayClick: ({ target }) => {
        if (this.video.paused) {
          this.video.play();
        } else {
          this.video.pause();
          this.video.currentTime = this.video.currentTime + 0.01;
        }
      },
      onTrimToggle: ({ target, toggle }) => {
        if (this.rangeSelector.hidden) {
          this.rangeSelector.show();
          target.setAttribute('title', 'Reset');
        } else {
          target.setAttribute('title', 'Trim video');
          this.rangeSelector.hide();
        }
      },
      onCropToggle: async ({ target, toggle }) => {
        if (!this.cropper) {
          this.initCropper();
        } else {
          if (toggle) {
            this.getCurrentVideoFrameUrlObject().then((url) => {
              this.cropper.updateSrc(url);
              this.cropper.show();
            });
          } else {
            this.cropVideo({
              styles: this.cropper.getTransformStyles(),
              // data: this.cropper.getCropData(),
              // delta: this.cropper.getCropDelta(),
              // initial: this.cropper.getInitialValues(),
              // relativeTransform: this.cropper.getRelativeTransformStyle(),
            });
            this.cropper.hide();
          }
        }
      },
    });
  }

  setVideoTimeIndex(timeIndex) {
    this.video.currentTime = timeIndex;
  }

  getTimelineElement() {
    return this.timeline;
  }

  getVideoDuration() {
    return this.video.duration;
  }

  attachTimelineEvents() {
    this.timeline.addEventListener('mousedown', this.handleTimelineMouseDown.bind(this));
    this.timeline.addEventListener('mouseup', this.handleTimelineMouseUp.bind(this));
    this.video.addEventListener('timeupdate', this.timeupdate.bind(this));
    this.video.addEventListener('pause', this.handlePause.bind(this));
    this.video.addEventListener('playing', this.handlePlaying.bind(this));
  }

  timeupdate() {
    /**
     * If cropper is enabled,
     * update the crop source
     */
    requestAnimationFrame(() => {
      if (this.cropper && !this.cropper.hidden) {
        this.getCurrentVideoFrameUrlObject().then((url) => {
          this.cropper.updateSrc(url);
          // const img = document.createElement('img');
          // img.src = url;
          // document.body.append(img);
        });
      }
    });
  }

  handleTimelineMouseDown(event) {
    event.preventDefault();
    const { offsetX, clientX, layerX, target, currentTarget } = event;

    /**
     *
     * If the range selector is enabled,
     * only allow click/touch inside range
     *  */
    if (!this.rangeSelector.hidden && !target.closest('.range-selector')) return;
    this.rangeSelector.setCurrentMarker(this.playHead);
    const { left, width } = this.timeline.getBoundingClientRect();
    const mousePos = clientX - left;
    const timeIndex = (mousePos / width) * this.video.duration;
    /**
     * if video is playing,
     * keep playhead at position while the mouse is down
     * so that when the mouse is released, the playhead continues
     * to play
     */
    this.playHead.toggleAnimate(false);
    this.setVideoTimeIndex(timeIndex);
    this.video.pause();
  }

  handleTimelineMouseUp(event) {
    event.preventDefault();
    clearInterval(this.pressed);
    const { target } = event;
    if (!this.rangeSelector.hidden && !target.closest('.range-selector')) return;
    if (!this.video.paused) {
      // resume animation
      // this.playHead.toggleAnimate(true);
    }
  }

  handlePause(event) {
    console.info('pause');
  }

  handlePlaying(event) {
    /**
     * When the currentTime has reached the end of the video,
     * pressing play again should snap the playhead back to 0
     * before animating a smooth playback.
     */
    console.info('playing');
    this.playHead.toggleAnimate(false);
  }

  /**
   * find the x and y position where Canvas should start drawing from
   * in order to draw a frame with the correct dimensions.
   *
   * The video is centered horizontally in a div that hides the video
   * overflowing the frame
   */
  computeCrop({ width, height }) {
    if (this.crop.width == width && this.crop.height == height) {
      return [0, 0, width, height];
    }
    const sourceAspect = width / height;
    let anchor, cropHeight, cropWidth;
    let cropType;
    if (this.cropAspectRatio > 1) {
      cropType = 'landscape';
    } else if (this.cropAspectRatio < 1) {
      cropType = 'portrait';
    } else {
      cropType = 'square';
    }
    switch (cropType) {
      case 'portrait':
        anchor = this.cropAspectRatio < sourceAspect ? 'width' : 'height';
      case 'square':
      case 'landscape':
        anchor = this.cropAspectRatio > sourceAspect ? 'width' : 'height';
        break;
    }
    // console.log('crop aspect ratio', this.cropAspectRatio);
    // console.log('croptype', cropType);
    if (anchor == 'height') {
      cropHeight = height;
      cropWidth = cropHeight / this.cropAspectRatio;
    } else {
      cropWidth = width;
      cropHeight = cropWidth * this.cropAspectRatio;
    }
    const x = (width - cropWidth) / 2;
    const y = (height - cropHeight) / 2;
    return [x, y, cropWidth, cropHeight];
  }

  /**
   * Get crop
   *
   * @returns {object} - {w,h,x,y,scale}
   */
  getCrop() {
    const {
      points,
      points: [aX, aY, bX, bY],
      zoom,
    } = this.cropper.getResult();
    console.log('points', points);
    // points : [topLeftX, topLeftY, bottomRightX, bottomRightY]
    // document.body.append(result);
    // const crOverlayBounds = document.querySelector('.cr-overlay').getBoundingClientRect();
    // const crViewport = document.querySelector('.cr-overlay').getBoundingClientRect();
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

  renderCanvasFrames() {
    let countFrames = 0;
    this.video.currentTime = 0;
    const framesContainer = this.createFramesContainer();
    const handleCanPlay = () => {
      this.video.currentTime = 0.5;
      this.video.addEventListener('seeked', renderFrameOnSeek);
    };
    const renderFrameOnSeek = (event) => {
      const frameContainer = this.createFrame(this.video.currentTime);
      const canvas = frameContainer.querySelector('canvas');
      // set canvas canvas aspect ratio
      const frameHeight = this.getTimelineElement().getBoundingClientRect().height;
      // if landscape divide, if portrait multiple
      const frameWidth = frameHeight / this.cropAspectRatio;
      canvas.width = frameWidth;
      canvas.height = frameHeight;
      canvas.style.width = frameWidth + 'px';
      framesContainer.append(frameContainer);
      const videoDimensions = { width: this.video.videoWidth, height: this.video.videoHeight };
      const sourceCoordinates = this.computeCrop(videoDimensions);
      this.drawFrame(canvas, sourceCoordinates);
      canvas.style.width = '';

      const newFrameIndex = parseInt(countFrames + 1) * this.frameInterval;

      if (countFrames < this.frameTotalLimit - 1) {
        this.video.currentTime = newFrameIndex;
      } else {
        console.info(
          `%cFinished rendering frames: index: ${newFrameIndex} duration: ${this.duration} `,
          'color:green'
        );
        this.video.removeEventListener('seeked', renderFrameOnSeek);
        this.video.removeEventListener('canplay', handleCanPlay);
        const myEvent = new Event('timelineReady');
        this.timeline.dispatchEvent(myEvent);
      }
      countFrames++;
    };

    // attach on seek event
    this.video.addEventListener('canplay', handleCanPlay);

    // add frames container
    this.timeline.append(framesContainer);
    // begin rendering frames
  }

  /**
   * Draw frame on canvas
   *
   * @param {HTMLCanvasElement} frame
   * @param {Array<Number>} sourceRect - optional source coordinates
   * @property {Number} sourceRect[] - The x-axis coordinate of the top left corner of the
   * sub-rectangle of the source image to draw into the destination context.
   * @property {Number} sourceRect[] - The y-axis coordinate of the top left corner of the
   * sub-rectangle of the source image to draw into the destination context.
   * @property {Number} sourceRect[] - The width of the sub-rectangle of the source image
   * to draw into the destination context.
   *  @property {Number} sourceRect[] - The height of the sub-rectangle of the source image
   * to draw into the destination context.
   */
  drawFrame(frame, sourceRect) {
    const [sX, sY, sWidth, sHeight] = sourceRect;
    const frameBounds = frame.getBoundingClientRect();
    // console.log(`sX: ${sX}, sY: ${sY}, sWidth: ${sWidth}, sHeight: ${sHeight}`);
    frame
      .getContext('2d')
      .drawImage(this.video, sX, sY, sWidth, sHeight, 0, 0, frameBounds.width, frameBounds.height);
  }

  async initCropper() {
    this.video.style.width = 'auto';
    const src = await this.getCurrentVideoFrameUrlObject().catch((error) => {
      console.error('cropper faied to init', error);
    });
    const vidContainer = document.querySelector('.video-container');
    const cropContainer = vidContainer.querySelector('.crop-container');
    const { width: containerWidth, height: containerHeight } = vidContainer.getBoundingClientRect();
    const [x, y, cropWidth, cropHeight] = this.computeCrop({
      width: containerWidth,
      height: containerHeight,
    });
    console.log(`cropWidth ${cropWidth} cropheight ${cropHeight}`);
    // viewport not working for landscape - check computerCrop method.
    // const viewport = { width: cropWidth, height: cropHeight };
    const viewport = { width: cropWidth, height: cropHeight };
    const boundary = { width: containerWidth, height: containerHeight };
    this.cropper = new Cropper({ src, el: cropContainer, viewport, boundary });
  }

  createFramesContainer() {
    const framesContainer = document.createElement('div');
    framesContainer.classList.add('frames-container');
    return framesContainer;
  }
  /**
   * @returns {HTMLElement} - Canvas
   */
  createFrame(timeIndex) {
    const frameContainer = document.createElement('div');
    const frameWidth = 100 / this.frameTotalLimit;
    frameContainer.style.width = `${frameWidth}%`;
    frameContainer.style.height = '100%';
    frameContainer.className = 'frame';
    frameContainer.id = `frame_${timeIndex}`;
    const frame = document.createElement('canvas');
    frameContainer.append(frame);
    return frameContainer;
  }

  createTimelineContainer() {
    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-container';
    return timelineContainer;
  }

  createTimeline() {
    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    return timeline;
  }

  renderTimeline(container) {
    const timelineContainer = this.createTimelineContainer();
    this.timeline = this.createTimeline();
    this.rangeSelector.render(this.timeline);
    this.playHead.render(this.timeline);
    timelineContainer.append(this.timeline);
    container.append(timelineContainer);
    this.attachTimelineEvents();
  }

  render(container) {
    this.renderTimeline(container);
    this.controls.render(container);
    this.renderCanvasFrames();
  }
}

export default Timeline;
