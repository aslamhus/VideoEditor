import renderVideoEditor from './scripts/render-video-editor';
import setupModal from './scripts/setup-modal';
import { FileSelect } from '@aslamhus/fileselect';
import './styles.css';

let renderDiv, vidEditor, popover;
// const maxHeight = 300;
const url = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';

window.onload = async () => {
  renderDiv = document.getElementById('render');
  setupModal({ onSubmit: handleModalSubmit });
};

const handleModalSubmit = ({ file, aspectRatio, maxDuration }) => {
  // console.log('handleModalSubmit', file, aspectRatio, maxDuration);
  const src = file?.name ? file : url;
  console.log('src', src);
  renderVideoEditor({
    src,
    crop: aspectRatio,
    maxDuration,
    renderDiv,
  });
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
}
