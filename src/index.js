import VideoEditor from './VideoEditor/VideoEditor';
import { FileSelect } from '@aslamhus/fileselect';

const crop = { width: 2, height: 3 };

let renderDiv;
window.onload = () => {
  renderDiv = document.getElementById('render');
  const uploadBtn = document.querySelector('button');
  const video = document.querySelector('video');
  const editor = new VideoEditor({ videoSrc: video.src, crop });
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
