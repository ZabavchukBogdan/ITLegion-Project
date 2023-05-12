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

// ПРИБРАТИ // кнопка створення форми авторизації
const button = document.querySelector('.js_signup_btn');
button.addEventListener('click', onBtnClick);

function onBtnClick(evt) {
  evt.preventDefault();
  modal.innerHTML = '';
  modal.innerHTML = createMarcupSignUp();
  closeModalBtn();
  signUpForm();
}

const logOut = document.querySelector('.js_logout_btn')
logOut.addEventListener('click', onLogOut, { once: true })
function onLogOut(evt) {
  evt.preventDefault()
  modal.innerHTML = '';
  localStorage.setItem("autorized", false)
  localStorage.removeItem("userName")
}
///////////////

function signUpForm() {
  const form = document.querySelector('.js_form_signup');
  const signUpLink = document.querySelector('.js_signup_link');
  const signInLink = document.querySelector('.js_signin_link');

  const userName = form.children[0];
  const userEmail = form.children[1];
  const userPassword = form.children[2];

  signUpLink.style.pointerEvents = 'none';

  form.addEventListener('submit', onSubmit);
  signInLink.addEventListener('click', signInClick);

  function signInClick(evt) {
    evt.preventDefault();
    modal.innerHTML = '';
    modal.innerHTML = createMarcupSignIn();
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
      console.log('Будьласка заповніть усі поля!');
      return;
    }

    // Перевірка імені та імейлу на наявність в localstorage
    if (similarProp(name, email)) {
      console.log("Користувач з таким ім'ям або імейлом вже існує");
      return;
    }

    // Створення користувача в localstorage
    createLocalProp(name, email, psw);

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
  const userPassword = form.children[1];

  signInLink.style.pointerEvents = 'none';

  form.addEventListener('submit', onSubmit);
  signUpLink.addEventListener('click', signUpClick);

  function signUpClick(evt) {
    evt.preventDefault();
    modal.innerHTML = '';
    modal.innerHTML = createMarcupSignUp();
    closeModalBtn();
    signUpForm();
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const name = userName.value.toLowerCase().trim();
    const psw = userPassword.value;
    let nickname

    //Перевірка на заповненість усіх інпутів
    if (!name || !psw) {
      console.log('Будьласка заповніть усі поля!');
      return;
    }
    if (nickname = checkUserProp(name, psw)) {
      console.log('Авторизація успішна');
    } else {
      console.log("Невірно введені ім'я або пароль");
      return;
    }


    localStorage.setItem("autorized", true)
    localStorage.setItem("userName",nickname)
    form.reset();
    form.removeEventListener('submit', onSubmit);
    modal.innerHTML = '';
  }
}

function closeModalBtn() {
  const closeBtn = document.querySelector('.autorization_close_btn');
  closeBtn.addEventListener('click', onClose, { once: true });
  function onClose(evt) {
    evt.preventDefault();
    console.log('modal closed');
    modal.innerHTML = '';
  }
}

