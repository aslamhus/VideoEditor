import Marker from './Marker/Marker.js';
import { cloneAllCanvasFrames } from './utils.js';
import { getTranslateX } from '../../utils.js';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { initPresHoldEvent } from '../../utils/onpresshold.js';
import PlayHead from '../PlayHead/PlayHead.js';
import Popover from '../../Popover/Popover.js';
import context from '../../context.js';
import '../../types.js';
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(Draggable);
import './range-selector.css';

class RangeSelector {
  /**
   * @typedef {Object} constructor
   * @property {Popover} popver - the popover element in the timeline
   * @property {Timeline} timeline - the timeline component (parent of range selector and markers)
   * @property {PlayHead} playHead - the playhead component
   * @property {Function} setVideoTimeIndex - sets the video time index
   * @property {Object} initialMarkers - the initial in and out markers
   * @property {limit} limit - the min and max time range of the video editor
   * @property {Function} [onRangeUpdate] - callback when the range is updated
   */
  /**
   *
   * @param {constructor} constructor
   */
  constructor({
    popover,
    timeline,
    playHead,
    setVideoTimeIndex,
    initialMarkers,
    limit,
    onRangeUpdate,
  }) {
    const { viewer, onRangeLimit, onMarkerDragStart, onMarkerDragEnd } = context.getContext();
    this.timeline = timeline;
    this.video = viewer.video;
    this.initialMarkers = initialMarkers || { in: 0, out: this.video.duration };
    if (!this.initialMarkers.out) this.initialMarkers.out = this.video.duration;
    this.viewer = viewer;
    this.timeIndexPrecision = 3;
    this.setVideoTimeIndex = setVideoTimeIndex;
    this.lastInPos = 0;
    this.lastOutPos = 0;
    this.lastRangeSelectorX = 0;
    this.onRangeUpdate = onRangeUpdate;
    this.onRangeLimit = onRangeLimit;
    this.onMarkerDragStart = onMarkerDragStart;
    this.onMarkerDragEnd = onMarkerDragEnd;
    // range
    this.currentIndex = this.initialMarkers.in;
    this.inTime = this.currentIndex;
    this.outTime = this.initialMarkers.out;
    this.limit = limit;
    this.popover = popover;
    // isDragging refers to the range selector draggable
    this.isDragging = false;
    this.currentMarker = null;
    this.rangeSelector = null;
    this.selectedFrames = null;
    this.hidden = false;

    // bind
    this.handleRangeUpdate = this.handleRangeUpdate.bind(this);
    this.calculateRangeSelectorDragBounds = this.calculateRangeSelectorDragBounds.bind(this);
    // components
    this.inMarker = new Marker({
      className: 'in-marker',
      name: 'in',
      anchor: 'right',
      initialIndex: initialMarkers?.in || 0,
      onChange: ({ timeIndex, x }) => {
        // hook into out marker change event
      },
    });
    this.outMarker = new Marker({
      className: 'out-marker',
      name: 'out',
      anchor: 'left',
      direction: 'negative',
      initialIndex: initialMarkers?.out || this.viewer.video.duration,
      onChange: ({ timeIndex, x }) => {
        // hook into out marker change event
      },
    });

    this.playHead = playHead;
    this.playHead.onChange = ({ timeIndex, x }) => {
      // hoook into playhead change event
    };
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
    // console.log('dragStart -> this.currentMarker', this.currentMarker);
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
    gsap.set(this.rangeSelector, { x });
  }

  getRangeSelectorXPos() {
    const x1 = getTranslateX(this.rangeSelector);
    const x2 = x1 + this.rangeSelector.getBoundingClientRect().width;
    return [x1, x2];
  }

  setSelectedFramesX(x) {
    this.selectedFrames.style.transform = `translateX(${x}px)`;
  }

  getTimelineWidth() {
    return this.timeline.getTimelineElement().getBoundingClientRect().width;
  }

  movePlayheadToMarkerPosition() {
    let offset = 0;
    let x = this.currentMarker.getX();
    if (this.currentMarker.is('out')) {
      x = this.getTimelineWidth() + x;
      offset = this.playHead.getBounds().width;
    }
    const playHeadXPos = parseInt(x) - parseInt(offset);
    this.playHead.setXPosition(playHeadXPos);
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
    this.outMarker.setPositionByTimeIndex(this.viewer.video.duration);
    this.setRangeWidth(100);
    this.setRangeSelectorXPos(0);
    this.setSelectedFramesX(0);
  }

