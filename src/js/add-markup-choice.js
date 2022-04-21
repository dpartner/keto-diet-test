import { ref } from './quiz-ref';
import { save, load } from './storage';

function createChoiceMarkup({ pages, currentPage, svg }) {
  console.log(pages[currentPage - 1].answers);
  const arrValues = pages[currentPage - 1].answers.map(answer => answer.value);
  const arrSvg = pages[currentPage - 1].answers.map(answer => answer.svg);
  const arrType = pages[currentPage - 1].answers.map(answer => answer.type);
  const name = pages[currentPage - 1].answers[0].name;
  const svgLink = svg['symbol-defs'];
  console.log(arrValues);
  console.log(arrSvg);
  return arrValues
    .map((value, index) => {
      return `<div class="quiz__choice-form-element">
    <input
      class="visually-hidden quiz__choice-hidden-checkbox"
      type="checkbox"
      name="${name}"
      id="${value}"
      value="${value}"
      data-type="${arrType[index]}"
    />
    <label class="quiz__choice-label" for="${value}">
      <svg class="quiz__choice-icon">
        <use class="quiz__choice-svg" href="${svgLink}#${arrSvg[index]}"></use>
      </svg>
      <span class="quiz__choice-desc">${value}</span>
      <div class="quiz__choice-plus-wrap plus-wrap">
        <div class="plus-wrap__symbols-wrap">
          <span class="plus-wrap__symbol"></span>
          <span class="plus-wrap__symbol plus-wrap__symbol--plus"></span>
        </div>
      </div>
    </label>
  </div>`;
    })
    .join('');
}

function addChoiceMarkup({ pages, currentPage, svg, gender }) {
  ref.heading.style.display = '';
  ref.choiceForm.style.display = '';
  ref.cardWrap.style.display = 'none';
  ref.containerHero.classList.remove('hero__container--card');
  ref.backgroundMask.classList.remove('hero__mask-svg--card');
  gender === 'male'
    ? ref.choiceButtonWrap.classList.add('quiz__choice__button-wrap--male')
    : ref.choiceButtonWrap.classList.add('quiz__choice__button-wrap--female');

  gender === 'male'
    ? ref.choiceFormDesc.classList.add('quiz__choice-form-desc--male')
    : ref.choiceFormDesc.classList.add('quiz__choice-form-desc--female');
  ref.choiceFormDesc.textContent = `${pages[currentPage - 1].p}`;
  const choiceMarkup = createChoiceMarkup({ pages, currentPage, svg });
  ref.choiceFormWrap.innerHTML = '';
  ref.choiceFormWrap.insertAdjacentHTML('beforeend', choiceMarkup);
}

function sendFormToStorage({ e, pages, pageDone: currentPage }) {
  const arrNames = pages[currentPage - 1].answers.map(answer => answer.value);
  const pageName = pages[currentPage - 1].answers[0].name;
  const formValues = {};
  for (let i = 0; i < arrNames.length; i += 1) {
    const isChecked = e.currentTarget[pageName][i].checked;
    console.log(isChecked);
    isChecked ? (formValues[arrNames[i]] = true) : (formValues[arrNames[i]] = false);
  }

  save(`${currentPage}`, formValues);
}

function actionFormCheckbox({ e, pages, pageDone }) {
  console.log(4);
  const allCheckboxes = ref.choiceFormWrap.children;
  const qtyNotLastCheckbox = allCheckboxes.length - 1;
  const arrNames = pages[pageDone - 1].answers.map(answer => answer.value);

  if (e.target.dataset.type !== 'none') {
    sendFormToStorageExp({ e, pages, pageDone });
  }

  if (e.target.dataset.type === 'none' && e.target.checked === false) {
    for (let i = 0; i < qtyNotLastCheckbox; i += 1) {
      allCheckboxes[i].children[0].removeAttribute('disabled');
      allCheckboxes[i].children[0].checked = load(pageDone)[arrNames[i]];
    }
  }
  if (e.target.dataset.type === 'none' && e.target.checked === true) {
    for (let i = 0; i < qtyNotLastCheckbox; i += 1) {
      allCheckboxes[i].children[0].checked = false;
      allCheckboxes[i].children[0].setAttribute('disabled', 'true');
    }
  }
}

function checkboxDisableSendButton() {
  const allCheckboxes = ref.choiceFormWrap.children;
  let qtyCheckedCheckboxes = 0;

  for (let i = 0; i < allCheckboxes.length; i += 1) {
    if (allCheckboxes[i].children[0].checked === false) {
      qtyCheckedCheckboxes += 1;
      console.log(1);
    }
  }
  if (qtyCheckedCheckboxes === allCheckboxes.length) {
    ref.choiceButton.setAttribute('disabled', 'true');
    console.log(2);
  } else {
    ref.choiceButton.removeAttribute('disabled');
    console.log(3);
  }
}

export const addChoiceMarkupExp = ({ pages, pageDone: currentPage, svg, gender }) =>
  addChoiceMarkup({ pages, currentPage, svg, gender });

export const sendFormToStorageExp = ({ e, pages, pageDone }) =>
  sendFormToStorage({ e, pages, pageDone });

export const actionFormCheckboxExp = ({ e, pages, pageDone }) =>
  actionFormCheckbox({ e, pages, pageDone });

export const checkboxDisableSendButtonExp = () => checkboxDisableSendButton();
