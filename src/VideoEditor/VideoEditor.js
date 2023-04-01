import Timeline from './Timeline/Timeline.js';

import { createCropSVG } from './utils/svg-crop-overlay';
import './video-editor.css';
// import '@fontawesome/css/font-awesome.min.css';

/**
 * To do: find moment to revoke object url of video src
 */
class VideoEditor {
  /**
   *
   * @param {Object} param0
   * @property {Blob|String} videoSrc
   * @property {Object}  crop - the width and height of video crop
   */
  constructor({ videoSrc, crop, maxHeight }) {
    if (!(videoSrc instanceof Blob) && typeof videoSrc != 'string') {
      throw new TypeError('video src must be a Blob or url');
    }
    this.videoSrc = videoSrc;
    this.crop = crop;
    this.video = null;
    this.videoEditorContainer = null;
    this.timeline = null;
    this.maxHeight = maxHeight || 300;
    this.handleLoadedMetaData = this.handleLoadedMetaData.bind(this);
  }

  createVideoEditor() {
    this.videoEditorContainer = document.createElement('div');
    this.videoEditorContainer.className = 'video-editor-container';
    this.videoEditorContainer.append(this.createVideo());
    return this.videoEditorContainer;
  }

  createCropContainer() {
    const cropContainer = document.createElement('div');
    cropContainer.className = 'crop-container';
    cropContainer.style.position = 'absolute';
    cropContainer.style.left = 0;
    cropContainer.style.top = 0;
    cropContainer.style.zIndex = 3;
    cropContainer.style.width = '100%';
    cropContainer.style.height = '100%';
    return cropContainer;
  }

  appendCropOverlay() {
    const container = this.video.closest('.video-container');
    const viewBox = { width: this.video.videoWidth, height: this.video.videoHeight };
    const svgOverlay = createCropSVG(this.crop, viewBox);
    container.append(svgOverlay);
  }

  createVideo() {
    const vidContainer = document.createElement('div');
    vidContainer.className = 'video-container';
    const vidWrap = document.createElement('div');
    vidWrap.className = 'video-wrap';
    this.video = document.createElement('video');
    this.video.id = 'video-preview';
    this.video.className = 'preview';
    let src = this.videoSrc;
    if (this.videoSrc instanceof Blob) {
      console.log('BLOBATHON!!!');
      src = URL.createObjectURL(this.videoSrc);
    }
    this.video.src = src;
    this.video.autoplay = false;
    this.video.setAttribute('playsinline', 'true');
    this.video.setAttribute('webkit-playsinline', 'true');
    this.video.playsinline = true;
    this.video.preload = 'metadata';
    this.video.controls = false;
    this.video.playbackRate = 16;
    // video events must be attached before rendering in the DOM
    this.attachVideoEvents(vidContainer);
    vidWrap.append(this.video);
    vidContainer.append(vidWrap);
    vidContainer.append(this.createCropContainer());
    // not sure why this is here and not in constructor

    return vidContainer;
  }

  attachVideoEvents(container) {
    const handleDuration = this.handleDurationChange.bind(this);
    this.handleDurationChange = (event) => {
      handleDuration(event, container);
    };
    // this.handleLoadedMetaData();
    this.video.addEventListener('durationchange', this.handleDurationChange);
    this.video.addEventListener('loadedmetadata', this.handleLoadedMetaData);
  }

  handleDurationChange(event, container) {
    console.info(this.video.readyState);
    if (!isFinite(this.video.duration)) {
      console.error('durationchange: duration is infinity', this.video.duration);
      return;
    }
    console.info('durationchange', this.video.duration);
    this.video.pause();
    this.video.currentTime = 0;
    this.video.playbackRate = 1;
    console.info('%cRender Timeline', 'color:green');
    this.timeline = new Timeline({
      video: this.video,
      duration: this.video.duration,
      frameInterval: 10,
      crop: this.crop,
    });
    this.timeline.render(this.videoEditorContainer);
    this.removeEvents();
  }

  updateVideoContainerDimensions(width, height) {
    // aspect ratio of device
    const aspectRatio = height / width;
    // console.log(`height: ${height}, width: ${width}, aspect: ${aspectRatio}`);
    const vidWrap = this.video.closest('.video-wrap');
    const vidContainer = this.video.closest('.video-container');
    const vidBounds = this.video.getBoundingClientRect();
    if (vidBounds.height > this.maxHeight) {
      // find width based on maxHeight of video.
      let vidMaxWidth;
      vidMaxWidth = this.maxHeight / aspectRatio;
      vidContainer.style.width = `${vidMaxWidth}px`;
    }
    vidWrap.style.paddingBottom = `${aspectRatio * 100}%`;
  }

  removeEvents() {
    this.video.removeEventListener('durationchange', this.handleDurationChange);
    this.video.onloadedmetadata = null;
  }

  handleLoadedMetaData(event) {
    /**
     * loadedmetadata will return a duration of infinity.
     * This is a known bug. To get the duration,
     * we set the currentTime to a very large number.
     * This will trigger the duration change event
     * so we can retrive the duration value without having
     * to play the  entire length of the video.
     */
    console.info('loadedmetadata');

    this.video.currentTime = 1e101;
    const { videoWidth, videoHeight } = this.video;

    this.updateVideoContainerDimensions(videoWidth, videoHeight);
    this.crop && this.appendCropOverlay();
  }

  // renderVideoEditor(container) {
  //   const oldVideo = container.querySelector('video');
  //   oldVideo.style.display = 'none';
  //   oldVideo.parentElement.insertBefore(this.createVideoEditor(), oldVideo);
  // }

  saveVideo() {
    const crop = this.timeline.getCrop();
    // const in = this.timeline.rangeSelector;
    const inMarker = this.timeline.rangeSelector.inMarker.getTimeIndex();
    const outMarker = this.timeline.rangeSelector.outMarker.getTimeIndex();
    // get crop, time in / out
    return { crop, time: { in: inMarker, out: outMarker } };
  }

  render(container) {
    container.append(this.createVideoEditor());
  }
}

export default VideoEditor;
