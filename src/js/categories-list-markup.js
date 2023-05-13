export function markupCategoriesList(categories) {
    return categories.map(({list_name}) =>
    `<li class="category-list-item">
        <button type="button" class="category">
            ${list_name}
        </button>
    </li>`).join("");
}
