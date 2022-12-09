import { ref } from './quiz-ref';

export default function onPercentage(page, allPages) {
  const perc = (100 / allPages) * (page - 1);
  let delay = 1000;

  for (let i = 1; i <= perc; i += 1) {
    makePromise(i, delay).then(value => changeValue(value));
    delay = delay + 70;
  }
}

function makePromise(number, delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(number), delay);
  });
}

function changeValue(value) {
  ref.percentage.textContent = value;
}
