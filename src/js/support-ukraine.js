
import Swiper from 'swiper';



const savethechildren = require('../images/support/savethechildren.png');
const savethechildren_2x = require('../images/support/savethechildren@2x.png');
const projecthope = require('../images/support/projecthope.png');
const projecthope_2x = require('../images/support/projecthope@2x.png');
const united24 = require('../images/support/united24.png');
const united24_2x = require('../images/support/united24@2x.png');
const internationalmedicalcorps = require('../images/support/internationalmedicalcorps.png');
const internationalmedicalcorps_2x = require('../images/support/internationalmedicalcorps@2x.png');
const msf = require('../images/support/msf.png');
const msf_2x = require('../images/support/msf@2x.png');
const razom = require('../images/support/razom.png');
const razom_2x = require('../images/support/razom@2x.png');
const actionagainsthunger = require('../images/support/actionagainsthunger.png');
const actionagainsthunger_2x = require('../images/support/actionagainsthunger@2x.png');
const wvi = require('../images/support/wvi.png');
const wvi_2x = require('../images/support/wvi@2x.png');
const prytulafoundation = require('../images/support/prytulafoundation.png');
const prytulafoundation_2x = require('../images/support/prytulafoundation@2x.png');

export const supportArray = [
    {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: savethechildren ,
    img2x: savethechildren_2x,
   
  },
    {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
      img: projecthope,
    img2x: projecthope_2x,
  },
    {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
      img: united24,
    img2x: united24_2x,
      },
    {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: internationalmedicalcorps,
    img2x: internationalmedicalcorps_2x,
  },
    {
    title: 'Medecins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
      img: msf,
    img2x: msf_2x,
    
  },
    {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
      img: razom,
    img2x: razom_2x,
  },
    {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: actionagainsthunger,
    img2x: actionagainsthunger_2x,
  },
    {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
      img: wvi,
    img2x: wvi_2x,
  },
    {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
      img: prytulafoundation,
    img2x: prytulafoundation_2x,
  },
];

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
 
};


supportMarkup();

