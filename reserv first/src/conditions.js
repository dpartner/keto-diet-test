let gender = localStorage.getItem('gender');
if (gender === null) {
  gender = 'female';
}
const numbers = document.querySelectorAll('.conditions__item-number-wrap');

const ref = {
  numbers: document.querySelectorAll('.conditions__item-number-wrap'),
  infoButtonWrap: document.querySelector('.info__button-wrap'),
};

onLoad(gender);

function onLoad(gender) {
  for (const number of ref.numbers) {
    gender === 'male'
      ? number.classList.add('conditions__item-number-wrap--male')
      : number.classList.add('conditions__item-number-wrap--female');
  }
  gender === 'male'
    ? ref.infoButtonWrap.classList.add('info__button-wrap--male')
    : ref.infoButtonWrap.classList.add('info__button-wrap--female');
}
