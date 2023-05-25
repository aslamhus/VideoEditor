import MenuBar from './MenuBar/MenuBar.js';
import Timeline from './Timeline/Timeline.js';
import { createCropSVG } from './utils/svg-crop-overlay.js';
import Loader from './Loader/Loader.js';
import axios from 'axios';
import './types.js';
import './video-editor.css';
import '@fontawesome/css/font-awesome.min.css';

/**
 * To do: find moment to revoke object url of video src

 */

class VideoEditor {
  /**
   *
   *
   *
   * @typedef {Object} constructor
   * @property {Blob|string} videoSrc
   * @property {object}  crop - the width and height of video crop
   * @property {transformations} transformations
   * @property {number}  [maxHeight] - the max height of the video editor, default is 300
   * @property {Function}  [onError] - error callback. If the error type is AxiosError, the error will contain
   * status and statusText properties.
   * @property {Function}  [onReady] - onReady callback
   * @property {Function} [onSave] - onSave callback. Fired when save button is clicked. Returns transformations and time indices.
   */

  /**
   * @param {constructor} constructor
   */
  constructor({ src, crop, transformations, maxHeight, onError, onReady, onSave }) {
    this.videoSrc = src;
    this.crop = crop;
    this.transformations = transformations;
    this.video = null;
    this.videoEditorContainer = null;
    this.maxHeight = maxHeight || 300;
    this.onError = onError;
    this.onReady = onReady;
    this.onSave = onSave;
    // both timeline and info bar are invoked when we know the video duration
    this.timeline = null;
    this.loader = new Loader({ message: 'Loading video' });
    this.menuBar = new MenuBar({
      inlineStartButtons: [
        {
          label: '?',
          title: 'Help',
          className: 'help-button',
          onClick: () => {
            console.log('????');
          },
        },
      ],
      inlineEndButtons: [
        {
          label: 'Crop',
          title: 'Crop',
          toggle: true,
          className: 'crop-button',
          fontAwesomeIcon: 'fa fa-crop',
          onClick: this.handleToggleCrop.bind(this),
        },
        {
          label: 'Save',
          title: 'Save',
          className: 'save-button',
          fontAwesomeIcon: 'fa fa-check',
          onClick: this.handleSaveButtonClick.bind(this),
        },
      ],
    });
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
    // video element
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
    this.video.style.width = '100%';
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
    if (!(this.videoSrc instanceof Blob) && typeof this.videoSrc != 'string') {
      throw new TypeError('video src must be a Blob or url, found ' + typeof src);
    }
    if (!(this.videoSrc instanceof Blob)) {
      blob = await axios(this.videoSrc, {
        onDownloadProgress: this.handleVideoDownloadProgress.bind(this),
        responseType: 'blob',
      })
        .then((res) => {
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

  /**
   * handle duration change
   *
   * Renders timeline   when we have the duration.
   * This event occurs after the initial render and precipitates
   * the timelineReady event / onReady callback.
   *
   * Once we have rendered the timeline we can remove
   * the event listeners listening for the video duration/metadata.
   *
   * @returns {void}
   */
  handleDurationChange() {
    // console.info(this.video.readyState);
    if (!isFinite(this.video.duration)) {
      console.error('durationchange: duration is infinity', this.video.duration);
      return;
    }
    // console.info('durationchange', this.video.duration);
    this.video.pause();
    this.video.currentTime = 0;
    this.video.playbackRate = 1;
    console.info('%cRender Timeline', 'color:green');
    // render timeline
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

    // remove events
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

  handleToggleCrop(event, toggleState) {
    const { currentTarget } = event;
    this.timeline.handleToggleCropper(toggleState);
    const span = currentTarget.querySelector('span');
    const icon = currentTarget.querySelector('i');
    if (toggleState) {
      span.innerText = 'Done';
      icon.style.display = 'none';
      this.timeline.controls.disableControlButtons();
      this.timeline.disable();
    } else {
      span.innerText = 'Crop';
      icon.style.display = '';
      this.timeline.controls.enableControlButtons();
      this.timeline.enable();
    }
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
    const displayErrorMessage = `There was an error loading the video`;
    this.loader.showError(displayErrorMessage);
    // generate custom axios error
    const axiosError = new Error(displayErrorMessage);
    const { response, message } = error || {};
    axiosError.message = message;
    if (response?.status) {
      axiosError.message = `${axiosError.message}: ${response.statusText}`;
      axiosError.statusText = response?.statusText;

      axiosError.status = response?.status;
    }
    axiosError.name = 'AxiosError';
    this.handleError(axiosError);
  }

  handleSaveButtonClick(event) {
    if (this.onSave instanceof Function) {
      const transformations = this.saveVideo();
      this.onSave(transformations);
    }
  }

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
      //  loader
      this.loader.render(wrapper);
      container.append(wrapper);
      // menu bar
      this.menuBar.render(wrapper);
      //  video editor
      const videoEditor = await this.createVideoEditor();
      wrapper.append(videoEditor);
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default VideoEditor;
