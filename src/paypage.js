let gender = localStorage.getItem('gender');
if (gender === null) {
  gender = 'female';
}

console.log(gender);

function onloadPage(gender) {
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
  }
}

onloadPage(gender);
