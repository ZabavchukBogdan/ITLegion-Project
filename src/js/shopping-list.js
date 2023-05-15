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

export function isBookInList(id) {
  if (!id) {
    return false;
  }

  const list = readBookListFromStorage();

  return list.includes(id);
}

export function addBookToList(id) {
  if (!id) {
    return;
  }

  const list = readBookListFromStorage();

  if (!list.includes(id)) {
    list.push(id);
    localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(list));
  }
}

export function removeBookFromList(id) {
  // console.log(id);
  if (!id) {
    return;
  }

  const list = readBookListFromStorage();

  if (list.includes(id)) {
    const idx = list.indexOf(id);
    list.splice(idx, 1);
    localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(list));
  }
}

async function fetchSavedBooks() {
  const list = readBookListFromStorage();
  const requests = [];

  if (!list.length) {
    renderEmptyPage();
    return;
  }

  for (const bookId of list) {
    requests.push(
      axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
    );
  }

  const responses = await Promise.all(requests);

  for (const res of responses) {
    const book = res.data;
    renderBookById(book);
  }
}

function renderEmptyPage() {
  const markup = markupEmptyPage();
  refs.listContainer.innerHTML = markup;
}

function renderBookById(book) {
  const markup = markupBookForShoppingList(book);
  refs.listContainer.insertAdjacentHTML('afterbegin', markup);
}

if (refs.listContainer) {
  fetchSavedBooks();

  refs.listContainer.addEventListener('click', function (event) {
    const btnRemoveFromList = event.target.closest(
      '.remove-from-shopping-list'
    );
    if (btnRemoveFromList) {
      console.log(
        event.target.closest('.remove-from-shopping-list').dataset.bookId
      );
      removeBookFromList(btnRemoveFromList.dataset.bookId);

      const parentEl = event.target.closest('div.wrapper-shopping-list');
      parentEl.remove();

      const list = readBookListFromStorage();

      if (!list.length) {
        renderEmptyPage();
      }
    }
  });
}
