import axios from 'axios';
import refs from './refs';
import {
  markupBookForShoppingList,
  markupEmptyPage,
} from './markup-card-shopping-list';

const SHOPPING_LIST_KEY = 'shopping_list';

function readBookListFromStorage() {
  const listVal = localStorage.getItem(SHOPPING_LIST_KEY);

  if (listVal) {
    try {
      return JSON.parse(listVal);
    } catch (error) {}
  }

  return [];
}

function addBookToList(id) {
  if (!id) {
    return;
  }

  const list = readBookListFromStorage();

  if (!list.includes(id)) {
    list.push(id);
    localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(list));
  }
}

function removeBookFromList(id, evt) {
  const parentEl = evt.target.closest('div.wrapper-shopping-list');
  parentEl.remove();

  const list = readBookListFromStorage();
  if (list.includes(id)) {
    const idx = list.indexOf(id);
    list.splice(idx, 1);
    localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(list));
  }

  if (list.length === 0) {
    renderEmptyPage();
  }
}

async function fetchSavedBooks() {
  const list = readBookListFromStorage();
  const requests = [];

  for (const bookId of list) {
    requests.push(
      axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
    );
  }

  const responses = await Promise.all(requests);

  for (const res of responses) {
    const book = res.data;
    console.log(book);
    renderBookById(book);
  }
}

function renderEmptyPage() {
  const markup = markupEmptyPage();
  refs.listContainer.innerHTML = markup;
}

fetchSavedBooks();

function renderBookById(book) {
  const markup = markupBookForShoppingList(book);
  refs.listContainer.insertAdjacentHTML('afterbegin', markup);
}

export default { addBookToList };

if (refs.listContainer) {
  refs.listContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-from-shopping-list')) {
      removeBookFromList(event.target.dataset.bookId, event);
    }
  });

  // TODO: remove after development
  addBookToList('643282b1e85766588626a080');
  addBookToList('643282b1e85766588626a0ba');
}
