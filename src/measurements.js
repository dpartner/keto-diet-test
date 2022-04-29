import { qtyPages, pages } from './js/pages';
import onPercentage from './js/progress-percent';
import { onDoneLine } from './js/progress-line';
import { addProgressDotMarkup } from './js/add-markup-progress';
import { onDoneDot } from './js/progress-dot';
import CircleProgress from 'js-circle-progress';

const ref = {
  changeFormButtonImperial: document.querySelector(
    '.measurements__select-button[data-action="imperial"]',
  ),
  changeFormButtonMetric: document.querySelector(
    '.measurements__select-button[data-action="metric"]',
  ),
  changeFormButtonWrap: document.querySelector('.measurements__select-list'),
  formWrap: document.querySelector('.measurements__form-wrap'),
  formImperial: document.querySelector('.measurements__form--imperial'),
  formImperialInputs: document.querySelectorAll('.measurements__form--imperial input'),
  formImperialSubmit: document.querySelector('.measurements__form-submit--imperial'),
  formMetric: document.querySelector('.measurements__form--metric'),
  formMetricInputs: document.querySelectorAll('.measurements__form--metric input'),
  submitButtonWrap: document.querySelectorAll('.measurements__form-button-wrap'),
  backButton: document.querySelector('.progress__button-link--back'),
  percentage: document.querySelector('.progress__percentage-value'),
  loaderWrap: document.querySelector('.loader__wrap'),
  loaderDesc: document.querySelector('.loader__desc'),
  loaderDescWrap: document.querySelector('.loader__desc-wrap'),
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

function onSendValidation(input, formName) {
  // const dataType = input.dataset.type;
  if (input.dataset.type === `${formName}-age`) {
    const dataName = `${formName}-age`;
    checkingValidSend(input, dataName);
  }
  if (input.dataset.type === `${formName}-height-cm`) {
    const dataName = `${formName}-height-cm`;
    checkingValidSend(input, dataName);
  }
  if (input.dataset.type === `${formName}-height-ft`) {
    const dataName = `${formName}-height-ft`;
    checkingValidSend(input, dataName);
  }
  if (input.dataset.type === `${formName}-height-inch`) {
    const dataName = `${formName}-height-inch`;
    checkingValidSend(input, dataName);
  }
  if (input.dataset.type === `${formName}-weight`) {
    const dataName = `${formName}-weight`;
    checkingValidSend(input, dataName);
  }
  if (input.dataset.type === `${formName}-target-weight`) {
    const dataName = `${formName}-target-weight`;
    checkingValidSend(input, dataName);
  }
}

function checkingValidSend(input, dataName) {
  const inputNotification = document.querySelector(
    `.measurements__form-notification[data-type="${dataName}"]`,
  );
  inputNotification.textContent = 'This field is required.';
  inputNotification.classList.add('active');
}

function sendFormToStorageImperial(e) {
  e.preventDefault();
  const keys = {};

  for (const input of ref.formImperialInputs) {
    if (input.value === '') {
      const formName = 'imperial';
      onSendValidation(input, formName);
      return;
    }
    if (!input.validity.valid) {
      return;
    }
    keys[input.id] = input.value;
  }
  localStorage.setItem('measurements-imperic', JSON.stringify(keys));
  ref.changeFormButtonWrap.style.display = 'none';
  ref.formWrap.style.display = 'none';
  ref.loaderDesc.style.display = 'flex';

  onLoaderDesc();

  const cp = new CircleProgress('.progress', {
    value: 100,
    max: 100,
    animation: 'easeInOutCubic',
    animationDuration: 12000,
    textFormat: 'percent',
  });
}

function sendFormToStorageMetric(e) {
  e.preventDefault();
  const keys = {};

  for (const input of ref.formMetricInputs) {
    if (input.value === '') {
      const formName = 'metric';
      onSendValidation(input, formName);
      return;
    }
    if (!input.validity.valid) {
      return;
    }
    keys[input.id] = input.value;
  }
  localStorage.setItem('measurements-metric', JSON.stringify(keys));

  ref.changeFormButtonWrap.style.display = 'none';
  ref.formWrap.style.display = 'none';
  ref.loaderDesc.style.display = 'flex';

  onLoaderDesc();

  const cp = new CircleProgress('.progress', {
    value: 100,
    max: 100,
    animation: 'easeInOutCubic',
    animationDuration: 12000,
    textFormat: 'percent',
  });
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

function timeOut(delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(delay), delay);
  });
}

function addActiveLoaderDesc({ i: number, arrDesc, transform }) {
  arrDesc[number].classList.add('desc--active');
  ref.loaderDescWrap.style.transform = `translateX(${transform}px)`;
  try {
    arrDesc[number - 1].classList.remove('desc--active');
  } catch (error) {}
}

async function onLoaderDesc() {
  const arrDesc = ref.loaderDescWrap.children;
  let delay = 2000;
  let transform = 0;

  for (let i = 0; i < arrDesc.length; i += 1) {
    const timer = await timeOut(delay);
    addActiveLoaderDesc({ i, arrDesc, transform });
    transform -= 410;
    // delay += 3000;
  }
  const timer = await timeOut(delay);
  window.location.href = '/';
}
