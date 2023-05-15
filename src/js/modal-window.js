// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';
import { markupModalWindow } from './markup-modal';
import { getBookById } from './all-requests';

refs.mainGalleryEl.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains('js-target')) {
    return;
  }
  const bookId = target.dataset.idbook ?? target.closest('div').dataset.idbook;
  const data = getBookById(bookId).then(data => createModal(data));
}
function createModal(data) {
  const instance = basicLightbox.create(markupModalWindow(data), {
    onShow: instance => {
      return window.addEventListener('keydown', function onClose(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      });
    },
    onClose: instance => {
      return window.removeEventListener('keydown', function onClose(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      });
    },
  });
  instance.show();
  const modalBtnCLose = document.querySelector('.modal_book-btn-close');
  modalBtnCLose.addEventListener('click', onCloseBtn);
  function onCloseBtn() {
    instance.close();
  }
}
