import axios from 'axios';
import { getMaxHeightPercent, calcViewerMaxWidth, calcTransformValues } from './utils';
import { createElement } from '../utils';
/**
 * Video Viewer
 *
 * The Viewer component is responsible for loading and rendering the video.
 * It's parent is the VideoEditor class.
 */
class Viewer {
  constructor({ src, maxHeight, loader, onLoad, onLoadMetaData, onViewerResize }) {
    this.src = src;
    this.maxHeight = maxHeight;
    this.maxHeightPercent = 0.6;
    this.previousBounds = null;
    this.video = this.createVideo();
    this.loader = loader;
    this.onLoad = onLoad;
    this.onLoadMetaData = onLoadMetaData;
    this.onViewerResize = onViewerResize;
    // bind
    this.handleAxiosError = this.handleAxiosError.bind(this);
    this.handleLoadedMetaData = this.handleLoadedMetaData.bind(this);

    this.attachResizeEvent = this.attachResizeEvent.bind(this);
  }

  getSrc() {
    return this.src;
  }

  /**
   * handle duration change
   *
   * Renders timeline  when we have the duration.
   * This event occurs after the initial render and fires
   * the timelineReady event / onReady callback.
   *
   * Once we have rendered the timeline we can remove
   * the event listeners listening for the video duration/metadata.
   *
   * @returns {void}
   */
  handleDurationChange() {
    if (this.video.videoWidth == 0 || this.video.videoHeight == 0) {
      this.handleError(
        new Error(
          'We were unable to load the video. It may be corrupted, or your browser may not support this video format. Please try another video or browser'
        )
      );
      return;
    }
    if (!isFinite(this.video.duration)) {
      console.error('durationchange: duration is infinity', this.video.duration);
      return;
    }
    console.log('video dimensions', this.video.videoWidth, this.video.videoHeight);
    // console.info('durationchange', this.video.duration);
    this.video.pause();
    this.video.currentTime = 0;
    this.video.playbackRate = 1;
    console.info('%cRender Timeline', 'color:green');
    // fire onLoad callback
    if (this.onLoad instanceof Function) {
      this.onLoad();
    }
    // remove event listeners for duration change and metadata
    this.removeEvents();
  }

  /**
   * Handle Loaded Meta Data
   *
   *
   * loadedmetadata will return a duration of infinity.
   * This is a known bug. To get the duration,
   * we set the currentTime to a very large number.
   * This will trigger the duration change event
   * so we can retrive the duration value without having
   * to play the  entire length of the video.
   *
   * @param {Event} event
   */
  handleLoadedMetaData(event) {
    this.video.currentTime = 1e101;
    this.updateViewerContainerDimensions();
    if (this.onLoadMetaData instanceof Function) {
      this.onLoadMetaData();
    }
  }

  /**
   * Handle Video Download Progress
   *
   * @param {AxiosProgressEvent} progressEvent
   */
  handleVideoDownloadProgress(progressEvent) {
    const progress = parseInt(progressEvent.progress * 100);
    this.loader.updateMessage(`Loading video ${progress}%`);
  }

