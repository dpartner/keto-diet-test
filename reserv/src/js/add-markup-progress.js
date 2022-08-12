import { ref } from './quiz-ref';

function createProgressDotMarkup(pages, pageDone) {
  // return pages
  //   .map(page => {
  //     return `<div class="progress-bar__circle">
  //                 <span class="progress-bar__dot-desc">${page.name}</span>
  //               </div>`;
  //   })
  //   .join('');
  let arrDots = [];
  if (pageDone === 1) {
    arrDots.push(`<div class="progress-bar__circle">
                  <span class="progress-bar__dot-desc">Gender</span>
                </div>`);
    for (let i = pageDone - 1; i < pages.length; i += 1) {
      arrDots.push(
        `<div class="progress-bar__circle"><span class="progress-bar__dot-desc">${pages[i].name}</span></div>`,
      );
    }
  } else {
    for (let i = pageDone - 2; i < pages.length; i += 1) {
      arrDots.push(
        `<div class="progress-bar__circle"><span class="progress-bar__dot-desc">${pages[i].name}</span></div>`,
      );
    }
  }

  return arrDots.join('');
}

const addProgressDotMarkup = (pages, pageDone) => {
  const allDotMarkup = createProgressDotMarkup(pages, pageDone);
  ref.dotParent.innerHTML = '';
  ref.dotParent.style.paddingLeft = `${pageDone * 13}px`;
  ref.dotParent.insertAdjacentHTML('beforeend', allDotMarkup);
};

export { addProgressDotMarkup };
