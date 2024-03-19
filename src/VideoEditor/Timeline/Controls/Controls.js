import RangeSelector from '../RangeSelector/RangeSelector';
import ControlButton from './ControlButton/ControlButton';
import PlayButton from './PlayButton';
import context from '../../context';
import './controls.css';

/**
 * Controls
 *
 * The Controls component is responsible for rendering the video controls.
 * It's parent is the Timeline class.
 */
class Controls {
  constructor({ rangeSelector, onPlayToggle, onTrimToggle, onPlayClick, onCropToggle }) {
    const { viewer } = context.getContext();
    this.video = viewer.video;
    this.controls = null;
    this.playBtn = new PlayButton({ video: this.video, onPlayToggle, onPlayClick });
    // this.trimBtn = new ControlButton({
    //   className: 'trim-btn',
    //   iconClassName: 'fa fa-scissors',
    //   onToggle: onTrimToggle,
    //   title: 'Trim video',
    // });
    // this.cropBtn = new ControlButton({
    //   className: 'crop-btn',
    //   iconClassName: 'fa fa-crop',
    //   onToggle: ({ target, toggle }) => {
    //     this.toggleControlButtons({ target, toggle });
    //     onCropToggle({ target, toggle });
    //   },
    //   title: 'Crop video',
    // });
    this.firstFrameBtn = new ControlButton({
      className: 'first-frame-btn',
      iconClassName: 'fa fa-step-backward',
      onClick: () => {
        this.video.currentTime = 0;
      },
      title: 'Jump to first frame',
    });
    this.lastFrameBtn = new ControlButton({
      className: 'last-frame-btn',
      iconClassName: 'fa fa-step-forward',
      onClick: () => {
        console.log('rangeSelector', rangeSelector);
        this.video.currentTime = rangeSelector.outMarker.getTimeIndex();
      },
      title: 'Jump to last frame',
    });
    this.controlElements = [this.firstFrameBtn, this.playBtn, this.lastFrameBtn];
  }

  disableControlButtons() {
    this.controlElements.forEach((controlBtn) => {
      controlBtn.getElement().disabled = true;
    });
  }

  enableControlButtons() {
    this.controlElements.forEach((controlBtn) => {
      controlBtn.getElement().disabled = false;
    });
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
