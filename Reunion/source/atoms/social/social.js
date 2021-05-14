export default class Social {
  constructor(parent) {
    if (!parent) return false;
    this.parent = parent;
    this.icon = [].slice.call(parent.querySelectorAll('.social__link'));
    this.initEnents();
  }

  initEnents() {
    this.icon.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        e.preventDefault();
        const value = icon.getAttribute('href');

        window.navigator.clipboard.writeText(value).then(() => {
          icon.classList.add('social__link--copy');
          setTimeout(() => {
            icon.classList.remove('social__link--copy');
          }, 800);
        });
      });
    });
  }
}
