import amazon1x from '../images/bookshops/amazon@1x.png';
import amazon2x from '../images/bookshops/amazon@2x.png';
import apple1x from '../images/bookshops/apple@1x.png';
import apple2x from '../images/bookshops/apple@2x.png';
import books1x from '../images/bookshops/bookshop@1x.png';
import books2x from '../images/bookshops/bookshop@2x.png';
import close from '../images/symbol-defs.svg';

export function markupModalWindow({ book_image, author, description, title, buy_links }) {
  return `
    <div class="modal_book">
      <button class="modal_book-btn-close" type="button" data-modal-close>
      <svg width="18" height="18">
      <use class="modal_book-svg" href="${close}#icon-x""></use>
    </svg>
      
      </button>
      <div class="modal_book-detail">
        <img class="modal_book-img" src="${book_image}" alt="${title}" />
        <div class="modal_book-info">
          <h2 class="modal_book-info-name">${title}</h2>
          <p class="modal_book-info-author">${author}</p>
          <p class="modal_book-info-descrip">${description}</p>

          <div class="modal_book-icons">
          <a href="${buy_links[0].url}" class="modal_book-one-icon" target="_blank">
            <img
              srcset="${amazon1x} 1x, ${amazon2x} 2x"
              src="${amazon1x}"
              alt="Amazon"
              class="modal-icons modal-icon-amazon"
              width="62"
              height="19"
            />
          </a>
          <a href="${buy_links[1].url}" class="modal_book-one-icon" target="_blank">
            <img
              srcset="${apple1x} 1x, ${apple2x} 2x"
              src="${apple1x}"
              alt="Apple Books"
              class="modal-icons"
              width="33"
              height="32"
            />
          </a>
          <a href="${buy_links[4].url}" class="modal_book-one-icon" target="_blank">
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
        <button class="modal_book-btn js-modal_book-btn" type="button">
        ADD TO SHOPPING LIST
      </button>
    </div>
  `;
}
