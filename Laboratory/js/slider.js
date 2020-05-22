
/*

var slider = {
   imgUrl: [],
   imageIndex: 0,
   buttonRight: document.getElementById('button__right'),
   buttonLeft: document.getElementById('button__left'),
   slideImage: document.getElementById('cosmos__img'),

   start: function () {
      var that = this;
      this.buttonRight.addEventListener('click', function(event) {
         that.onShowRightButtonClick(event);
      });
      this.buttonLeft.addEventListener('click', function(event) {
         that.onShowLeftButtonClick(event);
      });

      this.imgUrl.push('../img/cosmos.jpg');
      this.imgUrl.push('../img/cosmos1.jpg');
      this.imgUrl.push('../img/cosmos2.jpg');
      this.imgUrl.push('../img/cosmos3.jpg');
      this.imgUrl.push('../img/cosmos4.jpg');
      this.imgUrl.push('https://new-science.ru/wp-content/uploads/2019/11/5623.jpg');

      this.slideImage.src = this.imgUrl[this.imageIndex];
      this.buttonLeft.disabled = true;
   },

   onShowLeftButtonClick: function (event) {
      this.imageIndex--;
      this.slideImage.src = this.imgUrl[this.imageIndex];
      this.buttonRight.disabled = false;

      if (this.imageIndex === 0) {
         this.buttonLeft.disabled = true;
      }
   },

   onShowRightButtonClick: function (event) {
      this.imageIndex++;
      this.slideImage.src = this.imgUrl[this.imageIndex];
      this.buttonLeft.disabled = false;
      if (this.imageIndex === (this.imgUrl.length - 1)) {
         this.buttonRight.disabled = true;
      }
   },
};

let images2 = document.querySelectorAll('slider__infinity__wrap img');
let current = 0;

function slider2() {
   for (let i = 0; i < images2.length; i++) {
      images2[i].classList.add('opacity0');
   }
}

document.querySelector('.slider__infinity__wrap').onckick = slider2;


*/