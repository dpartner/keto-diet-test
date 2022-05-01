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

window.addEventListener('scroll', throttleScrollWeight);
window.addEventListener('scroll', throttleScrollBody);
window.addEventListener('scroll', throttleScrollPeople);

console.log(clientMeasurementsImperic);

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
      dynamycWeight(clientWeight, newWeight);
      window.removeEventListener('scroll', throttleScrollWeight);
    }
    if (typeMeasurements === 'metric') {
      const clientWeight = clientMeasurementsMetric['weight-metric'];
      const newWeight = clientWeight - 5.6;

      ref.weightUnit.textContent = 'kg';
      ref.weightFromValue.textContent = `${clientWeight}`;
      ref.weightFromUnit.textContent = 'kg';
      ref.weightToUnit.textContent = 'kg';
      dynamycWeight(clientWeight, newWeight);
      window.removeEventListener('scroll', throttleScrollWeight);
    }
  }
}

async function dynamycWeight(clientWeight, newWeight) {
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
