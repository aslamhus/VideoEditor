import Marker from './Marker/Marker.js';
import { cloneAllCanvasFrames } from './utils.js';
import { getTranslateX } from '../../utils.js';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { initPresHoldEvent } from '../../utils/onpresshold.js';
import PlayHead from '../PlayHead/PlayHead.js';
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(Draggable);
import './range-selector.css';

class RangeSelector {
  /**
   * @typedef {Object} constructor
   * @property {HTMLVideoElement} video
   * @property {PlayHead} playHead
   * @property {Function} getTimelineElement
   * @property {Function} getVideoDuration
   * @property {Function} setVideoTimeIndex
   * @property {Object} initialMarkers
   */
  /**
   *
   * @param {constructor} constructor
   */
  constructor({
    video,
    playHead,
    getTimelineElement,
    getVideoDuration,
    setVideoTimeIndex,

    initialMarkers,
  }) {
    this.initialMarkers = initialMarkers;
    this.video = video;
    this.getVideoDuration = getVideoDuration;
    this.timeIndexPrecision = 3;
    this.getTimelineElement = getTimelineElement;
    this.setVideoTimeIndex = setVideoTimeIndex;
    this.lastInPos = 0;
    this.lastOutPos = 0;
    this.lastRangeSelectorX = 0;
    // refers to the range selector draggable
    this.isDragging = false;
    this.currentMarker = null;
    this.rangeSelector = null;
    this.selectedFrames = null;
    this.hidden = false;
    this.inMarker = new Marker({
      className: 'in-marker',
      name: 'in',
      anchor: 'right',
      initialIndex: initialMarkers?.in || 0,
      getVideoDuration,
      getTimelineElement,
    });
    this.outMarker = new Marker({
      className: 'out-marker',
      name: 'out',
      anchor: 'left',
      direction: 'negative',
      initialIndex: initialMarkers?.out || this.video.duration,
      getVideoDuration,
      getTimelineElement,
    });
    this.playHead = playHead;

    //
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
    // this.rangeSelector.style.transform = `translateX(${x}px)`;
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
    return this.getTimelineElement().getBoundingClientRect().width;
  }

