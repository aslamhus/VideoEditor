import Marker from './Marker/Marker.js';
import { cloneAllCanvasFrames } from './utils.js';
import { getTranslateX } from '../../utils.js';
import CustomHTMLElement from '../../../HTMLElement/HTMLElement.js';
import './range-selector.css';

class RangeSelector extends CustomHTMLElement {
  constructor({
    video,
    playHead,
    getTimelineElement,
    getVideoDuration,
    setVideoTimeIndex,

    initialMarkers,
  }) {
    super();
    // dragging
    // this.debugEl = document.querySelector('#debug');
    this.initialMarkers = initialMarkers;
    this.video = video;
    this.getVideoDuration = getVideoDuration;
    this.timeIndexPrecision = 3;
    this.getTimelineElement = getTimelineElement;
    this.setVideoTimeIndex = setVideoTimeIndex;
    this.lastInPos = 0;
    this.lastOutPos = 0;
    this.lastRangeSelectorX = 0;
    this.currentMarker = null;
    this.rangeSelector = null;
    this.selectedFrames = null;
    this.hidden = false;
    console.log('initialMarkers', initialMarkers);
    this.inMarker = new Marker({
      className: 'in-marker',
      name: 'in',
      anchor: 'right',
      // initialIndex: initialMarkers?.in || 0,
      getVideoDuration,
      getTimelineElement,
    });
    this.outMarker = new Marker({
      className: 'out-marker',
      name: 'out',
      anchor: 'left',
      direction: 'negative',
      // initialIndex: initialMarkers?.out || this.video.duration,
      getVideoDuration,
      getTimelineElement,
    });
    this.playHead = playHead;
    //
    this.onRender = this.onRender.bind(this);
  }

  setCurrentMarker(target) {
    if (target instanceof HTMLElement) {
      const classList = target.classList;
      if (classList.contains('in-marker')) {
        this.currentMarker = this.inMarker;
      } else if (classList.contains('out-marker')) {
        this.currentMarker = this.outMarker;
      } else if (classList.contains('play-head')) {
        this.currentMarker = this.playHead;
      }
    } else if (target instanceof Marker) {
      this.currentMarker = target;
    } else {
      this.currentMarker = null;
    }
    console.log('dragStart -> this.currentMarker', this.currentMarker);
    return;
  }

  /**
   * Set last in and out marker positions
   * to calculate delta / width of range selector on next drag vent
   */
  setLastInAndOutMarkerPositions() {
    this.lastInPos = this.inMarker.getBounds().right;
    this.lastOutPos = this.outMarker.getBounds().left;
    this.lastRangeSelectorX = getTranslateX(this.rangeSelector);
  }

  setRangeWidth(percentWidth) {
    this.rangeSelector.style.width = `${percentWidth}%`;
  }

  setRangeSelectorXPos(x) {
    this.rangeSelector.style.transform = `translateX(${x}px)`;
  }

  setSelectedFramesX(x) {
    this.selectedFrames.style.transform = `translateX(${x}px)`;
  }

  getTimelineWidth() {
    return this.getTimelineElement().getBoundingClientRect().width;
  }

  movePlayheadToMarkerPosition() {
    let offset = 0;
    let x = this.currentMarker.getX();
    if (this.currentMarker.is('out')) {
      x = this.getTimelineWidth() + x;
      offset = this.playHead.getBounds().width;
    }
    this.playHead.setXPosition(parseInt(x) - parseInt(offset));
    this.playHead.show();
  }

  show() {
    this.rangeSelector.parentElement.style.visibility = 'visible';
    this.hidden = false;
  }

  hide() {
    this.rangeSelector.parentElement.style.visibility = 'hidden';
    this.hidden = true;
    this.resetRange();
  }

  resetRange() {
    this.inMarker.setPositionByTimeIndex(0);
    this.outMarker.setPositionByTimeIndex(this.video.duration);
    this.setRangeWidth(100);
    this.setRangeSelectorXPos(0);
    this.setSelectedFramesX(0);
  }

