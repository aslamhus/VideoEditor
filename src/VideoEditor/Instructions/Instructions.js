import Slides from './Slides';
import Modal from '../Modal';
import './instructions.css';
import { createElement } from '../utils';

class Instructions extends Modal {
  constructor({ container, fadeDuration }) {
    super({
      content: '',
      className: 'instructions-modal',
      options: { animationDuration: 0.35, overlay: true, hidden: true },
    });
    this.instructions = null;
    this.hidden = true;
    // bind
    this.begin = this.begin.bind(this);
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
          body: 'Activate the crop tool by selecting the "Crop" button on the top right corner of the video editor. Zoom in or out by dragging the zoom range left or right. Reposition the video by dragging the video frame in any direction. ',
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

  async begin() {
    if (!this.hidden) {
      await this.hide();
    }
    await this.show();
  }

  render(container) {
    this.instructions = createElement('div', {
      properties: { className: 'instructions-container' },
    });
    this.slides.render(this.instructions);
    this.setState({ content: this.instructions });
    super.render(container);
  }
}

export default Instructions;
