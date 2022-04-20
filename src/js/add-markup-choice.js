import { ref } from './quiz-ref';
// import { save } from './storage';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

function addChoiceMarkup({ gender }) {
  ref.heading.style.display = '';
  ref.choiceForm.style.display = '';
  ref.cardWrap.style.display = 'none';
  ref.containerHero.classList.remove('hero__container--card');
  ref.backgroundMask.classList.remove('hero__mask-svg--card');
  gender === 'male'
    ? ref.choiceButtonWrap.classList.add('quiz__choice__button-wrap--male')
    : ref.choiceButtonWrap.classList.add('quiz__choice__button-wrap--female');
}

function sendFormToStorage(e, pages, currentPage) {
  const arrNames = pages[currentPage - 1].answers.map(answer => answer.value);
  console.log(arrNames);
  const pageName = pages[currentPage - 1].answers[0].name;
  console.log(pageName);
  const formValues = {};
  for (let i = 0; i < 2; i += 1) {
    if (e.currentTarget.[pageName][i].checked) {
      formValues[arrNames[i]] = true;
    }
    formValues[arrNames[i]] = false;
  }
  console.log(formValues);

  save(`${currentPage}`, formValues);
}

export const addChoiceMarkupExp = ({ gender }) => addChoiceMarkup({ gender });

export const sendFormToStorageExp = (e, pages, currentPage) =>
  sendFormToStorage(e, pages, currentPage);
