$(function () {
  var size = $(".item").length;
  $(".item").css({
    transform: "translate3d(0,0,-300px)",
    "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
    "z-index": "7",
  });

  $(".item").eq(0).css({
    transform: "translate3d(0,0,0)",
    "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
    "z-index": "10",
  });

   // if (window.innerWidth > 1000) {
  $(".item").eq(1).css({
      transform: "translate3d(65%,0,-150px)",
      "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
      "z-index": "9",
  });
   // } else {
   //    $(".item").eq(1).css({
   //       "opacity": "0",
   // })
   // }
  $(".item").eq(2).css({
    transform: "translate3d(150%,0,-400px)",
    "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
    "z-index": "8",
  });
//   №3 справа   //
   // if (window.innerWidth > 810) {
  $(".item").eq(3).css({
      transform: "translate3d(220%,0,-600px)",
      "box-shadow": "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
      "z-index": "7",
  });
   // } else {
   //    $(".item").eq(1).css({
   //       "opacity": "0",
   // })
   // }
  $(".item")
    .eq(size - 1)
    .css({
      transform: "translate3d(-65%,0,-150px)",
      "box-shadow":
        "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
      "z-index": "9",
    });

  $(".item")
    .eq(size - 2)
    .css({
      transform: "translate3d(-150%,0,-400px)",
      "box-shadow":
        "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
      "z-index": "8",
    });
  $(".item")
    .eq(size - 3)
    .css({
      transform: "translate3d(-220%,0,-600px)",
      "box-shadow":
        "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
      "z-index": "7",
    });

  $(".item").click(function (e) {
    var no = $(this).data("no");
    slide(no);
  });
  $(".slider__btn > a.prev").click(function (e) {
    e.preventDefault();
    var size = $(".item").length;
    var no = $(".item.on").data("no");
    if (no - 1 >= 0) {
      slide(no - 1);
    } else {
      slide(size - no - 1);
    }
  });
  $(".slider__btn > a.next").click(function (e) {
    e.preventDefault();
    var size = $(".item").length;
    var no = $(".item.on").data("no");
    if (no + 1 < size) {
      slide(no + 1);
    } else {
      slide(size - no - 1);
    }
  });
});

function slide(no) {
  var size = $(".item").length;
  var curr = $(".item[data-no='" + no + "']");
  var items = $(".item");
  var prev = no - 1 >= 0 ? no - 1 : size - no - 1;
  var prev2 = prev - 1 >= 0 ? prev - 1 : size - prev - 1;
  var prev3 = prev2 - 1 >= 0 ? prev2 - 1 : size - prev2 - 1;
  var next = no + 1 < size ? no + 1 : size - no - 1;
  var next2 = next + 1 < size ? next + 1 : size - no - 2;
  var next3 = next2 + 1 < size ? next2 + 1 : size - no - 2;

  items.removeClass("on");
  curr.addClass("on");
  const windowCard = $(window).width();

  $(".item").each(function () {
    var tg = $(this);
    switch (tg.data("no")) {
      case no:
        tg.css({
          transform: "translate3d(0,0,0)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "10",
          opacity: "1",
        });
        break;
      case prev:
        tg.css({
          transform: "translate3d(-65%,0,-150px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "9",
          opacity: "1",
        });
        break;
      case prev2:
        tg.css({
          transform: "translate3d(-150%,0,-400px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "8",
          opacity: "1",
        });
        break;
      case prev3:
        tg.css({
          transform: "translate3d(-220%,0,-600px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "7",
          opacity: "1",
        });
        break;
      case next:
        tg.css({
          transform: "translate3d(65%,0,-150px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "9",
          opacity: "1",
        });
        break;
      case next2:
        tg.css({
          transform: "translate3d(150%,0,-400px)",
          "box-shadow":
            "0 13px 25px 0 rgba(0,0,0,.3), 0 11px 7px 0 rgba(0,0,0,.19)",
          "z-index": "8",
          opacity: "1",
        });
        break;
      case next3:
      //   const windowWidth = $(window).width();

      //   if (windowWidth > 1000) {
          tg.css({
            transform: "translate3d(220%,0,-600px)",
            "box-shadow":
              "0 13px 25px 0 rgba(0,0,0,.1), 0 11px 7px 0 rgba(0,0,0,.1)",
            "z-index": "7",
            opacity: "1",
          });
      //   } else {
      //     tg.css({
      //       opacity: "0",
      //     });
      //   }
        break;
    }
  });
}

// burger menu //

let isClosed = true;

$(document).ready(function () {
  $(".burger").on("click", function () {
    const windowWidth = $(window).width();

    if (isClosed) {
      isClosed = false;

      $(".nav").css({
        display: "flex",
      });

      if (windowWidth < 521) {
        $(".title").css({
          opacity: "0",
        });
      }
    } else {
      isClosed = true;

      if (windowWidth < 521) {
        $(".title").css({
          opacity: "1",
        });
      }

      $(".nav").css({
        display: "none",
      });
    }
  });
});


// убираем титульный текст при выпадании бургера //
$(window).resize(function () {
  const windowWidth = $(window).width();

  if (windowWidth > 521) {
    $(".title").css({
      opacity: "1",
    });
    isClosed = true;
  }
});


//  условия закрытия/открытия бургера //
let burger = true;

$(document).ready(function () {
  $(".burger").on("click", function () {
    if (burger) {
      $(".nav__burger-wrap").show();
      $(".burger").removeClass("burger__statick");
      $(".burger").addClass("burger__click");
      burger = false;
    } else {
      $(".nav__burger-wrap").hide();
      $(".burger").addClass("burger__statick");
      $(".burger").removeClass("burger__click");
      burger = true;
    }
  });
});


// slider - custom //
$(document).ready(function () {
  $(".custom__slider").slick({
  centerMode: true,
  slidesToShow: 1,
  variableWidth: true,
  responsive: [
      {
      breakpoint: 1300,
      settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1,
      },
      },
      {
      settings: {
      arrows: false,
      centerMode: true,
      slidesToShow: 1,
      },
      },
    ],
  });
});


  /*fixed Header */
$(function(){

  let nav = $(".header__inner");
  let windowWidth = $(window).innerWidth();
  let content = $("#header");
  let contentH = content.innerHeight();
  let scrollPos = $(window).scrollTop();
  let NavToggle = $("#NavToggle");

  // checkScroll(scrollPos, contentH);

  $(window).on("scroll resize", function() {
      scrollPos = $(this).scrollTop();

      if( scrollPos > contentH - 80 ) {
        nav.addClass("fixed");
      } else {
        nav.removeClass("fixed");
      }
  });


   /* Smoof scroll */
  $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      nav.removeClass("show");

      $("html, body").animate({
          scrollTop: elementOffset - 70
      }, 1000);
  });

    /* Nav Toggle */
  NavToggle.on("click", function(event) {
      event.preventDefault();

      nav.toggleClass("show")
  });
});