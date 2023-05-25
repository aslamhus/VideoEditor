import Marker from '../RangeSelector/Marker/Marker';
import './play-head.css';

class PlayHead extends Marker {
  constructor({
    name,
    className,
    getTimelineElement,
    getVideoDuration,
    isDraggable = true,
    onChange,
  }) {
    super({ name, className, getTimelineElement, getVideoDuration, isDraggable, onChange });
  }

  // setXPosition(x) {
  //   this.marker.style.transform = `translateX(${x}px)`;

  // }

  getAnimationTime() {
    return this.animationTime;
  }

  setPercentPosition(percent, offset) {
    this.setPercentageX(percent);
    const container = this.marker.parentElement;
    const playHeadWidth = this.getBounds().width;
    const width = container.getBoundingClientRect().width;
    /**
     * [|----------]
     * Playhead's range of x co-ordinates should be limited within the width of the container excluding its borders.
     * if box-sizing is set to border-box,we must substract the border width, since boundingClientRect returns
     * width including borders with this property value set. If box-sizing is set to content-box, we can use
     * boudningClientRect's width value without subtraction.
     */
    const { borderLeftWidth, borderRightWidth, paddingLeft, paddingRight } =
      getComputedStyle(container);
    const borderPaddingOffset =
      parseInt(borderLeftWidth) +
      parseInt(borderRightWidth) +
      parseInt(paddingLeft) +
      parseInt(paddingRight);
    const containerWidth = width - playHeadWidth;
    let x = containerWidth * percent;
    // console.log(`percent ${percent}, x: ${x}, borderPaddingOffset: ${borderPaddingOffset}`);
    // this.marker.style.transform = `translateX(${x}px)`;
    this.setXPosition(x);
  }

  toggleAnimate(shouldAnimate) {
    if (shouldAnimate) {
      this.marker.style.transition = '';
    } else {
      this.marker.style.transition = 'none';
    }
  }

  hide() {
    this.marker.style.opacity = 0;
  }
  show() {
    this.marker.style.opacity = 1;
  }

  onRender() {
    this.animationTime = Number(this.getStyle().transitionDuration.replace('s', ''));
  }
}

export default PlayHead;
