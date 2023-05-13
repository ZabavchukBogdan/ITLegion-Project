import axios from 'axios';
export const BASE_URL = 'https://books-backend.p.goit.global/books/';

const booksCategoriesEndpoit = 'category-list';
const topBooksEndpoint = 'top-books';
const booksCategoryEndpoint = 'category';

// Повертає об'єкт з властивістю data, його значення = масив обєктів (всі категорії)
export async function getCategories() {
  try {
    const response = await axios.get(`${BASE_URL}${booksCategoriesEndpoit}`);
    // Тестовий лог____________
    console.log(response.data);
    // ________________________
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// Повертає об'єкт з властивістю data, його значення = масив обєктів (всі категорії), в кожному обєкті значення властивості books = масив з топовими книгами
export async function getTopBooks() {
  const response = await axios.get(`${BASE_URL}${topBooksEndpoint}`);
  const topBooksArr = response.data.flatMap(item => item.books);
  return topBooksArr;
}
