import './menu-bar.css';

class MenuBar {
  /**
   * @typedef {Object} constructor
   * @property {Array<string>} disable - list of buttons to disable
   * @property {Object<button>} inlineStartButtons - buttons that hug the inline start of the menubar
   * @property {Object<button>} inlineEndButtons - buttons that hug the inline end of the menubar
   *
   *
   * @typedef {Object} button
   * @property {string} label - button label
   * @property {string} title -  button title popover
   * @property {string} className - button class
   * @property {Function} onClick - onClick callback
   * @property {boolean} [toggle] - whether the button should toggle or not. If it does, onClick function will have a toggle state value
   * passed as its first argument.
   * @property {string} fontAwesomeIcon - FontAwesome icon classname
   *
   * @param {constructor} constructor
   */
  constructor({ inlineStartButtons, inlineEndButtons, disable }) {
    this.inlineStartButtons = inlineStartButtons;
    this.inlineEndButtons = inlineEndButtons;
    // disable buttons
    if (Array.isArray(disable)) {
      disable.forEach((buttonName) => {
        if (this.inlineStartButtons[buttonName]) delete this.inlineStartButtons[buttonName];
        if (this.inlineEndButtons[buttonName]) delete this.inlineEndButtons[buttonName];
      });
    }
    // bind
    this.createMenuBar = this.createMenuBar.bind(this);
    this.createButtons = this.createButtons.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.render = this.render.bind(this);
  }

  createMenuBar() {
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-bar-container';
    // inline start
    const inlineStartContainer = document.createElement('div');
    inlineStartContainer.className = 'inline-start-buttons';
    inlineStartContainer.append(...this.createButtons(Object.values(this.inlineStartButtons)));
    // inline end
    const inlineEndContainer = document.createElement('div');
    inlineEndContainer.className = 'inline-end-buttons';
    inlineEndContainer.append(...this.createButtons(Object.values(this.inlineEndButtons)));
    // append buttons to menu container
    menuContainer.append(...[inlineStartContainer, inlineEndContainer]);
    return menuContainer;
  }

  /**
   * Create buttons
   *
   * @param {Array<button>} buttons
   * @returns {Array<HTMLButtonElement>}
   */
  createButtons(buttons) {
    const newButtons = buttons.map((buttonObj) => {
      const { label, title, className, onClick, fontAwesomeIcon, toggle } = buttonObj;
      // create button
      const button = document.createElement('button');
      // add label span
      const span = document.createElement('span');
      span.textContent = label;
      button.append(span);
      button.onclick = (event) => {
        event.preventDefault();
        if (toggle) {
          this.handleToggle(event, onClick);
        } else {
          this.handleClick(event, onClick);
        }
      };
      button.title = title ?? '';
      button.className = `menu-bar-button ${className}`;
      // create icon

      // button.append(label);
      if (fontAwesomeIcon) {
        const icon = document.createElement('i');
        icon.className = fontAwesomeIcon;
        button.append(icon);
      }
      return button;
    });
    return newButtons;
  }

  handleToggle(event, onClick) {
    const { currentTarget } = event;
    const isToggled = currentTarget.classList.contains('toggled');
    isToggled ? currentTarget.classList.remove('toggled') : currentTarget.classList.add('toggled');
    if (onClick instanceof Function) {
      onClick(event, !isToggled);
    }
  }

  handleClick(event, onClick) {
    if (onClick instanceof Function) {
      onClick(event);
    }
  }

  render(container) {
    container.append(this.createMenuBar());
  }
}

export default MenuBar;
