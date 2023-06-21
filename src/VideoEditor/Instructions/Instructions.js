import Slides from './Slides';
import './instructions.css';

class Instructions {
  constructor({ container, fadeDuration }) {
    this.instructions = null;
    this.fadeDuration = fadeDuration ?? 0.35;
    console.log('container', container);
    this.hidden = true;
    // bind
    this.begin = this.begin.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    // slides
    this.slides = new Slides({
      slides: [
        {
          url: 'https://res.cloudinary.com/dmxpkxal2/video/upload/c_limit,w_500/e_loop/dl_150,vs_0.1s/fl_lossy/q_50/covid-19-grief-project/video-editor/trim-example_p21h0x.gif',
          title: 'Trim',
          body: 'Remove footage from the beginning or end of the clip by dragging the yellow markers to the desired position',
        },
        {
          url: 'https://res.cloudinary.com/dmxpkxal2/video/upload/c_limit,w_500/e_loop/dl_150,vs_0.1s/fl_lossy/q_50/covid-19-grief-project/video-editor/crop-example_otwihm.gif',
          title: 'Crop',
          body: 'Active the crop tool by selecting the "Crop" button on the top right corner of the video editor. You can zoom in or out by dragging the zoom range left or right. Reposition the video by dragging the video frame in any direction. ',
        },
        // {
        //   url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        //   title: 'Slide 2',
        //   body: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        // },
      ],
      onDone: () => {
        this.hide();
      },
    });
    this.currentSlide = 0;
    // instructions modal is appended to container or body
    this.render(container ?? document.body);
  }

  init() {}

  async show() {
    this.instructions.style.opacity = 0;
    this.instructions.style.display = '';
    this.instructions.classList.add('float-in');
    this.slides.reset();
    return new Promise((resolve) => {
      setTimeout(() => {
        this.hidden = false;
        resolve();
      }, this.fadeDuration * 1000);
    });
  }

  async hide() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.instructions.classList.remove('float-in');
        this.instructions.classList.remove('float-out');
        this.instructions.style.display = 'none';
        this.hidden = true;
        resolve();
      }, 10);
    });
  }

  async begin() {
    if (!this.hidden) {
      await this.hide();
    }
    await this.show();
  }

  createInstructions() {
    this.instructions = document.createElement('div');
    this.instructions.className = 'instructions-container';
    this.instructions.style.display = 'none';
    this.instructions.style.setProperty('--animation-speed', `${this.fadeDuration}s`);

    return this.instructions;
  }

  render(container) {
    this.instructions = this.createInstructions();
    // render slides
    this.slides.render(this.instructions);
    console.log('this.instructions', this.instructions);
    container.append(this.instructions);
  }
}

export default Instructions;
