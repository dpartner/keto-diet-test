import { load } from './js/storage';
import throttle from 'lodash.throttle';

const ref = {
  ctaButtonWrap: document.querySelector('.final__hero-button-wrap'),
  profileCardValues: document.querySelectorAll('.profile-cards__value'),
  profileCardTexts: document.querySelectorAll('.profile-cards__text'),
  weightValue: document.querySelector('.final__summary-weight-kg-value'),
  weightUnit: document.querySelector('.final__summary-weight-kg-unit'),
  weightFromValue: document.querySelector('.final__summary-weight-graph-target-from-value'),
  weightFromUnit: document.querySelector('.final__summary-weight-graph-target-from-unit'),
  weightToValue: document.querySelector('.final__summary-weight-graph-target-to-value'),
  weightToUnit: document.querySelector('.final__summary-weight-graph-target-to-unit'),
  bmiSvg: document.querySelector('.final__summary-bmi-img'),
  bmiSubtitle: document.querySelector('.final__summary-bmi-subtitle'),
  caloriesSvg: document.querySelector('.calorie_animations'),
  caloriesSubtitle: document.querySelector('.calories-subtitle'),
  bottleContainer: document.querySelector('.bottle-container'),
  helpModalsButtonsWrap: document.querySelector('.help-modal__open-close-wrap'),
  openModals: document.querySelectorAll('.help-modal__open-button'),
  closeModals: document.querySelectorAll('.help-modal__close-button'),
  helpModals: document.querySelectorAll('.final__help-modal-wrap'),
};

const clientMeasurementsImperic = load('measurements-imperic');
const clientMeasurementsMetric = load('measurements-metric');
let gender = localStorage.getItem('gender');
if (gender === null) {
  gender = 'female';
}

let typeMeasurements = localStorage.getItem('final');
if (typeMeasurements === null) {
  typeMeasurements = 'imperic';
}
const throttleScrollWeight = throttle(onWeight, 700);
const throttleScrollBody = throttle(onBody, 700);
const throttleScrollPeople = throttle(onPeople, 700);
const throttleScrollBmi = throttle(onBmi, 700);
const throttleScrollCalories = throttle(onCalories, 700);
const throttleScrollWater = throttle(onWater, 700);

window.addEventListener('scroll', throttleScrollWeight);
window.addEventListener('scroll', throttleScrollBody);
window.addEventListener('scroll', throttleScrollPeople);
window.addEventListener('scroll', throttleScrollBmi);
window.addEventListener('scroll', throttleScrollCalories);
window.addEventListener('scroll', throttleScrollWater);
document
  .querySelector('.help-modal__open-close-wrap[data-modal="weight"]')
  .addEventListener('click', onHelpModal);
document
  .querySelector('.help-modal__open-close-wrap[data-modal="body"]')
  .addEventListener('click', onHelpModal);
document
  .querySelector('.help-modal__open-close-wrap[data-modal="bmi"]')
  .addEventListener('click', onHelpModal);
document
  .querySelector('.help-modal__open-close-wrap[data-modal="bmr"]')
  .addEventListener('click', onHelpModal);
document
  .querySelector('.help-modal__open-close-wrap[data-modal="water"]')
  .addEventListener('click', onHelpModal);

onLoad();

function onLoad() {
  gender === 'male'
    ? ref.ctaButtonWrap.classList.add('final__hero-button-wrap-male')
    : ref.ctaButtonWrap.classList.add('final__hero-button-wrap-female');

  gender === 'male'
    ? (document.querySelector('.summary-card__body-img--woman').style.display = 'none')
    : (document.querySelector('.summary-card__body-img--man').style.display = 'none');

  gender === 'male'
    ? (document.querySelector('.summary-card__people-img-women').style.display = 'none')
    : (document.querySelector('.summary-card__people-img-men').style.display = 'none');

  loadProfileCards();
}

