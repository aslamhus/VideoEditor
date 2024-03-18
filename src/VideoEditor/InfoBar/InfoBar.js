import { convertDecimalToTime } from '../utils';
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
    this.duration = viewer.video.darution ?? '-';
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
    const infoBarContainer = document.createElement('div');
    infoBarContainer.className = 'info-bar-container';

    // create inline start column
    const inlineStartColumn = document.createElement('div');
    inlineStartColumn.className = 'inline-start-column';
    // create inline end column
    const inlineEndColumn = document.createElement('div');
    inlineEndColumn.className = 'inline-end-column';

    // current index
    const currentIndexDiv = document.createElement('div');
    currentIndexDiv.className = 'current-index';
    // duration
    const durationDiv = document.createElement('div');
    durationDiv.className = 'duration';
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
    const videoInfoDiv = document.createElement('div');
    videoInfoDiv.className = 'video-info';
    // create video info divs
    // resolution
    const resolutionDiv = document.createElement('div');
    resolutionDiv.textContent = `Video Resolution: ${this.video.videoWidth} x ${this.video.videoHeight}`;
    // frame
    let frameDiv;
    if (this.crop) {
      frameDiv = document.createElement('div');
      frameDiv.textContent = `Frame Aspect Ratio: ${this.crop.width} x ${this.crop.height}`;
    }
    // // format
    // const formatDiv = document.createElement('div');
    // formatDiv.textContent = `Video Format: ${this.video.videoFormat}`;
    // // video codec
    // const videoCodecDiv = document.createElement('div');
    // videoCodecDiv.textContent = `Video Codec: ${this.video.videoCodec}`;
    // // audio codec
    // const audioCodecDiv = document.createElement('div');
    // audioCodecDiv.textContent = `Audio Codec: ${this.video.audioCodec}`;
    // // video bitrate
    // const videoBitrateDiv = document.createElement('div');
    // videoBitrateDiv.textContent = `Video Bitrate: ${this.video.videoBitrate}`;
    // // audio bitrate
    // const audioBitrateDiv = document.createElement('div');
    // audioBitrateDiv.textContent = `Audio Bitrate: ${this.video.audioBitrate}`;
    // // video fps
    // const videoFpsDiv = document.createElement('div');
    // videoFpsDiv.textContent = `Video FPS: ${this.video.videoFps}`;
    // // audio fps
    // const audioFpsDiv = document.createElement('div');
    // audioFpsDiv.textContent = `Audio FPS: ${this.video.audioFps}`;

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
