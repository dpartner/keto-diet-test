const ref = {
  line: document.querySelector('.progress-bar__line-done'),
  wrap: document.querySelector('.progress-bar__line'),
};

export default function onDoneLine(donePage) {
  const rect = ref.wrap.getBoundingClientRect();
  const allWidth = rect.right - rect.left;
  console.log(allWidth);
  const width = ((allWidth - 20) / 13) * (donePage - 1) + 20;
  ref.line.classList.add('progress-bar__line-done--calc');
  ref.line.style.width = `${width}px`;
}
