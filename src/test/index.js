import VideoEditor from '../VideoEditor/VideoEditor.js';

let src = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';

window.onload = function () {
  const root = document.getElementById('root');

  let vidEditor = new VideoEditor({
    src,
    crop: { width: 300, height: 200 },
    // maxHeight,
    // transformations,
    // crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' },
    // time: { in: 5, out: 10 },
    menuBarButtons: {
      inlineEndButtons: {
        // save: {
        //   label: 'Save',
        //   onClick: (event) => {
        //     console.log('custom save', event);
        //   },
        // },
      },
    },
    limit: { maxDuration: 5 },
    onError: (error) => {
      console.error('onError', error);
    },
    onSave: (transform, videoSrc) => {
      console.log('onSave', transform, videoSrc);
      // if (onSave) onSave(transform, videoSrc);
    },
    onTimelineClick: (timeIndex) => {
      // console.log('onTimelineClick', timeIndex);
    },
    onClickHelpButton: (event) => {
      // alert('help!');
    },
    onRangeLimit: ({ marker, maxDuration, time }) => {
      // console.log('onRangeLimit', { marker, maxDuration, time });
    },
    onRangeUpdate: (...args) => {
      // console.log('onRangeUpdate', ...args);
    },
  });
  vidEditor.render(root);
};