function loadProfileCards() {
  if (clientMeasurementsImperic !== undefined && typeMeasurements === 'imperic') {
    for (const value of ref.profileCardValues) {
      const valueType = value.dataset.value;

      value.textContent = `${clientMeasurementsImperic[`${valueType}-imperic`]}`;

      if (valueType === 'height') {
        value.textContent = `${clientMeasurementsImperic[`${valueType}-ft`]}.${
          clientMeasurementsImperic[`${valueType}-inch`]
        }`;
      }
    }
    for (const text of ref.profileCardTexts) {
      const textType = text.dataset.value;
      const textCont = { age: 'Age', height: 'Height (ft)', weight: 'Weight (lb)' };

      text.textContent = `${textCont[textType]}`;
    }
  }

  if (clientMeasurementsMetric !== undefined && typeMeasurements === 'metric') {
    for (const value of ref.profileCardValues) {
      const valueType = value.dataset.value;

      value.textContent = `${clientMeasurementsMetric[`${valueType}-metric`]}`;
    }
    for (const text of ref.profileCardTexts) {
      const textType = text.dataset.value;
      const textCont = { age: 'Age', height: 'Height (cm)', weight: 'Weight (kg)' };

      text.textContent = `${textCont[textType]}`;
    }
  }
}

function onWeight() {
  const rect = ref.weightValue.getBoundingClientRect();
  const isInViewport = rect.top <= document.documentElement.clientHeight;

  if (isInViewport) {
    if (typeMeasurements === 'imperic') {
      const clientWeight = clientMeasurementsImperic['weight-imperic'];
      const newWeight = clientWeight - 12.5;

      ref.weightUnit.textContent = 'lb';
      ref.weightFromValue.textContent = `${clientWeight}`;
      ref.weightFromUnit.textContent = 'lb';
      ref.weightToUnit.textContent = 'lb';
      dynamicWeight(clientWeight, newWeight);
      window.removeEventListener('scroll', throttleScrollWeight);
    }
    if (typeMeasurements === 'metric') {
      const clientWeight = clientMeasurementsMetric['weight-metric'];
      const newWeight = clientWeight - 5.6;

      ref.weightUnit.textContent = 'kg';
      ref.weightFromValue.textContent = `${clientWeight}`;
      ref.weightFromUnit.textContent = 'kg';
      ref.weightToUnit.textContent = 'kg';
      dynamicWeight(clientWeight, newWeight);
      window.removeEventListener('scroll', throttleScrollWeight);
    }
  }
}

async function dynamicWeight(clientWeight, newWeight) {
  const delta = clientWeight - newWeight;
  for (let i = 0; i <= delta * 10 + 1; i += 1) {
    const timer = await timeOut(20);
    ref.weightValue.textContent = `${clientWeight - i / 10}`;
    ref.weightToValue.textContent = `${clientWeight - i / 10}`;
  }
}

function timeOut(delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(delay), delay);
  });
}

function onBody() {
  const rect = document.querySelector('.summary-card__body-img-wrap').getBoundingClientRect();
  const isInViewport = rect.top <= document.documentElement.clientHeight;

  if (isInViewport) {
    gender === 'male'
      ? document.querySelector('#silhouette-male-1_to').classList.add('active')
      : document.querySelector('#silhouette-female-green-female-1_to').classList.add('active');
    window.removeEventListener('scroll', throttleScrollBody);
  }
}

function onPeople() {
  const rect = document.querySelector('.summary-card__people-img-wrap').getBoundingClientRect();
  const isInViewport = rect.top <= document.documentElement.clientHeight;

  if (isInViewport) {
    gender === 'male'
      ? document.querySelector('#silhouette-male-purple-male-2').classList.add('active')
      : document.querySelector('#silhouette-female-purple-female-2').classList.add('active');
    window.removeEventListener('scroll', throttleScrollPeople);
  }
}

