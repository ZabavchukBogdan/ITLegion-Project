import Pagination from 'tui-pagination';
import {
  fetchSavedBooks,
  readBookListFromStorage,
  renderEmptyPage,
} from './shopping-list';

const list = readBookListFromStorage();
const booksPerPage = window.screen.width >= 768 ? 3 : 4;
const visiblePagesBtn = window.screen.width >= 768 ? 3 : 2;

const options = {
  totalItems: list.length,
  itemsPerPage: booksPerPage,
  visiblePages: visiblePagesBtn,
  page: 1,
};

if (list.length) {
  const pagination = new Pagination('pagination', options);

  pagination.on('beforeMove', async evt => {
    const itemCount = pagination._options.itemsPerPage;
    const shift = itemCount * (evt.page - 1);
    const items = list.slice(shift, shift + itemCount);

    await fetchSavedBooks(items);
  });

  pagination.events.beforeMove[0].handler({ page: 1 });
} else {
  renderEmptyPage();
}
