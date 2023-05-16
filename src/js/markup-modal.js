import amazon1x from '../images/amazon@1x.png';
import amazon2x from '../images/amazon@2x.png';
import apple1x from '../images/apple@1x.png';
import apple2x from '../images/apple@2x.png';
import books1x from '../images/books@1x.png';
import books2x from '../images/books@2x.png';
import close from '../images/symbol-defs.svg';
import { isBookInList } from './shopping-list';

export function markupModalWindow({
  _id,
  book_image,
  author,
  description,
  title,
  buy_links,
}) {
  const isInList = isBookInList(_id);

  return `
    <div class="modal_book">
      <button class="modal_book-btn-close" type="button" data-modal-close>
      <svg width="28" height="28">
      <use class="modal_book-svg" href="${close}#icon-x""></use>
    </svg>
      
      </button>
      <div class="modal_book-detail">
        <img class="modal_book-img" src="${book_image}" alt="${title}" />
        <div class="modal_book-info">
          <h2 class="modal_book-info-name">${title}</h2>
          <p class="modal_book-info-author">${author || 'Coming soon'}</p>
          <p class="modal_book-info-descrip">${description || 'Coming soon'}</p>

          <div class="modal_book-icons">
          <a href="${
            buy_links[0].url
          }" class="modal_book-one-icon" target="_blank">
            <img
              srcset="${amazon1x} 1x, ${amazon2x} 2x"
              src="${amazon1x}"
              alt="Amazon"
              class="modal-icons modal-icon-amazon"
              width="62"
              height="19"
            />
          </a>
          <a href="${
            buy_links[1].url
          }" class="modal_book-one-icon" target="_blank">
            <img
              srcset="${apple1x} 1x, ${apple2x} 2x"
              src="${apple1x}"
              alt="Apple Books"
              class="modal-icons"
              width="33"
              height="32"
            />
          </a>
          <a href="${
            buy_links[4].url
          }" class="modal_book-one-icon" target="_blank">
            <img
              srcset="${books1x} 1x, ${books2x} 2x"
              src="${books1x}"
              alt="Bookshop"
              class="modal-icons"
              width="38"
              height="36"
            />
          </a>
        </div>
        </div>
      </div>
        <button class="modal_book-btn js-modal_book-btn ${
          isInList ? 'in-list' : ''
        }" type="button">
        ${isInList ? 'REMOVE FROM SHOPPING LIST' : 'ADD TO SHOPPING LIST'}
      </button>

      <p class="modal_book-note js-modal_book-note" ${isInList ? '' : 'hidden'}>
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    </div>
  `;
}