  attachTimelineEvents() {
    this.getTimelineElement().addEventListener(
      'timelineReady',
      this.handleTimelineReady.bind(this)
    );
  }

  attachDraggableEvents(timeline) {
    const handleDrag = this.handleDrag.bind(this);
    const handleDragStart = this.handleDragStart.bind(this);
    const handleDragConstraint = this.handleDragConstraint.bind(this);
    const timelineContainer = this.getTimelineElement().closest('.timeline-container');
    const options = {
      type: 'x',
      inertia: true,
      bounds: timelineContainer,
      onDragEnd: this.handleDragEnd.bind(this),
      onDragStart: function (event) {
        try {
          handleDragStart(event);
        } catch (error) {
          // range width = 0
          this.endDrag();
          console.error('Drag start error', error);
        }
      },
      onDrag: function (event) {
        try {
          handleDrag(event);
          handleDragConstraint(event, this);
        } catch (error) {
          // range width = 0
          this.endDrag();
          console.error(error);
        }
      },
    };
    this.inMarker.setDraggable(options);
    this.outMarker.setDraggable(options);

    window.addEventListener('resize', this.handleWindowResizeDragPositions.bind(this));
  }

  /**
   * Handle Timeline ready event
   *
   * timelineReady event fires when all frames have been rendered.
   * When the timeline is ready, init draggable for both
   *  in and out markers.
   *
   * @param {*} event
   */
  handleTimelineReady(event) {
    const { target: timeline } = event;
    this.attachDraggableEvents(timeline);
    this.video.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
    this.video.addEventListener('play', this.handlePlay.bind(this));
    this.renderFramesClone();
    if (this.initialMarkers?.in) {
      this.inMarker.setPositionByTimeIndex(this.initialMarkers.in);
      console.log('inmarker x', this.inMarker.getX());
      this.updateMarkerPosition(this.inMarker, this.initialMarkers.in);
    }

    if (this.initialMarkers?.out) {
      this.outMarker.setPositionByTimeIndex(this.initialMarkers.out);
      console.log('outmarker x', this.outMarker.getX());
      this.updateMarkerPosition(this.outMarker, this.initialMarkers.out);
    }
    this.show();
  }

  /**
   * handles the range selector width and position
   *
   * @param {*} event - Draggable onDrag Event
   * @returns {Boolean} - false if range selector width is <= 0, otherwise true
   */
  handleDrag(event) {
    if (!this.currentMarker) {
      throw new Error('Failed to set range selector, current marker is unknown');
    }
    const { target: markerElement } = event;
    console.log('handleDrag -> currentMarker', this.currentMarker);
    const timeIndex = this.currentMarker.getTimeIndexFromCurrentPosition();
    this.updateMarkerPosition(this.currentMarker, timeIndex);
    this.video.currentTime = timeIndex;

    /**
     * Though timeUpdate event will automatically adjust the playhead position,
     * we do it here to avoid any ui delays
     */
    this.playHead.hide();
    // this.playHead.setPercentPosition(timeIndex / this.video.duration, false);
    return true;
  }

  updateMarkerPosition(marker, timeIndex) {
    console.log('UPDATE MOTHERUCKER', timeIndex, marker);
    const timelineWidth = this.getTimelineWidth();
    const inPos = this.inMarker.getX();
    const outPos = timelineWidth + this.outMarker.getX();
    const rangeWidth = outPos - inPos;

    // console.log(`handleDrag inX ${inPos}, outX ${outPos} rangeWidth ${rangeWidth}`);
    /*
     * Set the range width.
     * To keep the range selector responsive, we calculate its width
     * as a percentage of its parent (the timeline)
     */
    let percentWidth = (rangeWidth / timelineWidth) * 100;
    if (rangeWidth <= 0) {
      percentWidth = 0;
    }
    this.setRangeWidth(percentWidth);
    /*
     * adjust the x position of the range selector
     * when dragging the in marker
     */
    if (marker.is('in')) {
      const rangeX = parseInt(this.inMarker.getX());
      this.setRangeSelectorXPos(rangeX);
    }
    /**
     * Find time index from the current marker
     * and update the video time, as well as the marker timestamp
     */
    marker.setTimeIndex(timeIndex);

    /**
     * Selected frames container is anchored to the left, which means when
     * the left marker is advanced, the frames will stay in their correct position.
     * The right marker, however, will move all the frames alone with the range selector,
     * so we need to adjust the frame clone's translateX position to compensate.
     */
    if (marker.is('in')) {
      const translateX = parseInt(this.inMarker.getX()) * -1;
      this.setSelectedFramesX(translateX);
    }
  }

