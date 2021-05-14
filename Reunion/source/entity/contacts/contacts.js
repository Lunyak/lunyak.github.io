import MainFeedback from '@organisms/section/feedback/section-feedback';
import SectionContacts from '@organisms/section/contacts/section-contacts';

require('./contacts.scss');

// document.addEventListener('lazybeforeunveil', (e) => {
//   if (e.target.lazyInit) {
//     e.target.lazyInit();
//   }
// });

// Array.from(document.querySelectorAll('.section-firstscreen')).forEach((item) => {
//   item.lazyInit = () => {
//     import('@organisms/section/firstscreen/section-firstscreen').then((module) => {
//       const FirstScreen = module.default;
//       new FirstScreen(item);
//     });
//   };
// });

// Array.from(document.querySelectorAll('.section-job')).forEach((item) => {
//   item.lazyInit = () => {
//     import('@organisms/section/job/section-job').then((module) => {
//       const JobSlider = module.default;
//       new JobSlider(item);
//     });
//   };
// });

// Array.from(document.querySelectorAll('.section-feedback')).forEach((item) => {
//   item.lazyInit = () => {
//     import('@organisms/section/feedback/section-feedback').then((module) => {
//       const MainFeedback = module.default;
//       new MainFeedback(item);
//     });
//   };
// });
Array.from(document.querySelectorAll('.section-feedback')).forEach((feedback) => {
  if (feedback) new MainFeedback(feedback);
});

Array.from(document.querySelectorAll('.section-contacts')).forEach((contacts) => {
  if (contacts) new SectionContacts(contacts);
});
