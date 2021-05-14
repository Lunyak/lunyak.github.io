// import moment from 'moment';

export default class FormValidate {
  static init(parent = document) {
    [].slice
      .call(parent.querySelectorAll('form'))
      .forEach((el) => new FormValidate(el));
  }

  constructor(el) {
    if (!el) return false;

    this.form = el;

    let groups = [];

    if (this.form.elements?.length > 0) {
      groups = [...this.form.elements].reduce((prevGroups, item) => {
        if (item.name in prevGroups) {
          prevGroups[item.name].push(item);
        } else {
          prevGroups[item.name] = [item];
        }
        return prevGroups;
      }, []);

      [...this.form.elements].forEach((element) => {
        element.validators = [];

        if (element.dataset.validator) {
          element.dataset.validator.split('|').forEach((validator) => {
            const validatorParams = validator.split(':');
            const validatorName = validatorParams.shift();

            element.validators.push(
              FormValidate[`${validatorName}Valid`].bind(
                null,
                groups[element.name],
                ...validatorParams,
                this.form,
              ),
            );
          });
        }
      });
    }

    this.initEvents();
  }

  initEvents() {
    const { form } = this;

    [...this.form.elements].forEach((element) => {
      const elValidator = element.dataset.validator;

      if (elValidator && elValidator.includes('ifempty')) {
        const validatorParams = elValidator.split('ifempty:')[1];

        element.addEventListener('focus', () => {
          const isEmpty = FormValidate.ifemptyValid(
            [element],
            validatorParams,
            form,
          );

          element.readOnly = !isEmpty;
          FormValidate.renderError(element, isEmpty);
        });

        element.addEventListener('blur', () => {
          FormValidate.renderError(element, true);
        });
      }
    });

    form.addEventListener('submit', (e) => {
      if (!this.validForm()) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }

  static renderError(element, isValid) {
    if (!isValid) {
      element.parentNode.setAttribute('data-invalid', '');
    } else {
      element.parentNode.removeAttribute('data-invalid', '');
    }

    element.addEventListener('focus', () => {
      element.parentNode.removeAttribute('data-invalid', '');
    });
  }

  static requiredValid(elements, form) {
    const inputsResult = [];
    const ifemptyElements = [];

    [...form.elements].forEach((element) => {
      const elValidator = element.dataset.validator;

      if (elValidator && elValidator.includes('ifempty')) {
        ifemptyElements.push(element);
      }
    });

    const emptyElements = ifemptyElements.some(
      (ifemptyElement) => ifemptyElement.value !== '',
    );

    elements.forEach((element) => {
      if (element.type === 'checkbox' || element.type === 'radio') {
        inputsResult.push(element.checked);
      } else {
        const elValidator = element.dataset.validator;
        if (ifemptyElements.length > 0 && ifemptyElements.includes(element)) {
          const validatorParams = elValidator.split('ifempty:')[1];

          inputsResult.push(
            emptyElements
              && FormValidate.ifemptyValid(
                [ifemptyElements],
                validatorParams,
                form,
              ),
          );
        } else {
          inputsResult.push(element.value !== '');
        }
      }
    });

    return inputsResult.some((element) => element === true);
  }

  // eqElement - input's name for equality check
  static equalValid(elements, eqElement, form) {
    let inputsResult = true;

    elements.forEach((element) => {
      if (form.elements[eqElement].value !== '' || element.value !== '') {
        if (form.elements[eqElement].value !== element.value) {
          inputsResult = false;
        }
      }
    });

    return inputsResult;
  }

  // static afterValid(elements, compareElement, form) {
  //   moment.locale('ru');

  //   const isAfter = [];
  //   const isSame = [];

  //   elements.forEach((element) => {
  //     if (element.value === '' || form.elements[compareElement].value === '') {
  //       return;
  //     }

  //     let dateMask = [];

  //     if (compareElement.startsWith('year')) {
  //       dateMask = ['YYYY'];
  //     } else if (compareElement.startsWith('date')) {
  //       dateMask = ['DD MMMM YYYY'];
  //     } else if (compareElement.startsWith('time')) {
  //       dateMask = ['HH:mm'];
  //     }

  //     const dateFrom = moment(element.value, dateMask).format();
  //     const dateTo = moment(
  //       form.elements[compareElement].value,
  //       dateMask,
  //     ).format();

  //     isAfter.push(moment(dateFrom).isAfter(dateTo));
  //     isSame.push(moment(dateFrom).isSame(dateTo));
  //   });

  //   return (
  //     isAfter.some((element) => element === true)
  //     || isSame.some((element) => element === true)
  //   );
  // }

  static emailValid(elements) {
    const isEmail = [];

    elements.forEach((element) => {
      if (element.value !== '') {
        const re = /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;
        isEmail.push(re.test(element.value));
      }
    });

    return isEmail.some((element) => element === true);
  }

  static phoneValid(elements) {
    let isPhone = true;

    elements.forEach((element) => {
      if (element.value !== '') {
        isPhone = /^[+]?[\s\0-9]*[(]?[0-9]{1,4}[)]?[-\s\0-9]*$/g.test(
          element.value,
        );
      }
    });

    return isPhone;
  }

  static innValid(elements, otherParam) {
    let isINN = true;

    elements.forEach((element) => {
      isINN = /^([0-9]{10}|[0-9]{12})$/.test(element.value);
    });

    let result = isINN;

    if (otherParam === 'ogrn') {
      const ogrnResult = FormValidate.ogrnValid(elements);
      result = isINN || ogrnResult;
    }

    return result;
  }

  static ogrnValid(elements) {
    let isOGRN = true;

    elements.forEach((element) => {
      if (element.value !== '') {
        isOGRN = /^([0-9]{13}|[0-9]{15})$/.test(element.value);
      }
    });

    return isOGRN;
  }

  static ifemptyValid(elements, emptyElement, form) {
    let inputsResult = true;

    if (
      elements.some((element) => document.activeElement === element)
      && form.elements[emptyElement].value !== ''
    ) {
      inputsResult = false;
    }

    return inputsResult;
  }

  static lengthValid(elements, otherParam) {
    let inputsResult = true;

    if (elements.some((element) => element.value.length !== Number(otherParam))) {
      inputsResult = false;
    }

    return inputsResult;
  }

  validForm() {
    const { form } = this;
    let validFields = true;

    [...form.elements].forEach((element) => {
      let elemValid = true;

      if (element.validators) {
        element.validators.forEach((validator) => {
          const result = validator();

          if (!result) {
            validFields = false;
            elemValid = false;
          }

          FormValidate.renderError(element, elemValid);
        });
      }
    });

    return validFields;
  }
}
