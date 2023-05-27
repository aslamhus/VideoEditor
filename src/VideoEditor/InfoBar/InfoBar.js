import { convertDecimalToTime } from '../utils';
import './info-bar.css';

class InfoBar {
  constructor({ duration, currentIndex }) {
    this.duration = duration ?? '-';
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
    // current index
    const currentIndexDiv = document.createElement('div');
    currentIndexDiv.className = 'current-index';
    currentIndexDiv.textContent = this.currentIndex;
    // duration
    const durationDiv = document.createElement('div');
    durationDiv.className = 'duration';
    durationDiv.textContent = this.duration;
    // structure
    infoBarContainer.append(currentIndexDiv, durationDiv);
    return infoBarContainer;
  }

  render(container) {
    this.infoBarContainer = this.createInfoBar();
    container.append(this.infoBarContainer);
  }
}

export default InfoBar;
