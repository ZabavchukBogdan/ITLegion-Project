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

const mainBody = document.querySelector('body');
const modal = document.querySelector('.js_autorization_modal');
const logOutList = document.querySelector('.logout_list_js');
const button = document.querySelector('.js_signup_btn');
const mql = window.matchMedia('(min-width: 1024px)');

//  кнопка створення форми авторизації
ifAutorized();

function ifAutorized() {
  if (localStorage.getItem('autorized') === 'true') {
    button.removeEventListener('click', onBtnClick);
    const userName = localStorage.getItem('userName');
    const portraitUrl = new URL('../images/symbol-defs.svg', import.meta.url);
    portraitUrl.hash = 'icon-user';
    button.style.gap = 'unset';
    button.style.justifyContent = 'space-between';

    button.innerHTML = '';
    button.innerHTML = `
   
    <svg class="logout_svg_name" width="37px" height="37px">
    <path fill="#f6f6f6" style="fill: var(--color2, #f6f6f6)" d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
    </svg>  
    <p class="user-name">${userName}</p>
    <svg viewBox="0 0 80 32" class="logout_svg_arrow"  width="23px" height="26px">
    <path fill="#fff" style="fill: var(--color1, #fff)" d="M3.168 3h53.667l-24.123 27.27c-0.719 0.812-1.694 1.269-2.71 1.269s-1.991-0.456-2.71-1.269l-24.123-27.27z"></path>
    </svg>  

    `;
    button.addEventListener('click', logOutEvent);
  } else {
    button.style.gap = '90px';
    button.style.justifyContent = 'center';
    button.removeEventListener('click', logOutEvent);
    button.addEventListener('click', onBtnClick);
  }
}

function logOutEvent(evt) {
  evt.preventDefault();
  if (logOutList.classList.contains('logout')) {
    logOutList.classList.toggle('logout');
    logOutList.children[0].removeEventListener('click', onLogOut);
    logOutList.innerHTML = '';
    return;
  }
  logOutList.classList.toggle('logout');
  const arrowRightIconUrl = new URL(
    '../images/symbol-defs.svg',
    import.meta.url
  );
  arrowRightIconUrl.hash = 'icon-arrow-right';
  logOutList.innerHTML = `<button type="button" class="js_logout_btn_burg auth__modal-open-burg logout_btn">
    Log out   
    <svg class="logout_svg" width="20px" height="20px">
    <use href="${arrowRightIconUrl}"></use>
    </svg>    
    </button>`;

  const logoutEvt = document.querySelector('.js_logout_btn_burg');
  logoutEvt.addEventListener('click', onClick, { once: true });

  function onClick(evt) {
    onLogOut(evt);
    ifAutorized();
    const buttonUrl = new URL('../images/symbol-defs.svg', import.meta.url);
    buttonUrl.hash = 'icon-arrow-right';

    button.innerHTML = `
    Sign up
    <svg class="" width="20px" height="20px">
      <use href="${buttonUrl}"></use>
    </svg>
  </button>`;
  }
}

function onBtnClick(evt) {
  evt.preventDefault();
  if (modal.classList.contains('burger')) {
    mql.removeListener(handleScreenChange);
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
    ifAutorized();
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
  modal.classList.toggle('burger');
  toggleBurger();
  if (screenHandler()) {
    return;
  }
  const home = document.querySelector('.menu__home').classList.value;
  const shopping = document.querySelector('.menu__shopping').classList.value;
  const userName = localStorage.getItem('userName');
  const portraitUrl = new URL('../images/symbol-defs.svg', import.meta.url);
  const shopBasketUrl = new URL('../images/symbol-defs.svg', import.meta.url);
  const arrowRightIconUrl = new URL(
    '../images/symbol-defs.svg',
    import.meta.url
  );
  arrowRightIconUrl.hash = 'icon-arrow-right';
  portraitUrl.hash = 'icon-user';
  shopBasketUrl.hash = 'icon-shop';
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
      <a class="${home} logout" href="./index.html">HOME</a>
      <a class="${shopping} logout"  href="./shop-list.html"
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

  if (logOutList.classList.contains('logout')) {
    logOutList.classList.toggle('logout');
    logOutList.innerHTML = '';
    localStorage.setItem('autorized', false);
    localStorage.removeItem('userName');
    return;
  }

  modal.innerHTML = '';
  localStorage.setItem('autorized', false);
  localStorage.removeItem('userName');
}

function screenHandler() {
  mql.addListener(handleScreenChange);

  handleScreenChange(mql);
}
function handleScreenChange(evt) {
  if (evt.matches) {
    modal.classList.toggle('burger');
    toggleBurger();
    modal.innerHTML = '';
    mql.removeListener(handleScreenChange);
    return true;
  }
}
