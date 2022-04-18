// import './js/progress-percent';
// import './js/progress-line';
import throttle from 'lodash.throttle';
import onPercentage from './js/progress-percent';
import { onDoneDotExp, removeOldActiveDotExp, removeDoneDotExp } from './js/progress-dot';
import { onDoneLineExp, clearDoneLineExp } from './js/progress-line';
import { pages } from './js/pages';
import {
  addAnswersMarkupExp,
  addProgressDotMarkupExp,
  addQuestionExp,
  addHeaderIconExp,
} from './js/add-markup';

let pageDone = localStorage.getItem('page');
const qtyPages = pages.length;

addHeaderIconExp(pages, pageDone);
addQuestionExp(pages, pageDone);
addAnswersMarkupExp(pages, pageDone);
addProgressDotMarkupExp(pages);

const ref = {
  progressStart: document.querySelector('.progress__section'),
  answers: document.querySelector('.quiz-list'),
  backButton: document.querySelector('.progress__button-link--back'),
};
const throttleScroll = throttle(renderProgress, 700);

window.addEventListener('scroll', throttleScroll);

function renderProgress() {
  const rect = ref.progressStart.getBoundingClientRect();
  const isInViewport = rect.top <= document.documentElement.clientHeight;
  if (isInViewport) {
    onPercentage(pageDone, qtyPages);
    onDoneDotExp(pageDone);
    onDoneLineExp(pageDone, qtyPages);
    return window.removeEventListener('scroll', throttleScroll);
  }
}

function renderMarkup(currentPage, previousPage) {
  localStorage.setItem('page', `${currentPage}`);
  pageDone = localStorage.getItem('page');
  clearDoneLineExp();
  removeDoneDotExp();
  addHeaderIconExp(pages, pageDone);
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

function onBack(e) {
  e.preventDefault();
  const oldPage = pageDone;
  const newPage = Number(pageDone) - 1;
  renderMarkup(newPage, oldPage);
}
