import './popover.css';

/**
 * Popover
 *
 * A class for creating and managing a popover UI component.
 *
 * The popover is a sub-component of the Timeline, though it could be used
 * in other contexts as well.
 */
class Popover {
  constructor({ title, body, variant = 'info', fadeOutTime = 500 }) {
    this.title = title;
    this.body = body;
    this.variant = variant;
    this.fadeOutTime = fadeOutTime;
    this.hidden = true;
    // bind
    this.createPopover = this.createPopover.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.setPopoverPositionRelativeToContainer =
      this.setPopoverPositionRelativeToContainer.bind(this);
    // init
    this.popover = this.createPopover();
  }

  setBody(body) {
    this.popover.querySelector('.popover-body').innerText = body;
  }

  setTitle(title) {
    this.popover.querySelector('.popover-title').innerText = title;
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.classList.add('popover');
    popover.classList.add(`popover-${this.variant}`);
    popover.style.display = 'none';
    popover.style.setProperty('--fade-out-time', `${this.fadeOutTime}ms`);
    const popoverTitle = document.createElement('div');
    popoverTitle.classList.add('popover-title');
    popoverTitle.innerText = this.title;
    const popoverBody = document.createElement('div');
    popoverBody.classList.add('popover-body');
    popoverBody.innerText = this.body;
    const popoverArrow = document.createElement('div');
    popoverArrow.classList.add('popover-arrow');

    popover.append(popoverTitle, popoverBody, popoverArrow);
    return popover;
  }

  async show(container) {
    this.popover.style.display = 'block';
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        this.setPopoverPositionRelativeToContainer(this.popover, container);
        this.popover.style.opacity = 1;
        this.hidden = false;
      });
      setTimeout(() => {
        resolve();
      }, this.fadeOutTime);
    });
  }

  hide() {
    this.popover.style.opacity = 0;
    this.popover.style.display = 'none';
    this.hidden = true;
  }

  handlePopoverWindowConstraint(popover, containerBounds, popoverBounds) {
    const arrow = popover.querySelector('.popover-arrow');
    const offset = 20;
    if (popoverBounds.left < 0) {
      // console.log('popover is off the left side of the screen');
      popover.style.left = `${popoverBounds.width / 2}px`;
      popover.style.right = 'unset';

      arrow.style.left = `${containerBounds.left}px`;
    } else if (popoverBounds.right > window.innerWidth) {
      // console.log('popover is off the right side of the screen');
      popover.style.left = `${window.innerWidth - popoverBounds.width / 2}px`;
      const arrowLeft = window.innerWidth - containerBounds.right;
      // console.log('arrowLeft', arrowLeft);
      arrow.style.left = 'unset';
      arrow.style.right = `${arrowLeft}px`;
    } else {
      arrow.style.left = '50%';
    }
  }

  setPopoverPositionRelativeToContainer(popover, container) {
    const offset = 20;
    const containerBounds = container.getBoundingClientRect();
    popover.style.top = `${containerBounds.top}px`;
    popover.style.left = `${containerBounds.left}px`;
    const popoverBounds = popover.getBoundingClientRect();
    popover.style.top = `${containerBounds.top - popoverBounds.height - offset}px`;
    // set arrow position

    this.handlePopoverWindowConstraint(popover, containerBounds, popoverBounds);
  }

  /**
   * Render
   *
   * Render the popover to the DOM and position it relative to the container.
   *
   * @param {HTMLElement} container
   */
  render(container) {
    // this.handlePopoverPosition(this.popover, container);
    this.hide();
    document.body.appendChild(this.popover);
    this.show(container);
  }
}

export default Popover;
