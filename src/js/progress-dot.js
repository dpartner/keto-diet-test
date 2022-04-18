const ref = {
  allDot: document.querySelector('.progress-bar__dot').children,
};

function onDoneDot(page) {
  let delay = 2200;
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

function removeDoneDot() {
  const qtyPages = ref.allDot.length;
  for (let i = 0; i < qtyPages; i += 1) {
    if (ref.allDot[i].classList.contains('done')) {
      ref.allDot[i].classList.remove('done');
    }
  }
}

export const onDoneDotExp = page => onDoneDot(page);
export const removeOldActiveDotExp = page => removeOldActiveDot(page);
export const removeDoneDotExp = () => removeDoneDot();

// onDoneDot(pageNumber);
