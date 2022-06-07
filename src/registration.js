// import { ref } from './js/quiz-ref';
import throttle from 'lodash.throttle';
import { save, load } from './js/storage';

const ref = {
  form: document.querySelector('.reg__form'),
  buttonWrap: document.querySelector('.reg__button-wrap'),
  regButton: document.querySelector('.reg__button'),
  regCheckbox: document.querySelector('.reg__form-checkbox'),
  regCustomCheckbox: document.querySelector('.reg__form-checkbox-custom'),
  regCheckboxLabel: document.querySelector('.reg__form-checkbox-label'),
  regCheckboxLabelText: document.querySelector('.reg__form-checkbox-label-text'),
  emailInput: document.querySelector('.reg__form-input'),
  inputNotification: document.querySelector('.reg__form-input-notification'),
  inputBottomLine: document.querySelector('.reg__form-input-bottom-line'),
};

let gender = localStorage.getItem('gender');
if (gender === null) {
  gender = 'female';
}

const typeData = localStorage.getItem('final');

if (typeData === 'metric') {
  const measurements = load('measurements-metric');
  addHiddenInputs(measurements);
}
if (typeData === 'imperic') {
  const measurements = load('measurements-imperic');
  addHiddenInputs(measurements);
}

function addHiddenInputs(measurements) {
  const keys = Object.keys(measurements);
  const markup = keys
    .map(key => `<input type="hidden" name="${key}" value="${measurements[key]}"/>`)
    .join('');
  ref.form.insertAdjacentHTML('afterbegin', markup);
}

const throttleEmail = throttle(onEmailChange, 700);
const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

ref.emailInput.addEventListener('change', onEmailInput);
ref.emailInput.addEventListener('input', throttleEmail);
// ref.regButton.addEventListener('click', onSendReg);
ref.regCheckboxLabel.addEventListener('click', onCheckbox);

onLoad(gender);

function onLoad(gender) {
  gender === 'male'
    ? ref.buttonWrap.classList.add('reg__button-wrap--male')
    : ref.buttonWrap.classList.add('reg__button-wrap--female');
}

function onEmailInput() {
  const email = ref.emailInput.value;

  if (email.match(patternEmail)) {
    ref.inputNotification.classList.remove('active');
    ref.inputBottomLine.style.backgroundColor = '';
  } else {
    ref.inputNotification.textContent = 'Please enter valid email.';
    ref.inputNotification.classList.add('active');
    ref.inputBottomLine.style.backgroundColor = '#ee2020';
  }
  if (email == '') {
    ref.inputNotification.classList.remove('active');
    ref.inputBottomLine.style.backgroundColor = '';
  }
  console.log(123);
  localStorage.setItem('email', email);
}

function onEmailChange() {
  ref.inputNotification.classList.remove('active');
  ref.inputBottomLine.style.backgroundColor = '';
}

// function onSendReg(e) {
//   const email = ref.emailInput.value;
//   e.preventDefault();

//   if (email.match(patternEmail) && ref.regCheckbox.checked) {
//     console.log(1);
//     send({ e, php });
//   } else if (!email.match(patternEmail) && ref.regCheckbox.checked) {
//     ref.inputNotification.textContent = 'This field is required.';
//     ref.inputNotification.classList.add('active');
//     ref.inputButtonLine.style.backgroundColor = '#ee2020';
//   } else if (email.match(patternEmail) && !ref.regCheckbox.checked) {
//     console.log(2);
//     ref.regCustomCheckbox.style.borderColor = '#ee2020';
//     ref.regCheckboxLabelText.style.borderBottom = '1px solid #ee2020';
//   } else {
//     ref.inputNotification.textContent = 'This field is required.';
//     ref.inputNotification.classList.add('active');
//     ref.emailInput.style.borderBottomColor = '#ee2020';
//     ref.regCustomCheckbox.style.borderColor = '#ee2020';
//     ref.regCheckboxLabelText.style.borderBottom = '1px solid #ee2020';
//   }
// }

function onCheckbox() {
  ref.regCustomCheckbox.style.borderColor = '';
  ref.regCheckboxLabelText.style.borderBottom = '';
}
