import FrameRenderer from './FrameRenderer';
import ClipCropper from './ClipCropper';
import RangeSelector from '../../RangeSelector/RangeSelector';
import './clip.css';

class Clip {
  constructor({
    time,
    crop,
    frameTotalLimit,
    video,
    playHead,
    getTimelineElement,
    getVideoDuration,
    setVideoTimeIndex,
    initialMarkers,
    limit,
    popover,
    onRangeUpdate,
    onRangeLimit,
    onMarkerDrag,
    onTimelineClick,
    onClipReady,
  }) {
    if (time.in == undefined || !time.out == undefined) {
      console.error('Clip must have in and out time', time);
      throw new Error('Clip must have in and out time');
    }
    // video
    this.video = video;
    // crop
    this.crop = crop;
    this.cropper = null;
    // time
    this.time = time;
    this.id = Math.random().toString(36).substring(7);
    // clip
    this.clipContainer = null;
    this.duration = this.time.out - this.time.in;
    this.width = this.calcClipWidth();
    this.ready = false;
    // callbacks
    this.onTimelineClick = onTimelineClick;
    this.onClipReady = onClipReady;
    // props
    this.getTimelineElement = getTimelineElement;
    // frame renderer
    this.frameRenderer = new FrameRenderer({
      time,
      video,
      frameTotalLimit,
      crop,
      getTimelineElement,
    });
    // range selector
    this.rangeSelector = new RangeSelector({
      video,
      playHead,
      getTimelineElement,
      getVideoDuration,
      setVideoTimeIndex,
      initialMarkers,
      limit,
      popover,
      onRangeUpdate,
      onRangeLimit,
      onMarkerDrag,
    });
    // clip cropper
    this.clipCropper = new ClipCropper({ video, crop });

    // bind
  }

  attachClipsEvents() {
    this.clipContainer.addEventListener('mouseup', this.handleClipMouseUp.bind(this), false);
  }

  isOutOfBounds(timeIndex) {
    return timeIndex < this.time.in || timeIndex > this.time.out;
  }

  isInBounds(timeIndex) {
    return !this.isOutOfBounds(timeIndex);
  }

  calcClipWidth() {
    return (this.duration / this.video.duration) * 100;
  }

  handleClipMouseUp(event) {
    event.preventDefault();
    /**
     * If the range selector is being dragged, the mouseup should not fire.
     * We do ne
     */
    if (this.rangeSelector.isDragging) {
      return;
    }
    this.playHead.show();
    const { offsetX, clientX, layerX, target, currentTarget } = event;
    /**
     *
     * If the range selector is enabled,
     * only allow click/touch inside range
     *  */
    if (!this.rangeSelector.hidden && !target.closest('.range-selector')) return;
    this.rangeSelector.setCurrentMarker(this.playHead);
    const { left, width } = this.getTimelineElement().getBoundingClientRect();
    const mousePos = clientX - left;
    const timeIndex = (mousePos / width) * this.video.duration;
    /**
     * if video is playing,
     * keep playhead at position while the mouse is down
     * so that when the mouse is released, the playhead continues
     * to play
     */
    // this.playHead.toggleAnimate(false);
    this.setVideoTimeIndex(timeIndex);
    this.video.pause();
    // hide popover
    if (!this.popover.hidden) this.popover.hide();
    // video editor onTimelineClick callback
    if (this.onTimelineClick instanceof Function) {
      this.onTimelineClick(timeIndex);
    }
  }

  handleClipReady() {
    this.ready = true;
  }

  /**
   * Create clip element with range selector
   *
   * @returns {HTMLElement} clip element
   */
  createClipElement() {
    const clip = document.createElement('div');
    clip.classList.add('clip');
    clip.setAttribute('data-clip-id', this.id);
    clip.style.width = `${this.width}%`;
    this.rangeSelector.render(clip);
    this.clipContainer = clip;
    return clip;
  }

  render(container) {
    return new Promise((resolve, reject) => {
      container.appendChild(this.createClipElement());

      this.frameRenderer.onClipReady = () => {
        // wait for clip frames to render
        this.handleClipReady();
        console.log('resolve');
        resolve(this);
      };
      // begin rendering clip frames
      this.frameRenderer.renderCanvasFrames(this.clipContainer);
      this.attachClipsEvents();
    });
  }
}

export default Clip;
