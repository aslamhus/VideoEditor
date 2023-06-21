import PlayHead from './PlayHead/PlayHead.js';
import Controls from './Controls/Controls.js';
import RangeSelector from './RangeSelector/RangeSelector.js';
import InfoBar from '../InfoBar/InfoBar.js';
import Cropper from '../Cropper/Cropper.js';
import Loader from '../Loader/Loader.js';
import Popover from '../Popover/Popover.js';
import Clips from './Clips/Clips.js';
import '../types.js';
import './timeline.css';

class Timeline {
  /**
   *
   * @typedef {Object} constructor
   * @property {HTMLVideoElement} video
   * @property {number} duration
   * @property {number} frameTotalLimit - default is 10
   * @property {Object} crop - the crop ratio
   * @property {limit} limit - the min and max time range of the video editor
   * @property {transformations} transformations
   * @property {Function} onReady
   * @property {Function} [onRangeUpdate]
   * @property {Function} [onRangeLimit] - callback when the range limit is reached
   * @property {Function} [onMarkerDrag] - callback when the marker is dragged
   * @property {Function} [onTimelineClick] - callback when the timeline is clicked
   * @property {Loader} loader
   *
   * @param {constructor} constructor
   */
  constructor({
    video,
    duration,
    frameTotalLimit = 20,
    frameInterval,
    crop,
    limit,
    transformations,
    onReady,
    onRangeUpdate,
    onRangeLimit,
    onMarkerDrag,
    onTimelineClick,
    loader,
  }) {
    this.video = video;
    // video
    if (!isFinite(duration)) {
      throw new Error('Video duration is non finite number: ' + duration);
    }
    this.duration = duration;

    this.crop = crop || { width: video.videoWidth, height: video.videoHeight };
    this.cropAspectRatio = this.crop.width / this.crop.height;
    this.transformations = transformations;
    this.loader = loader;
    // callbacks
    this.onReady = onReady;
    this.onRangeUpdate = onRangeUpdate;
    this.onTimelineClick = onTimelineClick;
    // this.cropAspectRatio = this.crop.width / this.crop.height;

    this.timeline = this.createTimeline();
    // playhead
    this.playHead = new PlayHead({
      className: 'play-head',
      name: 'play',
      anchor: 'left',
      initialIndex: 0,
      getVideoDuration: this.getVideoDuration.bind(this),
      getTimelineElement: this.getTimelineElement.bind(this),
      isDraggable: false,
    });
    // popover
    this.popover = new Popover({
      title: 'Maximum Video Length Exceeded',
      body: 'Please select a shorter video.',
      variant: 'danger',
    });
    // range selector

    // control buttons
    this.controls = new Controls({
      video,
      onPlayClick: this.handlePlayClick.bind(this),
    });
    // info bar
    this.infoBar = new InfoBar({
      duration: this.video.duration,
      currentIndex: this.transformations?.time?.in,
    });
    // clips
    this.clips = new Clips({
      video,
      frameTotalLimit,
      crop: this.crop,
      cropAspectRatio: this.cropAspectRatio,
      transformations: this.transformations,
      playHead: this.playHead,
      getTimelineElement: this.getTimelineElement.bind(this),
      getVideoDuration: this.getVideoDuration.bind(this),
      setVideoTimeIndex: this.setVideoTimeIndex.bind(this),
      initialMarkers: {
        in: this.transformations?.time?.in || 0,
        out: this.transformations?.time?.out || null,
      },
      limit,
      popover: this.popover,
      onRangeUpdate: this.handleRangeUpdate.bind(this),
      onRangeLimit,
      onMarkerDrag,
      onAllClipsReady: this.handleTimelineReady.bind(this),
    });
  }

  enable() {
    this.timeline.classList.remove('disabled');
  }

  disable() {
    this.timeline.classList.add('disabled');
  }

  setVideoTimeIndex(timeIndex) {
    this.video.currentTime = timeIndex;
  }

  getTimelineElement() {
    return this.timeline;
  }

  getVideoDuration() {
    return this.video.duration;
  }

  attachTimelineEvents() {
    this.video.addEventListener('timeupdate', this.timeupdate.bind(this));
    this.video.addEventListener('pause', this.handlePause.bind(this));
    this.video.addEventListener('playing', this.handlePlaying.bind(this));
  }

  timeupdate() {
    /**
     * If cropper is enabled,
     * update the crop source
     */
    requestAnimationFrame(() => {
      if (this.cropper && !this.cropper.hidden) {
        this.getCurrentVideoFrameUrlObject().then((url) => {
          this.cropper.updateSrc(url);
          // const img = document.createElement('img');
          // img.src = url;
          // document.body.append(img);
        });
      }
    });
  }

  handlePlayClick(target) {
    if (this.video.paused) {
      // hide popover if visible
      if (!this.popover.hidden) this.popover.hide();
      this.video.play();
    } else {
      this.video.pause();
      this.video.currentTime = this.video.currentTime + 0.01;
    }
  }

  handleRangeUpdate(currentIndex, time) {
    // get now and duration
    const now = currentIndex;
    const duration = parseFloat(time.out - time.in);
    // set values
    this.infoBar.setCurrentIndex(now);
    this.infoBar.setDuration(duration);
    // video editor onRangeUpdate callback
    if (this.onRangeUpdate instanceof Function) {
      this.onRangeUpdate(currentIndex, time);
    }
  }

  handlePause(event) {
    // console.info('pause');
  }

  handlePlaying(event) {
    /**
     * When the currentTime has reached the end of the video,
     * pressing play again should snap the playhead back to 0
     * before animating a smooth playback.
     */
    // console.info('playing');
    this.playHead.toggleAnimate(false);
  }

  /**
   * Get transformations
   *
   * This method needs to be updated to collate all the transformations
   * from each clip.
   *
   * @returns {object} - {crop, time}
   */
  getTransformations() {
    return this.clips.getClips().map((clip) => {
      const crop = clip.getCrop();
      // const in = this.timeline.rangeSelector;
      const inMarker = clip.rangeSelector.inMarker.getTimeIndex();
      const outMarker = clip.rangeSelector.outMarker.getTimeIndex();
      // get crop, time in / out
      return { crop, time: { in: inMarker, out: outMarker } };
    }, []);
  }

  /**
   * When the timline frames have been rendered
   * initialize cropper, then fire timelineReady event.
   */
  async handleTimelineReady() {
    // set video back to frame 1
    this.video.currentTime = 0;
    // dispatch timeline ready event
    this.timeline.dispatchEvent(new Event('timelineReady'));
    // dispatch onReady callback
    if (this.onReady instanceof Function) {
      this.onReady();
    }
  }

  createTimelineContainer() {
    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-container';
    return timelineContainer;
  }

  createTimeline() {
    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    return timeline;
  }

  renderTimeline(container) {
    // create timeline container
    const timelineContainer = this.createTimelineContainer();
    this.timeline = this.getTimelineElement();
    // render clips
    this.clips.render(this.timeline);
    // render playhead
    this.playHead.render(this.timeline);
    // apend timeline to container
    timelineContainer.append(this.timeline);
    container.append(timelineContainer);
    this.attachTimelineEvents();
  }

  render(container) {
    this.renderTimeline(container);
    this.controls.render(container);
    this.infoBar.render(container);
  }
}

export default Timeline;
