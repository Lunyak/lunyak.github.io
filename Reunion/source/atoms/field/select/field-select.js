import Choices from 'choices.js';

export default class FieldSelect {
  static init(parent = document) {
    [].slice.call(parent.querySelectorAll('.field-select__select')).forEach((item) => {
      new FieldSelect(item);
    });
  }

  constructor(el) {
    this.selectContainer = el;
    this.selectName = el.name;
    this.selectChoices = new Choices(this.selectContainer, {
      shouldSort: false,
    });

    if (this.selectChoices.getValue(true)) {
      window.activeCity = this.selectChoices.getValue(true);
    }

    this.selectChoices.passedElement.element.addEventListener(
      'change', (e) => {
        const event = new window.CustomEvent('showTooltip', { bubbles: true, detail: e.detail.value });
        e.target.dispatchEvent(event);
        this.selectChoices.containerInner.element.removeAttribute('data-invalid');
      },
      false,
    );
  }
}
