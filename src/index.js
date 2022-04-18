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
};

ref.female.addEventListener('click', onFemale);
ref.male.addEventListener('click', onMale);

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
