import ControlButton from './ControlButton/ControlButton';

class PlayButton extends ControlButton {
  constructor({ video, onPlayToggle, onPlayClick }) {
    super({
      className: 'play-btn',
      iconClassName: 'fa fa-play',
      onToggle: onPlayToggle,
      onClick: onPlayClick,
    });
    this.onPlayToggle = onPlayToggle;
    this.video = video;
    this.attachVideoEvents();
  }

  handlePause(event) {
    this.toggle(false);
    this.setTitle('Play');
    this.addIconClass('fa-play');
    this.removeIconClass('fa-pause');
  }

  handlePlaying(event) {
    this.toggle(true);
    this.setTitle('Pause');
    this.addIconClass('fa-pause');
    this.removeIconClass('fa-play');
  }

  attachVideoEvents() {
    this.video.addEventListener('pause', this.handlePause.bind(this));

    this.video.addEventListener('playing', this.handlePlaying.bind(this));
  }

  // attachEvents() {
  //   this.video.addEventListener('pause', this.handlePause.bind(this));
  // }

  // handleClick(event) {
  //   event.preventDefault();
  //   if (this.video.paused) {
  //     this.video.play();
  //     this.setPlayBtnState('play');
  //   } else {
  //     this.video.pause();
  //     this.setPlayBtnState('pause');
  //   }
  // }

  // handlePause(eent) {
  //   this.setPlayBtnState('pause');
  // }

  // setPlayBtnState(state) {
  //   switch (state) {
  //     case 'pause':
  //       this.removeClass('pause');
  //       this.addClass('play');
  //       this.resetIconClass();
  //       this.blur();
  //       break;
  //     case 'play':
  //       this.removeClass('play');
  //       this.addClass('pause');
  //       this.setIconClass('fa fa-pause');
  //       this.focus();
  //       break;
  //   }
  // }
}

export default PlayButton;
