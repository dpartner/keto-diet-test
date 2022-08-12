import throttle from 'lodash.throttle';
import * as basicLightbox from 'basiclightbox';
import onPercentage from './js/progress-percent';
import { onDoneDot, removeOldActiveDot, removeDoneDot } from './js/progress-dot';
import { onDoneLine, clearDoneLine } from './js/progress-line';
import { pages } from './js/pages';
import {
  addAnswersMarkup,
  addQuestion,
  addHeaderIcon,
  addBackground,
  sendAnswer,
} from './js/add-markup-answers';
import { addProgressDotMarkup } from './js/add-markup-progress';
import { addCardMarkup } from './js/add-markup-card';
import {
  addChoiceMarkup,
  sendFormToStorage,
  actionFormCheckbox,
  checkboxDisableSendButton,
} from './js/add-markup-choice';
import {
  addChoiceMarkupLine,
  sendFormToStorageLine,
  actionFormCheckboxLine,
  checkboxDisableSendButtonLine,
} from './js/add-markup-choice-line';
import { onHelp } from './js/add-markup-help';

import backgroundsLinks from './new_images/quiz_bg/*.png';
import svg from './images/*.svg';
import headerIcons from './new_images/*.png';
import { ref } from './js/quiz-ref';

let pageDone = Number(localStorage.getItem('page'));
if (pageDone === 0) {
  pageDone = 1;
}
let gender = localStorage.getItem('gender');
if (gender === null) {
  gender = 'female';
}
const qtyPages = pages.length;
renderContentMarkup(pageDone);

addProgressDotMarkup(pages, pageDone);

const throttleScroll = throttle(renderProgress, 700);

window.addEventListener('scroll', throttleScroll);

function renderProgress() {
  const rect = ref.progressStart.getBoundingClientRect();
  const isInViewport = rect.top <= document.documentElement.clientHeight;
  if (isInViewport) {
    onPercentage(pageDone, qtyPages);
    onDoneDot(pageDone);
    onDoneLine(pageDone, qtyPages);
    return window.removeEventListener('scroll', throttleScroll);
  }
}

function renderMarkup({ newPage, oldPage }) {
  localStorage.setItem('page', `${newPage}`);
  pageDone = localStorage.getItem('page');
  addProgressDotMarkup(pages, newPage);
  removeDoneDot();
  clearDoneLine();

  renderContentMarkup(newPage);

  removeOldActiveDot(oldPage);
  renderProgress();
  window.addEventListener('scroll', throttleScroll);
}

function renderContentMarkup(newPage) {
  if (pages[newPage - 1].type === 'quiz') {
    addBackground(pages, newPage, backgroundsLinks);
    addHeaderIcon(pages, newPage, headerIcons);
    addQuestion(pages, newPage);
    addAnswersMarkup({ pages, newPage, svg, gender });
  }
  if (pages[newPage - 1].type === 'card') {
    addCardMarkup({ pages, newPage, svg, gender });
  }
  if (pages[newPage - 1].type === 'choice') {
    addBackground(pages, newPage, backgroundsLinks);
    addHeaderIcon(pages, newPage, svg);
    addQuestion(pages, newPage);
    addChoiceMarkup({ pages, newPage, svg, gender });
    checkboxDisableSendButton();
  }
  if (pages[newPage - 1].type === 'choice-line') {
    addBackground(pages, newPage, backgroundsLinks);
    addHeaderIcon(pages, newPage, svg);
    addQuestion(pages, newPage);
    addChoiceMarkupLine({ pages, newPage, svg, gender });
    checkboxDisableSendButtonLine();
  }
  if (pages[newPage - 1].type === 'measurements') {
    window.location = './measurements.html';
  }
}

// -----------------------------------------

ref.answerList.addEventListener('click', onQuestion);
ref.backButton.addEventListener('click', onBack);
ref.cardNextButton.addEventListener('click', onCardNext);
ref.choiceForm.addEventListener('submit', onSendForm);
ref.choiceForm.addEventListener('change', onFormSelect);
ref.choiceFormLine.addEventListener('submit', onSendLineForm);
ref.choiceFormLine.addEventListener('change', onFormLineSelect);

function onCardNext() {
  const oldPage = Number(pageDone);
  const newPage = Number(pageDone) + 1;
  renderMarkup({ newPage, oldPage });
}

function onQuestion(e) {
  e.preventDefault();
  const oldPage = Number(pageDone);
  const newPage = Number(pageDone) + 1;
  sendAnswer({ e, pages, oldPage });
  renderMarkup({ newPage, oldPage });
}

function onBack(e) {
  if (Number(pageDone) === 1) {
    return;
  }
  e.preventDefault();
  const oldPage = Number(pageDone);
  const newPage = Number(pageDone) - 1;
  renderMarkup({ newPage, oldPage });
}

function onSendForm(e) {
  e.preventDefault();
  sendFormToStorage({ e, pages, pageDone });
  const oldPage = Number(pageDone);
  const newPage = Number(pageDone) + 1;
  renderMarkup({ newPage, oldPage });
}

function onFormSelect(e) {
  actionFormCheckbox({ e, pages, pageDone });
  checkboxDisableSendButton();
}

function onSendLineForm(e) {
  e.preventDefault();
  sendFormToStorageLine({ e, pages, pageDone });
  const oldPage = Number(pageDone);
  const newPage = Number(pageDone) + 1;
  renderMarkup({ newPage, oldPage });
}

function onFormLineSelect(e) {
  actionFormCheckboxLine({ e, pages, pageDone });
  checkboxDisableSendButtonLine();
}

document.querySelector('#helpButton').addEventListener('click', onOpenHelpModal);

function onOpenHelpModal(event) {
  event.preventDefault();

  onHelp({ pages, pageDone, event, gender, svg, basicLightbox });
}
