import { Notify } from 'notiflix';

import { createLocalProp } from './helpers/autorization/create-local-property.js';
import {
  similarProp,
  checkUserProp,
} from './helpers/autorization/similar-property.js';
import {
  createMarcupSignIn,
  createMarcupSignUp,
} from './helpers/autorization/autorization-marcup.js';

const modal = document.querySelector('.js_autorization_modal');
const mainBody = document.querySelector('body');

//  кнопка створення форми авторизації
const button = document.querySelector('.js_signup_btn');
button.addEventListener('click', onBtnClick);

function onBtnClick(evt) {
  evt.preventDefault();
  if (modal.classList.contains('burger')) {
    modal.classList.toggle('burger');
    toggleBurger();
  }
  modal.innerHTML = '';
  mainBody.classList.add('stop-scrolling');
  modal.classList.add('selected');
  modal.innerHTML = createMarcupSignUp(themeSet());
  closeModalBtn();
  signUpForm();
}

///////////////

function signUpForm() {
  const form = document.querySelector('.js_form_signup');
  const signUpLink = document.querySelector('.js_signup_link');
  const signInLink = document.querySelector('.js_signin_link');

  const userName = form.children[0];
  const userEmail = document.querySelector('.autorization_email');
  const userPassword = document.querySelector('.autorization_psw');

  signUpLink.style.pointerEvents = 'none';

  form.addEventListener('submit', onSubmit);
  signInLink.addEventListener('click', signInClick);

  function signInClick(evt) {
    evt.preventDefault();
    const theme = themeSet();
    modal.innerHTML = '';
    modal.innerHTML = createMarcupSignIn(theme);
    closeModalBtn();
    autorizationForm();
  }

  function onSubmit(evt) {
    evt.preventDefault();
    const name = userName.value.toLowerCase().trim();
    const email = userEmail.value.toLowerCase().trim();
    const psw = userPassword.value;

    //Перевірка на заповненість усіх інпутів
    if (!name || !email || !psw) {
      Notify.info('Будьласка заповніть усі поля!');
      return;
    }

    // Перевірка імені та імейлу на наявність в localstorage
    if (similarProp(name, email)) {
      Notify.info("Користувач з таким ім'ям або імейлом вже існує");
      return;
    }

    // Створення користувача в localstorage
    createLocalProp(name, email, psw);
    Notify.success('Дякую за реєстрацію');
    form.reset();
    form.removeEventListener('submit', onSubmit);

    // Створення/Перехід до форми авторизації
    modal.innerHTML = '';
    modal.innerHTML = createMarcupSignIn();
    autorizationForm();
  }
}

function autorizationForm() {
  const form = document.querySelector('.js_form_autorization');
  const signUpLink = document.querySelector('.js_signup_link');
  const signInLink = document.querySelector('.js_signin_link');

  const userName = form.children[0];
  const userPassword = document.querySelector('.autorization_psw');

  signInLink.style.pointerEvents = 'none';

  form.addEventListener('submit', onSubmit);
  signUpLink.addEventListener('click', signUpClick);

  function signUpClick(evt) {
    evt.preventDefault();
    modal.innerHTML = '';
    modal.innerHTML = createMarcupSignUp(themeSet());
    closeModalBtn();
    signUpForm();
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const name = userName.value.toLowerCase().trim();
    const psw = userPassword.value;
    let nickname;

    //Перевірка на заповненість усіх інпутів
    if (!name || !psw) {
      Notify.info('Будьласка заповніть усі поля!');
      return;
    }
    if ((nickname = checkUserProp(name, psw))) {
      Notify.success('Авторизація успішна');
    } else {
      Notify.info("Невірно введені ім'я або пароль");
      return;
    }
    localStorage.setItem('autorized', true);
    localStorage.setItem('userName', nickname);
    form.reset();
    form.removeEventListener('submit', onSubmit);

    modal.innerHTML = '';
    mainBody.classList.remove('stop-scrolling');
    modal.classList.remove('selected');
  }
}
function closeModalBtn() {
  const closeBtn = document.querySelector('.autorization_close_btn');
  closeBtn.addEventListener('click', onClose, { once: true });
  function onClose(evt) {
    evt.preventDefault();
    mainBody.classList.remove('stop-scrolling');
    modal.innerHTML = '';
    modal.classList.remove('selected');
  }
}

