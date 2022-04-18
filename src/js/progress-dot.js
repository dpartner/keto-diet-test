const ref = {
  allDot: document.querySelectorAll('.progress-bar__circle'),
};

function onDoneDot(page) {
  let delay = 1800;
  ref.allDot[page].classList.add('active');

  for (let i = 0; i < page; i += 1) {
    makePromise(i, delay).then(value => addClass(value));
    delay = delay + 600;
  }
}

function makePromise(number, delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(number), delay);
  });
}

function addClass(numberOfChild) {
  ref.allDot[numberOfChild].classList.add('done');
}

function removeOldActiveDot(page) {
  ref.allDot[page].classList.remove('active');
}

export const onDoneDotExp = page => onDoneDot(page);
export const removeOldActiveDotExp = page => removeOldActiveDot(page);

// onDoneDot(pageNumber);
