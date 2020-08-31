$(".slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  variableWidth: true,
});

// $(document).ready(function () {
// $(".custom__slider").slick({
// centerMode: true,
//   // centerPadding: '60px',
// slidesToShow: 1,
// variableWidth: true,
// responsive: [
//     {
//       breakpoint: 1300,
//     settings: {
//     arrows: true,
//     centerMode: true,
//     centerPadding: '40px',
//     slidesToShow: 1,
//     },
//     },
//     {
//       //  breakpoint: 480,
//     settings: {
//     arrows: false,
//     centerMode: true,
//     // centerPadding: '40px',
//     slidesToShow: 1,
//     },
//     },
// ],
// });
// });

// let productRightWidth = document.querySelector(".product__content-right");

// console.log(productRightWidth.clientWidth);

// window.onresize = function () {
//   console.log("1");
//   productWidth();
// };

// function productWidth() {
//   let width = productRightWidth.clientWidth;
//   let dotsItem = document.querySelector(".product__dots--1");

//   if (width >= 865) {
//     dotsItem.style.left = 18 + "%";
//   } else {
//     dotsItem.style.left = width * 0.11 + "px";
//   }
// }
