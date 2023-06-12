export default function setupModal({ onSubmit }) {
  const modal = document.querySelector('.setup-modal-container');
  const closeBtn = document.querySelector('.close-btn');
  const form = document.querySelector('.setup-modal-form');

  const parseAspectRatio = (aspectRatioString) => {
    const [width, height] = aspectRatioString.split('/');
    return { width, height };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const file = formData.get('file');
    const aspectRatio = parseAspectRatio(formData.get('aspect-ratio'));
    console.log('aspectRatio', aspectRatio);
    const maxDuration = formData.get('max-duration');
    if (!file || !file.name) {
      //   alert('Please select a file');
      //   return;
    }
    if (onSubmit instanceof Function) {
      closeModal();
      onSubmit({ file, aspectRatio, maxDuration });
    }
  };

  const closeModal = () => {
    modal.classList.remove('modal-open');
  };
  const attachEvents = () => {
    // close button
    closeBtn.addEventListener('click', closeModal);
    // submit button
    form.addEventListener('submit', handleSubmit);
  };

  attachEvents();
}
