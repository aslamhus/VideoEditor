import Timestamp from '../Timestamp/TimeStamp';
import { createElement, getTranslateX } from '../../../utils';
import HTMLElement from '../../../../HTMLElement/HTMLElement';
import context from '../../../context';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(Draggable);
import './marker.css';

/**
 * Marker
 *
 * Subcomponent of RangeSelector
 */
class Marker extends HTMLElement {
  /**
   * @typedef {Object} constructor
   * @property {string} name
   * @property {string} anchor - right|left
   * @property {string} className
   * @property {Function} getVideoDuration
   * @property {string} direction - position|negative
   * @property {number} initialIndex
   * @property {Draggable|null} draggable
   * @property {Function} [onChange]
   *
   * @param {constructor} constructor
   */
  constructor({
    name,
    anchor,
    className,
    direction = 'positive',
    initialIndex,
    draggable = null,
    onChange,
  }) {
    super();
    const { viewer, timeline } = context.getContext();
    this.timeline = timeline;
    this.duration = viewer.video.duration;
    this.name = name;
    this.className = className;
    this.marker = this.createMarker();
    this.anchor = anchor;
    this.timeIndex = parseFloat(initialIndex);
    this.x = 0;
    this.percentageX = 0;
    this.direction = direction;
    this.timestamp = new Timestamp();
    // draggable argument defaults to false but can be object of draggable options
    this.draggable = draggable;
    this.onChange = onChange;
    // bind
    this.handleChange = this.handleChange.bind(this);
    this.setXPosition = this.setXPosition.bind(this);
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
    const timelineX = this.timeline.getTimelineElement().getBoundingClientRect().x;
    const markerX = x - timelineX + offset;
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
    const timelineWidth = this.timeline.getTimelineElement().getBoundingClientRect().width;
    const markerPosition = this.getTimelinePosition();
    const timelineXPercent = markerPosition / timelineWidth;
    const timeIndex = this.duration * timelineXPercent;
    if (timeIndex < 0) {
      return 0;
    }
    return timeIndex;
  }

  getXPositionFromTimeIndex(timeIndex) {
    const timelineWidth = this.timeline.getTimelineElement().getBoundingClientRect().width;
    const percentElapsed = timeIndex / this.duration;
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
    return this.timeIndex || 0;
  }

  setTimeIndex(timeIndex) {
    this.timeIndex = parseFloat(timeIndex);
    this.timestamp.setDecimalTime(timeIndex);
    this.handleChange();
  }

  setX(x) {
    this.x = x;

    this.handleChange();
  }

  /**
   * Set Percentage X
   *
   * calculate and set marker position as a percentage of the timeline
   * This will allow us to calculate the proper time index of the marker
   * and keep the marker position consistent if the timeline is resized
   */
  setPercentageX(percentX) {
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
    const timeIndex = this.getTimeIndexFromCurrentPosition();
    this.setTimeIndex(timeIndex);
    this.setX(x);
    const percentX = x / this.timeline.getTimelineElement().getBoundingClientRect().width;
    this.setPercentageX(percentX);
  }

  setPositionByTimeIndex(timeIndex) {
    let x = this.getXPositionFromTimeIndex(timeIndex);
    if (this.direction == 'negative') {
      // for out marker, or any marker that advances towards negative coordinates
      x = (this.timeline.getTimelineElement().getBoundingClientRect().width - x) * -1;
    }
    this.setXPosition(x);
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
    const marker = this;
    const { onDrag, onDragEnd, ...dragOptions } = options;

    this.draggable = Draggable.create(this.marker, {
      ...dragOptions,

      onDragEnd: function (event) {
        if (onDragEnd instanceof Function) {
          onDragEnd.call(this, event);
        }
      },

      onDrag: function (event) {
        // this.enable();
        try {
          if (onDrag instanceof Function) {
            onDrag.call(this, event);
          }
          marker.setXPosition(this.x);
        } catch (error) {
          console.warn('MarkerDragError', error.message);
          this.endDrag(event);
          gsap.killTweensOf(this.target);

          return false;
        }
      },
    })[0];
    return this.draggable;
  }

  handleChange() {
    if (this.onChange instanceof Function) {
      this.onChange({ timeIndex: this.timeIndex, x: this.x });
    }
  }

  createMarker() {
    return createElement('div', { properties: { className: `${this.className} marker` } });
  }

  render(container) {
    // initializes and gives marker access to super onRender method
    super.render(this.marker, container);
    this.timestamp.render(this.marker);
    container.append(this.marker);
  }
}

export default Marker;
