import { computeCrop } from '../../../Cropper/utils';

class FrameRenderer {
  constructor({ time, video, frameTotalLimit, crop, getTimelineElement, onClipReady, clipId }) {
    this.time = time;
    this.video = video;
    // frames
    this.frameTotalLimit = frameTotalLimit;
    // this.frameWidth = getTimelineElement().getBoundingClientRect().width / frameTotalLimit;

    this.frameWidth = 100 / frameTotalLimit;
    this.frameInterval = this.video.duration / this.frameTotalLimit;
    this.clipDuration = this.time.out - this.time.in;
    this.clipFrameTotal = Math.floor(this.clipDuration / this.frameInterval);
    this.clipWidth = this.clipFrameTotal * this.frameWidth;
    console.log({
      clipFrameTotal: this.clipFrameTotal,
      frameTotalLimit,
      frameWidth: this.frameWidth,
    });
    this.crop = crop;
    this.getTimelineElement = getTimelineElement;
    this.clipId = clipId;
    // callbacks
    this.onClipReady = onClipReady;
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
    frameContainer.style.width = `${this.frameWidth}%`;
    frameContainer.style.height = '100%';
    frameContainer.className = 'frame';
    frameContainer.id = `frame_${timeIndex}`;
    const frame = document.createElement('canvas');
    frameContainer.append(frame);
    return frameContainer;
  }

  renderCanvasFrames(container) {
    // this.loader.updateMessage('Rendering frames');
    const cropAspectRatio = this.crop.width / this.crop.height;
    let countFrames = 0;
    this.video.currentTime = this.time.in;
    const framesContainer = this.createFramesContainer();
    // handle can play event
    const handleCanPlay = () => {
      const frameStartTime = parseFloat(this.time.in);
      this.video.currentTime = frameStartTime; // + 0.5??
      console.log('set frame start time', this.video.currentTime);
      this.video.addEventListener('seeked', renderFrameOnSeek);
    };
    // handle seek event
    const renderFrameOnSeek = (event) => {
      if (countFrames == 0) {
        console.log('first frame', this.video.currentTime);
      }
      const frameContainer = this.createFrame(this.video.currentTime);
      const canvas = frameContainer.querySelector('canvas');
      // set canvas canvas aspect ratio
      const frameHeight = this.getTimelineElement().getBoundingClientRect().height;
      // if landscape divide, if portrait multiple
      const frameWidth = frameHeight * cropAspectRatio;
      canvas.width = frameWidth;
      canvas.height = frameHeight;
      canvas.style.width = frameWidth + 'px';
      framesContainer.append(frameContainer);
      const videoDimensions = { width: this.video.videoWidth, height: this.video.videoHeight };
      const sourceCoordinates = computeCrop({
        cropWidth: this.crop.width,
        cropHeight: this.crop.height,
        ...videoDimensions,
      });

      this.drawFrame(canvas, sourceCoordinates);
      canvas.style.width = '';

      const newFrameIndex = parseInt(countFrames + 1) * this.frameInterval;
      console.log(`countFrames: ${countFrames}, clipFrameTotal: ${this.clipFrameTotal - 1}`);
      if (countFrames < this.clipFrameTotal - 1) {
        // go to next frame
        this.video.currentTime = newFrameIndex;
      } else {
        console.info(
          `%cFinished rendering frames: index: ${newFrameIndex} duration: ${this.video.duration} `,
          'color:green'
        );
        this.video.removeEventListener('seeked', renderFrameOnSeek);
        this.video.removeEventListener('canplay', handleCanPlay);
        this.handleClipReady();
      }

      countFrames++;
    };

    // attach on seek event
    this.video.addEventListener('canplay', handleCanPlay);

    // add frames container
    container.append(framesContainer);
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

  handleClipReady() {
    if (this.onClipReady) {
      this.onClipReady();
    }
  }
}

export default FrameRenderer;
