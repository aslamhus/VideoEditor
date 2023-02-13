import Timestamp from '../Timestamp/TimeStamp';
import { getTranslateX } from '../../../utils';
import HTMLElement from '../../../../HTMLElement/HTMLElement';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(Draggable);
import './marker.css';

class Marker extends HTMLElement {
  constructor({
    name,
    anchor,
    className,
    getTimelineElement,
    getVideoDuration,
    direction = 'positive',
    initialIndex,
    draggable = false,
  }) {
    super();
    this.getTimelineElement = getTimelineElement;
    this.getVideoDuration = getVideoDuration;
    this.name = name;
    this.className = className;
    this.marker = this.createMarker();
    this.anchor = anchor;
    this.timeIndex = initialIndex;
    this.x = 0;
    this.percentageX = 0;
    this.direction = direction;
    this.timestamp = new Timestamp();
    // draggable argument defaults to false but can be object of draggable options
    this.draggable = draggable;
  }

  getMarker() {
    return this.marker;
  }

  getStyle() {
    return getComputedStyle(this.marker);
  }

  /**
   *
   * Get timeline position
   *
   * @returns {Number} timeline x position relative to timeline
   */
  getTimelinePosition() {
    const { x, width } = this.getBounds();
    let offset = 0;
    /**
     * in marker has a right anchor
     * [|(in)---------(out)|]
     */
    if (this.anchor == 'right') {
      offset = width;
    }
    // include viewport position in offset
    // 1. Calculate timeline x
    const timelineX = this.getTimelineElement().getBoundingClientRect().x;
    const markerX = x - timelineX + offset;
    // console.log('markerX', markerX);
    return markerX;
  }

  getTranslateX() {
    return getTranslateX(this.marker);
  }

  getX() {
    return this.x;
  }

  getPercentageX() {
    return this.percentageX;
  }

  getBounds() {
    return this.marker.getBoundingClientRect();
  }

  getTimeIndexFromCurrentPosition() {
    const timelineWidth = this.getTimelineElement().getBoundingClientRect().width;
    const markerPosition = this.getTimelinePosition();
    const timelineXPercent = markerPosition / timelineWidth;
    const timeIndex = this.getVideoDuration() * timelineXPercent;
    if (timeIndex < 0) {
      return 0;
    }
    return timeIndex;
  }

  getXPositionFromTimeIndex(timeIndex) {
    const timelineWidth = this.getTimelineElement().getBoundingClientRect().width;
    const percentElapsed = timeIndex / this.getVideoDuration();
    return timelineWidth * percentElapsed;
  }

  /**
   * Get time index
   *
   * @returns {Number} timeIndex or -1 if time index has not been set
   */
  getTimeIndex() {
    if (this.timeIndex == -1) {
      throw new Error(
        `time index not set or is invalid for marker ${name}: ${this.timeIndex}. Please initialize your marker with a timeIndex`
      );
    }
    return this.timeIndex;
  }

  setTimeIndex(timeIndex) {
    this.timeIndex = timeIndex;
    this.timestamp.setDecimalTime(timeIndex);
  }

  setX(x) {
    this.x = x;
  }

  setPercentageX(percentX) {
    /**
     * calculate and set marker position as a percentage of the timeline
     * This will allow us to calculate the proper time index of the marker
     * and keep the marker position consistent if the timeline is resized
     */
    this.percentageX = percentX;
  }

  setXPosition(x) {
    let translateX = x;

    if (this.draggable instanceof Draggable) {
      gsap.set(this.marker, { x: translateX });
      this.draggable.update();
    } else {
      this.marker.style.transform = `translateX(${translateX}px)`;
    }
    this.x = x;
  }

  setPositionByTimeIndex(timeIndex) {
    let x = this.getXPositionFromTimeIndex(timeIndex);
    if (this.direction == 'negative') {
      // for out marker, or any marker that advances towards negative coordinates
      x = this.getTimelineElement().getBoundingClientRect().width - x;
    }
    this.setXPosition(x);
    this.setTimeIndex(timeIndex);
  }

  applyBounds(container) {
    if (this.draggable) {
      this.draggable.applyBounds(container);
    }
  }

  addClass(className) {
    this.marker.classList.add(className);
  }

  removeClass(className) {
    this.marker.classList.remove(className);
  }

  is(name) {
    return this.name == name;
  }

  /**
   * Sets and returns Draggable instance
   *
   * @param {Object} options - draggable options
   * @returns {Draggable}
   */
  setDraggable(options) {
    if (this.draggable instanceof Draggable) {
      this.draggable.kill();
    }
    this.marker.classList.add('marker-draggable');
    const setX = this.setX.bind(this);
    const setPercentageX = this.setPercentageX.bind(this);
    const timeline = this.getTimelineElement();
    const { onDrag, ...dragOptions } = options;
    this.draggable = Draggable.create(this.marker, {
      ...dragOptions,
      onDrag: function (event) {
        setX(this.x);
        const timelineWidth = timeline.getBoundingClientRect().width;
        setPercentageX(this.x / timelineWidth);
        if (onDrag instanceof Function) {
          onDrag.call(this, event);
        }
      },
    })[0];
    return this.draggable;
  }

  createMarker() {
    this.marker = document.createElement('div');
    this.marker.className = `${this.className} marker`;
    return this.marker;
  }

  onRender() {}

  render(container) {
    // initializes and gives marker access to super onRender method
    super.render(this.marker, container);
    this.timestamp.render(this.marker);
    container.append(this.marker);
  }
}

export default Marker;
