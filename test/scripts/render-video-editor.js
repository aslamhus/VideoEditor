import VideoEditor from '../../src/VideoEditor/VideoEditor';
import Popover from '../../src/VideoEditor/Popover/Popover';

export default function renderVideoEditor({
  src,
  transformations,
  crop = { width: 4, height: 5 },
  maxDuration = 5,
  renderDiv,
}) {
  let popover = new Popover({
    title: 'Maximum Video Length Exceeded',
    body: 'Please select a shorter video.',
    variant: 'danger',
  });
  let vidEditor = new VideoEditor({
    src,
    crop,
    // maxHeight,
    transformations,
    // crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' },
    // time: { in: 5, out: 10 },
    limit: { maxDuration },
    onError: (error) => {
      console.error('onError', error);
    },
    onSave: (transform) => {
      console.log('save video -> transformations', transform);
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
  vidEditor.render(renderDiv);

  const hidePopover = () => {
    console.log('hidePopover');
    if (!popover.hidden) popover.hide();
  };
  window.removeEventListener('resize', hidePopover);
  window.addEventListener('resize', hidePopover);
}
