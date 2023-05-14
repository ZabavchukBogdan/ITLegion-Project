const trashIconUrl = new URL('../images/symbol-defs.svg', import.meta.url);
trashIconUrl.hash = 'icon-trash';

const bookdeskIconUrl = new URL(
  '../images/shop-bookdesk@1x.jpg',
  import.meta.url
);

const amazonIcon = new URL(
  '../images/bookshops/amazonmob@1x.png',
  import.meta.url
);
const appleBooksIcon = new URL(
  '../images/bookshops/applebookmob@1x.png',
  import.meta.url
);
const bookshopIcon = new URL(
  '../images/bookshops/bookshopmob@1x.png',
  import.meta.url
);

const arrIconsShop = [amazonIcon, appleBooksIcon, bookshopIcon];

export function markupBookForShoppingList({
  _id,
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  let buyLinksMarkup = '';
  const links = buy_links.filter(({ name }) =>
    ['Amazon', 'Apple Books', 'Bookshop'].includes(name)
  );

  for (let i = 0; i < links.length; i++) {
    buyLinksMarkup += `<li><a href="${links[i].url}">
      <img
      src="${arrIconsShop[i]}"
      alt="amazon"
      class="shop-item-shopping-list"
      width="16"
      height="16"
    /></a></li>`;
  }

  // for (const link of links) {
  //   buyLinksMarkup += `<li><a href="${link.url}">
  //   <img
  //   src="${amazonIcon}"
  //   alt="amazon"
  //   class="shop-item-shopping-list"
  //   width="32"
  //   height="11"
  // /></a></li>`;
  // }

  return `<div class="wrapper-shopping-list">
  <div class="wrapper-img-shopping-list"><img src="${
    book_image ||
    'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg'
  }" alt="${title}" width="100" height="142"></div>
    <div class="wrapper-text-shopping-list"> 
    <h2 class="title-book-shopping-list">${title}</h2>
    <h3 class="category-book-shopping-list">${list_name}</h3>
    <p class="description-book-shopping-list">${
      description ||
      'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to the know the family of his college sweetheart.'
    }</p>
    <div class="bottom-wrapper-shopping-list">
      <p class="author-book-shopping-list">${author}</p>
      <ul class="shops-shopping-list">
        ${buyLinksMarkup}
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
  return `<p class="empty-shopping-list">This page is empty, add some books and proceed to order.</p>
  <img
    src="${bookdeskIconUrl}"
    alt=""
    class="image-empty-shopping-list"
    width="200"
    height="300"
  />`;
}