import VideoEditor from './VideoEditor/VideoEditor';
import { FileSelect } from '@aslamhus/fileselect';
const crop = { width: 5, height: 3 };
window.onload = () => {
  const uploadBtn = document.querySelector('button');
  uploadBtn.onclick = handleUploadBtnClick;
};

function handleUploadBtnClick(event) {
  event.preventDefault();
  new FileSelect('video/*').select().then((files) => {
    const [videoFile] = files;
    const blob = URL.createObjectURL(videoFile);
    const renderDiv = document.getElementById('render');
    renderDiv.style.width = '450px';
    const editor = new VideoEditor({ videoSrc: blob, crop });
    editor.render(renderDiv);
  });
}
