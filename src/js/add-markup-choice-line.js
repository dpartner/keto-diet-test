import { ref } from './quiz-ref';
import { save, load } from './storage';

function createChoiceMarkupLine({ pages, currentPage, svg }) {
  const arrValues = pages[currentPage - 1].answers.map(answer => answer.value);
  const arrType = pages[currentPage - 1].answers.map(answer => answer.type);
  const name = pages[currentPage - 1].answers[0].name;
  const svgLink = svg['symbol-defs'];
  return arrValues
    .map((value, index) => {
      return `<div class="quiz__choice-line-form-element">
                <input
                  class="visually-hidden quiz__choice-line-hidden-checkbox"
                  type="checkbox"
                  name="${name}"
                  id="${index}"
                  value="${value}"
                  data-type="${arrType[index]}"
                />
                <label class="quiz__choice-line-label" for="${index}">
                  <div class="quiz__choice-line-content">${value}</div>
                  <div class="quiz__choice-line-icon-wrap">
                    <div class="quiz__choice-line-checked-icons">
                      <svg class="quiz__choice-line-icon">
                        <use
                          class="quiz__choice-svg"
                          href="${svgLink}#icon-check-chk"
                        ></use></svg
                      ><svg class="quiz__choice-line-icon">
                        <use
                          class="quiz__choice-svg"
                          href="${svgLink}#icon-close-chk"
                        ></use>
                      </svg>
                    </div>
                  </div>
                </label>
              </div>`;
    })
    .join('');
}

const addChoiceMarkupLine = ({ pages, newPage: currentPage, svg, gender }) => {
  ref.heading.style.display = '';
  ref.choiceFormLine.style.display = '';
  ref.cardWrap.style.display = 'none';
  ref.answerList.style.display = 'none';
  ref.choiceForm.style.display = 'none';
  ref.containerHero.classList.remove('hero__container--card');
  ref.backgroundMask.classList.remove('hero__mask-svg--card');
  gender === 'male'
    ? ref.choiceLineButtonWrap.classList.add('quiz__choice-line__button-wrap--male')
    : ref.choiceLineButtonWrap.classList.add('quiz__choice-line__button-wrap--female');
  gender === 'male'
    ? ref.choiceFormLineDesc.classList.add('quiz__choice-line-form-desc--male')
    : ref.choiceFormLineDesc.classList.add('quiz__choice-line-form-desc--female');

  ref.choiceFormLineDesc.textContent = `${pages[currentPage - 1].p}`;
  const choiceMarkup = createChoiceMarkupLine({ pages, currentPage, svg });
  ref.choiceFormLineWrap.innerHTML = '';
  ref.choiceFormLineWrap.insertAdjacentHTML('beforeend', choiceMarkup);
};

const sendFormToStorageLine = ({ e, pages, pageDone: currentPage }) => {
  const arrNames = pages[currentPage - 1].answers.map(answer => answer.value);
  const pageName = pages[currentPage - 1].answers[0].name;
  const formValues = {};
  for (let i = 0; i < arrNames.length; i += 1) {
    const isChecked = e.currentTarget[pageName][i].checked;
    isChecked ? (formValues[arrNames[i]] = true) : (formValues[arrNames[i]] = false);
  }

  save(`${currentPage}`, formValues);
};

const actionFormCheckboxLine = ({ e, pages, pageDone }) => {
  const allCheckboxes = ref.choiceFormLineWrap.children;
  const qtyNotLastCheckbox = allCheckboxes.length - 1;
  const arrNames = pages[pageDone - 1].answers.map(answer => answer.value);

  if (e.target.dataset.type !== 'none') {
    sendFormToStorageLine({ e, pages, pageDone });
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
};

const checkboxDisableSendButtonLine = () => {
  const allCheckboxes = ref.choiceFormLineWrap.children;
  let qtyCheckedCheckboxes = 0;

  for (let i = 0; i < allCheckboxes.length; i += 1) {
    if (allCheckboxes[i].children[0].checked === false) {
      qtyCheckedCheckboxes += 1;
    }
  }
  if (qtyCheckedCheckboxes === allCheckboxes.length) {
    ref.choiceLineButton.setAttribute('disabled', 'true');
    ref.choiceLineButtonWrap.classList.add('quiz__choice__button-wrap--disabled');
  } else {
    ref.choiceLineButton.removeAttribute('disabled');
    ref.choiceLineButtonWrap.classList.remove('quiz__choice__button-wrap--disabled');
  }
};

export {
  addChoiceMarkupLine,
  sendFormToStorageLine,
  actionFormCheckboxLine,
  checkboxDisableSendButtonLine,
};
