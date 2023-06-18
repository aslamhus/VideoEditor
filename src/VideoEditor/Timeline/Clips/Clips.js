import Clip from './Clip/Clip';

/**
 * For Clips to work, we need to reorganize the logic of the video player.
 *
 * ## Timeline
 * The timeline should be responsible for managing the clips.
 * THe timeline needs a split clip function.
 * When a clip is split, the timeline should create a new clip and add it to the clips array.
 *
 * ## Clips
 * Clip initiales and manages cropper instance, which is passed to each clip
 *
 * ## Clip
 * Each clip should have its own range selector.
 * Each clip should have its own frame renderer
 * After the range selector is updated, (dragged left or right), the timline needs to move each clip to the correct position.
 *
 *
 *
 */
class Clips {
  constructor({ clips, video, onAllClipsReady, ...props }) {
    this.video = video;

    this.currentClip = null;
    this.onAllClipsReady = onAllClipsReady;
    const clipProps = { video, onClipReady: this.handleClipReady.bind(this), ...props };
    this.clips = clips || [
      new Clip({
        time: { in: 0, out: 4 },
        ...clipProps,
      }),
      new Clip({
        time: { in: 6, out: 7 },
        ...clipProps,
      }),
      new Clip({
        time: { in: 8, out: this.video.duration },
        ...clipProps,
      }),
      //   new Clip({ time: { in: 0, out: 2 } }),
      //   new Clip({ time: { in: 5, out: 6 } }),
      //   new Clip({ time: { in: 10, out: this.video.duration } }),
    ];
    // bind
    this.handleClipTimeUpdate = this.handleClipTimeUpdate.bind(this);
    // init
    this.init();
  }

  init() {
    this.video.addEventListener('timeupdate', (event) => {
      this.handleClipTimeUpdate(event.target.currentTime);
    });
  }

  getClips() {
    return this.clips;
  }

  /**
   * Handle clip time update
   *
   * Manage how the video plays through clips
   *
   * @param {*} currentTime
   */
  handleClipTimeUpdate(currentTime) {
    if (this.video.paused) return;
    // find current clip if empty
    if (!this.currentClip) {
      this.currentClip = this.findCurrentClip(currentTime);
    }
    // if currentTime is outside clips range, move to next clip

    if (this.currentClip.isOutOfBounds(currentTime)) {
      console.log('current clip is out of bounds', this.currentClip.time, currentTime);
      // move to nearest clip time
      const nextClip = this.findNextClip();
      if (nextClip) {
        console.info(
          `playhead is out of bounds ${currentTime}, skip to next clip`,
          nextClip.time.in
        );
        this.video.currentTime = nextClip.time.in;
        this.currentClip = nextClip;
      } else {
        // if no next clip, pause video
        // console.log('no next clip, pausing video');
        this.video.pause();
      }
    }
  }

  /**
   * Handle clip ready
   *
   * When all clips are ready, fire custom onAllClipsReady callback
   *
   * @param {Clip} clip
   * @returns
   */
  handleClipReady(clipId) {
    console.log('clip ready', clipId);
    for (let clip of this.clips) {
      if (!clip.ready) return;
    }
    // fire custom on all clips ready
    if (this.onAllClipsReady instanceof Function) {
      console.log('all clips ready');
      this.onAllClipsReady(this.clips);
    }
  }

  findCurrentClip(currentTime) {
    for (let clip of this.clips) {
      if (clip.isInBounds(currentTime)) {
        this.currentClip = clip;
        break;
      }
    }

    return this.currentClip;
  }

  findNextClip() {
    const currentClipIndex = this.clips.findIndex((clip) => clip.id === this.currentClip.id);
    const nextClip = this.clips[currentClipIndex + 1];
    if (!nextClip) {
      // return first clip
      return this.clips[0];
    }
    return nextClip;
  }

  render(container) {
    this.clips.forEach((clip) => {
      // wait for each clip to render before starting on the next one
      clip.render(container);
    });
  }
}

export default Clips;