function themeSet() {
  let theme = localStorage.getItem('selectedMode');
  if (!theme) {
    theme = '';
  }
  return theme;
}

//////////////////////// Burger Menu
const burgerMenuBtn = document.querySelector('.js-open-menu');

burgerMenuBtn.addEventListener('click', onClickBurg);
function onClickBurg(evt) {
  evt.preventDefault();
  const userName = localStorage.getItem('userName');
  const shopBasketUrl = new URL('../images/symbol-defs.svg', import.meta.url);
  const portraitUrl = new URL('../images/symbol-defs.svg', import.meta.url);
  const arrowRightIconUrl = new URL(
    '../images/symbol-defs.svg',
    import.meta.url
  );
  arrowRightIconUrl.hash = 'icon-arrow-right';
  portraitUrl.hash = 'icon-user';
  shopBasketUrl.hash = 'icon-shop';

  modal.classList.toggle('burger');
  modal.innerHTML = '';

  if (modal.classList.contains('burger')) {
    if (localStorage.getItem('autorized') === 'true') {
      modal.innerHTML = `<div class="burger_logout_box"><div class="user-main">
      <svg class="logout_svg_name" width="20px" height="20px">
        <use class="icon-href-burger-user" href="${portraitUrl}"></use>
      </svg>
      <p class="user-name">${userName}</p>
    </div>
    <div class="logout_links_box">
      <a class="logout_home_link">HOME</a>
      <a class="shop_logout_link"
        >SHOPING LIST
        <svg class="logout_svg-shop" width="20px" height="20px">
          <use
            class="icon-href-burger-shoplist"
            href="${shopBasketUrl}"
          ></use></svg
      ></a>
    </div>
    <button type="button" class="js_logout_btn_burg auth__modal-open-burg logout_btn_burg">
          Log out   
          <svg class="logout_svg" width="20px" height="20px">
          <use href="${arrowRightIconUrl}"></use>
        </svg>    
          </button></div>`;

      const logOut = document.querySelector('.js_logout_btn_burg');

      logOut.addEventListener('click', onLogOut, { once: true });
    } else {
      modal.innerHTML = `<button type="button"  class=" auth__modal-open-burg js_signup_btn_burg">
              Sign up 
            <svg class="" width="20px" height="20px">
              <use href="${arrowRightIconUrl}"></use>
            </svg>  
            </button>`;
      const button = document.querySelector('.js_signup_btn_burg');
      button.addEventListener('click', onBtnClick, { once: true });
    }
  }
  // Приховування свг іконки
  toggleBurger();
}

function toggleBurger() {
  const burger = burgerMenuBtn.children[0].children[0];
  const xClosed = burgerMenuBtn.children[0].children[1];
  if (modal.classList.contains('burger')) {
    // припинення скролу застосовуеться на боді
    mainBody.classList.add('stop-scrolling');
    modal.classList.add('container');

    burger.style.visibility = 'hidden';
    xClosed.style.visibility = 'visible';
  } else {
    mainBody.classList.remove('stop-scrolling');
    modal.classList.remove('container');
    burger.style.visibility = 'visible';
    xClosed.style.visibility = 'hidden';
  }
}

function onLogOut(evt) {
  evt.preventDefault();
  if (modal.classList.contains('burger')) {
    modal.classList.toggle('burger');
    toggleBurger();
  }

  modal.innerHTML = '';
  localStorage.setItem('autorized', false);
  localStorage.removeItem('userName');
}
