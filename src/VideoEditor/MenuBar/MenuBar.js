import { createElement } from '../utils.js';
import { defaultButtons } from './default-buttons.js';
import './menu-bar.css';

class MenuBar {
  /**
   *
   * @typedef {Object} constructor
   * @property {menuBarButtons} customButtons
   * @property {Function} onToggleDarkMode
   * @property {Function} onClickHelpButton
   * @property {Function} onClickSaveButton
   * @property {Function} onToggleCrop
   * @property {Function} onToggleMute
   * @property {Object} library - the font awesome icon library
   *
   * @typedef {Object} menuBarButtons
   * @property {Array<string>} disable - list of buttons to disable
   * @property {Object<button>} inlineStartButtons - buttons that hug the inline start of the menubar
   * @property {Object<button>} inlineEndButtons - buttons that hug the inline end of the menubar
   *
   *
   * @typedef {Object} button
   * @property {Number} index - the index of the button (used for sorting)
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
  constructor({
    customButtons,
    onToggleDarkMode,
    onClickHelpButton,
    onClickSaveButton,
    onToggleCrop,
    onToggleMute,
    library,
  }) {
    // init inline start buttons
    this.inlineStartButtons = {
      // add custom inline start buttons
      ...customButtons?.inlineStartButtons,
      // default buttons
      darkmode: {
        ...defaultButtons.darkmode,
        onClick: onToggleDarkMode,
      },
      help: {
        ...defaultButtons.help,
        onClick: onClickHelpButton,
      },
    };
    // init inline end buttons
    this.inlineEndButtons = {
      // add custom inline end buttons
      ...customButtons?.inlineEndButtons,
      // default buttons
      mute: {
        ...defaultButtons.mute,

        onClick: onToggleMute,
      },
      crop: {
        ...defaultButtons.crop,
        onClick: onToggleCrop,
      },
      save: {
        ...defaultButtons.save,
        onClick: onClickSaveButton,
      },
    };
    // disable buttons

    const { disable } = customButtons;
    Array.isArray(disable) &&
      disable.forEach((buttonName) => {
        if (this.inlineStartButtons[buttonName]) delete this.inlineStartButtons[buttonName];
        if (this.inlineEndButtons[buttonName]) delete this.inlineEndButtons[buttonName];
      });

    // bind
    this.createMenuBar = this.createMenuBar.bind(this);
    this.createButtons = this.createButtons.bind(this);
    this.sortByIndex = this.sortByIndex.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.render = this.render.bind(this);
    // init
    this.importFontAwesomeIcons(library);
  }

  /**
   * Dynamically add fontawsome icons to the library
   *
   * This way users can import custom icons and we don't have to
   * import the entire font awesome library
   */
  async importFontAwesomeIcons(library) {}

  sortByIndex(a, b) {
    return a?.index > b?.index ? 1 : -1;
  }

  createMenuBar() {
    const menuContainer = createElement('div', { properties: { className: 'menu-bar-container' } });
    // inline start
    const inlineStartContainer = createElement('div', {
      properties: { className: 'inline-start-buttons' },
    });
    inlineStartContainer.append(
      ...this.createButtons(Object.values(this.inlineStartButtons).sort(this.sortByIndex))
    );
    // inline end
    const inlineEndContainer = createElement('div', {
      properties: { className: 'inline-end-buttons' },
    });
    inlineEndContainer.append(
      ...this.createButtons(Object.values(this.inlineEndButtons).sort(this.sortByIndex))
    );
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
      const buttonContainer = createElement('div', {
        properties: { className: 'menu-bar-button-container' },
      });
      const button = document.createElement('button');
      // add label span
      const span = document.createElement('span');
      span.textContent = label;
      // add click event
      button.onclick = (event) => {
        event.preventDefault();
        if (toggle) {
          this.handleToggle(event, onClick);
        } else {
          this.handleClick(event, onClick);
        }
      };
      if (title) {
        button.title = title;
      }

      button.className = `menu-bar-button ${className ?? ''}`;
      // toggle property can be set to true or an object with a highlight property
      // sometimes we want to toggle, but not highlight the button (ie. for mute / dark mode button)

      if (toggle?.highlight === false) {
        button.classList.add('no-toggle-highlight');
      }
      // create icon
      if (fontAwesomeIcon) {
        const icon = createElement('i', { properties: { className: fontAwesomeIcon } });
        // append icon to button
        button.append(icon);
      }
      // append all parts to button container
      buttonContainer.append(button, span);
      return buttonContainer;
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
