import { getCategories, getTopBooks } from './js/all-requests';
import { createBookCard } from './js/homepage-books-render';

console.log(getCategories());
console.log(getTopBooks());


import {markupCategoriesList} from './js/categories-list-markup';

const categoriesList = document.querySelector('.sidebar__book-categories-list');

//rendering list of book categories
getCategories().then(catList => {
    const categories = 
    `<li class="category-list-item first-elem-js">
        <button type="button" class="category all-categories">
            All categories
        </button>
    </li>` + markupCategoriesList(catList);
    categoriesList.innerHTML = categories;
    }).catch(err => {
        categoriesList.innerHTML = 
        `<li class="category-list-item">
            <p class="categories-err">
                The list of categories is empty
            </p>
        </li>`;
        console.log(err);
    })