import axios from 'axios';
import html from '@/util';
import FormValidate from '@base/script/form-validate';
import popup from '@molecules/popup/popup';
import FieldSelect from '@atoms/field/select/field-select';
import FieldDate from '@atoms/field/date/field-date';
import FieldFile from '@atoms/field/file/field-file';
import template from './popup-types-callback.pug';

window.InputMask = require('inputmask');

require('./popup-types-callback.scss');

class PopupCallback {
  static init(parent = document) {
    [].slice.call(parent.querySelectorAll('.popup-types-callback')).forEach((item) => {
      new PopupCallback(item);
    });
  }

  constructor(el) {
    if (!el) return;
    this.popup = el;
    if (this.popup) {
      this.popupBtn = el.querySelector('.popup-types-callback__btn');
      this.popupForm = this.popup.querySelector('form');
      this.idVacancy = this.popupForm.hasAttribute('data-id') ? this.popupForm.getAttribute('data-id') : '';

      this.inputTel = Array.from(this.popup.querySelectorAll('input[type="tel"]'));
      if (this.inputTel) {
        this.inputTel.forEach((item) => {
          window.Inputmask({ mask: '+7 (999) 999-99-99', showMaskOnHover: false }).mask(item);
        });
      }

      this.inputDate = this.popup.querySelector('.field-date');
      if (this.inputDate) {
        this.inputDate = new FieldDate(this.inputDate);
      }

      this.selects = [].slice.call(this.popup.querySelectorAll('.field-select__select'));
      if (this.selects.length > 0) {
        this.selects.forEach((item) => {
          if (item) {
            new FieldSelect(item);

            if (item.name === 'city') {
              item.addEventListener(
                'change', (e) => {
                  this.value = e.detail.value;
                  const params = this.idVacancy ? {
                    value: this.value,
                    id: this.idVacancy,
                  } : {
                    value: this.value,
                  };
                  const url = this.popupForm.getAttribute('data-url');
                  if (url && this.value) {
                    axios.get(url, {
                      params,
                    }).then((response) => {
                      this.enableDates = response.data.date;
                      this.inputDate.setCalendar(this.enableDates || []);
                    });
                  }
                },
                false,
              );
            }
          }
        });
      }

      this.inputFile = this.popup.querySelector('.field-file');
      if (this.inputFile) {
        const eventsConfig = {
          sendingmultiple: this.syncFormWithFormData.bind(this),
          success: this.reloadPopup.bind(this),
        };
        this.fileDrop = new FieldFile(this.inputFile, eventsConfig, this.popupForm.action);
      }

      if (this.popupBtn) {
        this.popupBtn.addEventListener('click', (e) => { this.sendFormData(e); });
      }
    }
  }

  syncFormWithFormData(data, xhr, formData) {
    if (this.popupForm) {
      const fields = Array.from(this.popupForm.elements);
      if (fields) {
        fields.forEach((el) => {
          if (el.type !== 'checkbox' || el.type !== 'radio') {
            if (el.name && el.value) {
              formData.append(el.name, el.value);
            }
          } else if (el.type === 'checkbox' || el.type === 'radio') {
            if (el.checked && el.name) {
              formData.append(el.name, el.checked);
            }
          }
        });
      }
    }
  }

  validateForm() {
    if (!this.popupForm) return false;
    const formValid = new FormValidate(this.popupForm);
    if (this.popupForm.querySelectorAll('input') && !formValid.validForm()) {
      this.popupForm
        .querySelector('input')
        .parentNode.setAttribute('data-invalid', 'true');
    }
    if (formValid.validForm()) {
      return true;
    }
    return false;
  }

  reloadPopup(data, response) {
    if (response) {
      this.popupForm.reset();
      popup.close();
      popup.open({
        type: 'callback',
        data: {
          info: response,
          className: 'popup-types-callback--medium',
        },
      });
    }
  }

  sendFormData(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.validateForm()) {
      const formDataObj = {};
      const formData = new FormData();
      if (!this.fileDrop || this.fileDrop.file.files.length === 0) {
        this.syncFormWithFormData(false, false, formData);
        const requestConfig = {
          url: this.popupForm.action,
          method: this.popupForm.method,
        };

        formData.forEach((value, name) => {
          formDataObj[name] = value;
        });

        if (this.popupForm.method === 'get') {
          requestConfig.params = formDataObj;
        } else {
          requestConfig.data = formDataObj;
        }

        axios(requestConfig).then((response) => {
          if (response.data) {
            this.reloadPopup(false, response.data);
          }
        });
      } else {
        this.fileDrop.file.processQueue();
      }
    }
  }
}

export default (props) => ({
  render() {
    return html(template, props);
  },
  init(parent) {
    PopupCallback.init(parent);
  },
});
