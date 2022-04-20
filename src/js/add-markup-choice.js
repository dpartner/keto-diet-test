import { ref } from './quiz-ref';

function addChoiceMarkup() {
  ref.heading.style.display = '';
  ref.choiceWrap.style.display = '';
  ref.cardWrap.style.display = 'none';
  ref.containerHero.classList.remove('hero__container--card');
  ref.backgroundMask.classList.remove('hero__mask-svg--card');
}

export const addChoiceMarkupExp = () => addChoiceMarkup();