function onBmi() {
  const rect = document.querySelector('.final__summary-bmi-img').getBoundingClientRect();
  const isInViewport = rect.top <= document.documentElement.clientHeight;

  if (isInViewport) {
    if (clientMeasurementsImperic !== undefined && typeMeasurements === 'imperic') {
      const heightInch =
        Number(
          `${clientMeasurementsImperic['height-ft']}.${clientMeasurementsImperic['height-inch']}`,
        ) * 12;
      const bmiValue =
        (clientMeasurementsImperic['weight-imperic'] / (heightInch * heightInch)) * 703;

      addBmiStyle(bmiValue);
      dynamicBmiValue(bmiValue);
      window.removeEventListener('scroll', throttleScrollBmi);
    }

    if (clientMeasurementsMetric !== undefined && typeMeasurements === 'metric') {
      const heightM = clientMeasurementsMetric['height-metric'] / 100;
      const bmiValue = clientMeasurementsMetric['weight-metric'] / (heightM * heightM);

      addBmiStyle(bmiValue);
      dynamicBmiValue(bmiValue);
      window.removeEventListener('scroll', throttleScrollBmi);
    }
  }
}

async function dynamicBmiValue(bmiValue) {
  for (let i = 0; i <= bmiValue * 10 + 1; i += 1) {
    const timer = await timeOut(10);
    document.querySelector('.final__summary-bmi-img-value').textContent = `${0 + i / 10}`;
  }
}

function addBmiStyle(bmiValue) {
  if (bmiValue <= 18.5) {
    const transform = '(80px, 145px)';
    const styleMarkup = createBmiMarkup(transform);
    ref.bmiSvg.insertAdjacentHTML('afterbegin', styleMarkup);
    ref.bmiSubtitle.textContent = 'Underweight';
  }
  if (bmiValue > 18.5 && bmiValue <= 24.9) {
    const transform = '(135px, 113px)';
    const styleMarkup = createBmiMarkup(transform);
    ref.bmiSvg.insertAdjacentHTML('afterbegin', styleMarkup);
    ref.bmiSubtitle.textContent = 'Healthy Weight';
  }
  if (bmiValue > 24.9 && bmiValue <= 29.9) {
    const transform = '(190px, 63px)';
    const styleMarkup = createBmiMarkup(transform);
    ref.bmiSvg.insertAdjacentHTML('afterbegin', styleMarkup);
    ref.bmiSubtitle.textContent = 'Overweight';
  }
  if (bmiValue > 29.9) {
    const transform = '(250px, 23px)';
    const styleMarkup = createBmiMarkup(transform);
    ref.bmiSvg.insertAdjacentHTML('afterbegin', styleMarkup);
    ref.bmiSubtitle.textContent = 'Obesity';
  }
}

function createBmiMarkup(transform) {
  return `<style>
          
          #bmi-phase-3-chart-gradient {
            animation: bmi-phase-3-chart-gradient_c_o 3000ms linear 1 normal forwards
          }

          @keyframes  bmi-phase-3-chart-gradient_c_o {
            0% {
              opacity: 0
            }

            3.333333% {
              opacity: 0
            }

            20% {
              opacity: 1
            }

            100% {
              opacity: 1
            }
          }

          #bmi-phase-3-chart-curve {
            animation: bmi-phase-3-chart-curve_s_do 3000ms linear 1 normal forwards
          }

          @keyframes  bmi-phase-3-chart-curve_s_do {
            0% {
              stroke-dashoffset: 385.9
            }

            16.666667% {
              stroke-dashoffset: 0
            }

            100% {
              stroke-dashoffset: 0
            }
          }

          #bmi-phase-3-pointer-3_ts {
            animation: bmi-phase-3-pointer-3_ts__ts 3000ms linear 1 normal forwards
          }

          @keyframes  bmi-phase-3-pointer-3_ts__ts {
            0% {
              transform: translate${transform} scale(0, 0)
            }

            3.333333% {
              transform: translate${transform} scale(0, 0);
              animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1)
            }

            20% {
              transform: translate${transform} scale(1, 1)
            }

            100% {
              transform: translate${transform} scale(1, 1)
            }
          }

          #bmi-phase-3-value-3 {
            animation: bmi-phase-3-value-3_c_o 3000ms linear 1 normal forwards
          }

          @keyframes  bmi-phase-3-value-3_c_o {
            0% {
              opacity: 0
            }

            10% {
              opacity: 0
            }

            20% {
              opacity: 1
            }

            100% {
              opacity: 1
            }
          }
          
        </style>`;
}

