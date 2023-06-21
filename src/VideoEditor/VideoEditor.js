import MenuBar from './MenuBar/MenuBar.js';
import Timeline from './Timeline/Timeline.js';
import Instructions from './Instructions';
import { createCropSVG } from './utils/svg-crop-overlay.js';
import Loader from './Loader/Loader.js';
import axios from 'axios';
import { decomposeMatrix, getTranslateOrigin } from './utils.js';
import './types.js';
import './themes.css';
import './video-editor.css';

/** font awesome, import only used icons to keep build size small */
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faCrop, faSave, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
library.add(faPlay, faPause, faCrop, faSave, faMoon, faSun);
dom.watch();

/**
 * To do:
 *
 * 1) find moment to revoke object url of video src
 * 2) window event listener clean up when video editor is destroyed
 * 3) Readme
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
   * @property {limit}  [limit] - the min and max time range of the video editor
   * @property {Object<button>}  [menuBarButtons] - custom menu bar buttons
   * @property {Function}  [onError] - error callback. If the error type is AxiosError, the error will contain
   * status and statusText properties.
   * @property {Function}  [onReady] - onReady callback
   * @property {Function}  [onRangeUpdate] - callback when the range is updated
   * @property {Function}  [onRangeLimit] - callback when the range limit is reached
   * @property {Function} [onMarkerDrag] - callback when the marker is dragged
   * @property {Function}  [onClickHelpButton] - onRangeUpdate callback
   * @property {Function} [onTimelineClick] - onTimelineClick callback
   * @property {Function} [onSave] - onSave callback. Fired when save button is clicked. Returns transformations and time indices.
   *
   */

  /**
   * @param {constructor} constructor
   */
  constructor({
    src,
    crop,
    transformations,
    maxHeight,
    limit,
    menuBarButtons,
    onError,
    onReady,
    onRangeUpdate,
    onRangeLimit,
    onMarkerDrag,
    onClickHelpButton,
    onTimelineClick,
    onSave,
  }) {
    this.videoSrc = src;
    this.crop = crop;
    this.transformations = transformations;
    this.video = null;
    this.videoEditorContainer = null;
    this.maxHeight = maxHeight || null;
    // the maximum height of the video display as apercent of the window size
    this.maxHeightPercent = 0.5;
    this.limit = limit;
    this.onError = onError;
    this.onReady = onReady;
    this.onTimelineClick = onTimelineClick;
    this.onClickHelpButton = onClickHelpButton;
    this.onSave = onSave;
    this.onRangeUpdate = onRangeUpdate;
    this.onRangeLimit = onRangeLimit;
    this.onMarkerDrag = onMarkerDrag;
    // both timeline and info bar are invoked when we know the video duration
    this.timeline = null;
    this.loader = new Loader({ message: 'Loading video' });
    // get custom buttons (custom buttons cannot override default buttons)
    const { inlineStartButtons: customInlineButtons, inlineEndButtons: customInlineEndButtons } =
      menuBarButtons || { inlineStartButtons: {}, inlineEndButtons: {} };
    this.menuBar = new MenuBar({
      inlineStartButtons: {
        ...customInlineButtons,
        darkmode: {
          label: 'Dark',
          fontAwesomeIcon: 'fa fa-moon',
          onClick: (event) => {
            const { currentTarget } = event;
            const span = currentTarget.querySelector('span');
            const svg = currentTarget.querySelector('svg');
            const wrapper = this.videoEditorContainer.closest('.video-editor-wrapper');
            const isDark = wrapper.classList.contains('darkmode');
            console.log('isDark ', isDark);
            if (!isDark) {
              // dark mode
              wrapper.classList.add('darkmode');
              span.textContent = 'Light';
              svg.classList.remove('fa-moon');
              svg.classList.add('fa-sun');
            } else {
              // lightmode
              wrapper.classList.remove('darkmode');
              span.textContent = 'Dark';
              svg.classList.remove('fa-sun');
              svg.classList.add('fa-moon');
            }
          },
        },
        help: {
          label: '?',
          title: 'Help',
          className: 'help-button',
          onClick: this.handleClickHelpButton.bind(this),
        },
      },
      inlineEndButtons: {
        ...customInlineEndButtons,
        crop: {
          label: 'Crop',
          title: 'Crop',
          toggle: true,
          className: 'crop-button',
          fontAwesomeIcon: 'fa fa-crop',
          onClick: this.handleToggleCrop.bind(this),
        },
        save: {
          label: 'Save',
          title: 'Save',
          className: 'save-button',
          fontAwesomeIcon: 'fa fa-save',
          onClick: this.handleSaveButtonClick.bind(this),
        },
      },
    });

    // bind
    this.handleLoadedMetaData = this.handleLoadedMetaData.bind(this);
    this.handleAxiosError = this.handleAxiosError.bind(this);
    this.attachResizeEvent = this.attachResizeEvent.bind(this);
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
    // menu bar
    this.menuBar.render(this.videoEditorContainer);
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
    const src = await this.getURLObjectString();
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

  /**
   * Get Video URL Object
   *
   * @returns {Promise<String>} - returns a url string
   */
  async getURLObjectString() {
    let src = this.videoSrc;
    const isBlob = src instanceof Blob;
    const isUrl = typeof src == 'string' && src?.startsWith('http');
    // Validate video src
    if (!isBlob && !isUrl) {
      throw new TypeError('video src must be a Blob or url, found ' + typeof src);
    }
    // if src is a url, download the video
    if (isUrl) {
      src = await axios(src, {
        onDownloadProgress: this.handleVideoDownloadProgress.bind(this),
        responseType: 'blob',
      })
        .then((res) => {
          // console.log('result type', res.data.type, /video/.test(res.data.type));
          if (res.data.type && !/video/.test(res.data.type)) {
            throw new Error(
              'Video src type was invalid. Expected video but found: ' + res.data.type
            );
          }
          return res?.data;
        })
        .catch(this.handleAxiosError);
    }

    this.videoSrc = src;
    const blob = URL.createObjectURL(src);
    return blob;
  }

  attachVideoEvents(container) {
    const handleDuration = this.handleDurationChange.bind(this);
    this.handleDurationChange = (event) => {
      handleDuration(event, container);
    };
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
      limit: this.limit,
      transformations: this.transformations,
      onReady: this.handleTimelineReady.bind(this),
      onError: this.onError,
      onRangeUpdate: this.onRangeUpdate,
      onRangeLimit: this.onRangeLimit,
      onMarkerDrag: this.onMarkerDrag,
      onTimelineClick: this.onTimelineClick,
      loader: this.loader,
    });

    this.timeline.render(this.videoEditorContainer);

    // remove events
    this.removeEvents();
  }

  attachResizeEvent() {
    window.addEventListener('resize', (event) => {
      const { videoWidth, videoHeight } = this.video;
      const vidContainer = this.video.closest('.video-wrap');
      // this.previousScale = videoEl.getBoundingClientRect().width / videoEl.offsetWidth;
      this.previousBounds = vidContainer.getBoundingClientRect();
      const videoBounds = this.video.getBoundingClientRect();
      this.previousVidBounds = videoBounds;
      if (!this.containerToVideoRatio) {
        this.containerToVideoRatio = this.previousBounds.width / videoBounds.width;
      }
      this.updateVideoContainerDimensions(videoWidth, videoHeight);
    });
  }

  updateVideoContainerDimensions(width, height) {
    // aspect ratio of device
    const aspectRatio = height / width;
    // console.log(`height: ${height}, width: ${width}, aspect: ${aspectRatio}`);
    const vidWrap = this.video.closest('.video-wrap');
    const vidContainer = this.video.closest('.video-container');
    const vidBounds = this.video.getBoundingClientRect();
    let vidMaxWidth;
    // limit height of video display if maxHeight (in pixels) has been set
    if (this.maxHeight && vidBounds.height > this.maxHeight) {
      // find width based on maxHeight of video and apply to vid container
      vidMaxWidth = this.maxHeight / aspectRatio;
    } else {
      // limit height of video display if screen size exceeds limit
      // const editorHeight = editorContainer.getBoundingClientRect().height;
      // const vidPercentHeight = vidBounds.height / window.innerHeight;
      // console.log('vidHeight', vidBounds.height);
      // console.log('vidPercentHeight', vidPercentHeight);
      // calculate 35% of videoContainer

      // console.log('resize max height percent', vidBounds.height);
      const maxHeight = window.innerHeight * this.maxHeightPercent;
      // console.log('maxHeight', maxHeight);
      vidMaxWidth = maxHeight / aspectRatio;
    }
    if (vidMaxWidth > window.innerWidth) {
      vidMaxWidth = window.innerWidth;
    }
    // set the width

    vidContainer.style.width = `${vidMaxWidth}px`;
    /**
     *
     */
    vidWrap.style.paddingBottom = `${aspectRatio * 100}%`;
    // get new width
    requestAnimationFrame(() => {
      if (this.previousBounds) {
        const { scaleX, scaleY, translateX, translateY } = decomposeMatrix(this.video);
        const scaleDiff = vidMaxWidth / this.previousBounds.width;
        const [originX, originY] = getTranslateOrigin(this.video);
        const newScale = scaleX * scaleDiff;
        const vidHeight = vidContainer.getBoundingClientRect().height;
        const widthDiff = vidMaxWidth - this.previousBounds.width;
        const heightDiff = vidHeight - this.previousBounds.height;
        const newTransformOriginValue = `${originX * scaleDiff}px ${originY * scaleDiff}px`;
        const newX = translateX + widthDiff / 2;
        const newY = translateY + heightDiff / 2;
        const newTransformValue = `translate3d(${newX}px, ${newY}px, 0px) scale(${newScale})`;
        this.video.style.transform = newTransformValue;
        // this.video.style.transformOrigin = newTransformOriginValue;
        // update crop
        if (this.timeline.cropper) {
          const cropButton = document.querySelector('.crop-button');
          if (cropButton.classList.contains('toggled')) {
            cropButton.click();
          }
          this.timeline.transformations = this.timeline.getTransformations();

          this.timeline.cropper.destroy();
          this.timeline.cropper = null;
        }
        return;

        const cropContainer = document.querySelector('.crop-container');
        const crBoundary = cropContainer.querySelector('.cr-boundary');
        const crImage = cropContainer.querySelector('img');
        const crViewport = cropContainer.querySelector('.cr-viewport');
        const crOverlay = cropContainer.querySelector('.cr-overlay');
        // set image transform
        // return;
        // crImage.style.transform = newTransformValue;
        // // crImage.style.width = '100%';
        // // set boundary width to video width
        // crBoundary.style.width = '100%';
        // crBoundary.style.height = '100%';

        // this.timeline.cropper.update();

        // return;
        // set viewport
        const cropAspectRatio = this.crop.width / this.crop.height;
        console.log(`cropRatio ${cropAspectRatio}, videoRatio ${aspectRatio}`);
        let vpWidth, vpHeight;
        // if (cropAspectRatio > aspectRatio) {
        vpWidth = vidHeight * cropAspectRatio;
        vpHeight = vidHeight;
        // } else {
        //   vpWidth = vidMaxWidth;
        //   vpHeight = vidMaxWidth / cropAspectRatio;
        // }

        crViewport.style.width = `${vpWidth}px`;
        crViewport.style.height = `${vpHeight}px`;
        this.timeline.cropper.update();

        console.log('zoomRange', this.timeline.cropper.getZoomRangeMinMax());
        // set crop overlay
        // crOverlay.style.width = `${vidMaxWidth}px`;
        // crOverlay.style.height = `${vidHeight + 5}px`;
        // const overlayBounds = crOverlay.getBoundingClientRect();
        // const overlayTop = parseFloat(overlayBounds.top) + 1;
        // const overlayLeft = parseFloat(overlayBounds.left) + 1;
        // console.log('overlayTop, left', overlayTop, overlayLeft, widthDiff / 2);
        // crOverlay.style.top = `${overlayTop}px`;
        // crOverlay.style.left = `${overlayLeft}px`;
        // console.log('viewport dimensions', vpWidth, vpHeight);
      }
    });
  }

  handleToggleCrop(event, toggleState) {
    const { currentTarget } = event || { currentTarget: document.querySelector('.crop-button') };
    this.timeline.handleToggleCropper(toggleState);
    const span = currentTarget.querySelector('span');
    const icon = currentTarget.querySelector('i') ?? currentTarget.querySelector('svg');
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

  handleClickHelpButton() {
    if (this.onClickHelpButton instanceof Function) {
      this.onClickHelpButton();
    } else {
      this.instructions.begin();
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
      axiosError.message = axiosError.message;
      if (response.statusText) {
        // include statusText
        axiosError.message = `${axiosError.message} : ${response.statusText}`;
      }
      axiosError.statusText = response?.statusText;
      axiosError.status = response?.status;
    }
    axiosError.name = 'AxiosError';
    this.handleError(axiosError);
  }

  handleSaveButtonClick(event) {
    if (this.onSave instanceof Function) {
      const transformations = this.timeline.getTransformations();
      this.onSave(transformations, this.videoSrc);
    }
  }

  async render(container) {
    try {
      const wrapper = this.createWrapper();
      // instructions

      this.instructions = new Instructions({ container });
      this.instructions.render(container);
      //  loader
      this.loader.render(wrapper);
      container.append(wrapper);
      //  video editor
      const videoEditor = await this.createVideoEditor();
      wrapper.append(videoEditor);

      // attach resize events
      this.attachResizeEvent();
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default VideoEditor;
