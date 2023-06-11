import VideoEditor from './VideoEditor/VideoEditor';
import Popover from '../../Popover/Popover';
import { FileSelect } from '@aslamhus/fileselect';

const testUrls = {
  test1: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  test2: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  test3: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  wally:
    'https://res.cloudinary.com/dmxpkxal2/video/upload/v1684432443/covid-19-grief-project/7bc86818-591a-4061-bc5b-67ffb79c462e/memory-c958d848-2071-4210-a360-ce35715fb988.mp4',
};
const crop = { width: 4, height: 5 };
let maxHeight = 300;
let renderDiv, vidEditor;
const url = testUrls.test2;
let popover;

window.onload = async () => {
  renderDiv = document.getElementById('render');
  popover = new Popover({
    title: 'Maximum Video Length Exceeded',
    body: 'Please select a shorter video.',
    variant: 'danger',
  });
  // const uploadBtn = document.querySelector('button');
  // const saveBtn = document.querySelector('#save-btn');
  // const video = document.querySelector('video');

  // let videoBlob = await fetch(url).then((r) => r.blob());
  // console.log('videoBlob', videoBlob);
  vidEditor = new VideoEditor({
    src: url,
    // src: {},
    crop,
    // maxHeight,
    transformations: {
      // crop: { h: 294, scale: '0.883', w: 582, x: '349', y: '125' },
      // crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' },
      // time: { in: 5, out: 10 },
    },
    limit: { maxDuration: 5 },
    onError: (error) => {
      console.error('onError', error);
    },
    onSave: (transform) => {
      console.log('save video -> transformations', transform);
    },

    onClickHelpButton: (event) => {
      alert('help!');
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
  // uploadBtn.onclick = handleUploadBtnClick;
  // saveBtn.onclick = handleSaveBtnClick;
};

window.onresize = () => {
  if (!popover.hidden) popover.hide();
};

function handleUploadBtnClick(event) {
  renderDiv.innerHTML = '';
  event.preventDefault();
  new FileSelect('video/*').select().then((files) => {
    const [videoFile] = files;
    const blob = URL.createObjectURL(videoFile);
    vidEditor = new VideoEditor({ videoSrc: blob, crop, maxHeight });
    vidEditor.render(renderDiv);
  });
}

// async function handleSaveBtnClick(event) {
//   event.preventDefault();
//   const transform = vidEditor.saveVideo();
//   console.log('transform', transform);
//   // const result = await cloudinaryTransform(transform);
// }

async function cloudinaryTransform(transform) {
  console.log('transform', transform);
  const { crop, time } = transform;
  const transformedVideo = await fetch(
    `https://res.cloudinary.com/dmxpkxal2/video/upload/eo_${time.out},so_${time.in},c_crop,h_${crop.h},w_${crop.w},x_${crop.x},y_${crop.y}/v1672906170/test-video-transformation1672906153322.mp4`
  );
  console.log('transformedVideo', transformedVideo);
  const video = document.createElement('video');
  video.src = transformedVideo?.url;
  video.autoplay = true;
  video.controls = true;
  document.body.append(video);
  /**
   * 1st step, upload video
   *
   * 2nd step, scale video
   *
   * 3rd step, crop video
   * https://res.cloudinary.com/demo/video/upload/c_crop,h_150,w_150,x_10,y_80/docs/cld_rubiks_guy.mp4
   *
   *
   * https://res.cloudinary.com/demo/image/upload/c_scale,w_${scale}/docs/models.jpg
   * 
   * trimming:
   * 
   * start_offset (so in URLs) specifies the start.
end_offset (eo in URLs) specifies the end.
duration (du in URLs) specifies the duration.

   */
}
