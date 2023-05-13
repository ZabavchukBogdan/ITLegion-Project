const savethechildren = require('../images/support/savethechildren.png');

const supportList = document.querySelector('.js-support-list');
function renderSupportList(arr) {
    const marcup = arr.map(({ img, url, title, id }) =>
        `<li class="support-li">
    <a class="support-link" href="${url}">
    <span>${id}</span>
    <img class="support-img" scr="${img}" alt="${title}"></a></li>`)
        .join('');
    return marcup;
}
export function supportMarkup() {
    supportList.insertAdjacentHTML('beforeend', renderSupportList(supportArray));
    initScrollButton('.swiper', '.support-list');
}

export const supportArray = [
    {
      id: "01",
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: savethechildren ,
    // img2x: './images/support/savethechildren@2x.png'
   
  },
    {
      id: "02",
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
      img: './images/support/projecthope.png',
    img2x: './images/support/projecthope@2x.png',
  },
    {
        id: "03",
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
      img: './images/support/UNITED24.png',
    img2x: './images/support/UNITED24@2x.png',
      },
    {
        id: "04",
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: './images/support/internationalmedicalcorps.png',
    img2x: './images/support/internationalmedicalcorps@2x.png',
  },
    {
        id: "05",
    title: 'Medecins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
      img: './images/support/msf.png',
    img2x: './images/support/msf@2x.png',
    
  },
    {
        id: "06",
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
      img: '../images/support/razom.png',
    img2x: '../images/support/razom@2x.png'
  },
    {
        id: "07",
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: './images/support/actionagainsthunger.png',
    img2x: './images/support/actionagainsthunger@2x.png',
  },
    {
        id: "08",
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
      img: './images/support/wvi.png',
    img2x: './images/support/wvi@2x.png',
  },
    {
        id: "09",
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
      img: './images/support/Prytula.png',
    img2x: './images/support/prytulafoundation@2x.png',
  },
];