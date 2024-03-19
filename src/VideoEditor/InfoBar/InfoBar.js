import { convertDecimalToTime, createElement } from '../utils';
import context from '../context';
import './info-bar.css';

/**
 * InfoBar
 *
 * Sub-component of Timeline
 */
class InfoBar {
  constructor({ currentIndex }) {
    const { viewer, crop } = context.getContext();
    this.video = viewer.video;
    this.crop = crop;
    this.duration = viewer.video.duration ?? '-';
    this.currentIndex = currentIndex ?? 0;
    this.infoBarContainer = null;
    // bind
    this.createInfoBar = this.createInfoBar.bind(this);
    this.render = this.render.bind(this);
  }

  setDuration(duration) {
    this.duration = duration;
    this.infoBarContainer.querySelector(
      '.duration'
    ).textContent = `Duration: ${convertDecimalToTime(duration, 0)}`;
  }

  setCurrentIndex(timeIndex) {
    this.timeIndex = timeIndex;
    this.infoBarContainer.querySelector(
      '.current-index'
    ).textContent = `Current time: ${convertDecimalToTime(timeIndex, 0)}`;
  }

  createInfoBar() {
    // info bar container
    const infoBarContainer = createElement('div', {
      properties: { className: 'info-bar-container' },
    });

    // create inline start column
    const inlineStartColumn = createElement('div', {
      properties: { className: 'inline-start-column' },
    });
    // create inline end column
    const inlineEndColumn = createElement('div', {
      properties: { className: 'inline-end-column' },
    });

    // current index
    const currentIndexDiv = createElement('div', { properties: { className: 'current-index' } });
    // duration
    const durationDiv = createElement('div', { properties: { className: 'duration' } });
    // video info
    const videoInfoDiv = this.createVideoInfo();
    // append inline start column children
    inlineStartColumn.append(currentIndexDiv, durationDiv);
    // append inline end column children
    inlineEndColumn.append(videoInfoDiv);
    // append all parts
    infoBarContainer.append(inlineStartColumn, inlineEndColumn);

    return infoBarContainer;
  }

  createVideoInfo() {
    const videoInfoDiv = createElement('div', { properties: { className: 'video-info' } });
    // create video info divs
    // resolution
    const resolutionDiv = createElement('div', {
      properties: {
        className: 'resolution',
        textContent: `Video Resolution: ${this.video.videoWidth} x ${this.video.videoHeight}`,
      },
    });
    // frame
    let frameDiv;
    if (this.crop) {
      frameDiv = createElement('div', {
        properties: {
          className: 'frame',
          textContent: `Frame Aspect Ratio: ${this.crop.width} x ${this.crop.height}`,
        },
      });
    }

    // append all divs to video info div
    const allDivs = [resolutionDiv, frameDiv].filter((div) => div !== undefined);
    videoInfoDiv.append(...allDivs);
    return videoInfoDiv;
  }

  render(container) {
    this.infoBarContainer = this.createInfoBar();
    this.setCurrentIndex(this.currentIndex);
    this.setDuration(this.duration);
    container.append(this.infoBarContainer);
  }
}

export default InfoBar;
