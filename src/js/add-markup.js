const ref = {
  answerList: document.querySelector('.quiz-list'),
  question: document.querySelector('.hero__heading'),
};

function createAnswersMarkup(objects, pageDone) {
  const arrAnswers = objects.find(obj => obj.page === Number(pageDone)).answers;
  const answersMarkup = arrAnswers
    .map(answer => {
      return `<li class="quiz-list__item"><div class="quiz-list__link" href="">${answer}</div></li>`;
    })
    .join('');
  return answersMarkup;
}

function addAnswersMarkup(objects, pageDone) {
  const markup = createAnswersMarkup(objects, pageDone);
  ref.answerList.innerHTML = '';
  ref.answerList.insertAdjacentHTML('beforeend', markup);
}

function addQuestion(objects, pageDone) {
  const question = objects.find(obj => obj.page === Number(pageDone)).question;
  ref.question.textContent = `${question}`;
  // return answersMarkup;
}

export const addAnswersMarkupExp = (objects, pageDone) => addAnswersMarkup(objects, pageDone);

export const addQuestionExp = (objects, pageDone) => addQuestion(objects, pageDone);
