import ControlButton from './ControlButton/ControlButton';
import PlayButton from './PlayButton';
import './controls.css';
class Controls {
  constructor({ video, onPlayToggle, onTrimToggle, onPlayClick }) {
    this.video = video;
    this.controls = null;

    this.playBtn = new PlayButton({ video, onPlayToggle, onPlayClick });
    this.trimBtn = new ControlButton({
      className: 'trim-btn',
      iconClassName: 'fa fa-scissors',
      onToggle: onTrimToggle,
      title: 'Trim video',
    });
  }

  createControls() {
    this.controls = document.createElement('div');
    this.controls.className = 'video-editor-controls';
    this.playBtn.render(this.controls);
    this.trimBtn.render(this.controls);
    return this.controls;
  }

  render(container) {
    container.append(this.createControls());
  }
}

export default Controls;
