import popup from '@molecules/popup/popup';
import axios from 'axios';

export default class Btn {
  constructor(parent) {
    if (!parent) return false;
    this.parent = parent;
    this.initEvents();
  }

  initEvents() {
    this.parent.addEventListener('click', (e) => {
      e.preventDefault();
      this.idVacancy = this.parent.parentNode.id;
      axios.get(this.parent.dataset.api)
        .then((response) => {
          popup.open({
            type: 'callback',
            data: {
              info: response.data,
              id: this.idVacancy,
            },
          });
        })
        .catch();
    });
  }
}
