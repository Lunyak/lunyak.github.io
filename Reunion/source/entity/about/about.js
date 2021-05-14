import MainFeedback from '@organisms/section/feedback/section-feedback';
import FirstScreen from '@organisms/section/firstScreen/section-firstScreen';
import SliderPerson from '@organisms/section/person/section-person';

require('./about.scss');

[].slice.call(document.querySelectorAll('.section-feedback')).forEach((feedback) => {
  new MainFeedback(feedback);
});

[].slice.call(document.querySelectorAll('.section-firstscreen')).forEach((item) => {
  new FirstScreen(item, 'section-firstscreen');
});

[].slice.call(document.querySelectorAll('.section-person')).forEach((item) => {
  new SliderPerson(item, 'section-person');
});
