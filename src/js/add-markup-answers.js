import { ref } from './quiz-ref';
import { save, load } from './storage';

function createAnswersMarkup({ pages, currentPage, gender }) {
  try {
    const arrAnswers = pages.find(obj => obj.page === Number(currentPage)).answers;
    const classGender = gender === 'male' ? 'quiz-list__item--male' : 'quiz-list__item--female';
    const answersMarkup = arrAnswers
      .map(answer => {
        return `<li class="quiz-list__item ${classGender}"><button type="button" class="quiz-list__link" href="">${answer}</button></li>`;
      })
      .join('');
    return answersMarkup;
  } catch (error) {
    return error;
  }
}

const addAnswersMarkup = ({ pages, pageDone: currentPage, gender }) => {
  const markup = createAnswersMarkup({ pages, currentPage, gender });
  ref.heading.style.display = '';
  ref.answerList.style.display = '';
  ref.choiceForm.style.display = 'none';
  ref.choiceFormLine.style.display = 'none';
  ref.cardWrap.style.display = 'none';
  ref.containerHero.classList.remove('hero__container--card');
  ref.backgroundMask.classList.remove('hero__mask-svg--card');

  ref.answerList.innerHTML = '';
  ref.answerList.insertAdjacentHTML('beforeend', markup);
};

const sendAnswer = ({ e, pages, oldPage: currentPage }) => {
  const sendObject = {};
  pages[currentPage - 1].answers.forEach(answer => {
    sendObject[answer] = false;
  });

  sendObject[e.target.textContent] = true;
  save(currentPage, sendObject);
};

const addQuestion = (objects, currentPage) => {
  const question = objects.find(obj => obj.page === Number(currentPage)).question;
  ref.question.textContent = `${question}`;
};

const addBackground = (objects, currentPage, links) => {
  const backgroundName = objects.find(obj => obj.page === Number(currentPage)).background;
  const backgroundUrl = links[backgroundName];

  ref.containerHero.style.backgroundImage = `url(${backgroundUrl})`;
};

const addHeaderIcon = (arrObj, currentPage, links) => {
  const iconId = arrObj[currentPage - 1].icon;
  const svgLink = links['symbol-defs'];

  ref.headerLogo.setAttribute('href', `${svgLink}#${iconId}`);
};

export { addAnswersMarkup, addQuestion, addHeaderIcon, addBackground, sendAnswer };
