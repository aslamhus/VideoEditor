import ControlButton from './ControlButton/ControlButton';
import PlayButton from './PlayButton';
import context from '../../context';
import { createElement } from '../../utils';
import './controls.css';
/**
 * Controls
 *
 * The Controls component is responsible for rendering the video controls.
 * It's a sub-component of the Timeline.
 *
 * ## Adding Control Buttons
 *
 * To add a new control button, create a new instance of ControlButton and
 * add it to the controlElements array.
 * Control buttons can function as toggles or as simple buttons.
 * For toggle buttons, use the onToggle event to define the button's behavior.
 * For simple buttons, use the onClick event to define the button's behavior.
 *
 * You'll want to define the click or toggle event
 *
 * For example:
 *
 * ```javascript
 * // create a new control button with a toggle
 * this.newControlBtn = new ControlButton({
 *    className: 'my-btn',
 *    // font awesome icon class (make sure to add it to font-awesome.js)
 *    iconClassName: 'fa fa-scissors',
 *    onToggle: onMyBtnToggle,
 *    title: 'Trim video',
 *  });
 * // add it to the controlElements array
 * this.registerControlsButtons([this.newControlBtn])
 * ```
 *
 * Note: it's important to define the control button as a class property
 * because other VideoEditor components may need to access it.
 * If you don't need to access the control button, you can define it
 * as a constant.
 *
 */
class Controls {
  constructor({ rangeSelector, onPlayToggle, onTrimToggle, onPlayClick, onCropToggle }) {
    const { viewer } = context.getContext();
    this.video = viewer.video;
    this.controls = null;
    this.controlElements = [];
    // define control buttons
    this.playBtn = new PlayButton({ video: this.video, onPlayToggle, onPlayClick });
    this.cropBtn = new ControlButton({
      className: 'crop-btn',
      iconClassName: 'fa fa-crop',
      title: 'Crop video',
    });
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
    // register each button
    this.registerControlButtons([this.firstFrameBtn, this.playBtn, this.lastFrameBtn]);
  }

  registerControlButtons(controlElements) {
    if (!controlElements || !Array.isArray(controlElements)) {
      throw new Error('Controls: controlElements must be an array');
    }
    this.controlElements = [...this.controlElements, ...controlElements];
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
    this.controls = createElement('div', { properties: { className: 'video-editor-controls' } });
    this.controlElements.forEach((element) => element.render(this.controls));
    return this.controls;
  }

  render(container) {
    container.append(this.createControls());
  }
}

export default Controls;
