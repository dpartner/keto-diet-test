const ref = {
  dotParent: document.querySelector('.progress-bar__dot'),
};

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

export const addProgressDotMarkupExp = arr => addProgressDotMarkup(arr);