  attachTimelineEvents() {
    console.log('this.timeline', this.timeline);
    this.timeline
      .getTimelineElement()
      .addEventListener('timelineReady', this.handleTimelineReady.bind(this));
  }

  attachDraggableEvents(timeline) {
    // attach in marker and out marker draggable options
    const handleDrag = this.handleDrag.bind(this);
    const handleDragEnd = this.handleDragEnd.bind(this);
    const handleDragStart = this.handleDragStart.bind(this);
    const timelineContainer = this.timeline.getTimelineElement().closest('.timeline-container');
    const markerOptions = {
      type: 'x',
      inertia: false,
      bounds: timelineContainer,
      onDragEnd: function (event) {
        handleDragEnd(event, this);
      },
      onDragStart: function (event) {
        // throwing an error here invokes draggable endDrag method
        handleDragStart(event, this);
      },
      onMove: function (event) {},
      onDrag: function (event) {
        // throwing an error here invokes draggable endDrag method
        handleDrag(event, this);
      },
    };
    this.inMarker.setDraggable(markerOptions);
    this.outMarker.setDraggable(markerOptions);
    // attach range selector draggable options

    // this.rangeSelector.onmouseup = onRangeSelectorDragEnd
    const handleDragRangeSelector = this.handleDragRangeSelector.bind(this);
    const handleDragEndRangeSelector = this.handleDragEndRangeSelector.bind(this);

    // set range selecctor options
    const rangeSelectorOptions = {
      type: 'x',
      inertia: true,
      bounds: this.calculateRangeSelectorDragBounds(),
      onDragEnd: function (event) {
        handleDragEndRangeSelector(event);
        this.disable();
      },
      onDragStart: (event) => {
        event.preventDefault();
        this.isDragging = true;
        this.playHead.hide();
        this.rangeSelector.parentElement.classList.add('range-selector-dragging');
        document.body.style.setProperty('cursor', 'grabbing', 'important');

        // this.inMarker.draggable.disable();
        // this.outMarker.draggable.disable();
      },
      onDrag: function (event) {
        event.preventDefault();

        handleDragRangeSelector(event, this);
      },

      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.body.style.cursor = 'pointer';
      },
    };
    const rsDraggable = Draggable.create(this.rangeSelector, {
      ...rangeSelectorOptions,
    })[0];
    rsDraggable.vars.zIndexBoost = false;
    rsDraggable.disable();

    this.rsDraggable = rsDraggable;

    // press hold event
    const onPressHold = (event) => {
      const { target } = event;
      event.preventDefault();
      event.stopPropagation();
      // prevent dragging the range selector if the target is a marker
      if (target.classList.contains('marker')) return;
      rsDraggable.enable();
      rsDraggable.startDrag(event);
      // this.rangeSelector.style.setProperty('cursor', 'grabbing', 'important');
    };
    const pressHoldEvent = initPresHoldEvent(this.rangeSelector, onPressHold, {
      holdDuration: 60,
    });

