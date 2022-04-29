import { load } from './js/storage';

const ref = {
  ctaButtonWrap: document.querySelector('.final__hero-button-wrap'),
};

let gender = localStorage.getItem('gender');
if (gender === null) {
  gender = 'female';
}

onLoad();

function onLoad() {
  gender === 'male'
    ? ref.ctaButtonWrap.classList.add('final__hero-button-wrap-male')
    : ref.ctaButtonWrap.classList.add('final__hero-button-wrap-female');
}
