// import './js/progress-percent';
// import './js/progress-line';
import throttle from 'lodash.throttle';
import onPercentage from './js/progress-percent';
import { onDoneDotExp, removeOldActiveDotExp, removeDoneDotExp } from './js/progress-dot';
import { onDoneLineExp, clearDoneLineExp } from './js/progress-line';
import { addAnswersMarkupExp, addQuestionExp } from './js/add-markup';
import { pages } from './js/pages';

let pageDone = localStorage.getItem('page');

addQuestionExp(pages, pageDone);
addAnswersMarkupExp(pages, pageDone);

const ref = {
  progressWrap: document.querySelector('.progress__percentage'),
  answers: document.querySelector('.quiz-list'),
  backButton: document.querySelector('.progress__button-link--back'),
};

const throttleScroll = throttle(renderProgress, 700);

window.addEventListener('scroll', throttleScroll);

function renderProgress() {
  const rect = ref.progressWrap.getBoundingClientRect();
  const isInViewport =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  if (isInViewport) {
    onPercentage(pageDone);
    onDoneDotExp(pageDone);
    onDoneLineExp(pageDone);
    return window.removeEventListener('scroll', throttleScroll);
  }
}

function renderMarkup(currentPage, previousPage) {
  localStorage.setItem('page', `${currentPage}`);
  pageDone = localStorage.getItem('page');
  clearDoneLineExp();
  removeDoneDotExp();
  addQuestionExp(pages, pageDone);
  addAnswersMarkupExp(pages, pageDone);
  removeOldActiveDotExp(previousPage);
  window.addEventListener('scroll', throttleScroll);
}

// -----------------------------------------

ref.answers.addEventListener('click', onQuestion);
ref.backButton.addEventListener('click', onBack);

function onQuestion() {
  const oldPage = pageDone;
  const newPage = Number(pageDone) + 1;
  renderMarkup(newPage, oldPage);
}

function onBack() {
  const oldPage = pageDone;
  const newPage = Number(pageDone) - 1;
  renderMarkup(newPage, oldPage);
}
