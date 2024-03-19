import MenuBar from './MenuBar/MenuBar.js';
import Viewer from './Viewer/Viewer.js';
import Timeline from './Timeline/Timeline.js';
import Instructions from './Instructions';
import { createCropSVG } from './utils/svg-crop-overlay.js';
import Loader from './Loader/Loader.js';
import {
  decomposeMatrix,
  getTranslateOrigin,
  getComputedWidthAndHeightForElement,
} from './utils.js';
import context from './context.js';
import fontAwesomeLibrary from './font-awesome.js';
import './types.js';
import './themes.css';
import './video-editor.css';

/**
 * # VideoEditor 1.0.0
 *
 * ## Summary
 *
 * A VanillaJS video editor that allows users to crop, trim, and save videos.
 *
 * ## Basic Usage
 *
 * ```javascript
 * import VideoEditor from 'video-editor';
 * const src = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
 * const videoEditor = new VideoEditor({ src })
 * videoEditor.render(myHTMLContainer);
 *```

 * ## Options
 *
 * ### src (required)
 *
 * @type string | Blob
 * The video source. This can be a Blob or a URL string.
 * Example: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
 *
 * ### crop
 *
 * @type object
 * An object with the width and height of the crop.
 * Example: { width: 16, height: 9 }
 *
 * ### transformations
 *
 * @type object
 * An object with the crop and time transformations.
 * Example: { crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' }, time: { in: 5, out: 10 } }
 *
 *
 * ### maxHeight
 *
 * @type number
 * The max height of the video editor. The default is 300.
 *
 * ### limit
 *
 * @type object
 * An object with the max duration the video can be trimmed to.
 * Example: {  maxDuration: 5 }
 *
 * ### menuBarButtons
 *
 * @type object
 * An object with custom menu bar buttons with option to disable default buttons.
 * Example: { inlineStartButtons: {}, inlineEndButtons: {}, disable: []}
 * Menu bar button options:
 * - index: the position of the button
 * - label: the button label
 * - fontAwesomeIcon: the font awesome icon
 * Example: { index: 3, label: 'Exit', fontAwesomeIcon: 'fa fa-times' }
 *
 * ### disabledButtons
 *
 * @type object
 * An object with keys of button names to disable
 * The default button keys are: 'mute', 'crop', 'save', 'help'
 * Example: { mute: true, crop: true }
 *
 * ### onError
 *
 * @type function
 * Error callback. If the error type is AxiosError, the error will contain
 * status and statusText properties.
 * Example: (error) => { console.error(error) }
 * Example (AxiosError): (error) => { console.error(error.status, error.statusText) }
 *
 *
 * ### onReady
 *
 * @type function
 * onReady callback
 * Example: () => { console.log('video editor is ready') }
 *
 * ### onRangeUpdate
 *
 * @type function
 * Callback when the range is updated
 * Example: (currentIndex, { in : 0, out : 1 }) => { console.log(currentIndex) }
 *
 * ### onRangeLimit
 *
 * @type function
 * Callback when the range limit is reached
 * Example: ({ marker, maxDuration, time }) => { console.log('range limit reached') }
 *
 *
 * ### onMarkerDragStart
 *
 * @type function
 * Callback when the marker drag is started
 * Example: (currentMarker) => { console.log('marker drag started', currentMarker) }
 *
 * ### onMarkerDragEnd
 *
 * @type function
 * Callback when the marker drag is ended
 * Example: (currentMarker) => { console.log('marker drag ended', currentMarker) }
 *
 *
 *
 *
 */
