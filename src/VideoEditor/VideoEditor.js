import Timeline from './Timeline/Timeline.js';
import { createCropSVG } from './utils/svg-crop-overlay.js';
import Loader from './Loader/Loader.js';
import axios from 'axios';
import './video-editor.css';
// import '@fontawesome/css/font-awesome.min.css';

/**
 * To do: find moment to revoke object url of video src
 */
class VideoEditor {
  /**
   *
   * @param {object} param0
   * @property {Blob|string} videoSrc
   * @property {object}  crop - the width and height of video crop
   * @property {object}  [transformations] - { crop : { w, h, x, y}, time { in, out }}
   * @property {number}  [maxHeight] - the max height of the video editor, default is 300
   * @property {Function}  [onError] - the max height of the video editor, default is 300
   */
  constructor({ src, crop, transformations, maxHeight, onError, onReady }) {
    this.videoSrc = src;
    this.crop = crop;
    this.transformations = transformations;
    this.video = null;
    this.videoEditorContainer = null;
    this.timeline = null;
    this.maxHeight = maxHeight || 300;
    this.loader = new Loader({ message: 'Loading video' });
    this.onError = onError;
    this.onReady = onReady;
    // bind

    this.handleLoadedMetaData = this.handleLoadedMetaData.bind(this);
    this.handleAxiosError = this.handleAxiosError.bind(this);
  }

  createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.className = 'video-editor-wrapper';
    return wrapper;
  }

  async createVideoEditor() {
    this.videoEditorContainer = document.createElement('div');
    this.videoEditorContainer.style.opacity = 0;
    this.videoEditorContainer.className = 'video-editor-container';

    this.loader.updateMessage('Loading video');
    this.videoEditorContainer.append(await this.createVideo());
    this.loader.updateMessage('Initializing video editor');
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

  async createVideo() {
    const vidContainer = document.createElement('div');
    vidContainer.className = 'video-container';
    const vidWrap = document.createElement('div');
    vidWrap.className = 'video-wrap';
    this.video = document.createElement('video');
    this.video.id = 'video-preview';
    this.video.className = 'preview';
    const src = await this.getVideoBlob();
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

  handleVideoDownloadProgress(progressEvent) {
    const progress = parseInt(progressEvent.progress * 100);
    this.loader.updateMessage(`Loading video ${progress}%`);
  }

  async getVideoBlob() {
    let blob;
    console.log('get video blob');
    if (!(this.videoSrc instanceof Blob) && typeof this.videoSrc != 'string') {
      throw new TypeError('video src must be a Blob or url, found ' + typeof src);
    }
    if (!(this.videoSrc instanceof Blob)) {
      blob = await axios(this.videoSrc, {
        onDownloadProgress: this.handleVideoDownloadProgress.bind(this),
        responseType: 'blob',
      })
        .then((res) => {
          console.log('axios res', res);
          return res?.data;
        })
        .catch(this.handleAxiosError);
    }
    blob = URL.createObjectURL(blob);
    return blob;
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
      transformations: this.transformations,
      onReady: this.handleTimelineReady.bind(this),
      onError: this.onError,
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

  handleTimelineReady() {
    this.show();
    if (this.onReady instanceof Function) {
      this.onReady();
    }
  }

  show() {
    this.videoEditorContainer.style.opacity = 1;
    this.loader.hide();
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

  handleError(error) {
    if (this.onError instanceof Function) {
      this.onError(error);
    }
  }

  handleAxiosError(error) {
    // show error message
    this.loader.showError(`There was an error loading the video`);
    // generate custom axios error
    const axiosError = new Error('Fetch video error: ');
    const { response, message } = error;
    axiosError.message = message;
    if (response?.statusText) {
      axiosError.message = `${customErr.message}: ${response.statusText}`;
    }
    axiosError.name = 'AxiosError';

    this.handleError(axiosError);
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

  async render(container) {
    try {
      const wrapper = this.createWrapper();
      this.loader.render(wrapper);
      container.append(wrapper);
      const videoEditor = await this.createVideoEditor();
      wrapper.append(videoEditor);
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default VideoEditor;