function onCalories() {
  const rect = ref.caloriesSvg.getBoundingClientRect();
  const isInViewport = rect.top <= document.documentElement.clientHeight;

  let bmrValue = null;

  if (isInViewport) {
    if (clientMeasurementsImperic !== undefined && typeMeasurements === 'imperic') {
      const heightInch =
        Number(
          `${clientMeasurementsImperic['height-ft']}.${clientMeasurementsImperic['height-inch']}`,
        ) * 12;

      if (gender === 'male') {
        bmrValue =
          6.23 * clientMeasurementsImperic['weight-imperic'] +
          12.7 * heightInch -
          6.8 * clientMeasurementsImperic['age-imperic'] +
          66;
      }
      if (gender === 'female') {
        bmrValue =
          4.35 * clientMeasurementsImperic['weight-imperic'] +
          4.7 * heightInch -
          4.7 * clientMeasurementsImperic['age-imperic'] +
          655;
      }
      addCaloriesStyle(bmrValue);
      window.removeEventListener('scroll', throttleScrollCalories);
    }

    if (clientMeasurementsMetric !== undefined && typeMeasurements === 'metric') {
      if (gender === 'male') {
        bmrValue =
          10 * clientMeasurementsMetric['weight-metric'] +
          6.25 * clientMeasurementsMetric['height-metric'] -
          5 * clientMeasurementsMetric['age-metric'] +
          5;
      }
      if (gender === 'female') {
        bmrValue =
          10 * clientMeasurementsMetric['weight-metric'] +
          6.25 * clientMeasurementsMetric['height-metric'] -
          5 * clientMeasurementsMetric['age-metric'] -
          161;
      }
      addCaloriesStyle(bmrValue);
      window.removeEventListener('scroll', throttleScrollCalories);
    }
  }
}

function addCaloriesStyle(bmrValue) {
  const caloriesMarkup = createCaloriesMarkup(bmrValue);
  ref.caloriesSvg.insertAdjacentHTML('afterbegin', caloriesMarkup);
}

