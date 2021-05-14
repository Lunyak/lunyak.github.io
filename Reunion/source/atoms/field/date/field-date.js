import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru';

export default class FieldDate {
  static get2DigitFmt(val) {
    return `0${val}`.slice(-2);
  }

  constructor(el) {
    if (!el) return false;

    this.apiUrl = el.dataset.api;

    this.events = [];
    this.control = el;
    this.calendarWrapper = el.querySelector('.field-date__calendar');
    this.calendarBtn = el.querySelector('.field-date__icon');
    this.calendarInput = el.querySelector('.field-date__input');
    this.calendarInput.control = this;
    this.modeRange = this.calendarInput.querySelector('[data-mode]') ? 'range' : 'single';
    this.config = {
      locale: Russian,
      inline: true,
      dateFormat: 'd.m.Y',
      enable: [],
      monthSelectorType: 'static',
      yearSelectorType: 'static',
      mode: this.modeRange,
    };

    this.calendar = flatpickr(this.calendarInput, { ...this.config });

    this.initEvents();
  }

  setCalendar(data) {
    this.calendar.set('enable', data);
  }

  initEvents() {
    const {
      calendar,
      calendarBtn,
      calendarInput,
      calendarWrapper,
    } = this;

    calendarInput.addEventListener('click', () => {
      this.toggleCalendar();
    });

    document.addEventListener('click', (event) => {
      const isClickInsideCalendar = calendar.calendarContainer.contains(event.target);
      const isClickInsideBtn = calendarBtn.contains(event.target);
      const isClickInsideInput = calendarInput.contains(event.target);

      if (!isClickInsideCalendar && !isClickInsideBtn && !isClickInsideInput) {
        calendar.calendarContainer.style.height = '0';
        calendar.calendarContainer.style.opacity = '0';
        calendarWrapper.classList.remove('form-date__calendar--active');
        calendarBtn.classList.remove('field-date__icon--open');
      }
    });
  }

  toggleCalendar() {
    const { calendar, calendarWrapper, calendarBtn } = this;
    const activeCls = 'form-date__calendar--active';
    const iconActiv = 'field-date__icon--open';
    const isActive = calendarWrapper.classList.contains(activeCls);
    const isIcon = calendarBtn.classList.contains(iconActiv);

    const height = isActive ? '0' : 'auto';
    const opacity = isActive ? '0' : '1';

    calendar.calendarContainer.style.height = height;
    calendar.calendarContainer.style.opacity = opacity;

    calendarWrapper.classList[!isActive ? 'add' : 'remove'](activeCls);
    calendarBtn.classList[!isIcon ? 'add' : 'remove'](iconActiv);
  }
}
