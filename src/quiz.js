import throttle from 'lodash.throttle';
import onPercentage from './js/progress-percent';
import { onDoneDotExp, removeOldActiveDotExp, removeDoneDotExp } from './js/progress-dot';
import { onDoneLineExp, clearDoneLineExp } from './js/progress-line';
import { pages } from './js/pages';
import {
  addAnswersMarkupExp,
  addQuestionExp,
  addBackgroundExp,
  addHeaderIconExp,
} from './js/add-markup-answers';
import { addProgressDotMarkupExp } from './js/add-markup-progress';
import { addCardMarkupExp } from './js/add-markup-card';
import backgroundsLinks from './images/quiz-bg/*.jpeg';
import svg from './images/*.svg';

let pageDone = Number(localStorage.getItem('page'));
const qtyPages = pages.length;

if (pages[pageDone - 1].type === 'quiz') {
  addBackgroundExp(pages, pageDone, backgroundsLinks);
  addHeaderIconExp(pages, pageDone, svg);
  addQuestionExp(pages, pageDone);
  addAnswersMarkupExp(pages, pageDone);
}

if (pages[pageDone - 1].type === 'card') {
  addCardMarkupExp(pages, pageDone, svg);
}

addProgressDotMarkupExp(pages);

const ref = {
  progressStart: document.querySelector('.progress__section'),
  answers: document.querySelector('.quiz-list'),
  backButton: document.querySelector('.progress__button-link--back'),
  cardNextButton: document.querySelector('.card__button-link'),
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
  removeDoneDotExp();
  clearDoneLineExp();
  if (pages[pageDone - 1].type === 'quiz') {
    addBackgroundExp(pages, pageDone, backgroundsLinks);
    addHeaderIconExp(pages, pageDone, svg);
    addQuestionExp(pages, pageDone);
    addAnswersMarkupExp(pages, pageDone);
  }
  if (pages[pageDone - 1].type === 'card') {
    addCardMarkupExp(pages, pageDone, svg);
  }

  removeOldActiveDotExp(previousPage);
  window.addEventListener('scroll', throttleScroll);
}

// -----------------------------------------

ref.answers.addEventListener('click', onQuestion);
ref.backButton.addEventListener('click', onBack);
ref.cardNextButton.addEventListener('click', onCardNext);

function onCardNext() {
  const oldPage = pageDone;
  const newPage = Number(pageDone) + 1;
  renderMarkup(newPage, oldPage);
}

function onQuestion(e) {
  e.preventDefault();
  const oldPage = pageDone;
  const newPage = Number(pageDone) + 1;
  renderMarkup(newPage, oldPage);
}

function onBack(e) {
  if (Number(pageDone) === 1) {
    return;
  }
  e.preventDefault();
  const oldPage = pageDone;
  const newPage = Number(pageDone) - 1;
  renderMarkup(newPage, oldPage);
}
