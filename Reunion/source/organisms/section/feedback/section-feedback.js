import axios from 'axios';
import FormValidate from '@base/script/form-validate';
import popup from '@molecules/popup/popup';

export default class MainFeedback {
  constructor(el) {
    if (el) {
      this.section = el;
      this.formBtn = el.querySelector('.section-feedback__btn');
      this.sectionForm = this.section.querySelector('form');
      this.sectionInput = Array.from(this.sectionForm.querySelectorAll('.field-input'));

      if (this.formBtn) {
        this.formBtn.addEventListener('click', (e) => {
          e.preventDefault();

          if (this.formBtn.type === 'submit') {
            if (this.sectionForm) {
              const formValid = new FormValidate(this.sectionForm);
              if (formValid.validForm()) {
                const filterData = Array.from(this.sectionForm.elements).reduce(
                  (summ, item) => {
                    summ[item.name] = item.value;
                    return summ;
                  },
                  {},
                );

                const requestConfig = {
                  url: this.sectionForm.action,
                  method: this.sectionForm.method,
                };

                if (this.sectionForm.method === 'get') {
                  requestConfig.params = filterData;
                } else {
                  requestConfig.data = filterData;
                }

                axios(requestConfig).then((response) => {
                  if (response.data) {
                    this.sectionForm.reset();

                    popup.open({
                      type: 'callback',
                      data: {
                        info: response.data,
                        className: 'popup-types-callback--medium',
                      },
                    });
                  }
                });
              }
            }
          }
        });
      }
    }
  }
}
