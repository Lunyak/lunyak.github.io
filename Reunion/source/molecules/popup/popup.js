const bodyLock = require('body-scroll-lock');

require('./popup.scss');

class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  static loadTemplate(type) {
    // eslint-disable-next-line prefer-template
    return import('./types/' + type + '/popup-types-' + type + '.js');
  }

  open(props) {
    const { type, data, className } = props;
    this.close();
    bodyLock.disableBodyScroll(this.popup);
    if (className) {
      this.popup.classList.add(className);
    }
    this.constructor.loadTemplate(type).then((responce) => {
      const { default: template } = responce;
      const popup = template(data);
      this.popup.innerHTML = popup.render();
      popup.init(this.popup, this);
      const content = this.popup.querySelector('.popup-layout');
      this.popup.addEventListener('mousedown', (event) => {
        if ((event.target === content.parentElement || event.target === content)
          && !content.contains(event.target)) {
          this.close();
        }
      });
      [].slice.call(this.popup.querySelectorAll('.js-close')).forEach((closeEl) => {
        closeEl.addEventListener('click', this.close.bind(this));
      });
      this.popup.classList.add('popup--open');
    });
  }

  close() {
    this.popup.classList.remove('popup--open');
    // this.popup.classList.remove('popup--bg-dark');
    bodyLock.clearAllBodyScrollLocks();
  }
}

if (window.popup === undefined) {
  const popupEl = document.querySelector('.popup');
  window.popup = (popupEl) ? new Popup(popupEl) : false;
}

const { popup } = window;

export default popup;