function createCaloriesMarkup(bmrValue) {
  const bmrRound = Math.round(bmrValue / 100) * 100;
  const bmrRange = `${bmrRound} - ${bmrRound + 100}`;
  document.querySelector('.final__summary-card-heading--calories').textContent = `${bmrRange}  Cal`;
  if (bmrValue <= 1250) {
  }
  if (bmrValue > 1250 && bmrValue <= 2500) {
    return `<svg id="calories-phase-2" class="calorie_animations" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 279 180" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
  <style>
          
          #calories-phase-2-solid {
            animation: calories-phase-2-solid_c_o 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-2-solid_c_o {
            0% {
              opacity: 0
            }
  
            6.666667% {
              opacity: 0
            }
  
            16.666667% {
              opacity: 1
            }
  
            100% {
              opacity: 1
            }
          }
  
          #calories-phase-2-calories {
            animation: calories-phase-2-calories_c_o 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-2-calories_c_o {
            0% {
              opacity: 0
            }
  
            16.666667% {
              opacity: 0
            }
  
            26.666667% {
              opacity: 1
            }
  
            100% {
              opacity: 1
            }
          }
  
          #calories-phase-2-2350-2450 {
            animation: calories-phase-2-2350-2450_c_o 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-2-2350-2450_c_o {
            0% {
              opacity: 0
            }
  
            13.333333% {
              opacity: 0
            }
  
            26.666667% {
              opacity: 1
            }
  
            100% {
              opacity: 1
            }
          }
  
          #calories-phase-2-placeholder {
            animation: calories-phase-2-placeholder_s_do 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-2-placeholder_s_do {
            0% {
              stroke-dashoffset: 417.11
            }
  
            16.666667% {
              stroke-dashoffset: 0
            }
  
            100% {
              stroke-dashoffset: 0
            }
          }
  
          #calories-phase-2-inidcator-2 {
            animation: calories-phase-2-inidcator-2_s_do 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-2-inidcator-2_s_do {
            0% {
              stroke-dashoffset: 110.27
            }
  
            16.666667% {
              stroke-dashoffset: 0
            }
  
            100% {
              stroke-dashoffset: 0
            }
          }
          
        </style>
  <defs>
  <linearGradient id="calories-phase-2-solid-fill" x1="140" y1="9" x2="140" y2="142" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
  <stop id="calories-phase-2-solid-fill-0" offset="0%" stop-color="hsla(0,0%,100%,0.1)"></stop>
  <stop id="calories-phase-2-solid-fill-1" offset="100%" stop-color="hsla(0,0%,100%,0)"></stop>
  </linearGradient>
  <linearGradient id="calories-phase-2-2350-2450-fill" x1="74" y1="87" x2="206" y2="87" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
  <stop id="calories-phase-2-2350-2450-fill-0" offset="0%" stop-color="#ff592d"></stop>
  <stop id="calories-phase-2-2350-2450-fill-1" offset="100%" stop-color="#f90"></stop>
  </linearGradient>
  <linearGradient id="calories-phase-2-tspan4-fill" x1="-0.492203" y1="-14.603106" x2="131.507797" y2="-14.603106" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
  <stop id="calories-phase-2-tspan4-fill-0" offset="0%" stop-color="#ff592d"></stop>
  <stop id="calories-phase-2-tspan4-fill-1" offset="100%" stop-color="#f90"></stop>
  </linearGradient>
  <linearGradient id="calories-phase-2-inidcator-2-stroke" x1="6.99999" y1="149" x2="139" y2="5" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
  <stop id="calories-phase-2-inidcator-2-stroke-0" offset="0%" stop-color="#ff592d"></stop>
  <stop id="calories-phase-2-inidcator-2-stroke-1" offset="100%" stop-color="#f90"></stop>
  </linearGradient>
  </defs>
  <g id="calories-phase-2-calories-phase-2"><text id="calories-phase-2-0" dx="0" dy="0" font-family="Roboto" font-size="18" font-weight="400" fill="#fff">
  <tspan id="calories-phase-2-tspan1" x="1" y="177.152" font-family="Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">
  0
  </tspan>
  </text><text id="calories-phase-2-5000" dx="0" dy="0" font-family="Roboto" font-size="18" font-weight="400" fill="#fff">
  <tspan id="calories-phase-2-tspan2" x="237.57" y="177.152" font-family="Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">
  5000
  </tspan>
  </text>
  <path id="calories-phase-2-solid" d="M139.5,9C66.3223,9,7,68.5461,7,142h265C272,68.5461,212.678,9,139.5,9Z" opacity="0" fill="url(#calories-phase-2-solid-fill)"></path><text id="calories-phase-2-calories" dx="0" dy="0" font-family="Roboto" font-size="18" font-weight="400" opacity="0" fill="#fff">
  <tspan id="calories-phase-2-tspan3" x="107.539" y="119.152" font-family="Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">
  Calories
  </tspan>
  </text><text id="calories-phase-2-2350-2450" dx="0" dy="0" font-family="Roboto" font-size="24" font-weight="700" opacity="0" fill="url(#calories-phase-2-2350-2450-fill)">
  <tspan id="calories-phase-2-tspan4" x="74.4922" y="95.2031" font-family="Roboto" font-size="24" font-weight="700" font-style="normal" fill="url(#calories-phase-2-tspan4-fill)">${bmrRange}</tspan>
  </text>
  <path id="calories-phase-2-placeholder" d="M272,142C272,68.5461,212.678,9,139.5,9C66.3223,9,7,68.5461,7,142" transform="matrix(-1 0 0 1 279 0)" fill="none" stroke="var(--calories-arch)" stroke-width="14" stroke-linecap="round" stroke-dashoffset="417.11" stroke-dasharray="417.11"></path>
  <path id="calories-phase-2-inidcator-2" d="M139.27,9C100.497,9,65.6214,25.7746,41.4282,52.5" fill="none" stroke="url(#calories-phase-2-inidcator-2-stroke)" stroke-width="18" stroke-linecap="round" stroke-dashoffset="110.27" stroke-dasharray="110.27"></path>
  </g>
  <style>
          
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.gstatic.com/l/font?kit=KFOmCnqEu92Fr1Me5X5AIxoNGPLGoMsvHhLYbits&amp;skey=a0a0114a1dcab3ac&amp;v=v29) format('truetype');
          }
  
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url(https://fonts.gstatic.com/l/font?kit=KFOlCnqEu92Fr1MmWUlvAwUyCuzCp7t6TjjVZDBzDEar&amp;skey=c06e7213f788649e&amp;v=v29) format('truetype');
          }
          
        </style>
  </svg>`;
  }
  if (bmrValue > 2500 && bmrValue <= 3750) {
    return `<svg id="calories-phase-3" class="calorie_animations" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 279 180" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
  <style>
          
          #calories-phase-3-solid {
            animation: calories-phase-3-solid_c_o 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-3-solid_c_o {
            0% {
              opacity: 0
            }
  
            6.666667% {
              opacity: 0
            }
  
            16.666667% {
              opacity: 1
            }
  
            100% {
              opacity: 1
            }
          }
  
          #calories-phase-3-calories {
            animation: calories-phase-3-calories_c_o 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-3-calories_c_o {
            0% {
              opacity: 0
            }
  
            16.666667% {
              opacity: 0
            }
  
            26.666667% {
              opacity: 1
            }
  
            100% {
              opacity: 1
            }
          }
  
          #calories-phase-3-2350-2450 {
            animation: calories-phase-3-2350-2450_c_o 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-3-2350-2450_c_o {
            0% {
              opacity: 0
            }
  
            13.333333% {
              opacity: 0
            }
  
            26.666667% {
              opacity: 1
            }
  
            100% {
              opacity: 1
            }
          }
  
          #calories-phase-3-placeholder {
            animation: calories-phase-3-placeholder_s_do 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-3-placeholder_s_do {
            0% {
              stroke-dashoffset: 417.11
            }
  
            16.666667% {
              stroke-dashoffset: 834.22
            }
  
            100% {
              stroke-dashoffset: 834.22
            }
          }
  
          #calories-phase-3-inidcator-3 {
            animation: calories-phase-3-inidcator-3_s_do 3000ms linear 1 normal forwards
          }
  
          @keyframes  calories-phase-3-inidcator-3_s_do {
            0% {
              stroke-dashoffset: 111.1
            }
  
            6.666667% {
              stroke-dashoffset: 111.1
            }
  
            16.666667% {
              stroke-dashoffset: 222.2
            }
  
            100% {
              stroke-dashoffset: 222.2
            }
          }
          
        </style>
  <defs>
  <linearGradient id="calories-phase-3-solid-fill" x1="140" y1="9" x2="140" y2="142" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
  <stop id="calories-phase-3-solid-fill-0" offset="0%" stop-color="hsla(0,0%,100%,0.1)"></stop>
  <stop id="calories-phase-3-solid-fill-1" offset="100%" stop-color="hsla(0,0%,100%,0)"></stop>
  </linearGradient>
  <linearGradient id="calories-phase-3-2350-2450-fill" x1="74" y1="87" x2="206" y2="87" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
  <stop id="calories-phase-3-2350-2450-fill-0" offset="0%" stop-color="#ff592d"></stop>
  <stop id="calories-phase-3-2350-2450-fill-1" offset="100%" stop-color="#f90"></stop>
  </linearGradient>
  <linearGradient id="calories-phase-3-tspan4-fill" x1="-0.328102" y1="-14.603106" x2="131.671898" y2="-14.603106" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
  <stop id="calories-phase-3-tspan4-fill-0" offset="0%" stop-color="#ff592d"></stop>
  <stop id="calories-phase-3-tspan4-fill-1" offset="100%" stop-color="#f90"></stop>
  </linearGradient>
  <linearGradient id="calories-phase-3-inidcator-3-stroke" x1="104.853" y1="150.609" x2="238.428" y2="5.63214" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
  <stop id="calories-phase-3-inidcator-3-stroke-0" offset="0%" stop-color="#ff592d"></stop>
  <stop id="calories-phase-3-inidcator-3-stroke-1" offset="100%" stop-color="#f90"></stop>
  </linearGradient>
  </defs>
  <g id="calories-phase-3-calories-phase-3"><text id="calories-phase-3-0" dx="0" dy="0" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" fill="#fff">
  <tspan id="calories-phase-3-tspan1" x="1" y="177.152" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">
  0
  </tspan>
  </text><text id="calories-phase-3-5000" dx="0" dy="0" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" fill="#fff">
  <tspan id="calories-phase-3-tspan2" x="237.57" y="177.152" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">
  5000
  </tspan>
  </text>
  <path id="calories-phase-3-solid" d="M139.5,9C66.3223,9,7,68.5461,7,142h265C272,68.5461,212.678,9,139.5,9Z" opacity="0" fill="url(#calories-phase-3-solid-fill)"></path><text id="calories-phase-3-calories" dx="0" dy="0" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" opacity="0" fill="#fff">
  <tspan id="calories-phase-3-tspan3" x="107.539" y="119.152" font-family="calories-phase-3:::Roboto" font-size="18" font-weight="400" font-style="normal" fill="#fff">
  Calories
  </tspan>
  </text><text id="calories-phase-3-2350-2450" dx="0" dy="0" font-family="calories-phase-3:::Roboto" font-size="24" font-weight="700" opacity="0" fill="url(#calories-phase-3-2350-2450-fill)">
  <tspan id="calories-phase-3-tspan4" class="calories-subtitle" x="74.3281" y="95.2031" font-family="calories-phase-3:::Roboto" font-size="24" font-weight="700" font-style="normal" fill="url(#calories-phase-3-tspan4-fill)">${bmrRange}</tspan>
  </text>
  <path id="calories-phase-3-placeholder" d="M272,142C272,68.5461,212.678,9,139.5,9C66.3223,9,7,68.5461,7,142" fill="none" stroke="var(--calories-arch)" stroke-width="14" stroke-linecap="round" stroke-dashoffset="417.11" stroke-dasharray="417.11"></path>
  <path id="calories-phase-3-inidcator-3" d="M139.5,9c39.082,0,74.211,16.984,98.463,44" fill="none" stroke="url(#calories-phase-3-inidcator-3-stroke)" stroke-width="18" stroke-linecap="round" stroke-dashoffset="111.1" stroke-dasharray="111.1"></path>
  </g>
  <style>
          
          @font-face {
            font-family: 'calories-phase-3:::Roboto';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.gstatic.com/l/font?kit=KFOmCnqEu92Fr1Me5X5AIxoNGPLGoMsvHhLYbits&amp;skey=a0a0114a1dcab3ac&amp;v=v29) format('truetype');
          }
  
          @font-face {
            font-family: 'calories-phase-3:::Roboto';
            font-style: normal;
            font-weight: 700;
            src: url(https://fonts.gstatic.com/l/font?kit=KFOlCnqEu92Fr1MmWUlvAwUyCuzCp7t6TjjVZDBzDEar&amp;skey=c06e7213f788649e&amp;v=v29) format('truetype');
          }
          
        </style>
  </svg>`;
  }
  if (bmrValue > 3750) {
  }
}

