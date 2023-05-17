import axios from 'axios';
import refs from './refs';
import {
  markupBookForShoppingList,
  markupEmptyPage,
} from './markup-card-shopping-list';
import Pagination from 'tui-pagination';



function getPaginationOptions() {
  const list = readBookListFromStorage();
  const booksPerPage = window.screen.width >= 768 ? 3 : 4;
  const visiblePagesBtn = window.screen.width >= 768 ? 3 : 2;

  return {
    totalItems: list.length,
    itemsPerPage: booksPerPage,
    visiblePages: visiblePagesBtn,
    page: 1,
  };
}

export function readBookListFromStorage() {
  const listVal = localStorage.getItem('shopping_list');

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
    localStorage.setItem('shopping_list', JSON.stringify(list));
  }
}

export function removeBookFromList(id) {
  if (!id) {
    return;
  }

  const list = readBookListFromStorage();

  if (list.includes(id)) {
    const idx = list.indexOf(id);
    list.splice(idx, 1);
    localStorage.setItem('shopping_list', JSON.stringify(list));
  }
}

export async function fetchSavedBooks(ids) {
  refs.listContainer.innerHTML = '';
  const list = ids || readBookListFromStorage();
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

export function renderEmptyPage() {
  const markup = markupEmptyPage();
  refs.listContainer.innerHTML = markup;
}

function renderBookById(book) {
  const markup = markupBookForShoppingList(book);
  refs.listContainer.insertAdjacentHTML('afterbegin', markup);
}

function togglePagination(isVisible) {
  refs.paginationEl.style.display = isVisible ? 'block' : 'none';
}

if (refs.listContainer) {
  const options = getPaginationOptions();
  const pagination = new Pagination('pagination', options);

  pagination.on('beforeMove', async evt => {
    const list = readBookListFromStorage();
    const itemCount = options.itemsPerPage;
    const shift = itemCount * (evt.page - 1);
    const items = list.slice(shift, shift + itemCount);

    await fetchSavedBooks(items);
  });

  pagination.events.beforeMove[0].handler({ page: 1 });

  const list = readBookListFromStorage();

  togglePagination(!!list.length);

  refs.listContainer.addEventListener('click', function (event) {
    const btnRemoveFromList = event.target.closest(
      '.remove-from-shopping-list'
    );
    if (btnRemoveFromList) {
      removeBookFromList(btnRemoveFromList.dataset.bookId);

      const parentEl = event.target.closest('div.wrapper-shopping-list');
      parentEl.remove();

      const list = readBookListFromStorage();

      if (list.length) {
        const currPage = pagination.getCurrentPage();

        pagination.reset(list.length);
        pagination.movePageTo(pagination.getCurrentPage());
      } else {
        renderEmptyPage();
        togglePagination(false);
      }
    }
  });
}
