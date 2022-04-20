import { ref } from './quiz-ref';

function onDoneLine(donePage, qtyPages) {
  const rect = ref.lineWrap.getBoundingClientRect();
  const allWidth = rect.right - rect.left;
  const width = ((allWidth - 20) / qtyPages) * (donePage - 1) + 20;
  ref.line.classList.add('progress-bar__line-done--calc');
  ref.line.style.width = `${width}px`;
}

function clearDoneLine() {
  ref.line.classList.remove('progress-bar__line-done--calc');
}

export const onDoneLineExp = (donePage, qtyPages) => onDoneLine(donePage, qtyPages);
export const clearDoneLineExp = () => clearDoneLine();
