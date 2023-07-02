import { defaultButtons } from './default-buttons.js';
import './menu-bar.css';

class MenuBar {
  /**
   *
   * @typedef {Object} constructor
   * @property {menuBarButtons} customButtons
   * @property {Function} onClickDarkMode
   * @property {Function} onClickHelpButton
   * @property {Function} onClickSaveButton
   * @property {Function} onToggleCrop
   * @property {Object} library - the font awesome icon library
   *
   * @typedef {Object} menuBarButtons
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
  constructor({
    customButtons,
    onClickDarkMode,
    onClickHelpButton,
    onClickSaveButton,
    onToggleCrop,
    library,
  }) {
    // init inline start buttons
    this.inlineStartButtons = {
      // add custom inline start buttons
      ...customButtons?.inlineStartButtons,
      // default buttons
      darkmode: {
        ...defaultButtons.darkmode,
        onClick: onClickDarkMode,
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
  async importFontAwesomeIcons(library) {
    const icons = Object.values({ ...this.inlineStartButtons, ...this.inlineEndButtons }).map(
      (button) => {
        console.log(button);
        return button?.fontAwesomeIcon.replace(/(fa|fas|-|\s)/g, '');
      }
    );
    // import icons from fortawesome
    const faIcons = await import('@fortawesome/free-solid-svg-icons');
    icons.forEach((icon) => {
      const iconName = `fa${icon.charAt(0).toUpperCase() + icon.slice(1)}`;
      const faIcon = faIcons[iconName];
      console.log('faIcon', faIcon);
      library.add(faIcon);
    });

    // await import({ ...icons } from '@fortawesome/free-solid-svg-icons';
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
      console.log(buttonObj);
      const { label, title, className, onClick, fontAwesomeIcon, toggle } = buttonObj;
      // create button
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'menu-bar-button-container';
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
      if (button.title) {
        button.title = title;
      }

      button.className = `menu-bar-button ${className ?? ''}`;
      // create icon
      if (fontAwesomeIcon) {
        const icon = document.createElement('i');
        icon.className = fontAwesomeIcon;
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
