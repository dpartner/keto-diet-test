import './js/menu';
// const ref = {
//   burgerButton: document.querySelector('.header__button'),
//   burgerMenu: document.querySelector('.header__burger-menu'),
// };

// ref.burgerButton.addEventListener('click', openMenu);

// function openMenu(e) {
//   e.currentTarget.classList.toggle('toggle-menu');
//   ref.burgerMenu.classList.toggle('open-menu');
// }

const ref = {
  female: document.querySelector('.select-gender__wrap--female'),
  male: document.querySelector('.select-gender__wrap--male'),
  resetButton: document.querySelector('.reset-button'),
  cookieWrap: document.querySelector('.cookie__wrap'),
};

ref.female.addEventListener('click', onFemale);
ref.male.addEventListener('click', onMale);
ref.resetButton.addEventListener('click', onResetLocalStorage);
document.querySelector('#accept').addEventListener('click', onCookiesAccept);
document.querySelector('#reject').addEventListener('click', onCookiesReject);
document.querySelector('#read').addEventListener('click', onCookiesLink);

onLoad();

function onFemale() {
  const page = 1;
  localStorage.setItem('page', `${page}`);
  localStorage.setItem('gender', 'female');
}

function onMale() {
  const page = 1;
  localStorage.setItem('page', `${page}`);
  localStorage.setItem('gender', 'male');
}

function onResetLocalStorage() {
  localStorage.clear();
}

function onCookiesAccept(e) {
  e.preventDefault();
  localStorage.setItem('cookies', true);
  ref.cookieWrap.style.display = 'none';
}

async function onCookiesReject(e) {
  const delay = 10000;
  e.preventDefault();
  localStorage.setItem('cookies', false);
  ref.cookieWrap.style.display = 'none';
  const timer = await timeOut(delay);
  ref.cookieWrap.style.display = 'flex';
}

function onCookiesLink() {}

function onLoad() {
  if (localStorage.getItem('cookies') === 'true') {
    console.log(localStorage.getItem('cookies'));
    ref.cookieWrap.style.display = 'none';
    console.log(1);
  } else {
    ref.cookieWrap.style.display = 'flex';
    console.log(2);
  }
}

function timeOut(delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(delay), delay);
  });
}
