import Link from '@atoms/link/link';

export default class Footer {
  constructor(parent) {
    this.link = [].slice.call(parent.querySelectorAll('.footer__wrapper'));

    if (this.link) {
      this.link.forEach((link) => {
        new Link(link);
      });
    }
  }
}