  handleDragEnd(event) {
    const currentMarker = this.currentMarker;
    this.playHead.toggleAnimate(false);
    console.log('currentMarker', currentMarker);
    this.movePlayheadToMarkerPosition();

    setTimeout(() => {
      /**
       * We have to keep a reference to the marker at the dragEnd event
       * since by the time setTimeout is called, this.currentMarker may
       * point to another marker.
       */
      currentMarker.timestamp.hide();
    }, 500);
  }

  handleDragConstraint(event, Draggable) {
    let minX = 0,
      maxX = 0;
    const x = Draggable.x;
    // const { target} = Draggable;
    const timelineWidth = this.getTimelineWidth();
    if (this.currentMarker.is('in')) {
      // might be faster to get MaxX from other drag instance
      maxX = timelineWidth + this.outMarker.getX();
    } else {
      /**
       * Note: outmarker's direction is calculated with negative values
       * e.g. minX -600, maxX 0
       *  */
      minX = (timelineWidth - this.inMarker.getX()) * -1;
    }
    Draggable.applyBounds({ minX, maxX, minY: 0, maxY: 0 });
  }

  handleDragStart(event) {
    const { target: markerElement } = event;
    if (
      !markerElement ||
      !markerElement.closest('.marker') ||
      !markerElement.classList.contains('marker')
    ) {
      throw new Error('Failed to select marker');
    }
    this.video.pause();
    this.setCurrentMarker(markerElement);
    this.setLastInAndOutMarkerPositions();
    this.currentMarker.timestamp.show();
  }

  handleWindowResizeDragPositions() {
    const { width: timelineWidth, height: timelineHeight } =
      this.getTimelineElement().getBoundingClientRect();
    // console.log(`outMarker percentX ${this.outMarker.getPercentageX()} timelineWidth: ${timelineWidth}`);
    const inMarkerX = this.inMarker.getPercentageX() * timelineWidth;
    const outMarkerX = this.outMarker.getPercentageX() * timelineWidth;
    const playheadX = this.playHead.getPercentageX() * timelineWidth;
    this.inMarker.setXPosition(inMarkerX);
    this.outMarker.setXPosition(outMarkerX);
    this.playHead.setXPosition(playheadX);
    // update range selector left position only for in marker
    this.setRangeSelectorXPos(inMarkerX);
    const rangeWidth = timelineWidth + outMarkerX - inMarkerX;
    // console.log(
    //   `resize inX ${inMarkerX} outX ${timelineWidth + outMarkerX} rangeWidth ${rangeWidth}`
    // );

    let percentWidth = (rangeWidth / timelineWidth) * 100;
    if (rangeWidth <= 0) {
      percentWidth = 0;
    }
    this.setRangeWidth(percentWidth);
    // update selectedFrames width, height, and x
    if (this.selectedFrames) {
      this.selectedFrames.style.width = `${timelineWidth}px`;
      this.selectedFrames.style.height = `${timelineHeight}px`;
      this.setSelectedFramesX(inMarkerX * -1);
    }
  }

  /*** VIDEO EVENTS ***/

