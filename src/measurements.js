import { qtyPages, pages } from './js/pages';
import onPercentage from './js/progress-percent';
import { onDoneLine } from './js/progress-line';
import { addProgressDotMarkup } from './js/add-markup-progress';
import { onDoneDot } from './js/progress-dot';
import './loading/loading-bar';
// const qtyPages = import('./js/pages').then(function (page) {
//   // Render page
//   page.pages;
// });

const ref = {
  changeFormButtonImperial: document.querySelector(
    '.measurements__select-button[data-action="imperial"]',
  ),
  changeFormButtonMetric: document.querySelector(
    '.measurements__select-button[data-action="metric"]',
  ),
  changeFormButtonWrap: document.querySelector('.measurements__select-list'),
  formImperial: document.querySelector('.measurements__form--imperial'),
  formImperialInputs: document.querySelectorAll('.measurements__form--imperial input'),
  formImperialSubmit: document.querySelector('.measurements__form-submit--imperial'),
  formMetric: document.querySelector('.measurements__form--metric'),
  formMetricInputs: document.querySelectorAll('.measurements__form--metric input'),
  submitButtonWrap: document.querySelectorAll('.measurements__form-button-wrap'),
  backButton: document.querySelector('.progress__button-link--back'),
  percentage: document.querySelector('.progress__percentage-value'),
};

let gender = localStorage.getItem('gender');
if (gender === null) {
  gender = 'female';
}

let page = Number(localStorage.getItem('page'));
if (page === 0) {
  page = 1;
}

loadFromLocalStorage();
setGender(gender);
onPercentage(page, qtyPages);
onDoneLine(page, qtyPages);
addProgressDotMarkup(pages, page);
onDoneDot(page);

ref.changeFormButtonImperial.addEventListener('click', onChangeFormToImperial);
ref.changeFormButtonMetric.addEventListener('click', onChangeFormToMetric);

ref.formImperial.addEventListener('change', onValidation);
ref.formImperial.addEventListener('submit', sendFormToStorageImperial);
ref.formMetric.addEventListener('change', onValidation);
ref.formMetric.addEventListener('submit', sendFormToStorageMetric);

ref.backButton.addEventListener('click', () => {
  localStorage.setItem('page', page - 1);
});

function onChangeFormToMetric() {
  ref.changeFormButtonWrap.classList.add('measurements__select-list--metric-active');
  ref.changeFormButtonMetric.classList.add('measurements__select-button--active');
  ref.changeFormButtonImperial.classList.remove('measurements__select-button--active');
  ref.formMetric.classList.add('measurements__form-wrap--metric-active');
  ref.formImperial.classList.add('measurements__form-wrap--metric-active');
}

function onChangeFormToImperial() {
  ref.changeFormButtonWrap.classList.remove('measurements__select-list--metric-active');
  ref.changeFormButtonImperial.classList.add('measurements__select-button--active');
  ref.changeFormButtonMetric.classList.remove('measurements__select-button--active');
  ref.formMetric.classList.remove('measurements__form-wrap--metric-active');
  ref.formImperial.classList.remove('measurements__form-wrap--metric-active');
}

function onValidation(e) {
  const dataType = e.currentTarget.dataset.type;
  if (e.target.dataset.type === `${dataType}-age`) {
    const dataName = `${dataType}-age`;
    checkingValid(e, dataName, dataType);
  }
  if (e.target.dataset.type === `${dataType}-height-cm`) {
    const dataName = `${dataType}-height-cm`;
    checkingValid(e, dataName, dataType);
  }
  if (e.target.dataset.type === `${dataType}-height-ft`) {
    const dataName = `${dataType}-height-ft`;
    checkingValid(e, dataName, dataType);
  }
  if (e.target.dataset.type === `${dataType}-height-inch`) {
    const dataName = `${dataType}-height-inch`;
    checkingValid(e, dataName, dataType);
  }
  if (e.target.dataset.type === `${dataType}-weight`) {
    const dataName = `${dataType}-weight`;
    checkingValid(e, dataName, dataType);
  }
  if (e.target.dataset.type === `${dataType}-target-weight`) {
    const dataName = `${dataType}-target-weight`;
    checkingValid(e, dataName, dataType);
  }
}

