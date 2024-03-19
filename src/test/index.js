import VideoEditor from '../VideoEditor';

const videoSrcs = {
  large: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  small: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
};

window.onload = function () {
  const root = document.getElementById('root');
  let vidEditor = initializeVideoEditor();
  vidEditor.render(root);
};

function initializeVideoEditor() {
  return new VideoEditor({
    // choose from 'small' or 'large' or add your own video source
    src: videoSrcs.small,
    // crop: { width: 3, height: 4 },
    maxHeight: null,
    // optionally, add transformations
    transformations: {
      // crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' },
      // time: { in: 5, out: 10 },
    },

    limit: { maxDuration: 5 },
    // optionally, a menu bar items with font awesome icons
    // menuBarButtons: {
    //   inlineEndButtons: {
    //     cancel: {
    //       index: 3,``
    //       label: 'Exit',
    //       fontAwesomeIcon: 'fa fa-times',
    //     },
    //   },
    // },
    onError: (error) => {
      // do something with the error
    },
    onSave: (transform, videoSrc) => {
      // do something with the transformed video
      console.log('Saved!', transform, videoSrc);
    },
    onTimelineClick: (timeIndex) => {
      // get the current time index
    },
    onClickHelpButton: (event) => {
      // custom help button
    },
    onRangeLimit: ({ marker, maxDuration, time }) => {
      // do something when the range limit is reached
    },
    onRangeUpdate: (...args) => {
      // do something when the range is updated
    },
  });
}
