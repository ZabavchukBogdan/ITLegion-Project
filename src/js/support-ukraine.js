



// import { initScrollButton } from './scroll-support';
import { supportArray } from './suport-list';

const supportList = document.querySelector('.js-support-list');
function markupList(arr) {
  return arr
    .map(
      ({ title, url, img,img2x }, idx) =>
        `<div class="support-item">
            <p class="support-number">${(idx + 1).toString().padStart(2, 0)}</p>
            <a class="support-link" href="${url}">
              <img srcset="${img} 1x, ${img2x} 2x" 
              src="${img}"
              alt="${title}" />
            </a>
        </div>`
    )
    .join('');
}
export function supportMarkup() {
  supportList.insertAdjacentHTML('beforeend', markupList(supportArray));
  // initScrollButton('.swiper', '.support-list');
}
supportMarkup();