const ref = {
  heading: document.querySelector('.hero__heading-wrap'),
  answerList: document.querySelector('.quiz-list'),
  cardWrap: document.querySelector('.card-wrap'),
  containerHero: document.querySelector('.hero__container'),
  backgroundMask: document.querySelector('.hero__mask-svg'),
};

function createCardMarkup(pages, currentPage, links) {
  const desc = pages[currentPage - 1].p;
  const backgroundName = pages[currentPage - 1].background;
  const svgLink = links[backgroundName];
  const svgSpriteLink = links['symbol-defs'];

  return `<p class="card-wrap__desc">${desc}</p>
            <div class="card-wrap__content" style="background-image: url(${svgLink});"></div><a  class="card__button-link">
                Continue<svg class="card__button-icon">
                  <use class="card__button-svg" href="${svgSpriteLink}#icon-next"></use>
                </svg>
              </a>`;
}

function addCardMarkup(pages, currentPage, links) {
  const markup = createCardMarkup(pages, currentPage, links);
  ref.heading.style.display = 'none';
  ref.answerList.style.display = 'none';
  ref.cardWrap.style.display = '';
  // ref.heading.classList.add('visually-hidden');
  // ref.answerList.classList.add('visually-hidden');
  // ref.cardWrap.classList.remove('visually-hidden');
  ref.containerHero.classList.add('hero__container--card');
  ref.containerHero.style.backgroundImage = '';
  ref.backgroundMask.classList.add('hero__mask-svg--card');

  ref.cardWrap.innerHTML = '';
  ref.cardWrap.insertAdjacentHTML('beforeend', markup);
}

export const addCardMarkupExp = (pages, currentPage, links) =>
  addCardMarkup(pages, currentPage, links);
