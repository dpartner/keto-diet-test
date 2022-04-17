const ref = {
  percentage: document.querySelector('.progress__percentage-value'),
};

const pageNumber = 3;

export default function onPercentage(page) {
  const perc = page * 3;
  let delay = 1000;

  for (let i = 1; i <= perc; i += 1) {
    makePromise(i, delay).then(value => changeValue(value));
    delay = delay + 200;
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

// onPercentage(pageNumber);