function onWater() {
  const rect = ref.bottleContainer.getBoundingClientRect();
  const isInViewport = rect.top <= document.documentElement.clientHeight;

  if (isInViewport) {
    if (clientMeasurementsImperic !== undefined && typeMeasurements === 'imperic') {
      const clientWeight = clientMeasurementsImperic['weight-imperic'];
      const waterVolume = (clientWeight * 0.04) / 2.204;
      addWaterMarkup(waterVolume);
      window.removeEventListener('scroll', throttleScrollWater);
    }
    if (clientMeasurementsMetric !== undefined && typeMeasurements === 'metric') {
      const clientWeight = clientMeasurementsMetric['weight-metric'];
      const waterVolume = clientWeight * 0.04;
      addWaterMarkup(waterVolume);
      window.removeEventListener('scroll', throttleScrollWater);
    }
  }
}

function addWaterMarkup(waterVolume) {
  const bottles = ref.bottleContainer.children;
  const fullBottles = Math.floor(waterVolume);

  for (let i = 0; i <= fullBottles && i < bottles.length; i += 1) {
    bottles[i].classList.add('single-bottle');
  }

  if (bottles.length - fullBottles > 0) {
    bottles[fullBottles].classList.add('single-bottle--semifilled');
  }
  document.querySelector('.water-intake-value').textContent = waterVolume.toFixed(1);
  const style = createWaterMarkup(waterVolume);
  ref.bottleContainer.insertAdjacentHTML('afterend', style);
}