    // rsDraggable.vars.cursor = 'grabbing';
    window.addEventListener('resize', this.handleWindowResizeDragPositions.bind(this));
  }

  calculateRangeSelectorDragBounds() {
    // get range selector bounds

    const timelineContainer = this.timeline.getTimelineElement().closest('.timeline-container');
    const markerWidth = this.inMarker.getBounds().width;
    const timelinePadding = getComputedStyle(timelineContainer).paddingLeft;
    const minX =
      timelineContainer.getBoundingClientRect().x - parseInt(timelinePadding) + markerWidth;
    const maxX =
      timelineContainer.getBoundingClientRect().width -
      parseInt(timelinePadding) * 2 -
      markerWidth * 2;
    return timelineContainer.querySelector('.frames-container');
    return { left: minX, width: maxX };
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
    this.viewer.video.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
    this.viewer.video.addEventListener('play', this.handlePlay.bind(this));
    this.renderFramesClone();
    if (this.initialMarkers?.in) {
      this.inMarker.setPositionByTimeIndex(this.initialMarkers.in);
      this.viewer.video.currentTime = this.initialMarkers.in;
      this.updateMarkerPosition(this.inMarker, this.initialMarkers.in);
    }
    // handle max duration
    const { maxDuration } = this.limit || {};
    const initialDuration = this.initialMarkers.out - this.initialMarkers.in;
    if (maxDuration && initialDuration > maxDuration) {
      this.initialMarkers.out = this.initialMarkers.in + maxDuration;
    }
    if (this.initialMarkers?.out) {
      this.outMarker.setPositionByTimeIndex(this.initialMarkers.out);
      this.updateMarkerPosition(this.outMarker, this.initialMarkers.out);
    }
    this.show();
    //
  }

  /**
   *
   * Handle range update
   *
   * Updates the current index, inTime and outTime for the range selector
   * and optionally passes the data to the custom callback onRangeUpdate
   */
  handleRangeUpdate({ marker, timeIndex, x }) {
    switch (marker) {
      case 'in':
      case 'rangeSelector':
        this.inTime = timeIndex;
        this.outTime = this.outMarker.getTimeIndex();
        this.currentIndex = timeIndex;
        break;
      case 'out':
        this.outTime = timeIndex;
        break;
      case 'playhead':
        this.currentIndex = timeIndex;
        break;
      default:
        // do nothing
        console.error('unknown marker update in handleRangeUpdate', marker);
    }
    // hide popover if visible
    if (!this.popover.hidden) this.popover.hide();
    // custom callback
    if (this.onRangeUpdate instanceof Function) {
      this.onRangeUpdate(this.currentIndex, { in: this.inTime, out: this.outTime });
    }
  }

  /**
   *
   * @param {DragEvent} event - the draggable event
   * @param {Draggable} draggable - the draggable instance
   */
  handleDragRangeSelector(event, draggable) {
    // get range selector bounds positions
    const [x1, x2] = this.getRangeSelectorXPos();
    // set in marker position
    this.inMarker.setXPosition(x1);
    // set out marker position
    const outX = (this.timeline.getTimelineElement().getBoundingClientRect().width - x2) * -1;
    this.outMarker.setXPosition(outX);
    // set selected frames position
    const selectedFramesX = parseInt(x1) * -1;
    this.setSelectedFramesX(selectedFramesX);
    // update time index
    const timeIndex = this.inMarker.getTimeIndex();
    this.viewer.video.currentTime = timeIndex;
    this.handleRangeUpdate({
      marker: 'rangeSelector',
      timeIndex,
      x: x1,
    });
  }

  handleDragEndRangeSelector(event) {
    this.currentMarker = this.inMarker;
    this.movePlayheadToMarkerPosition();
    this.playHead.show();
    this.rangeSelector.style.setProperty('cursor', 'pointer', 'important');
    document.body.style.removeProperty('cursor');

    this.rangeSelector.parentElement.classList.remove('range-selector-dragging');
  }

  /**
   * handles the range selector width and position
   *
   * @param {*} event - Draggable onDrag Event
   * @returns {Boolean} - false if range selector width is <= 0, otherwise true
   */
  handleDrag(event, draggable) {
    const timeIndex = this.currentMarker.getTimeIndexFromCurrentPosition();
    this.updateMarkerPosition(this.currentMarker, timeIndex);
    this.viewer.video.currentTime = timeIndex;
    // though timeUpdate event will automatically adjust the playhead position,
    //we do it here to avoid any ui delays
    this.playHead.hide();

    // handle drag constraint
    this.handleDragConstraint(event, draggable);
    // trigger range update
    this.handleRangeUpdate({
      marker: this.currentMarker.name,
      timeIndex: this.currentMarker.timeIndex,
      x: this.currentMarker.x,
    });
    return true;
  }

  updateMarkerPosition(marker, timeIndex) {
    const timelineWidth = this.getTimelineWidth();
    const inPos = this.inMarker.getX();
    const outPos = timelineWidth + this.outMarker.getX();
    const rangeWidth = outPos - inPos;
    // Set the range width.
    // To keep the range selector responsive, we calculate its width
    // as a percentage of its parent (the timeline)
    let percentWidth = (rangeWidth / timelineWidth) * 100;
    if (rangeWidth <= 0) {
      percentWidth = 0;
    }
    this.setRangeWidth(percentWidth);
    // adjust the x position of the range selector
    // when dragging the in marker
    if (marker.is('in')) {
      const rangeX = parseInt(this.inMarker.getX());
      this.setRangeSelectorXPos(rangeX);
    }
    // Find time index from the current marker
    // and update the video time, as well as the marker timestamp
    marker.setTimeIndex(timeIndex);
    // Selected frames container is anchored to the left, which means when
    // the left marker is advanced, the frames will stay in their correct position.
    // he right marker, however, will move all the frames alone with the range selector,
    // so we need to adjust the frame clone's translateX position to compensate.
    if (marker.is('in')) {
      const translateX = parseInt(this.inMarker.getX()) * -1;
      this.setSelectedFramesX(translateX);
    }
  }

  handleDragEnd(event, draggable) {
    const currentMarker = this.currentMarker;
    this.movePlayheadToMarkerPosition();
    // sometimes the range selector is not updated to the final
    // drag position, so we call drag event one more time to
    //make sure everything is in the correct popsition
    this.handleDrag(event, draggable);
    // show playhead

    this.playHead.show();
    // fire marker drag end callback
    if (this.onMarkerDragEnd) {
      this.onMarkerDragEnd(currentMarker);
    }
    // fade out the timestamp
    setTimeout(() => {
      /**
       * Note:
       * We have to create a reference to the current marker within the scope
       * of this function call, because by the time setTimeout is called
       * this.currentMarker may point to another marker.
       */
      currentMarker.timestamp.hide();
    }, 500);
  }

  /**
   * Handle drag constraint
   *
   * Sets the draggable bounds for the in and out markers
   *
   * @param {MouseEvent} event
   * @param {Draggable} draggable - the draggable instance for the marker
   */
  handleDragConstraint(event, draggable) {
    let minX = 0,
      maxX = 0;
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
    if (this.currentMarker.getX() > maxX) {
      this.currentMarker.setXPosition(maxX);
      throw new Error('out of bounds (in marker)');
    }
    if (this.currentMarker.getX() < minX) {
      this.currentMarker.setXPosition(minX);
      throw new Error('out of bounds(out marker)');
    }
    if (this.limit?.maxDuration) {
      this.handleDragConstraintMaxDuration(event, draggable);
    }
  }

  handleDragConstraintMaxDuration(event, draggable) {
    const dragDirection = draggable.getDirection();
    if (
      (this.currentMarker.is('in') && dragDirection === 'right') ||
      (this.currentMarker.is('out') && dragDirection === 'left')
    ) {
      return;
    }
    const inTime = this.inMarker.getTimeIndex();
    const outTime = this.outMarker.getTimeIndex();
    const duration = outTime - inTime;
    const { maxDuration } = this.limit;
    // find min max values

    if (duration > maxDuration) {
      // set the current marker its limit time index
      if (this.currentMarker.is('in')) {
        const minInMarkerTime = parseFloat(outTime) - parseFloat(maxDuration);
        this.currentMarker.setPositionByTimeIndex(minInMarkerTime);
      }
      if (this.currentMarker.is('out')) {
        const maxOutMarkerTime = parseFloat(inTime) + parseFloat(maxDuration);
        this.currentMarker.setPositionByTimeIndex(maxOutMarkerTime);
      }
      // show popover on current marker
      this.popover.setBody(`Please select a length shorter than ${maxDuration} seconds.`);
      this.popover.render(this.currentMarker.marker);
      // trigger custom callback
      if (this.onRangeLimit) {
        this.onRangeLimit({
          marker: this.currentMarker,
          time: { in: inTime, out: outTime },
          maxDuration,
        });
      }
      throw new Error(`Max duration reached: ${maxDuration}`);
    }
  }

  handleDragStart(event, draggable) {
    const selectedMarker = this.findMarkerFromDragEvent(event, draggable);
    event.stopPropagation();
    event.preventDefault();
    this.viewer.video.pause();
    this.setCurrentMarker(selectedMarker);
    this.setLastInAndOutMarkerPositions();
    this.currentMarker.timestamp.show();
    // fire marker drag start callback
    if (this.onMarkerDragStart) {
      this.onMarkerDragStart(this.currentMarker);
    }
  }

  findMarkerFromDragEvent(event, draggable) {
    const { target: selectedMarker } = draggable;

    return selectedMarker;
  }

  handleWindowResizeDragPositions() {
    const { width: timelineWidth, height: timelineHeight } = this.timeline
      .getTimelineElement()
      .getBoundingClientRect();
    const inMarkerX = this.inMarker.getPercentageX() * timelineWidth;
    const outMarkerX = this.outMarker.getPercentageX() * timelineWidth;
    const playheadX = this.playHead.getPercentageX() * timelineWidth;
    this.inMarker.setXPosition(inMarkerX);
    this.outMarker.setXPosition(outMarkerX);
    this.playHead.setXPosition(playheadX);
    // update range selector left position only for in marker
    this.setRangeSelectorXPos(inMarkerX);
    const rangeWidth = timelineWidth + outMarkerX - inMarkerX;
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
    // update range bounds
    const timelineContainer = this.timeline.getTimelineElement().closest('.timeline-container');
    this.inMarker.draggable.applyBounds(timelineContainer);
    this.outMarker.draggable.applyBounds(timelineContainer);
    this.rsDraggable.applyBounds(this.calculateRangeSelectorDragBounds());
    // hide popover
    if (!this.popover.hidden) this.popover.hide();
  }

  /*** VIDEO EVENTS ***/

  handlePlay(event) {
    const currentTime = parseFloat(this.viewer.video.currentTime.toFixed(this.timeIndexPrecision));
    const outTime = parseFloat(this.outMarker.getTimeIndex().toFixed(this.timeIndexPrecision));
    if (currentTime >= outTime) {
      // console.log(`currentTime ${currentTime}, outTime ${outTime}`);
      // console.error('video playhead over range limit, returning playhead to inTime');
      // this.playHead.toggleAnimate(false);
      this.viewer.video.currentTime = this.inMarker.getTimeIndex().toFixed(this.timeIndexPrecision);
    }
    // window.requestAnimationFrame(() => {
    //   this.playHead.toggleAnimate(true);
    // });
  }

  handleTimeUpdate(event) {
    if (this.isDragging) return;
    // move these to onPlay event
    const isPlaying = !this.viewer.video.paused;
    const inTime = Number(this.inMarker.getTimeIndex().toFixed(this.timeIndexPrecision));

    const outTime = Number(this.outMarker.getTimeIndex().toFixed(this.timeIndexPrecision));
    const currentTime = Number(this.viewer.video.currentTime.toFixed(this.timeIndexPrecision));
    if (outTime - inTime < 0.1) {
      console.error('outTime - inTime < 0.1');
      // prevent infinite loop of updating video currenttime to upper and lower limits
      return;
    }
    if (currentTime == outTime && isPlaying) {
      console.error(`video playhead has reached out marker`);
      this.viewer.video.pause();
      return;
    }
    if (currentTime > outTime) {
      console.error(`video playhead ${currentTime} is over upper range limit:  ${outTime}`);
      const playHeadIndex = this.playHead.getTimeIndexFromCurrentPosition().toFixed(3);
      const remainingTime = outTime - playHeadIndex;
      this.viewer.video.currentTime = outTime;
      this.viewer.video.pause();

      return;
    }
    if (currentTime < inTime) {
      console.error(`video playhead ${currentTime} is under lower range limit:  ${inTime}`);
      this.viewer.video.currentTime = inTime;
      this.viewer.video.pause();
      return;
    }

    const percentElapsed = this.viewer.video.currentTime / this.viewer.video.duration;
    this.playHead.setPercentPosition(percentElapsed, false);
  }

  createFramesClone() {
    const framesContainer = this.timeline.getTimelineElement().querySelector('.frames-container');
    const { width, height } = framesContainer.getBoundingClientRect();
    this.selectedFrames = framesContainer.cloneNode(true);
    this.selectedFrames.classList.add('selected-frames');
    /**
     * Note:
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
    this.timeline
      .getTimelineElement()
      .querySelector('.range-selector')
      .append(this.createFramesClone());
  }

  render(container) {
    const rsContainer = this.createRangeSelectorContainer();
    const rs = this.createRangeSelector();
    rsContainer.append(rs);
    this.inMarker.render(rsContainer);
    this.outMarker.render(rsContainer);
    container.append(rsContainer);

    this.attachTimelineEvents();
  }
}

export default RangeSelector;
