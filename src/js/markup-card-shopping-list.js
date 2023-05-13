const trashIconUrl = new URL('../images/symbol-defs.svg', import.meta.url);
trashIconUrl.hash = 'icon-trash';

const bookdeskIconUrl = new URL(
  '../images/shop-bookdesk@1x.jpg',
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
  let buyLinksMarkup = '';
  const links = buy_links.filter(({ name }) =>
    ['Amazon', 'Apple Books', 'Bookshop'].includes(name)
  );

  for (const link of links) {
    buyLinksMarkup += `<li><a href="${link.url}">${link.name}</a></li>`;
  }

  return `<div class="wrapper-shopping-list"><img src="${
    book_image ||
    'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg'
  }" alt="${title}" width="100" height="142">
    <div class="wrapper-text-shopping-list"> 
    <h2 class="title-book-shopping-list">${title}</h2>
    <h3 class="category-book-shopping-list">${list_name}</h3>
    <p class="description-book-shopping-list">${
      description ||
      'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to the know the family of his college sweetheart.'
    }</p>
    <p class="author-book-shopping-list">${author}</p>
    <ul class="shops-shopping-list">
      ${buyLinksMarkup}
    </ul></div>
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
