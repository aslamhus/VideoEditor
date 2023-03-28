import VideoEditor from './VideoEditor/VideoEditor';
import { FileSelect } from '@aslamhus/fileselect';

const crop = { width: 2, height: 3 };

let renderDiv;
window.onload = async () => {
  renderDiv = document.getElementById('render');
  const uploadBtn = document.querySelector('button');
  // const video = document.querySelector('video');
  const url =
    'https://res.cloudinary.com/dmxpkxal2/video/upload/v1672906170/test-video-transformation1672906153322.mp4';

  let videoBlob = await fetch(url).then((r) => r.blob());
  console.log('videoBlob', videoBlob);
  const editor = new VideoEditor({ videoSrc: videoBlob, crop });
  editor.render(renderDiv);
  uploadBtn.onclick = handleUploadBtnClick;
};

function handleUploadBtnClick(event) {
  renderDiv.innerHTML = '';
  event.preventDefault();
  new FileSelect('video/*').select().then((files) => {
    const [videoFile] = files;
    const blob = URL.createObjectURL(videoFile);
    const editor = new VideoEditor({ videoSrc: blob, crop });
    editor.render(renderDiv);
  });
}
