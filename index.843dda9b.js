!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o("9ZZxa"),o("4Nugj");var c=o("4Nugj");function i(t){return t.map((function(t){return t.title.length<17?'<div class="book-card-wrapper" data-idbook="'.concat(t._id,'"><a href="#">\n            <img src="').concat(t.book_image,'" alt="').concat(t.title,'" height="256" loading="lazy"/> \n            <p class="book-name">').concat(t.title,'</p>\n            <p class="book-author">').concat(t.author,"</p>\n          </a></div>"):'<div class="book-card-wrapper" data-idbook="'.concat(t._id,'"><a  href="#">\n            <img src="').concat(t.book_image,'" alt="').concat(t.title,'" height="256" loading="lazy"/> \n            <p class="book-name">').concat(t.title.split("").slice(0,17).join(""),'...</p>\n            <p class="book-author">').concat(t.author,"</p>\n          </a></div>")})).join("")}function r(t,e){c.default.mainGalleryEl.innerHTML="";var a=Math.trunc(e.split(" ").length/2);c.default.mainGalleryTitleEl.innerHTML="".concat(e.split(" ").splice(0,a).join(" "),' \n  <span class="category-title-span">').concat(e.split(" ").splice(a,a).join(" "),"</span>");var n;n=i(t),c.default.mainGalleryEl.classList.add("gal-category"),c.default.mainGalleryEl.insertAdjacentHTML("beforeend",n)}function s(t){c.default.mainGalleryEl.classList.remove("gal-category"),c.default.mainGalleryTitleEl.innerHTML="Best Sellers <span class='category-title-span'>Books</span>",c.default.mainGalleryEl.innerHTML="";var e;e=t.map((function(t){return window.innerWidth>=1440?'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul">\n            <li class="books__list">').concat(i(t.books),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>'):window.innerWidth>=768?'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul">\n            <li class="books__list">').concat(i(t.books.slice(0,3)),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>'):'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul">\n            <li class="books__list">').concat(i(t.books.slice(0,1)),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>')})).join(""),c.default.mainGalleryEl.insertAdjacentHTML("beforeend",e)}var l=o("bpxeT"),u=o("2TvXO"),d=o("dIxxU"),p=(c=o("4Nugj"),"https://books-backend.p.goit.global/books/");function f(){return g.apply(this,arguments)}function g(){return(g=t(l)(t(u).mark((function e(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.default.get("".concat(p,"top-books"));case 3:s(t.sent.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(t){return y.apply(this,arguments)}function y(){return(y=t(l)(t(u).mark((function e(a){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.default.get("".concat(p,"category?category=").concat(a));case 3:n=t.sent,console.log(n.data),r(n.data,a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=t(l)(t(u).mark((function e(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.default.get("".concat(p,"category-list"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}f(),c.default.mainGalleryEl.addEventListener("click",(function(t){t.target.dataset.cat&&b(t.target.dataset.cat)})),o("18VO4");l=o("bpxeT");var h=o("8nrFW");u=o("2TvXO"),c=o("4Nugj");function m(t){return t.map((function(t){var e=t.list_name;return'<li class="category-list-item"><button type="button" class="category">'.concat(e,"</button></li>")})).join("")}var k,L='<li class="category-list-item"><p class="categories-err">The list of categories is empty</p></li>';function E(t){t.parentNode.classList.add("active"),t.classList.add("category-active")}function x(t){for(var e=0;e<t.length;e++)t[e].classList.contains("active")&&(t[e].classList.remove("active"),t[e].firstChild.classList.remove("category-active"))}(function(){return v.apply(this,arguments)})().then((k=t(l)(t(u).mark((function e(a){var n,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=a.data).length){t.next=4;break}return c.default.categoriesList.innerHTML=L,t.abrupt("return");case 4:o='<li class="category-list-item active"><button type="button" class="category category-active">All categories</button></li>'+m(n),c.default.categoriesList.innerHTML=o;case 6:case"end":return t.stop()}}),e)}))),function(t){return k.apply(this,arguments)})).catch((function(t){c.default.categoriesList.innerHTML=L})),c.default.categoriesList.addEventListener("click",(function(e){var a=e.target,n=t(h)(e.currentTarget.children);if(a.classList.contains("category")){if("All categories"===a.textContent)return x(n),E(a),void f();c.default.mainGalleryEl.innerHTML="",b(a.textContent)}a.classList.contains("category")&&(x(n),E(a))})),c.default.mainGalleryEl.addEventListener("click",(function(e){var a=e.target.dataset.cat,n=t(h)(c.default.categoriesList.children);if(a)for(var o=0;o<n.length;o++)n[o].firstChild.textContent===a&&(x(n),E(n[o].firstChild))}))}();
//# sourceMappingURL=index.843dda9b.js.map
