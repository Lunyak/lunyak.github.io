import Social from '@atoms/social/social';

require('./inner-news.scss');

const social = [].slice.call(document.querySelectorAll('.container-detail .socials'));
if (social.length) {
  social.forEach((el) => new Social(el));
}
