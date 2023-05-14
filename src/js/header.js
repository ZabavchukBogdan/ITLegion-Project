// ВИДІЛЕННЯ ЖОВТИМ НАЗВУ ПОТОЧНОЇ СТОРІНКИ (меню в хедері)
const menuHomeEl = document.querySelector('.menu__home');
const menuShoppingEl = document.querySelector('.menu__shopping');

const setCurrentPage = () => {
  const currentPageName = window.location.pathname;

  if (
    currentPageName === '/index.html' ||
    currentPageName === '/ITLegion-Project/index.html' ||
    currentPageName === '/ITLegion-Project/'
  ) {
    menuHomeEl.classList.add('current');
    menuShoppingEl.classList.remove('current');
    return;
  }
  menuShoppingEl.classList.add('current');
  menuHomeEl.classList.remove('current');
};
setCurrentPage();
