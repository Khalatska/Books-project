import children from '../img/save-the-children.png';
import children2x from '../img/save-the-children-2x.png';
import hope from '../img/project-hope.png';
import hope2x from '../img/project-hope-2x.png';
import corp from '../img/intern-med-corp.png';
import corp2x from '../img/intern-med-corp-2x.png';
import hunger from '../img/act-against-hunger.png';
import hunger2x from '../img/act-againt-humger-2x.png';
import together from '../img/razom.png';
import together2x from '../img/razom-2x.png';
import foundation from '../img/prytula.png';
import foundation2x from '../img/prytula-2x.png';
import medical from '../img/medecines-sans-front.png';
import medical2x from '../img/medecines-sans-front-2x.png';
import world from '../img/world-vision.png';
import world2x from '../img/world-vision-2x.png';
import united from '../img/united24.png';
import united2x from '../img/united-2x.png';

const foundations = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: children,
    retinaImg: children2x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
    retinaImg: hope2x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: corp,
    retinaImg: corp2x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: together,
    retinaImg: together2x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: hunger,
    retinaImg: hunger2x,
  },
  {
    title: 'Sergiy Prytula Charity   Foundation',
    url: 'https://prytulafoundation.org/en',
    img: foundation,
    retinaImg: foundation2x,
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medical,
    retinaImg: medical2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
    retinaImg: united2x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: world,
    retinaImg: world2x,
  },
];

const listElem = document.querySelector('.donate-list');
const btnDown = document.querySelector('.button-down');
const btnUp = document.querySelector('.button-up');
const donateOverflow = document.querySelector('.donate-overflow');

function generateFunds(foundations) {
  const isRetina = window.devicePixelRatio > 1.1;

  const markup = foundations
    .map((fund, index) => {
      const foundIndex = String(index + 1).padStart(2, '0');
      const foundImg = isRetina ? fund.retinaImg : fund.img;
      return `<li class="donate-item">
     <span class="donate-number">${foundIndex}</span>
     <a href="${fund.url}" target="_blank">
     <img src="${foundImg}" alt="${fund.title}" class="donate-img">
     </a>
     </li>`;
    })
    .join('');
  return markup;
}

listElem.insertAdjacentHTML('beforeend', generateFunds(foundations));

//--------------------------------------------------

// btnDown.addEventListener('click', function () {
//   btnDown.style.display = 'none';
//   btnUp.style.display = 'block';

//   donateOverflow.scrollTo({
//     top: 1000,
//     behavior: 'smooth',
//   });
// });

// btnUp.addEventListener('click', function () {
//   btnUp.style.display = 'none';
//   btnDown.style.display = 'block';

//   donateOverflow.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// });

//----------------------------------------------------

// const intersectionObserver = new IntersectionObserver(function (entries) {
//   if (entries[0].intersectionRatio <= 1.1) {
//     btnUp.style.display = 'none';
//     btnDown.style.display = 'flex';
//   }
// });

// const intersectionObserver1 = new IntersectionObserver(function (entries) {
//   if (entries[0].intersectionRatio <= 1.1) {
//     btnDown.style.display = 'none';
//     btnUp.style.display = 'flex';
//   }
// });

// intersectionObserver.observe(listElem.firstChild);
// intersectionObserver1.observe(listElem.lastChild);

let offset = 0;

btnDown.addEventListener('click', async () => {
  offset += 150;
  if (offset > 170) {
    offset = 0;
  }

  if (offset === 150) {
    btnDown.classList.remove('scrolldown-open');
    btnDown.classList.add('scrolldown-hidden');
    btnUp.classList.remove('scrolldown-hidden');
    btnUp.classList.add('scrolldown-open');
  }

  donateOverflow.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
});

btnUp.addEventListener('click', async () => {
  offset += 150;
  if (offset > 170) {
    offset = 0;
  }

  if (offset === 0) {
    btnUp.classList.remove('scrolldown-open');
    btnUp.classList.add('scrolldown-hidden');
    btnDown.classList.remove('scrolldown-hidden');
    btnDown.classList.add('scrolldown-open');
  }
  donateOverflow.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
