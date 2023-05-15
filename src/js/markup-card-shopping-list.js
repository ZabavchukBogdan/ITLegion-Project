const trashIconUrl = new URL('../images/symbol-defs.svg', import.meta.url);
trashIconUrl.hash = 'icon-trash';

const amazonIcon = new URL('../images/amazon@1x.png', import.meta.url);
const amazonIconRet = new URL(
  '../images/bookshops/amazon@2x.png',
  import.meta.url
);
const appleIcon = new URL('../images/bookshops/apple@1x.png', import.meta.url);
const appleIconRet = new URL(
  '../images/bookshops/apple@2x.png',
  import.meta.url
);
const booksIcon = new URL(
  '../images/bookshops/bookshop@1x.png',
  import.meta.url
);
const booksIconRet = new URL(
  '../images/bookshops/bookshop@2x.png',
  import.meta.url
);

export function markupBookForShoppingList({
  _id,
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  return `<div class="wrapper-shopping-list">
  <div class="wrapper-img-shopping-list"><img src="${
    book_image ||
    'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg'
  }" alt="${title}"></div>
    <div class="wrapper-text-shopping-list"> 
    <h2 class="title-book-shopping-list">${title}</h2>
    <h3 class="category-book-shopping-list">${list_name}</h3>
    <p class="description-book-shopping-list">${
      description || 'Coming soon'
    }</p>
    <div class="bottom-wrapper-shopping-list">
      <p class="author-book-shopping-list">${author || 'Coming soon'}</p>
      <ul class="shops-shopping-list">
        <li>
          <a href="${
            buy_links[0].url
          }" class="shop-item-shopping-list" target="_blank">
            <img
              srcset="${amazonIcon} 1x, ${amazonIconRet} 2x"
              src="${amazonIcon}"
              alt="Amazon"
              class="amazon-image-shopping-list"
              width="48"
              height="15"
            />
          </a>
        </li>
        <li>
          <a href="${
            buy_links[1].url
          }" class="shop-item-shopping-list" target="_blank">
            <img
              srcset="${appleIcon} 1x, ${appleIconRet} 2x"
              src="${appleIcon}"
              alt="Apple Book"
              class="apple-image-shopping-list"
              width="28"
              height="27"
            />
          </a>
        </li>
        <li>
          <a href="${
            buy_links[4].url
          }" class="shop-item-shopping-list" target="_blank">
            <img
              srcset="${booksIcon} 1x, ${booksIconRet} 2x"
              src="${booksIcon}"
              alt="Bookshop"
              class="books-image-shopping-list"
              width="32"
              height="30"
            />
          </a>
        </li>

      </ul>
    </div></div>
    <button class="remove-from-shopping-list" data-book-id="${_id}">
      <svg class="remove-icon" width="16" height="16">
        <use href="${trashIconUrl}"></use>
      </svg>
    </button>
    </div>
   `;
}

export function markupEmptyPage() {
  return `<div class="empty-shopping-list"><p class="text-shopping-list">This page is empty, add some books and proceed to order.</p></div>
  `;
}
