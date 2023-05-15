const scrollButton = document.querySelector('.scrollup-button');
scrollButton.addEventListener('click', onScrollUp);
console.dir(scrollButton);
scrollButton.hidden = true;

window.addEventListener('scroll', () => {
  if (window.scrollY > 812) {
    scrollButton.hidden = false;
  } else {
    scrollButton.hidden = true;
  }
});
console.dir(document);

function onScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  scrollButton.hidden = true;
}

//   if (document.body.scrollTop < 1000) {
//     scrollButton.hidden = false;
//   } else if (document.body.scrollTop > 1000) {
//     scrollButton.hidden = false;
//   } else {
//     scrollButton.hidden = false;
//   }