function checkingValid(e, dataName, dataType) {
  const inputNotification = document.querySelector(
    `.measurements__form-notification[data-type="${dataName}"]`,
  );
  saveInputsToStorage(e, dataName, dataType);

  if (!e.target.validity.valid && Number(e.target.value) < Number(e.target.getAttribute('min'))) {
    inputNotification.textContent = `Please enter a value of at least ${e.target.getAttribute(
      'min',
    )}`;
    inputNotification.classList.add('active');
  } else if (
    !e.target.validity.valid &&
    Number(e.target.value) > Number(e.target.getAttribute('max'))
  ) {
    inputNotification.textContent = `Enter a value less than or equal to ${e.target.getAttribute(
      'max',
    )}`;
    inputNotification.classList.add('active');
  } else if (!Number.isInteger(Number(e.target.value))) {
    inputNotification.textContent = 'Please enter only whole numbers';
    inputNotification.classList.add('active');
  } else {
    inputNotification.classList.remove('active');
  }
}

function sendFormToStorageImperial(e) {
  e.preventDefault();
  const keys = {};

  for (const input of ref.formImperialInputs) {
    if (!input.validity.valid) {
      return;
    }
    keys[input.id] = input.value;
  }
  localStorage.setItem('measurements-imperic', JSON.stringify(keys));
}

function sendFormToStorageMetric(e) {
  e.preventDefault();
  const keys = {};

  for (const input of ref.formMetricInputs) {
    if (!input.validity.valid) {
      return;
    }
    keys[input.id] = input.value;
  }
  localStorage.setItem('measurements-metric', JSON.stringify(keys));
}

function saveInputsToStorage(e, dataName, dataType) {
  e.preventDefault();
  const dataFromStorage = getDataFromStorage();
  const keys = { ...dataFromStorage };

  if (dataType === 'imperial') {
    for (const input of ref.formImperialInputs) {
      keys[input.id] = input.value;
    }
  }

  if (dataType === 'metric') {
    for (const input of ref.formMetricInputs) {
      keys[input.id] = input.value;
    }
  }

  localStorage.setItem('measurements-inputs-save', JSON.stringify(keys));
}

function loadFromLocalStorage() {
  const data = getDataFromStorage();

  if (data) {
    console.log(ref.formImperialInputs);
    for (const input of ref.formImperialInputs) {
      input.value = data[input.id];
    }
    for (const input of ref.formMetricInputs) {
      input.value = data[input.id];
    }
  }
}

function getDataFromStorage() {
  try {
    const savedData = JSON.parse(localStorage.getItem('measurements-inputs-save'));
    return savedData === null ? undefined : savedData;
  } catch (error) {}
}

function setGender(gender) {
  const allButtons = ref.submitButtonWrap;
  // for (let i = 0; i < allButtons.length; i += 1) {
  //   gender === 'male'
  //     ? allButtons[i].classList.add('measurements__form-button-wrap--male')
  //     : allButtons[i].classList.add('measurements__form-button-wrap--female');
  // }
  for (const button of allButtons) {
    gender === 'male'
      ? button.classList.add('measurements__form-button-wrap--male')
      : button.classList.add('measurements__form-button-wrap--female');
  }
}
onLoader();
function onLoader() {
  const barElement = new ldBar('#loader', {
    preset: 'circle',
    stroke: '#f00',
    'stroke-width': 5,
    value: 0,
    duration: 20,
    'pattern-size': 200,
  });
  const getBar = document.querySelector('#loader').ldBar;
  barElement.set(100);
}
