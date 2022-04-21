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
import {
  addChoiceMarkupExp,
  sendFormToStorageExp,
  actionFormCheckboxExp,
  checkboxDisableSendButtonExp,
} from './js/add-markup-choice';

import backgroundsLinks from './images/quiz-bg/*.jpeg';
import svg from './images/*.svg';
import { ref } from './js/quiz-ref';

let pageDone = Number(localStorage.getItem('page'));
let gender = localStorage.getItem('gender');
const qtyPages = pages.length;

renderContentMarkup(pageDone);

addProgressDotMarkupExp(pages);

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

  renderContentMarkup(currentPage);

  removeOldActiveDotExp(previousPage);
  window.addEventListener('scroll', throttleScroll);
}

function renderContentMarkup(pageDone) {
  if (pages[pageDone - 1].type === 'quiz') {
    addBackgroundExp(pages, pageDone, backgroundsLinks);
    addHeaderIconExp(pages, pageDone, svg);
    addQuestionExp(pages, pageDone);
    addAnswersMarkupExp({ pages, pageDone, svg, gender });
  }
  if (pages[pageDone - 1].type === 'card') {
    addCardMarkupExp({ pages, pageDone, svg, gender });
  }
  if (pages[pageDone - 1].type === 'choice') {
    addBackgroundExp(pages, pageDone, backgroundsLinks);
    addHeaderIconExp(pages, pageDone, svg);
    addQuestionExp(pages, pageDone);
    addChoiceMarkupExp({ pages, pageDone, svg, gender });
    checkboxDisableSendButtonExp();
  }
}

// -----------------------------------------

ref.answerList.addEventListener('click', onQuestion);
ref.backButton.addEventListener('click', onBack);
ref.cardNextButton.addEventListener('click', onCardNext);
ref.choiceForm.addEventListener('submit', onSendForm);
ref.choiceForm.addEventListener('change', onFormSelect);

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

function onSendForm(e) {
  e.preventDefault();
  sendFormToStorageExp({ e, pages, pageDone });
  const oldPage = pageDone;
  const newPage = Number(pageDone) + 1;
  renderMarkup(newPage, oldPage);
}

function onFormSelect(e) {
  actionFormCheckboxExp({ e, pages, pageDone });
  checkboxDisableSendButtonExp();
}
