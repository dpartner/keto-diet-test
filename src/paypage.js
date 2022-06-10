let gender = localStorage.getItem('gender');
if (gender === null) {
  gender = 'female';
}

if (gender === 'male') {
  const allIcons = document.querySelectorAll('.pay__payment-icon-wrap');
  for (const icon of allIcons) {
    icon.classList.add('pay__payment-icon-wrap--male');
  }

  const allCards = document.querySelectorAll('.pay__form-checkbox-wrap');
  for (const card of allCards) {
    card.classList.add('pay__form-checkbox-wrap--male');
  }
  const allCardsOldPrice = document.querySelectorAll('.pay__payment-price-old');
  for (const price of allCardsOldPrice) {
    price.classList.add('pay__payment-price-old--male');
  }
  const allCardsPopular = document.querySelectorAll('.pay__payment-price-popular');
  for (const popular of allCardsPopular) {
    popular.classList.add('pay__payment-price-popular--male');
  }
  const allDiscountPrice = document.querySelectorAll('.pay__payment-total-price-new');
  for (const discount of allDiscountPrice) {
    discount.classList.add('pay__payment-total-price-new--male');
  }
  const allFormButton = document.querySelectorAll('.pay__button');
  for (const button of allFormButton) {
    button.classList.add('pay__button--male');
  }
  const allCheckIcons = document.querySelectorAll('.pay__get-list-svg');
  for (const icon of allCheckIcons) {
    icon.classList.add('pay__get-list-svg--male');
  }
}

const form = document.querySelector('.pay__form');
const formSecond = document.querySelector('.pay__form--second');

localStorage.setItem('tariffPlan', '1month');

function addHiddenInputs() {
  const email = localStorage.getItem('email');
  const markup = `<input type="hidden" name="email" value="${email}">`;
  form.insertAdjacentHTML('afterbegin', markup);
  formSecond.insertAdjacentHTML('afterbegin', markup);
}

addHiddenInputs();

form.addEventListener('change', onRadioChange);
formSecond.addEventListener('change', onRadioChangeSecond);

function onRadioChange(e) {
  const radioValue = form.firstPayment.value;
  const discountValue = document.querySelector('.pay__discount-percent');
  const oldPrice = document.querySelector('.total-price-old');
  const newPrice = document.querySelector('.total-price-new');
  const totalPrice = document.querySelector('.total-price');

  if (radioValue === '2month') {
    const percentDiscount = 50;
    discountValue.textContent = percentDiscount;
    oldPrice.textContent = e.target.getAttribute('totalOld');
    newPrice.textContent = e.target.getAttribute('totalNew');
    const total =
      Number(e.target.getAttribute('totalOld')) - Number(e.target.getAttribute('totalNew'));
    totalPrice.textContent = total.toFixed(2);
    localStorage.setItem('tariffPlan', '2month');
  }
  if (radioValue === '1month') {
    const percentDiscount = 40;
    discountValue.textContent = percentDiscount;
    oldPrice.textContent = e.target.getAttribute('totalOld');
    newPrice.textContent = e.target.getAttribute('totalNew');
    const total =
      Number(e.target.getAttribute('totalOld')) - Number(e.target.getAttribute('totalNew'));
    totalPrice.textContent = total.toFixed(2);
    localStorage.setItem('tariffPlan', '1month');
  }
  if (radioValue === 'oneTime') {
    const percentDiscount = 68;
    discountValue.textContent = percentDiscount;
    oldPrice.textContent = e.target.getAttribute('totalOld');
    newPrice.textContent = e.target.getAttribute('totalNew');
    const total =
      Number(e.target.getAttribute('totalOld')) - Number(e.target.getAttribute('totalNew'));
    totalPrice.textContent = total.toFixed(2);
    localStorage.setItem('tariffPlan', 'oneTime');
  }
}
function onRadioChangeSecond(e) {
  const radioValue = formSecond.firstPayment.value;
  const discountValue = document.querySelector('.pay__discount-percent--second');
  const oldPrice = document.querySelector('.total-price-old--second');
  const newPrice = document.querySelector('.total-price-new--second');
  const totalPrice = document.querySelector('.total-price--second');

  if (radioValue === '2month') {
    const percentDiscount = 50;
    discountValue.textContent = percentDiscount;
    oldPrice.textContent = e.target.getAttribute('totalOld');
    newPrice.textContent = e.target.getAttribute('totalNew');
    const total =
      Number(e.target.getAttribute('totalOld')) - Number(e.target.getAttribute('totalNew'));
    totalPrice.textContent = total.toFixed(2);
    localStorage.setItem('tariffPlan', '2month');
  }
  if (radioValue === '1month') {
    const percentDiscount = 40;
    discountValue.textContent = percentDiscount;
    oldPrice.textContent = e.target.getAttribute('totalOld');
    newPrice.textContent = e.target.getAttribute('totalNew');
    const total =
      Number(e.target.getAttribute('totalOld')) - Number(e.target.getAttribute('totalNew'));
    totalPrice.textContent = total.toFixed(2);
    localStorage.setItem('tariffPlan', '1month');
  }
  if (radioValue === 'oneTime') {
    const percentDiscount = 68;
    discountValue.textContent = percentDiscount;
    oldPrice.textContent = e.target.getAttribute('totalOld');
    newPrice.textContent = e.target.getAttribute('totalNew');
    const total =
      Number(e.target.getAttribute('totalOld')) - Number(e.target.getAttribute('totalNew'));
    totalPrice.textContent = total.toFixed(2);
    localStorage.setItem('tariffPlan', 'oneTime');
  }
}
