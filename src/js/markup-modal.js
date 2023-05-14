


export function markupModalWindow({ book_image, author, description, title }) {
    return `<div class="modal_book">
    <button class="modal_book-btn-close" type="button" data-modal-close>X
    </button>
    <div class="modal_book-detail">
        <img class="modal_book-img" src="${book_image}" alt="${title}" />
      <div class="modal_book-info">
        <h2 class="modal_book-info-name">${title}</h2>
        <p class="modal_book-info-author">${author}</p>
        <p class="modal_book-info-descrip">${description}</p>
      </div>
      </div>
      <button
        class="modal_book-btn"
        type="button"
      >
        ADD TO SHOPPING LIST
      </button>
  </div>
  `;
  }