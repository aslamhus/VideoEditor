import { createElement } from '../../utils';
import './slides.css';

class Slides {
  constructor({ slides, onDone }) {
    this.slides = slides || [];
    this.container = null;
    this.currentSlideIndex = 1;
    // callbacks
    this.onDone = onDone;
    // bind
    this.showSlide = this.showSlide.bind(this);
    this.handleButtonStates = this.handleButtonStates.bind(this);
    this.x = 0;
  }

  reset() {
    this.currentSlideIndex = 1;
    this.x = 0;
    // shift all slides original positions
    this.container
      .querySelectorAll('.slide-container')
      .forEach((slide) => (slide.style.transform = `translateX(${this.x}%)`));
    this.handleButtonStates();
  }

  next() {
    if (this.currentSlideIndex < this.slides.length) {
      this.showSlide(this.currentSlideIndex + 1);
    }
    this.handleButtonStates();
  }

  prev() {
    if (this.currentSlideIndex > 1) {
      this.showSlide(this.currentSlideIndex - 1);
    }
    this.handleButtonStates();
  }

  handleButtonStates() {
    // handle next button state
    if (this.currentSlideIndex == this.slides.length) {
      this.updateButton('.instructions-next-button', {
        label: 'Done',
        onClick: this.handleDone.bind(this),
      });
    } else {
      this.updateButton('.instructions-next-button', {
        label: 'Next',
        onClick: this.next.bind(this),
      });
    }
    // handle previous button state
    if (this.currentSlideIndex > 1) {
      this.showButton('.instructions-prev-button');
    } else {
      this.hideButton('.instructions-prev-button');
    }
  }

  updateButton(selector, { label, onClick }) {
    const button = this.container.querySelector(selector);
    button.textContent = label;
    button.onclick = onClick;
    return button;
  }

  hideButton(selector) {
    this.container.querySelector(selector).style.visibility = 'hidden';
  }

  showButton(selector) {
    this.container.querySelector(selector).style.visibility = 'visible';
  }

  enableButton(selector) {
    this.container.querySelector(selector).disabled = false;
  }

  disableButton(selector) {
    console.log('disable ', selector);
    this.container.querySelector(selector).disabled = true;
  }

  handleDone() {
    if (this.onDone instanceof Function) {
      this.onDone();
    }
  }

  showSlide(slideIndex) {
    // console.log('this.slides', this.slides[slideIndex - 1]);
    // reload the image
    const { el, url } = this.slides[slideIndex - 1] || {};
    const img = el.querySelector('img');
    img.src = '';
    img.src = url;
    // find the direction the slides should move
    const direction = slideIndex < this.currentSlideIndex ? 1 : -1;
    this.x = this.x + 100 * direction;
    // shift all slides to the left or right depending on the direction
    this.container
      .querySelectorAll('.slide-container')
      .forEach((slide) => (slide.style.transform = `translateX(${this.x}%)`));
    // set the current index
    this.currentSlideIndex = slideIndex;
  }

  createSlidesContainer() {
    return createElement('div', { properties: { className: 'slides-container' } });
  }

  createAllSlides() {
    const container = createElement('div', { properties: { className: 'all-slides-container' } });
    /**
     * in order for each slide to be 100% of the parent container,
     * set the container's width to 100% * n slides.
     * i.e., for 3 slides, use a width of 300%
     */
    container.append(...this.slides.map(this.createSlide));
    return container;
  }

  createSlide(slide, index) {
    const { url, title, body } = slide;
    // container
    const slideContainer = createElement('div', { properties: { className: 'slide-container ' } });
    slideContainer.classList.add(`slide-${index}`);
    slideContainer.dataset.slideIndex = index;
    // figure
    const slideFigure = document.createElement('figure');
    slideContainer.append(slideFigure);
    // img
    const slideImg = document.createElement('img');
    slideImg.src = url;
    slideFigure.append(slideImg);
    // text card
    const card = createElement('div', { properties: { className: 'slide-card' } });
    slideContainer.append(card);
    // heading
    const heading = document.createElement('h2');
    heading.textContent = title;
    card.append(heading);
    // paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = body;
    card.append(paragraph);
    // add html element reference to slide object
    slide.el = slideContainer;
    return slideContainer;
  }

  createButton({ label, className, onClick }) {
    return createElement('button', {
      properties: {
        className,
        textContent: label,
        onclick: onClick,
      },
    });
  }

  createButtonBar() {
    // button bar container
    const container = createElement('div', { properties: { className: 'button-bar-container' } });

    // prev button
    const prevButton = this.createButton({
      className: 'instructions-button instructions-prev-button',
      label: 'Previous',
      onClick: this.prev.bind(this),
    });
    container.append(prevButton);
    //  next button
    const nextButton = this.createButton({
      className: 'instructions-button instructions-next-button',
      label: 'Next',
      onClick: this.next.bind(this),
    });
    container.append(nextButton);
    return container;
  }

  render(container) {
    this.container = this.createSlidesContainer();
    // create slides
    this.container.append(this.createAllSlides());
    // button bar
    this.container.append(this.createButtonBar());

    container.append(this.container);
  }
}

export default Slides;
