import ControlButton from './ControlButton/ControlButton';
import PlayButton from './PlayButton';
import './controls.css';
class Controls {
  constructor({ video, onPlayToggle, onTrimToggle, onPlayClick, onCropToggle }) {
    this.video = video;
    this.controls = null;
    this.playBtn = new PlayButton({ video, onPlayToggle, onPlayClick });
    this.trimBtn = new ControlButton({
      className: 'trim-btn',
      iconClassName: 'fa fa-scissors',
      onToggle: onTrimToggle,
      title: 'Trim video',
    });
    this.cropBtn = new ControlButton({
      className: 'crop-btn',
      iconClassName: 'fa fa-crop',
      onToggle: ({ target, toggle }) => {
        this.toggleControlButtons({ target, toggle });
        onCropToggle({ target, toggle });
      },
      title: 'Crop video',
    });
    this.controlElements = [this.playBtn, this.trimBtn, this.cropBtn];
  }

  toggleControlButtons({ target, toggle }) {
    this.controlElements.forEach((controlBtn) => {
      if (controlBtn.getElement().className != target.className) {
        toggle ? controlBtn.disable() : controlBtn.enable();
      }
    });
  }

  createControls() {
    this.controls = document.createElement('div');
    this.controls.className = 'video-editor-controls';
    this.controlElements.forEach((element) => element.render(this.controls));
    return this.controls;
  }

  render(container) {
    container.append(this.createControls());
  }
}

export default Controls;
