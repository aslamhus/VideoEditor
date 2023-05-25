import { convertDecimalToTime } from '../../../utils';
import './timestamp.css';

class Timestamp {
  constructor() {
    this.timestamp = null;
    this.fadeOutTime = 0.5;
  }

  show() {
    this.timestamp.style.opacity = '1';
  }

  hide() {
    this.timestamp.style.opacity = '0';
  }

  setDecimalTime(decimalTime) {
    this.timestamp.querySelector('p').textContent = convertDecimalToTime(decimalTime);
  }

  createTimestampElement() {
    this.timestamp = document.createElement('div');
    this.timestamp.className = 'timestamp';
    this.timestamp.style.transition = `opacity ${this.fadeOutTime}s ease`;
    const p = document.createElement('p');
    this.timestamp.append(p);
    return this.timestamp;
  }

  render(container) {
    container.append(this.createTimestampElement());
  }
}

export default Timestamp;
