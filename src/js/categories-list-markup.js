import { getCategories, getTopBooks } from './all-requests';

const categoriesList = document.querySelector('.sidebar__book-categories-list');

export function markupCategoriesList(categories) {
    return categories.map(({list_name}) =>
    `<li class="category-list-item">
        <button type="button" class="category">
            ${list_name}
        </button>
    </li>`).join("");
}

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
});
