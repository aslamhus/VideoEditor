import './loader.css';

class Loader {
  constructor({ message }) {
    this.loader = null;
    this.message = message;
  }

  createLoader() {
    this.loader = document.createElement('div');
    this.loader.className = 'video-editor-loader';
    const p = document.createElement('p');
    p.textContent = this.message || 'Loading video';
    this.loader.append(document.createElement('div'));
    // this.loader.append(document.createElement('div'));
    this.loader.append(p);
    return this.loader;
  }

  hide() {
    this.loader.style.display = 'none';
  }

  render(container) {
    container.append(this.createLoader());
  }
}

export default Loader;