  /**
   * Handle Error
   *
   * @param {Error} error
   * @returns
   */
  handleError(error) {
    console.error(error);
    if (this.onError instanceof Function) {
      this.onError(error);
    } else {
      if (error.name === 'AxiosError') {
        /**
         * ince video editor already shows an error message in the handle axios error method,
         * we don't need to display an error modal as well
         */
        return;
      }
      this.loader.showError(error?.message);
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
  removeEvents() {
    this.video.removeEventListener('durationchange', this.handleDurationChange);
    this.video.onloadedmetadata = null;
  }

  /**
   * Get Video URL Object
   *
   * @returns {Promise<String>} - returns a url string
   */
  async getURLObjectString() {
    let src = this.src;
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
          if (res.data.type && !/video/.test(res.data.type)) {
            throw new TypeError(
              'Video src type was invalid. Expected video but found: ' + res.data.type
            );
          }
          return res?.data;
        })
        .catch(this.handleAxiosError);
    }
    if (src) {
      this.videoSrc = src;
      this.mimeType = src.type || 'unknown';
      const blob = window.URL.createObjectURL(src);
      return blob;
    }
    return;
  }

  /**
   * Update Video Container Dimensions
   *
   * This method is called when the video metadata is loaded
   * and when the window is resized.
   * It recalculates the video container dimensions based on the
   * max height percent and the video aspect ratio.
   */
  updateViewerContainerDimensions() {
    // use crop dimensions if set, otherwise use video dimensions
    let width = this.crop?.width || this.video.videoWidth;
    let height = this.crop?.height || this.video.videoHeight;
    // aspect ratio of video (or crop)
    const aspectRatio = height / width;
    const vidWrap = this.video.closest('.video-wrap');
    const vidContainer = this.video.closest('.video-container');
    const vidMaxWidth = calcViewerMaxWidth(
      this.video,
      this.maxHeight,
      this.maxHeightPercent,
      aspectRatio
    );
    // set max width of video container
    vidContainer.style.width = `${vidMaxWidth}px`;
    // set aspect ratio of video wrap
    vidWrap.style.paddingBottom = `${aspectRatio * 100}%`;
    // get new width
    requestAnimationFrame(() => {
      if (this.previousBounds) {
        const { x, y, scale } = calcTransformValues(
          vidMaxWidth,
          vidContainer,
          this.video,
          this.previousBounds
        );
        // update transform value
        const newTransformValue = `translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
        this.video.style.transform = newTransformValue;
        if (this.onViewerResize instanceof Function) {
          this.onViewerResize();
        }
        return;
      }
    });
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
   * Attach Window Resize Event
   *
   * Handles responsive video editor height,
   * recalculating the video editor dimensions.
   *
   * Because all child elements are responsive, we only need to
   * recalculate the primary ancestor (video container) dimensions
   */
  attachResizeEvent() {
    const vidContainerFlexbox = this.video.closest('.video-flexbox-container');
    // define the event here so we keep vidContainerFlexbox and vidContainer in scope
    window.addEventListener('resize', (event) => {
      // keep track of previous video bounds
      const videoBounds = this.video.getBoundingClientRect();
      this.previousBounds = videoBounds;
      // update max height percent
      this.maxHeightPercent = getMaxHeightPercent(vidContainerFlexbox);
      // update video container dimensions
      this.updateViewerContainerDimensions();
    });
  }

  /**
   * Create Video (without src)
   *
   * @returns {HTMLVideoElement} - returns a video element
   */
  createVideo() {
    return createElement('video', {
      properties: {
        id: 'video-preview',
        className: 'preview',
        autoplay: false,
        playsinline: true,
        preload: 'metadata',
        controls: false,
        playbackRate: 16,
      },
      style: {
        width: '100%',
      },
      attributes: {
        playsinline: true,
        'webkit-playsinline': true,
      },
    });
  }

  createCropContainer() {
    return createElement('div', {
      properties: {
        className: 'crop-container',
      },
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 3,
        width: '100%',
        height: '100%',
      },
    });
  }

  /**
   * Create Video Container
   *
   * This method is called by the render method to create a video container.
   * It is async because it calls the getURLObjectString method in order to
   * load the video src.
   *
   * @returns {Promise<HTMLDivElement>} - returns a video container
   */
  async createVideoContainer() {
    const vidContainer = document.createElement('div');
    vidContainer.className = 'video-container';
    const vidWrap = document.createElement('div');
    vidWrap.className = 'video-wrap';
    // create source tag
    const source = document.createElement('source');
    const src = await this.getURLObjectString();
    if (!src) {
      return;
    }
    source.src = src;
    this.video.append(source);
    // video events must be attached before rendering in the DOM
    this.attachVideoEvents(vidContainer);
    vidWrap.append(this.video);
    vidContainer.append(vidWrap);
    vidContainer.append(this.createCropContainer());

    return vidContainer;
  }

  async render(container) {
    try {
      container.append(await this.createVideoContainer());
      // revoke object url for video to prevent memory leaks
      window.URL.revokeObjectURL(this.src);
      // attach resize events
      this.attachResizeEvent();
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default Viewer;
