import popup from '@molecules/popup/popup';
import axios from 'axios';

export default class Link {
  constructor(wrapper) {
    if (!wrapper) return false;
    this.wrapper = wrapper;
    this.parent = [].slice.call(this.wrapper.querySelectorAll('[data-popup]'));
    this.link = this.wrapper.querySelector('[data-type]');
    this.type = this.link ? this.link.dataset.type : 'callback';
    this.initEvents();
  }

  initEvents() {
    this.parent.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();

        axios.get(element.getAttribute('href'))
          .then((response) => {
            popup.open({
              type: this.type,
              data: {
                info: response.data,
              },
            });
          })
          .catch();
      });
    });
  }
}