  handlePlay(event) {
    const currentTime = parseFloat(this.video.currentTime.toFixed(this.timeIndexPrecision));
    const outTime = parseFloat(this.outMarker.getTimeIndex().toFixed(this.timeIndexPrecision));
    if (currentTime >= outTime) {
      console.log(`currentTime ${currentTime}, outTime ${outTime}`);
      console.error('video playhead over range limit, returning playhead to inTime');
      this.playHead.toggleAnimate(false);
      this.video.currentTime = this.inMarker.getTimeIndex().toFixed(this.timeIndexPrecision);
    }
    window.requestAnimationFrame(() => {
      this.playHead.toggleAnimate(true);
    });
  }

  handleTimeUpdate(event) {
    // move these to onPlay event
    const isPlaying = !this.video.paused;
    const inTime = Number(this.inMarker.getTimeIndex().toFixed(this.timeIndexPrecision));

    const outTime = Number(this.outMarker.getTimeIndex().toFixed(this.timeIndexPrecision));
    const currentTime = Number(this.video.currentTime.toFixed(this.timeIndexPrecision));
    if (outTime - inTime < 0.1) {
      console.error('outTime - inTime < 0.1');
      // prevent infinite loop of updating video currenttime to upper and lower limits
      return;
    }
    if (currentTime == outTime && isPlaying) {
      console.error(`video playhead has reached out marker`);
      this.video.pause();
      return;
    }
    if (currentTime > outTime) {
      console.error(`video playhead ${currentTime} is over upper range limit:  ${outTime}`);
      console.log('animation time', this.playHead.getAnimationTime());
      const playHeadIndex = this.playHead.getTimeIndexFromCurrentPosition().toFixed(3);
      const remainingTime = outTime - playHeadIndex;
      this.playHead.marker.style.transition = `transform ${remainingTime}s linear`;
      this.video.currentTime = outTime;
      this.video.pause();

      return;
    }
    if (currentTime < inTime) {
      console.error(`video playhead ${currentTime} is under lower range limit:  ${inTime}`);
      this.video.currentTime = inTime;
      this.video.pause();
      return;
    }

    const percentElapsed = this.video.currentTime / this.video.duration;
    this.playHead.setPercentPosition(percentElapsed, false);
  }

  createFramesClone() {
    const framesContainer = this.getTimelineElement().querySelector('.frames-container');
    const { width, height } = framesContainer.getBoundingClientRect();
    this.selectedFrames = framesContainer.cloneNode(true);
    this.selectedFrames.classList.add('selected-frames');
    /**
     * Because the selected frames is nested inside the range selector,
     * we must explicitly set the height and width of the selected frames
     * otherwise we will get an accordion squisihing effect when adjusting
     * the range selector.
     *
     * Importantly, this means we must adjust the width/height when the window
     * resizes.
     */
    this.selectedFrames.style.width = `${width}px`;
    this.selectedFrames.style.height = `${height}px`;
    this.selectedFrames.style.left = 0;
    cloneAllCanvasFrames(framesContainer, this.selectedFrames);
    return this.selectedFrames;
  }

  createRangeSelectorContainer() {
    const rsContainer = document.createElement('div');
    rsContainer.className = 'range-selector-container';
    return rsContainer;
  }

  createRangeSelector() {
    this.rangeSelector = document.createElement('div');
    this.rangeSelector.className = 'range-selector';
    return this.rangeSelector;
  }

  renderFramesClone() {
    this.getTimelineElement().querySelector('.range-selector').append(this.createFramesClone());
  }

  // onRender() {
  //   console.log('RangeSelector has rendered', this.initialMarkers);

  // }

  render(container) {
    const rsContainer = this.createRangeSelectorContainer();
    super.render(rsContainer, container);
    const rs = this.createRangeSelector();
    rsContainer.append(rs);
    this.inMarker.render(rsContainer);
    this.outMarker.render(rsContainer);
    container.append(rsContainer);

    this.attachTimelineEvents();
  }
}

export default RangeSelector;
