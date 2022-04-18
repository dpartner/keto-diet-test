const ref = {
  answerList: document.querySelector('.quiz-list'),
  question: document.querySelector('.hero__heading'),
  dotParent: document.querySelector('.progress-bar__dot'),
};

function createAnswersMarkup(objects, pageDone) {
  const arrAnswers = objects.find(obj => obj.page === Number(pageDone)).answers;
  const answersMarkup = arrAnswers
    .map(answer => {
      return `<li class="quiz-list__item"><button type="button" class="quiz-list__link" href="">${answer}</button></li>`;
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

function createProgressDotMarkup(arrObj) {
  return arrObj
    .map(obj => {
      return `<div class="progress-bar__circle">
                  <span class="progress-bar__dot-desc">${obj.name}</span>
                </div>`;
    })
    .join('');
}

function addProgressDotMarkup(arr) {
  const allDotMarkup = createProgressDotMarkup(arr);
  ref.dotParent.insertAdjacentHTML('beforeend', allDotMarkup);
}

export const addAnswersMarkupExp = (objects, pageDone) => addAnswersMarkup(objects, pageDone);

export const addQuestionExp = (objects, pageDone) => addQuestion(objects, pageDone);

export const addProgressDotMarkupExp = arr => addProgressDotMarkup(arr);
