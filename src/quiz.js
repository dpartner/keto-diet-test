// import './js/progress-percent';
// import './js/progress-line';
import throttle from 'lodash.throttle';
import onPercentage from './js/progress-percent';
import onDoneDot from './js/progress-dot';
import onDoneLine from './js/progress-line';

let pageDone = 5;
const progressWrap = document.querySelector('.progress__percentage');

const throttleScroll = throttle(doneProgress, 700);

window.addEventListener('scroll', throttleScroll);

function doneProgress() {
  const rect = progressWrap.getBoundingClientRect();
  console.log(rect);
  const isInViewport =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  if (isInViewport) {
    onPercentage(pageDone);
    onDoneDot(pageDone);
    onDoneLine(pageDone);
    return window.removeEventListener('scroll', throttleScroll);
  }
}
