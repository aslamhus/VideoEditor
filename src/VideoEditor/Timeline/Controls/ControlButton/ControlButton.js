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
    this.toggle();
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

  setIconClass(className) {
    const icon = this.btn.querySelector('i') ?? this.btn.querySelector('svg');
    icon.className = className;
  }

  resetIconClass(className) {
    const icon = this.btn.querySelector('i') ?? this.btn.querySelector('svg');
    icon.className = this.iconClassName;
  }

  createControlButton() {
    this.btn = document.createElement('button');
    this.btn.className = `control-btn ${this.className}`;
    this.btn.title = this.title || '';
    this.btn.onclick = this.handleClick.bind(this);
    const icon = document.createElement('i');
    icon.className = this.iconClassName || '';
    this.btn.append(icon);
    return this.btn;
  }

  render(container) {
    container.append(this.createControlButton());
  }
}

export default ControlButton;
