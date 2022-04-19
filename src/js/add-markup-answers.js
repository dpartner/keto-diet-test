const ref = {
  answerList: document.querySelector('.quiz-list'),
  question: document.querySelector('.hero__heading'),
  heading: document.querySelector('.hero__heading-wrap'),
  headerLogo: document.querySelector('.heading__logo-svg'),
  heroBackground: document.querySelector('.hero__container'),
  cardWrap: document.querySelector('.card-wrap'),
  containerHero: document.querySelector('.hero__container'),
  backgroundMask: document.querySelector('.hero__mask-svg'),
};

function createAnswersMarkup(objects, pageDone) {
  try {
    const arrAnswers = objects.find(obj => obj.page === Number(pageDone)).answers;
    const answersMarkup = arrAnswers
      .map(answer => {
        return `<li class="quiz-list__item"><button type="button" class="quiz-list__link" href="">${answer}</button></li>`;
      })
      .join('');
    return answersMarkup;
  } catch (error) {
    return '';
  }
}

function addAnswersMarkup(objects, currentPage) {
  const markup = createAnswersMarkup(objects, currentPage);
  ref.heading.style.display = '';
  ref.answerList.style.display = '';
  ref.cardWrap.style.display = 'none';
  // ref.heading.classList.remove('visually-hidden');
  // ref.answerList.classList.remove('visually-hidden');
  // ref.cardWrap.classList.add('visually-hidden');
  ref.containerHero.classList.remove('hero__container--card');
  ref.backgroundMask.classList.remove('hero__mask-svg--card');

  ref.answerList.innerHTML = '';
  ref.answerList.insertAdjacentHTML('beforeend', markup);
}

function addQuestion(objects, currentPage) {
  const question = objects.find(obj => obj.page === Number(currentPage)).question;
  ref.question.textContent = `${question}`;
  // return answersMarkup;
}

function addBackground(objects, currentPage, links) {
  const backgroundName = objects.find(obj => obj.page === Number(currentPage)).background;
  const backgroundUrl = links[backgroundName];

  ref.heroBackground.style.backgroundImage = `url(${backgroundUrl})`;
}

// function addHeaderIcon(arrObj, currentPage, previousPage) {
//   const iconPrevious = arrObj[previousPage - 1].icon;
//   console.log(iconPrevious);
//   const iconCurrent = arrObj[currentPage - 1].icon;
//   const linkPrevious = ref.headerLogo.href.baseVal;
//   const linkCurrent = linkPrevious.replace(`${iconPrevious}`, `${iconCurrent}`);
//   ref.headerLogo.href.baseVal = linkCurrent;

//   // console.log(icon);
//   // const svgMarkup = `<use
//   //                   class="heading__logo-svg"
//   //                   href="./images/symbol-defs.svg#${icon}"
//   //                 ></use>`;
//   // ref.headerLogo.innerHTML = '';
//   // ref.headerLogo.insertAdjacentHTML('beforeend', svgMarkup);
// }

function addHeaderIcon(arrObj, currentPage, links) {
  const iconId = arrObj[currentPage - 1].icon;
  console.log(iconId);
  const svgLink = links['symbol-defs'];
  console.log(svgLink);

  ref.headerLogo.setAttribute('href', `${svgLink}#${iconId}`);
}

export const addAnswersMarkupExp = (objects, currentPage) => addAnswersMarkup(objects, currentPage);

export const addQuestionExp = (objects, currentPage) => addQuestion(objects, currentPage);

export const addHeaderIconExp = (arrObj, currentPage, links) =>
  addHeaderIcon(arrObj, currentPage, links);

// style = 'background-image: url(images/quiz-bg/bg-1.jpeg)';

export const addBackgroundExp = (objects, currentPage, links) =>
  addBackground(objects, currentPage, links);
