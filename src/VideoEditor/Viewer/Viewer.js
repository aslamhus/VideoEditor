import axios from 'axios';

class Viewer {
  constructor({ src, loader, onLoad }) {
    this.src = src;
    this.video = this.createVideo();
    this.loader = loader;
    this.onLoad = onLoad;
    this.handleAxiosError = this.handleAxiosError.bind(this);
  }

  getSrc() {
    return this.src;
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
    // remove events
    this.removeEvents();
  }

  handleVideoDownloadProgress(progressEvent) {
    const progress = parseInt(progressEvent.progress * 100);
    this.loader.updateMessage(`Loading video ${progress}%`);
  }

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

  attachVideoEvents(container) {
    const handleDuration = this.handleDurationChange.bind(this);
    this.handleDurationChange = (event) => {
      handleDuration(event, container);
    };
    this.video.addEventListener('durationchange', this.handleDurationChange);
    this.video.addEventListener('loadedmetadata', this.handleLoadedMetaData);
  }

  /**
   * Create Video (without src)
   *
   * @returns {HTMLVideoElement} - returns a video element
   */
  createVideo() {
    const video = document.createElement('video');
    video.id = 'video-preview';
    video.className = 'preview';
    video.autoplay = false;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    video.playsinline = true;
    video.preload = 'metadata';
    video.controls = false;
    video.playbackRate = 16;
    video.style.width = '100%';
    return video;
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
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default Viewer;
