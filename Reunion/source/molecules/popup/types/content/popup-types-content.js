import axios from 'axios';
import html from '@/util';
import FormValidate from '@base/script/form-validate';
import popup from '@molecules/popup/popup';
import template from './popup-types-content.pug';

window.InputMask = require('inputmask');

require('./popup-types-content.scss');

class PopupContent {
  static init(parent = document) {
    [].slice.call(parent.querySelectorAll('.popup-types-content')).forEach((item) => {
      new PopupContent(item);
    });
  }

  constructor(el) {
    if (el) {
      this.popup = el;
      this.popupBtn = el.querySelector('.popup-types-content__btn');

      if (this.popupBtn) {
        this.popupBtn.addEventListener('click', (e) => {
          e.preventDefault();

          if (this.popupBtn.type === 'submit') {
            this.popupForm = this.popup.querySelector('form');
            if (this.popupForm) {
              const formValid = new FormValidate(this.popupForm);
              if (this.popupForm.querySelectorAll('input') && !formValid.validForm()) {
                this.popupForm
                  .querySelector('input')
                  .parentNode.setAttribute('data-invalid', 'true');
              }
              if (formValid.validForm()) {
                const filterData = Array.from(this.popupForm.elements).reduce(
                  (summ, item) => {
                    summ[item.name] = item.value;
                    return summ;
                  },
                  {},
                );

                const requestConfig = {
                  url: this.popupForm.action,
                  method: this.popupForm.method,
                };

                if (this.popupForm.method === 'get') {
                  requestConfig.params = filterData;
                } else {
                  requestConfig.data = filterData;
                }

                axios(requestConfig).then((response) => {
                  if (response.data) {
                    this.popupForm.reset();

                    popup.close();

                    popup.open({
                      type: 'content',
                      data: {
                        info: response.data,
                        className: 'popup-types-content--medium',
                      },
                    });
                  }
                });
              }
            }
          } else {
            popup.close();
          }
        });
      }
    }
  }
}

export default (props) => ({
  render() {
    return html(template, props);
  },
  init(parent) {
    PopupContent.init(parent);
  },
});