  movePlayheadToMarkerPosition() {
    let offset = 0;
    let x = this.currentMarker.getX();
    if (this.currentMarker.is('out')) {
      x = this.getTimelineWidth() + x;
      offset = this.playHead.getBounds().width;
    }
    const playHeadXPos = parseInt(x) - parseInt(offset);
    console.log('playehad X', playHeadXPos);
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
    // attach in marker and out marker draggable options
    const handleDrag = this.handleDrag.bind(this);
    const handleDragStart = this.handleDragStart.bind(this);
    const handleDragConstraint = this.handleDragConstraint.bind(this);
    const timelineContainer = this.getTimelineElement().closest('.timeline-container');
    const markerOptions = {
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
    this.inMarker.setDraggable(markerOptions);
    this.outMarker.setDraggable(markerOptions);
    // attach range selector draggable options

    // pressHoldEvent.removeEvent();
    // this.rangeSelector.onmose = () => {
    //   this.rangeSelector.style.setProperty('cursor', 'pointer', 'important');
    // };
    this.rangeSelector.onmouseup = () => {
      console.log('RANGE SELECOTR MOUSE UP');
      this.rangeSelector.style.setProperty('cursor', 'pointer', 'important');
      this.rangeSelector.isDragging = false;
      document.body.style.removeProperty('cursor');
      this.rangeSelector.parentElement.classList.remove('range-selector-dragging');
    };
    // this.rangeSelector.onmouseout = () => {
    //   document.body.style.cursor = 'default';
    // };
    const handleDragRangeSelector = this.handleDragRangeSelector.bind(this);
    const handleDragEndRangeSelector = this.handleDragEndRangeSelector.bind(this);
    // get range selector bounds
    const markerWidth = this.inMarker.getBounds().width;
    const timelinePadding = getComputedStyle(timelineContainer).paddingLeft;
    const minX = timelineContainer.getBoundingClientRect().x - parseInt(timelinePadding);
    const maxX =
      timelineContainer.getBoundingClientRect().width -
      markerWidth * 2 -
      parseInt(timelinePadding) * 2;
    // set range selecctor options
    const rangeSelectorOptions = {
      type: 'x',
      inertia: true,
      bounds: { left: minX, width: maxX },
      onDragEnd: function (event) {
        handleDragEndRangeSelector(event);
        this.disable();
      },
      onDragStart: (event) => {
        event.preventDefault();
        this.isDragging = true;
        console.log('drag start');
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
      onDragPressure: (event) => {
        console.log('drag pressure', event);
      },
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.body.style.cursor = 'pointer';
        console.log('onClick ');
      },
    };
    const rsDraggable = Draggable.create(this.rangeSelector, {
      ...rangeSelectorOptions,
    })[0];
    rsDraggable.vars.zIndexBoost = false;
    rsDraggable.disable();

    // press hold event
    const onPressHold = (event) => {
      console.log('press hold event');
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
    // window.addEventListener('resize', this.handleWindowResizeDragPositions.bind(this));
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
      this.video.currentTime = this.initialMarkers.in;
      // console.log('inmarker x', this.inMarker.getX());
      this.updateMarkerPosition(this.inMarker, this.initialMarkers.in);
    }

    if (this.initialMarkers?.out) {
      this.outMarker.setPositionByTimeIndex(this.initialMarkers.out);
      // console.log('outmarker x', this.outMarker.getX());
      this.updateMarkerPosition(this.outMarker, this.initialMarkers.out);
    }
    this.show();
  }

  /**
   *
   * @param {DragEvent} event - the draggable event
   * @param {Draggable} draggable - the draggable instance
   */
  handleDragRangeSelector(event, draggable) {
    // get range selector bounds positions
    const [x1, x2] = this.getRangeSelectorXPos();
    // this.setRangeSelectorXPos(x1);
    this.inMarker.setXPosition(x1);
    const outX = (this.getTimelineElement().getBoundingClientRect().width - x2) * -1;
    this.outMarker.setXPosition(outX);
    const selectedFramesX = parseInt(x1) * -1;
    this.setSelectedFramesX(selectedFramesX);
  }

  handleDragEndRangeSelector(event) {
    this.currentMarker = this.inMarker;
    this.movePlayheadToMarkerPosition();
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
    // console.log('handleDrag -> currentMarker', this.currentMarker);
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
    // this.playHead.toggleAnimate(false);
    // console.log('currentMarker', currentMarker);
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
      // console.log(`currentTime ${currentTime}, outTime ${outTime}`);
      // console.error('video playhead over range limit, returning playhead to inTime');
      // this.playHead.toggleAnimate(false);
      this.video.currentTime = this.inMarker.getTimeIndex().toFixed(this.timeIndexPrecision);
    }
    // window.requestAnimationFrame(() => {
    //   this.playHead.toggleAnimate(true);
    // });
  }

  handleTimeUpdate(event) {
    console.log('isDragging?', this.isDragging);
    if (this.isDragging) return;
    // move these to onPlay event
    const isPlaying = !this.video.paused;
    const inTime = Number(this.inMarker.getTimeIndex().toFixed(this.timeIndexPrecision));

    const outTime = Number(this.outMarker.getTimeIndex().toFixed(this.timeIndexPrecision));
    const currentTime = Number(this.video.currentTime.toFixed(this.timeIndexPrecision));

    // console.log(`currentTime ${currentTime}, inTime ${inTime}`);

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
      // console.log('animation time', this.playHead.getAnimationTime());
      const playHeadIndex = this.playHead.getTimeIndexFromCurrentPosition().toFixed(3);
      const remainingTime = outTime - playHeadIndex;
      // this.playHead.marker.style.transition = `transform ${remainingTime}s linear`;
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

  render(container) {
    const rsContainer = this.createRangeSelectorContainer();
    // super.render(rsContainer, container);
    const rs = this.createRangeSelector();
    rsContainer.append(rs);
    this.inMarker.render(rsContainer);
    this.outMarker.render(rsContainer);
    container.append(rsContainer);

    this.attachTimelineEvents();
  }
}

export default RangeSelector;
