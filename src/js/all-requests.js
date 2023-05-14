// import axios from 'axios';
// export const BASE_URL = 'https://books-backend.p.goit.global/books/';

// const booksCategoriesEndpoit = 'category-list';
// const topBooksEndpoint = 'top-books';
// const booksCategoryEndpoint = 'category';

// // Повертає об'єкт з властивістю data, його значення = масив обєктів (всі категорії)
// export async function getCategories() {
//   try {
//     const response = await axios.get(`${BASE_URL}${booksCategoriesEndpoit}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

// // Повертає об'єкт з властивістю data, його значення = масив обєктів (всі категорії), в кожному обєкті значення властивості books = масив з топовими книгами
// export async function getTopBooks() {
//   const response = await axios.get(`${BASE_URL}${topBooksEndpoint}`);
//   const topBooksArr = response.data.flatMap(item => item.books);
//   return topBooksArr;
// }
import axios from 'axios';
import { renderGallery, renderGalleryCat } from './render-main-gallery';
import refs from './refs';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

//  отримання даних по топовим книгам
export async function mainGallery() {
  try {
    const response = await axios.get(`${BASE_URL}top-books`);
    renderGallery(response.data);
  } catch (error) {
    console.log(error);
  }
}

//  отримання даних по  категоріям
export async function mainGalleryCategory(cat) {
  try {
   
    const response = await axios.get(`${BASE_URL}category?category=${cat}`);
    console.log(response.data);
    renderGalleryCat(response.data, cat);
  } catch (error) {
    console.log(error);
  }
}

mainGallery();

refs.mainGalleryEl.addEventListener('click', onBtnSeeMoreCategory);

// вибір категорії 
function onBtnSeeMoreCategory(evt) {
  if (evt.target.dataset.cat) {
    mainGalleryCategory(evt.target.dataset.cat);
  }
}

// отримання списку категорій
export async function getCategoriesList() {
  return await axios.get(`${BASE_URL}category-list`);
}
