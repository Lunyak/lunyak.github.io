import Link from '@atoms/link/link';

export default class Header {
  constructor(menu) {
    const btn = menu.querySelector('.header__btn');
    const headerMenu = menu.querySelector('.header__menu');
    const body = document.getElementsByTagName('body')[0];
    const sticky = menu.offsetTop;
    const btnText = btn.querySelector('.header__btn-text');
    const windowInnerWidth = window.innerWidth;

    this.link = [].slice.call(menu.querySelectorAll('.header__nav-list, .header__menu-list'));
    if (this.link) {
      this.link.forEach((link) => {
        new Link(link);
      });
    }

    btn.addEventListener('click', () => {
      menu.classList.toggle('header--active');
      headerMenu.classList.toggle('active');
      body.classList.toggle('overfloy');
      btn.classList.toggle('header__btn--active');

      if (btn.classList.contains('header__btn--active')) {
        btnText.textContent = btnText.dataset.open;
      } else {
        btnText.textContent = btnText.dataset.close;
      }
    });

    function headerFix() {
      if (window.pageYOffset > sticky) {
        menu.classList.add('header--fixed');
      } else {
        menu.classList.remove('header--fixed');
      }
    }

    if (!menu.classList.contains('header--white')) {
      window.onscroll = () => {
        headerFix();
      };
    }

    window.onresize = () => {
      if (windowInnerWidth >= 1024) {
        headerMenu.classList.remove('active');
        menu.classList.remove('header--active');
        btnText.textContent = btnText.dataset.close;
        body.classList.remove('overfloy');
        btn.classList.remove('header__btn--active');
      }
    };
  }
}
