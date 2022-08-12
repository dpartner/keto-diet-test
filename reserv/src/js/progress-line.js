import { ref } from './quiz-ref';

const onDoneLine = (donePage, qtyPages) => {
  const rect = ref.lineWrap.getBoundingClientRect();
  const allWidth = rect.right - rect.left;
  // const width = ((allWidth - 20) / qtyPages) * (donePage - 1) + 20;
  const width = ((allWidth - 20) / qtyPages) * 2 + donePage * 12;
  ref.line.classList.add('progress-bar__line-done--calc');
  ref.line.style.width = `${width}px`;
};

const clearDoneLine = () => {
  ref.line.classList.remove('progress-bar__line-done--calc');
};

export { onDoneLine, clearDoneLine };