class VideoEditor {
  /**
   *
   * Video Editor
   *
   * @typedef {Object} constructor
   * @property {Blob|string} videoSrc
   * @property {object}  crop - the width and height of video crop
   * @property {transformations} transformations
   * @property {number}  [maxHeight] - the max height of the video editor, default is 300
   * @property {limit}  [limit] - the min and max time range of the video editor
   * @property {Object<button>}  [menuBarButtons] - custom menu bar buttons with option to disable default buttons { inlineStartButtons: {}, inlineEndButtons: {}, disable: []}
   * @property {Object}  [disabledButtons] - object with keys of button names to disable
   * @property {Function}  [onError] - error callback. If the error type is AxiosError, the error will contain
   * status and statusText properties.
   * @property {Function}  [onReady] - onReady callback
   * @property {Function}  [onRangeUpdate] - callback when the range is updated
   * @property {Function}  [onRangeLimit] - callback when the range limit is reached
   * @property {Function} [onMarkerDragStart] - callback when the marker drag is started
   * @property {Function}  [onMarkerDragEnd] -  callback when the marker drag is ended
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
    menuBarButtons = { inlineStartButtons: {}, inlineEndButtons: {}, disable: [] },
    onError,
    onReady,
    onRangeUpdate,
    onRangeLimit,
    onMarkerDragStart,
    onMarkerDragEnd,
    onClickHelpButton,
    onTimelineClick,
    onSave,
    debug = false,
  }) {
    // set context to the VideoEditor instance
    context.setContext(this);
    this.src = src;
    this.mimeType = '';
    this.crop = crop;
    this.transformations = transformations;
    this.video = null;
    this.videoEditorContainer = this.createVideoEditorContainer();
    this.maxHeight = maxHeight || null;
    // maxHeight restricts the responsive height of the video editor, which
    // is usually set as a percentage based on the window height
    // this is recalculated on window resize
    this.maxHeightPercent = 0.6;
    this.limit = limit;
    this.debug = debug;
    // callbacks
    this.onError = onError;
    this.onReady = onReady;
    this.onTimelineClick = onTimelineClick;
    this.onClickHelpButton = onClickHelpButton;
    this.onSave = onSave;
    this.onRangeUpdate = onRangeUpdate;
    this.onRangeLimit = onRangeLimit;
    this.onMarkerDragStart = onMarkerDragStart;
    this.onMarkerDragEnd = onMarkerDragEnd;
    // Components
    this.loader = new Loader({ message: 'Loading video' });
    // both timeline and info bar are invoked when we know the video duration
    this.viewer = new Viewer({
      src,
      loader: this.loader,
      onLoad: this.handleVideoLoad.bind(this),
      onLoadMetaData: this.handleLoadMetaData.bind(this),
    });
    this.timeline = new Timeline({
      onReady: this.handleTimelineReady.bind(this),
    });
    // get custom buttons (custom buttons cannot override default buttons)
    // init menu bar
    this.menuBar = new MenuBar({
      customButtons: menuBarButtons,
      onToggleDarkMode: this.handleToggleDarkMode.bind(this),
      onClickHelpButton: this.handleClickHelpButton.bind(this),
      onToggleCrop: this.handleToggleCrop.bind(this),
      onClickSaveButton: this.handleSaveButtonClick.bind(this),
      onToggleMute: this.handleToggleMute.bind(this),
      library: fontAwesomeLibrary,
    });
    // bind
    this.attachResizeEvent = this.attachResizeEvent.bind(this);
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
    const vidContainerFlexbox = this.viewer.video.closest('.video-flexbox-container');
    // define the event here so we keep vidContainerFlexbox and vidContainer in scope
    window.addEventListener('resize', (event) => {
      // keep track of previous video bounds
      const videoBounds = this.viewer.video.getBoundingClientRect();
      this.previousVidBounds = videoBounds;
      // update max height percent
      this.maxHeightPercent = this.getMaxHeightPercent(vidContainerFlexbox);
      // update video container dimensions
      this.updateVideoContainerDimensions();
    });
  }

  /**
   * Update Video Container Dimensions
   *
   * This method is called when the window is resized.
   * It recalculates the video container dimensions based on the
   * max height percent and the video aspect ratio.
   */
  updateVideoContainerDimensions() {
    // use crop dimensions if set, otherwise use video dimensions
    let width = this.crop?.width || this.video.videoWidth;
    let height = this.crop?.height || this.video.videoHeight;
    // aspect ratio of video (or crop)
    const aspectRatio = height / width;
    const vidEditorWrapper = this.videoEditorContainer.closest('.video-editor-wrapper');
    const vidEditorDimensions = getComputedWidthAndHeightForElement(vidEditorWrapper);
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
      // HOWEVER, use the primary ancestor of the editor as the limit, not the screen
      // so that the video doesn't get too small when the editor is in a small container
      const maxHeight = vidEditorDimensions.height * this.maxHeightPercent;
      vidMaxWidth = maxHeight / aspectRatio;
    }
    // limit width of video display to the width of the editor
    if (vidMaxWidth > vidEditorDimensions.width) {
      vidMaxWidth = vidEditorDimensions.width;
    }
    // set max width of video container
    vidContainer.style.width = `${vidMaxWidth}px`;
    vidWrap.style.paddingBottom = `${aspectRatio * 100}%`;
    // get new width
    requestAnimationFrame(() => {
      if (this.previousBounds) {
        // get the transform values
        const { scaleX, scaleY, translateX, translateY } = decomposeMatrix(this.video);
        // calculate the scale difference between the previous and current bounds
        const scaleDiff = vidMaxWidth / this.previousBounds.width;
        // this method is a holdover from a previous version which
        // attempted to calculate the crop overlay position.
        // May be useful in the future.
        const [originX, originY] = getTranslateOrigin(this.video);
        const newScale = scaleX * scaleDiff;
        const vidHeight = vidContainer.getBoundingClientRect().height;
        const widthDiff = vidMaxWidth - this.previousBounds.width;
        const heightDiff = vidHeight - this.previousBounds.height;
        const newX = translateX + widthDiff / 2;
        const newY = translateY + heightDiff / 2;
        // update transform value
        const newTransformValue = `translate3d(${newX}px, ${newY}px, 0px) scale(${newScale})`;
        this.video.style.transform = newTransformValue;
        // update crop
        if (this.timeline.cropper) {
          this.timeline.toggleCropperOff();
          this.timeline.transformations = this.timeline.getTransformations();
          this.timeline.cropper.destroy();
          this.timeline.cropper = null;
        }
        return;
      }
    });
  }

  getMaxHeightPercent(vidContainerFlexbox) {
    const percentValue = getComputedStyle(vidContainerFlexbox).maxHeight;
    return parseInt(percentValue) / 100;
  }

  handleToggleCrop(event, toggleState) {
    const { currentTarget } = event || { currentTarget: document.querySelector('.crop-button') };
    this.timeline.handleToggleCropper(toggleState);
    const buttonContainer = currentTarget.parentElement;
    const span = buttonContainer.querySelector('span');
    const icon = buttonContainer.querySelector('i') ?? buttonContainer.querySelector('svg');
    if (toggleState) {
      span.innerText = 'Done';
      icon.classList.add('fa-check');
      icon.classList.remove('fa-crop');
      this.timeline.controls.disableControlButtons();
      this.timeline.disable();
    } else {
      span.innerText = 'Crop';
      icon.classList.remove('fa-check');
      icon.classList.add('fa-crop');
      this.timeline.controls.enableControlButtons();
      this.timeline.enable();
    }
  }

  handleToggleMute(event, toggleState) {
    const { currentTarget } = event || { currentTarget: document.querySelector('.mute-button') };
    const buttonContainer = currentTarget.parentElement;
    const span = buttonContainer.querySelector('span');
    const icon = buttonContainer.querySelector('i') ?? buttonContainer.querySelector('svg');
    if (toggleState) {
      // muted
      this.video.volume = 0;
      // update button UI
      span.innerText = 'Unmute';
      icon.classList.remove('fa-volume-up');
      icon.classList.add('fa-volume-mute');
      this.video.muted = true;
    } else {
      // unmuted
      this.video.volume = 1;
      // update button UI
      span.innerText = 'Mute';
      icon.classList.remove('fa-volume-mute');
      icon.classList.add('fa-volume-up');
      this.video.muted = false;
    }
  }

  handleToggleDarkMode(event, toggleState) {
    const { currentTarget } = event;
    const span = currentTarget.parentElement.querySelector('span');
    const svg = currentTarget.parentElement.querySelector('svg');
    const wrapper = this.videoEditorContainer.closest('.video-editor-wrapper');
    const isDark = wrapper.classList.contains('darkmode');
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
  }

  handleClickHelpButton(event) {
    if (this.onClickHelpButton instanceof Function) {
      this.onClickHelpButton(event);
    } else {
      this.instructions.begin();
    }
  }

  handleTimelineReady() {
    this.show();
    if (this.onReady instanceof Function) {
      this.onReady();
    }
  }

  /**
   * Handle Video Load
   *
   * Initializes the timeline
   *
   * @see Viewer
   */
  handleVideoLoad() {
    const { video } = this.viewer;
    this.video = video;
    this.timeline.init(video);
    this.timeline.render(this.videoEditorContainer);
  }

  handleLoadMetaData() {
    this.updateVideoContainerDimensions();
    this.crop && this.appendCropOverlay();
  }

  show() {
    this.videoEditorContainer.style.opacity = 1;
    this.loader.hide();
  }

  handleSaveButtonClick(event) {
    if (this.onSave instanceof Function) {
      this.onSave(...this.save());
    }
  }

  /**
   * Save video
   *
   * Returns transformations object and video source
   *
   * @returns - [transformations, videoSrc]
   */
  save() {
    const transformations = this.timeline.getTransformations();
    return [transformations, this.viewer.getSrc()];
  }

  createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.className = 'video-editor-wrapper';
    return wrapper;
  }

  createVideoEditorContainer() {
    const videoEditorContainer = document.createElement('div');
    videoEditorContainer.style.opacity = 0;
    videoEditorContainer.className = 'video-editor-container';
    return videoEditorContainer;
  }

  createVideoFlexboxContainer() {
    const videoFlexboxContainer = document.createElement('div');
    videoFlexboxContainer.classList.add('video-flexbox-container');
    return videoFlexboxContainer;
  }

  async createVideoEditor() {
    // let the user know we are loading the video
    this.loader.updateMessage('Loading video');
    // menu bar
    this.menuBar.render(this.videoEditorContainer);
    // create flexbox container to center video in viewport
    const videoFlexboxContainer = this.createVideoFlexboxContainer();
    // create viewer element as child of flexbox container
    // Note: the render method of the viewer is asynchronous
    await this.viewer.render(videoFlexboxContainer);
    // append the video flexbox container to the video editor container
    this.videoEditorContainer.append(videoFlexboxContainer);

    //update loader message
    this.loader.updateMessage('Initializing video editor');
    return this.videoEditorContainer;
  }

  appendCropOverlay() {
    const container = this.video.closest('.video-container');
    const viewBox = { width: this.video.videoWidth, height: this.video.videoHeight };
    const svgOverlay = createCropSVG(this.crop, viewBox);
    container.append(svgOverlay);
  }

  async render(container) {
    const wrapper = this.createWrapper();
    // instructions

    this.instructions = new Instructions({ container });
    // this.instructions.render(container);
    //  loader
    this.loader.render(wrapper);
    container.append(wrapper);
    //  video editor
    const videoEditor = await this.createVideoEditor();
    wrapper.append(videoEditor);

    // attach resize events
    this.attachResizeEvent();
  }
}

export default VideoEditor;