function createWaterMarkup(waterVolume) {
  const fullHight = 65;
  const indexOfPoint = String(waterVolume).indexOf('.');
  const partBootle = Math.floor(
    (fullHight / 10) * Number(String(waterVolume.toFixed(1)).slice(indexOfPoint + 1)),
  );
  return `<style>
        .bottle-container {
          display: flex;
          height: 80px;
        }

        [dir="rtl"] .bottle-container {
          height: 100%;
        }

        .single-bottle {
          width: 27px;
          position: relative;
        }

        .single-bottle:not(:first-child) {
          margin-left: 3px;
        }

        .single-bottle svg {
          width: 100%;
          height: 100%;
        }

        .single-bottle span {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: auto;
          background-color: #33c6f5;
          animation: 2s bottle;
          animation-fill-mode: forwards;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        [dir="rtl"] .single-bottle {
          margin-left: 3px;
        }

        [dir="rtl"] .single-bottle span {
          bottom: 3px;
        }

        .single-bottle--semifilled span {
          animation: 2s bottleSemifilled;
          animation-fill-mode: forwards
        }

        @keyframes  bottle {
          0% {
            height: 1px;
            opacity: 0
          }

          100% {
            height: 65px;
            opacity: 1
          }
        }

        @keyframes  bottleSemifilled {
          0% {
            height: 1px;
            opacity: 0
          }

          100% {
            height: ${partBootle}px;
            opacity: 1
          }
        }
                </style>`;
}

function onHelpModal(e) {
  e.preventDefault();
  const dataModal = e.target.dataset.modal;
  const dataAction = e.target.dataset.action;
  if (dataAction === 'open') {
    for (const button of ref.closeModals) {
      if (button.dataset.modal === dataModal) {
        button.style.display = 'flex';
      }
    }
    for (const button of ref.openModals) {
      if (button.dataset.modal === dataModal) {
        button.style.display = 'none';
      }
    }

    for (const help of ref.helpModals) {
      if (help.dataset.modal === dataModal) {
        help.style.opacity = '1';
      }
    }
  }

  if (dataAction === 'close') {
    for (const button of ref.closeModals) {
      if (button.dataset.modal === dataModal) {
        button.style.display = 'none';
      }
    }
    for (const button of ref.openModals) {
      if (button.dataset.modal === dataModal) {
        button.style.display = 'flex';
      }
    }

    for (const help of ref.helpModals) {
      if (help.dataset.modal === dataModal) {
        help.style.opacity = '0';
      }
    }
  }
}
