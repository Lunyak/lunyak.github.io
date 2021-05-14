import JobSlider from '@/source/organisms/section/job/section-job';
import WarehouseSlider from '@/source/organisms/section/warehouse/section-warehouse';
import MainFeedback from '@organisms/section/feedback/section-feedback';
import FirstScreen from '@organisms/section/firstScreen/section-firstScreen';
import Btn from '@atoms/btn/btn';

require('./main.scss');

[].slice.call(document.querySelectorAll('.section-feedback')).forEach((feedback) => {
  if (feedback) new MainFeedback(feedback);
});

[].slice.call(document.querySelectorAll('.section-firstscreen')).forEach((item) => {
  new FirstScreen(item, 'section-firstscreen');
});

[].slice.call(document.querySelectorAll('.section-job')).forEach((item) => {
  new JobSlider(item, 'section-job');
});

[].slice.call(document.querySelectorAll('.section-warehouse')).forEach((item) => {
  new WarehouseSlider(item, 'section-warehouse');
});

const btns = [].slice.call(document.querySelectorAll('.link[data-api]'));
if (btns.length) {
  btns.forEach((el) => {
    new Btn(el);
  });
}
