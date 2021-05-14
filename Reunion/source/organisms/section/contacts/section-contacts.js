import Map from '@atoms/map/map';
import FieldSelect from '@atoms/field/select/field-select';
import template from '@atoms/contacts-info/contacts-info.pug';
import html from '@/util';

export default class SectionContacts {
  constructor(wrapper) {
    if (!wrapper) return;
    const map = wrapper.querySelector('.map');
    this.info = wrapper.querySelector('.section-contacts__description-info');

    if (map) {
      new Map(map);

      const selects = [].slice.call(wrapper.querySelectorAll('.field-select'));
      if (selects) {
        selects.forEach((elem) => {
          FieldSelect.init(elem);
        });
      }
    }

    window.addEventListener('showTooltip', (e) => {
      if (e.detail && window.contactsData && window.contactsData.length > 0) {
        const data = window.contactsData.find((el) => el.id === e.detail).tooltip;
        if (data) {
          if (this.info) {
            this.info.innerHTML = html(template, { info: data });
          }
        }
      }
    });
  }
}
