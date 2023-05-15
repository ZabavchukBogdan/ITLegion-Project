import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';
import { markupModalWindow } from './markup-modal';
import {getBookById} from './all-requests'
import { addBookToList, removeBookFromList } from './shopping-list';

refs.mainGalleryEl.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains('js-target')) {
    return;
  }
  const bookId = target.dataset.idbook ?? target.closest('.book-card-wrapper').dataset.idbook;
  const data = getBookById(bookId).then(data => createModal(data));
}
function createModal(data) {
  const instance = basicLightbox.create(markupModalWindow(data), {
    onShow: instance => {
      window.addEventListener('keydown', function onClose(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      });

      instance
        .element()
        .querySelector('.js-modal_book-btn')
        .addEventListener('click', e => {
            const noteText = document.querySelector('.js-modal_book-note')
          if (e.target.classList.contains('in-list')) {
            removeBookFromList(data._id);

            e.target.classList.remove('in-list');
            e.target.textContent = 'ADD TO SHOPPING LIST';
            noteText.hidden = true;
          } else {
            addBookToList(data._id);

            e.target.classList.add('in-list');
            e.target.textContent = 'REMOVE FROM SHOPPING LIST';
            noteText.hidden = false;
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