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
      onToggle: onCropToggle,
      title: 'Crop video',
    });
    this.controlElements = [this.playBtn, this.trimBtn, this.cropBtn];
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
