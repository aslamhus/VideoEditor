import Timeline from './Timeline/Timeline.js';

import { createCropSVG } from './utils/svg-crop-overlay';
import './video-editor.css';
import '@fontawesome/css/font-awesome.min.css';

class VideoEditor {
  /**
   *
   * @param {Object} param0
   * @property {Blob|String} videoSrc
   * @property {Object}  crop - the width and height of video crop
   */
  constructor({ videoSrc, crop }) {
    if (!(videoSrc instanceof Blob) && typeof videoSrc != 'string') {
      throw new TypeError('video src must be a Blob or url');
    }
    this.videoSrc = videoSrc;
    this.crop = crop;
    this.video = null;
    this.videoEditorContainer = null;
    this.timeline = null;

    this.handleLoadedMetaData = this.handleLoadedMetaData.bind(this);
  }

  createVideoEditor() {
    this.videoEditorContainer = document.createElement('div');
    this.videoEditorContainer.className = 'video-editor-container';
    this.videoEditorContainer.append(this.createVideo());
    return this.videoEditorContainer;
  }

  appendCropOverlay() {
    const container = this.video.closest('.video-container');
    const viewBox = { width: this.video.videoWidth, height: this.video.videoHeight };
    const svgOverlay = createCropSVG(this.crop, viewBox);
    container.append(svgOverlay);
  }

  createVideo() {
    const container = document.createElement('div');
    container.className = 'video-container';
    this.video = document.createElement('video');
    this.video.id = 'video-preview';
    this.video.className = 'preview';
    this.video.src = this.videoSrc;
    this.video.autoplay = false;
    this.video.setAttribute('playsinline', 'true');
    this.video.setAttribute('webkit-playsinline', 'true');
    this.video.playsinline = true;
    this.video.preload = 'metadata';
    this.video.controls = false;
    this.video.playbackRate = 16;
    // video events must be attached before rendering in the DOM
    this.attachVideoEvents(container);
    container.append(this.video);
    // not sure why this is here and not in constructor

    return container;
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
    console.log(`height: ${height}, width: ${width}, aspect: ${aspectRatio}`);
    const videoContainer = this.video.closest('.video-container');
    videoContainer.style.paddingBottom = `${aspectRatio * 100}%`;
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

  render(container) {
    container.append(this.createVideoEditor());
  }
}

export default VideoEditor;
