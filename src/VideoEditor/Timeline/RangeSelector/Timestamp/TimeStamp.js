import './timestamp.css';

class Timestamp {
  constructor() {
    this.timestamp = null;
  }

  show() {
    this.timestamp.style.opacity = '1';
  }

  hide() {
    this.timestamp.style.opacity = '0';
  }

  setDecimalTime(decimalTime) {
    this.timestamp.querySelector('p').textContent = this.convertDecimalToTime(decimalTime);
  }
  /**
   *
   * @param {Number} timeIndex
   * @returns {String} - the time in mm : ss
   */
  convertDecimalToTime(timeIndex) {
    let minutes = 0,
      seconds = 0;
    if (timeIndex > 60) {
      minutes = Math.floor(timeIndex / 60);
      seconds = timeIndex % 60;
    } else {
      seconds = timeIndex;
    }

    seconds = seconds.toFixed(2);
    //add 0s
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  }

  createTimestampElement() {
    this.timestamp = document.createElement('div');
    this.timestamp.className = 'timestamp';
    const p = document.createElement('p');
    this.timestamp.append(p);
    return this.timestamp;
  }

  render(container) {
    container.append(this.createTimestampElement());
  }
}

export default Timestamp;
