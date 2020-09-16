let circleButtons = document.querySelectorAll('.circle');
let texts = document.querySelectorAll('.main__list-discription');
let containers = document.querySelectorAll('.main__list li');


for(let i=0; i<circleButtons.length; i++) {
  circleButtons[i].addEventListener('click', function(e) {
    let btn = circleButtons[i];
    let text = btn.nextElementSibling.children[1];
    let li = containers[i];
    // console.log(text)

    // if .circle has class 'active' then remove it & close text
    if(btn.classList.contains('active')) {
      btn.classList.remove('active')
      text.classList.remove('active')
      li.classList.remove('active')
    } else {
      // else remove class 'active' from other buttons & texts, add to this one and open text
      Array.from(circleButtons).forEach(item => {
        item.classList.remove('active');
      });
      Array.from(texts).forEach(item => {
        item.classList.remove('active');
      });
      Array.from(containers).forEach(item => {
        item.classList.remove('active');
      });
      btn.classList.add('active');
      text.classList.add('active');
      li.classList.add('active');
    }
  });
}
