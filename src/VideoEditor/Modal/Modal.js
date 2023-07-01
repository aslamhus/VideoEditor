import './modal.css';

class Modal {
  constructor({
    title,
    content,
    buttons,
    className,
    state,
    options = {
      animationDuration: 0.5,
      overlay: true,
      hidden: true,
      closeBtn: true,
      onDismiss: null,
    },
  }) {
    this.title = title;
    if (!(content instanceof HTMLElement) && typeof content !== 'string') {
      throw new Error('Modal content must be an HTMLElement or a string');
    }
    this.content = content;
    this.buttons = buttons;
    this.className = className;
    this.hidden = options.hidden ?? true;
    this.overlay = options.overlay;
    this.closeBtn = options.closeBtn ?? true;
    this.onDismiss = options.onDismiss;
    this.animationDuration = options.animationDuration ?? 0.5;
    this.modal = this.createModal();
    this.parent = null;
    this.rendered = false;
    this.state = state ?? {};
  }

  createModal() {
    // create modal container
    const modal = document.createElement('div');
    modal.classList.add('modal-container', this.className ?? '');
    if (this.overlay) {
      modal.classList.add('modal-overlay');
    }
    modal.style.display = 'none';
    // create modal content container
    const modalContentContainer = document.createElement('div');
    modalContentContainer.classList.add('modal-content-container');
    // create modal title
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    // create close btn
    const closeBtn = this.closeBtn ? this.createCloseBtn() : null;

    // create modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    // create modal footer
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    // append all modal parts to modal content container
    modalContentContainer.appendChild(modalHeader);
    modalContentContainer.appendChild(modalContent);
    modalContentContainer.appendChild(modalFooter);
    closeBtn && modalContentContainer.appendChild(closeBtn);
    // append modal content container to modal container
    modal.appendChild(modalContentContainer);
    return modal;
  }

  createCloseBtn() {
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '<span>&times;</span>';
    closeBtn.addEventListener('click', () => {
      if (this.onDismiss instanceof Function) {
        this.onDismiss();
      }
      this.hide();
    });
    return closeBtn;
  }
  getModalContentContainer() {
    return this.modal.querySelector('.modal-content-container');
  }

  getModalHeader() {
    return this.modal.querySelector('.modal-header');
  }

  getModalContent() {
    return this.modal.querySelector('.modal-content');
  }

  getModalFooter() {
    return this.modal.querySelector('.modal-footer');
  }

  /**
   * Set animation duration in seconds
   *
   * @param {number} duration - in seconds
   */
  setAnimationDuration(duration) {
    this.getModalContentContainer().style.setProperty('--animation-duration', `${duration}s`);
  }

  setModalHeader(title) {
    const modalHeader = this.modal.querySelector('.modal-header');
    modalHeader.innerHTML = '';
    const h3 = document.createElement('h3');
    h3.textContent = title;
    modalHeader.appendChild(h3);
  }

  setModalContent(content) {
    const modalContent = this.modal.querySelector('.modal-content');
    modalContent.innerHTML = '';
    if (typeof this.content === 'string') {
      const p = document.createElement('p');
      p.textContent = content;
      modalContent.appendChild(p);
    } else if (this.content instanceof HTMLElement) {
      modalContent.appendChild(this.content);
    } else {
      throw new Error('Modal content must be an HTMLElement or a string');
    }
  }

  setModalFooter(buttons) {
    const modalFooter = this.modal.querySelector('.modal-footer');
    modalFooter.innerHTML = '';
    if (Array.isArray(buttons)) {
      buttons.forEach((button) => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add(`btn-${button.type ?? ''}`);
        btn.innerHTML = button.label;
        btn.onclick = button.onClick;
        modalFooter.appendChild(btn);
      });
    }
  }

  setState({ title, content, buttons, ...state }) {
    this.state = { ...this.state, ...state };
    this.title = title ?? this.title;
    this.content = content ?? this.content;
    this.buttons = buttons ?? this.buttons;
    this.updateState();
  }

  updateState() {
    this.setModalHeader(this.title);
    this.setModalContent(this.content);
    this.setModalFooter(this.buttons);
  }

  /**
   * Show modal
   *
   * @param {Number} duration - in seconds
   *
   * @returns
   */
  async show(duration) {
    if (!this.hidden) {
      console.warn('modal is already shown');
      return;
    } else {
      console.log('show modal');
    }

    if (duration != undefined && duration != null) {
      this.setAnimationDuration(duration);
    }
    const modalContent = this.getModalContentContainer();
    modalContent.style.opacity = 0;
    this.modal.style.display = 'flex';

    modalContent.classList.add('modal-float-in');
    const animationTimeout = duration ?? this.animationDuration * 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        this.onShowComplete();
        resolve();
      }, animationTimeout);
    });
  }

  onShowComplete() {
    // reset animation duration to constructor value
    this.setAnimationDuration(this.animationDuration);

    this.hidden = false;
  }

  async hide() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const modalContent = this.getModalContentContainer();
        modalContent.classList.remove('modal-float-in');
        modalContent.classList.remove('float-out');
        this.modal.style.display = 'none';
        this.hidden = true;
        resolve();
      }, 10);
    });
  }

  render(container) {
    this.parent = container;
    // set the animation speed
    this.setAnimationDuration(this.animationDuration);
    // render modal to dom
    container.appendChild(this.modal);
    // render modal parts
    this.updateState();
    // if hidden option is set to false, show it immediately without animation
    if (!this.hidden) {
      this.show(0);
    }
    // set rendered to true
    this.rendered = true;
  }
}

export default Modal;
