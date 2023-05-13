import { getTopBooks } from './all-requests';

const container = document.querySelector('body');

getTopBooks().then(topBooksArr => {
  const bookCards = createBookCard(topBooksArr);
  container.innerHTML = bookCards;
});

export function createBookCard(topBooksArr) {
  const bookCards = topBooksArr
    .map(
      ({ author, book_image, title }) =>
        `<div><img src="${book_image}" alt="" /><p>${title}</p><p>${author}</p></div>`
    )
    .join('');
  return bookCards;
}
createBookCard();
