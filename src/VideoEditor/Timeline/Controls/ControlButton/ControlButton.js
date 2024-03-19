import c from '../../../Cropper/croppie-test';
import { createElement } from '../../../utils';
import './control-button.css';

class ControlButton {
  constructor({ className, onClick, onToggle, iconClassName, title }) {
    this.className = className;
    this.iconClassName = iconClassName;
    this.onClick = onClick;
    this.onToggle = onToggle;
    this.btn = null;
    this.active = false;
    this.title = title;
  }

  handleClick(event) {
    if (this.onClick instanceof Function) {
      this.onClick(event);
    }
    if (this.onToggle instanceof Function) {
      this.toggle();
    }
  }

  getElement() {
    return this.btn;
  }

  disable() {
    this.btn.disabled = true;
  }

  setTitle(value) {
    this.btn.setAttribute('title', value);
  }

  focus() {
    this.btn.focus();
  }

  toggle(value) {
    if (this.onToggle instanceof Function) {
      try {
        this.onToggle({ target: this.btn, toggle: !this.active });
      } catch (error) {
        // escape hatch to avoid changing the toggle state
        return false;
      }
    }
    // set the toggle state
    if (value != undefined) {
      this.active = value;
    } else {
      // auto toggle
      this.active = !this.active;
    }
    if (this.active) {
      this.btn.classList.add('control-btn-active');
    } else {
      this.btn.classList.remove('control-btn-active');
    }
  }

  blur() {
    this.btn.blur();
  }

  enable() {
    this.btn.disabled = false;
  }
  addClass(className) {
    this.btn.classList.add(className);
  }

  removeClass(className) {
    this.btn.classList.remove(className);
  }

  addIconClass(className) {
    const icon = this.findIcon();
    icon.classList.add(className);
  }

  removeIconClass(className) {
    const icon = this.findIcon();
    icon.classList.remove(className);
  }

  findIcon() {
    return this.btn.querySelector('i') ?? this.btn.querySelector('svg');
  }

  // setIconClass(className) {
  //
  //   /** @type {HTMLElement} */
  //   console.log('set icon class', icon.className, className);
  //   icon.setAttribute('class', className);
  // }

  // resetIconClass(className) {
  //   const icon = this.btn.querySelector('i') ?? this.btn.querySelector('svg');
  //   icon.setAttribute('class', className);
  // }

  createControlButton() {
    this.btn = createElement('button', {
      properties: {
        className: 'control-btn',
        title: this.title || '',
        onclick: this.handleClick.bind(this),
      },
    });
    const icon = createElement('i', { properties: { className: this.iconClassName || '' } });
    this.btn.append(icon);
    return this.btn;
  }

  render(container) {
    container.append(this.createControlButton());
  }
}

export default ControlButton;
