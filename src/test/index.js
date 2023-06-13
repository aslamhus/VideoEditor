import VideoEditor from '../VideoEditor/VideoEditor.js';
import Popover from '../VideoEditor/Popover';

let src = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';

window.onload = function () {
  const root = document.getElementById('root');
  let popover = new Popover({
    title: 'Maximum Video Length Exceeded',
    body: 'Please select a shorter video.',
    variant: 'danger',
  });
  let vidEditor = new VideoEditor({
    src,
    crop: { width: 300, height: 200 },
    // maxHeight,
    // transformations,
    // crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' },
    // time: { in: 5, out: 10 },
    limit: { maxDuration: 5 },
    onError: (error) => {
      console.error('onError', error);
    },
    onSave: (transform, videoSrc) => {
      if (onSave) onSave(transform, videoSrc);
    },
    onTimelineClick: (timeIndex) => {
      if (!popover.hidden) popover.hide();
    },
    onClickHelpButton: (event) => {
      // alert('help!');
    },
    onRangeLimit: ({ marker, maxDuration, time }) => {
      const el = marker.marker;
      try {
        popover.setBody(`Please select video shorter than ${maxDuration} seconds.`);
        popover.render(el);
      } catch (error) {
        console.error('error', error);
      }
    },
    onRangeUpdate: (...args) => {
      if (!popover.hidden) popover.hide();
    },
  });
  vidEditor.render(root);

  const hidePopover = () => {
    console.log('hidePopover');
    if (!popover.hidden) popover.hide();
  };
  window.removeEventListener('resize', hidePopover);
  window.addEventListener('resize', hidePopover);
};
