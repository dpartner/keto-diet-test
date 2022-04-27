import { ref } from './quiz-ref';

const onDoneDot = page => {
  let delay = 2200;
  // ref.allDot[page].classList.add('active');
  ref.allDot[1].classList.add('active');

  makePromise(0, delay).then(value => addClass(value));

  // for (let i = 0; i < page; i += 1) {
  //   makePromise(i, delay).then(value => addClass(value));
  //   delay = delay + 600;
  // }
};

function makePromise(number, delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(number), delay);
  });
}

function addClass(numberOfChild) {
  ref.allDot[numberOfChild].classList.add('done');
}

const removeOldActiveDot = page => {
  ref.allDot[1].classList.remove('active');
};

const removeDoneDot = () => {
  const qtyPages = ref.allDot.length;
  for (let i = 0; i < qtyPages; i += 1) {
    if (ref.allDot[i].classList.contains('done')) {
      ref.allDot[i].classList.remove('done');
    }
  }
};

export { onDoneDot, removeOldActiveDot, removeDoneDot };

// export const onDoneDotExp = page => onDoneDot(page);
// export const removeOldActiveDotExp = page => removeOldActiveDot(page);
// export const removeDoneDotExp = () => removeDoneDot();
