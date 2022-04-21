import { ref } from './quiz-ref';

function createProgressDotMarkup(arrObj) {
  return arrObj
    .map(obj => {
      return `<div class="progress-bar__circle">
                  <span class="progress-bar__dot-desc">${obj.name}</span>
                </div>`;
    })
    .join('');
}

const addProgressDotMarkup = arr => {
  const allDotMarkup = createProgressDotMarkup(arr);
  ref.dotParent.insertAdjacentHTML('beforeend', allDotMarkup);
};

export { addProgressDotMarkup };
