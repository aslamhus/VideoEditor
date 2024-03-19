import MenuBar from './MenuBar/MenuBar.js';
import Viewer from './Viewer/Viewer.js';
import Timeline from './Timeline/Timeline.js';
import Instructions from './Instructions';
import { createCropSVG } from './utils/svg-crop-overlay.js';
import Loader from './Loader/Loader.js';
import context from './context.js';
import fontAwesomeLibrary from './font-awesome.js';
import { createElement } from './utils.js';
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
    // maxHeight restricts the responsive height of the video editor, which
    // is usually set as a percentage based on the window height
    // this is recalculated on window resize
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
      maxHeight,
      loader: this.loader,
      onLoad: this.handleVideoLoad.bind(this),
      onLoadMetaData: this.handleLoadMetaData.bind(this),
      onViewerResize: this.handleViewerResize.bind(this),
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

  /**
   * Handle Viewer Resize
   *
   * If the timeline has a cropper, it will be destroyed on resize
   */
  handleViewerResize() {
    if (this.timeline.cropper) {
      this.timeline.toggleCropperOff();
      this.timeline.transformations = this.timeline.getTransformations();
      this.timeline.cropper.destroy();
      this.timeline.cropper = null;
    }
  }

  /**
   * Handle Help Button Click
   *
   * Providing a custom onClickHelpButton callback
   * will override the default instructions
   *
   * @param {*} event
   */
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
    return createElement('div', { properties: { className: 'video-editor-wrapper' } });
  }

  createVideoEditorContainer() {
    return createElement('div', {
      properties: { className: 'video-editor-container' },
      style: { opacity: 0 },
    });
  }

  createVideoFlexboxContainer() {
    return createElement('div', { properties: { className: 'video-flexbox-container' } });
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
    this.instructions.render(container);
    //  loader
    this.loader.render(wrapper);
    container.append(wrapper);
    //  video editor
    const videoEditor = await this.createVideoEditor();
    wrapper.append(videoEditor);
  }
}

export default VideoEditor;
