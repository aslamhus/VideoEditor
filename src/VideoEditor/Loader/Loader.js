import { createElement } from '../utils';
import './loader.css';

class Loader {
  constructor({ message }) {
    this.loader = null;
    this.message = message;
  }

  createLoader() {
    this.loader = createElement('div', {
      properties: { className: 'video-editor-loader' },
    });
    const p = createElement('p', { properties: { textContent: this.message || 'Loading video' } });
    const spinnerDiv = document.createElement('div');
    const exclamationMark = document.createElement('div');
    spinnerDiv.append(exclamationMark);
    this.loader.append(spinnerDiv);
    this.loader.append(p);
    return this.loader;
  }

  hide() {
    this.loader.style.display = 'none';
  }

  updateMessage(message) {
    if (this.loader.classList.contains('error')) {
      this.loader.classList.remove('error');
    }
    this.loader.querySelector('p').textContent = message;
  }

  render(container) {
    container.append(this.createLoader());
  }

  showError(message) {
    setTimeout(() => {
      this.updateMessage(message);
      this.loader.classList.add('error');
    }, 500);
  }
}

export default Loader;
