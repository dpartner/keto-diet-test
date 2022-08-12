import { ref } from './quiz-ref';

function createCardMarkup({ pages, currentPage, links }) {
  const desc = pages[currentPage - 1].p;
  const backgroundName = pages[currentPage - 1].background;
  const svgLink = links[backgroundName];

  return `<p class="card-wrap__desc">${desc}</p>
              <img class="card-wrap__img" src="${svgLink}" alt="" />`;
}

const addCardMarkup = ({ pages, newPage: currentPage, svg: links, gender }) => {
  const markup = createCardMarkup({ pages, currentPage, links });
  ref.heading.style.display = 'none';
  ref.answerList.style.display = 'none';
  ref.choiceForm.style.display = 'none';
  ref.choiceFormLine.style.display = 'none';
  ref.cardWrap.style.display = '';
  ref.containerHero.classList.add('hero__container--card');
  ref.containerHero.style.backgroundImage = '';
  ref.backgroundMask.classList.add('hero__mask-svg--card');
  gender === 'male'
    ? ref.cardButtonWrap.classList.add('card__button-wrap--male')
    : ref.cardButtonWrap.classList.add('card__button-wrap--female');

  ref.cardWrapContent.innerHTML = '';
  ref.cardWrapContent.insertAdjacentHTML('beforeend', markup);
};

export { addCardMarkup };
