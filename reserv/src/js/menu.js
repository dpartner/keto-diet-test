const ref = {
  burgerButton: document.querySelector('.header__button'),
  burgerMenu: document.querySelector('.header__burger-menu'),
};

ref.burgerButton.addEventListener('click', openMenu);

function openMenu(e) {
  e.currentTarget.classList.toggle('toggle-menu');
  ref.burgerMenu.classList.toggle('open-menu');
}
