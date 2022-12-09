const onHelp = ({ pages, pageDone: currentPage, event, gender, svg, basicLightbox }) => {
  event.preventDefault();

  const help = pages[currentPage - 1].help;

  const genderColor =
    gender === 'male' ? 'help__modal-icon-wrap--male' : 'help__modal-icon-wrap--female';

  const svgLink = svg['symbol-defs'];

  const modal = basicLightbox.create(
    `<div class="help__modal-wrap">
        <a href="#" class="help__modal-close-wrap" data-modal="close">
          <svg class="help__modal-close-icon" data-modal="close">
            <use href="${svgLink}#icon-close-modal" data-modal="close"></use>
          </svg>
        </a>
        <div class="help__modal-icon-wrap ${genderColor}">
          <svg class="help__modal-icon">
            <use href="${svgLink}#icon-help-thinner"></use>
          </svg>
        </div>
        <div class="help__modal-desc">
          ${help}
        </div>
      </div>`,
    {
      onShow: modal => {
        window.addEventListener('keydown', escapeKeyCloseModal);
        document.querySelector('body').addEventListener('click', closeModal);
      },
      onClose: modal => {
        window.removeEventListener('keydown', escapeKeyCloseModal);
        document.querySelector('body').removeEventListener('click', closeModal);
      },
    },
  );

  function closeModal(e) {
    if (e.target.dataset.modal === 'close') {
      modal.close();
    }
  }

  function escapeKeyCloseModal(event) {
    if (event.code === 'Escape') {
      modal.close();
    }
  }

  modal.show();
};

function addHelpFromBase() {}

export { onHelp };
