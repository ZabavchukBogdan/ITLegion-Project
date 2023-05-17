import debounce from 'lodash.debounce';
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
// отримання даних по id
 export async function getBookById(bookId = ''){
  const response = await axios.get(`${BASE_URL}${bookId}`);
  return response.data;
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



window.addEventListener('resize', debounce(() => { mainGallery(); }, 100));