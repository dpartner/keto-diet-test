const ref = {
  line: document.querySelector('.progress-bar__line-done'),
  wrap: document.querySelector('.progress-bar__line'),
};

function onDoneLine(donePage, qtyPages) {
  const rect = ref.wrap.getBoundingClientRect();
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
