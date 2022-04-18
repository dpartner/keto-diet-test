// import './js/progress-percent';
// import './js/progress-line';
import throttle from 'lodash.throttle';
import onPercentage from './js/progress-percent';
import { onDoneDotExp, removeOldActiveDotExp } from './js/progress-dot';
import onDoneLine from './js/progress-line';
import { addAnswersMarkupExp, addQuestionExp } from './js/add-markup';
import { pages } from './js/pages';

let pageDone = localStorage.getItem('page');

addQuestionExp(pages, pageDone);
addAnswersMarkupExp(pages, pageDone);

const ref = {
  progressWrap: document.querySelector('.progress__percentage'),
  answers: document.querySelector('.quiz-list'),
};

const throttleScroll = throttle(doneProgress, 700);

window.addEventListener('scroll', throttleScroll);

function doneProgress() {
  const rect = ref.progressWrap.getBoundingClientRect();
  console.log(rect);
  const isInViewport =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  if (isInViewport) {
    onPercentage(pageDone);
    onDoneDotExp(pageDone);
    onDoneLine(pageDone);
    return window.removeEventListener('scroll', throttleScroll);
  }
}

// -----------------------------------------

ref.answers.addEventListener('click', onQuestion);

function onQuestion(e) {
  const newPage = Number(pageDone) + 1;
  localStorage.setItem('page', `${newPage}`);
  pageDone = localStorage.getItem('page');
  addQuestionExp(pages, pageDone);
  addAnswersMarkupExp(pages, pageDone);
  removeOldActiveDotExp(pageDone - 1);
  window.addEventListener('scroll', throttleScroll);
}
