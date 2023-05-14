import Swiper from 'swiper';

//------- ЛОГО ЕМБЛЕМ -------
export const fundArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: require('../images/support-new/fund1@1x.png'),
    img2: require('../images/support-new/fund1@2x.png'),
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: require('../images/support-new/fund2@1x.png'),
    img2: require('../images/support-new/fund2@2x.png'),
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: require('../images/support-new/fund3@1x.png'),
    img2: require('../images/support-new/fund3@2x.png'),
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: require('../images/support-new/fund4@1x.png'),
    img2: require('../images/support-new/fund4@2x.png'),
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: require('../images/support-new/fund5@1x.png'),
    img2: require('../images/support-new/fund5@2x.png'),
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: require('../images/support-new/fund6@1x.png'),
    img2: require('../images/support-new/fund6@2x.png'),
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: require('../images/support-new/fund7@1x.png'),
    img2: require('../images/support-new/fund7@2x.png'),
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: require('../images/support-new/fund8@1x.png'),
    img2: require('../images/support-new/fund8@2x.png'),
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: require('../images/support-new/fund9@1x.png'),
    img2: require('../images/support-new/fund9@2x.png'),
  },
];

// -----  РОЗМІНТКА HTML -----

export const markupCardFund = (
  { title, url, img, img2 },
  position
) => `<li class="support__list-item swiper-slide">
  <p class="support__number">${position}</p>
  <a class="support__link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
    <img
      srcset="${img} 1x, ${img2} 2x"
      src="${img}"
      alt="${title}"
      width="149"
      loading="lazy"
    />
  </a>
</li>`;

// ------ ДОБАВЛЯЄИО СЛУХАЧІВ ТА ПІДКЛЮЧАЄМО SWIPER -----
const supportListEl = document.querySelector('.support__list-js');
const btnSwiperEl = document.querySelector('.swiper-button-next');

let position = 0;

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markupSetFunds = fundArray
  .map((el, i) => {
    position = addLeadingZero(i + 1);

    return markupCardFund(el, position);
  })
  .join('');

supportListEl.innerHTML = markupSetFunds;

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  spaceBetween: 20,
  slidesPerView: 'auto',
  rewind: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },
});

swiper.update();

btnSwiperEl.addEventListener('click', () => {
  swiper.slideNext();
});
