
// main-slide //
$(document).ready(function () {
  $(".main-slider").slick({
  slidesToShow: 1,
  variableWidth: true,
  dots: true,
  arrows: false,
  responsive: [
      {
      breakpoint: 1300,
      settings: {
      },
      },
      {
      settings: {
      centerMode: true,
      slidesToShow: 1,
      },
      },
    ],
  });
});

// material-slider //
$(document).ready(function () {
  $(".material-slider").slick({
  slidesToShow: 1,
  variableWidth: true,
  focusOnSelect: false,
  dots: false,
  arrows: true,
  asNavFor:".material-slider-aside",
  responsive: [
    {
    breakpoint: 760,
    settings: {
    arrows: false,
    slidesToShow: 1,
    },
    }
    ],
  });
});

// slider - material aside//
$(document).ready(function () {
  $(".material-slider-aside").slick({
  slidesToShow: 3,
  vertical: true,
  arrows: false,
  dots: false,
  infinite: true,
  verticalSwiping: true,
  asNavFor:".material-slider",
  responsive: [
    {
    breakpoint: 760,
    settings: {
    arrows: false,
    slidesToShow: 2,
    vertical: false,
    verticalSwiping: false,
    variableWidth: false,
    },
    }
  ],
  });
});


// slider - rewiews //
$(document).ready(function () {
  $(".reviews-slider").slick({
  slidesToShow: 1,
  arrows: true,
  dots: false,
  infinite: true,
  fade: true
  });
});

$(document).ready(function () {
  $(".work-slider").slick({
  slidesToShow: 1,
  arrows: false,
  dots: true,
  infinite: true,
  fade: true
  });
});

let expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function Achicar(control, sHeight, indexPos) {
  control.style.height = sHeight;
  control.style.zIndex = 0;
  if (indexPos != '' && indexPos != null && indexPos != undefined) {
      control.scrollTop = (20 + (24 * parseInt(indexPos)));
  } else control.scrollTop = 0;

$(control).width($(control).attr('data-width-min'));
}

function Agrandar(control, sHeight, indexPos) {
  control.style.height = sHeight;
  control.style.zIndex = 99999;
  if (indexPos != '' && indexPos != null && indexPos != undefined) {
      control.scrollTop = (20 + (24 * parseInt(indexPos)));
  } else control.scrollTop = 0;

  $(control).width($(control).attr('data-width-max'));
}

// checkselect - flat

  (function($) {
	function setChecked(target) {
		var checked = $(target).find("input[type='checkbox']:checked").length;
		if (checked) {
			$(target).find('select option:first').html('Выбрано: ' + checked);
		} else {
			$(target).find('select option:first').html('Этажность');
		}
	}

$.fn.checkselect = function() {
  this.wrapInner('<div class="checkselect-popup-flat"></div>');
  this.prepend(
    '<div class="checkselect-control-flat">' +
      '<select class="form-control-flat"><option></option></select>' +
      '<div class="checkselect-over-flat">' + '<i class="catalog-select-arrow-flat"></i>' + '</div>' +
    '</div>'
  );

  this.each(function(){
    setChecked(this);
  });
  this.find('input[type="checkbox"]').click(function(){
    setChecked($(this).parents('.checkselect-flat'));
  });

  this.parent().find('.checkselect-control-flat').on('click', function(){
    $popup = $(this).next();
    $('.checkselect-popup-flat').not($popup).css('display', 'none');
    if ($popup.is(':hidden')) {
      $popup.css('display', 'block');
      $(this).find('select').focus();
    } else {
      $popup.css('display', 'none');
    }
  });

  $('html, body').on('click', function(e){
    if ($(e.target).closest('.checkselect-flat').length == 0){
      $('.checkselect-popup-flat').css('display', 'none');
    }
  });
};
})(jQuery);

$('.checkselect-flat').checkselect();

// $(document).ready(function(){
//   let catalogSelecArrow = false;
// 	$(".checkselect-control-flat").click(function(){
//     $(".catalog-select-arrow-flat").toggleClass("catalog-select-arrow-rotate");
//     catalogSelecArrow = true;
//     return false;
// 	});
// });



// checkselect - rooms

  (function($) {
	function setChecked(target) {
		var checked = $(target).find("input[type='checkbox']:checked").length;
		if (checked) {
			$(target).find('select option:first').html('Выбрано: ' + checked);
		} else {
			$(target).find('select option:first').html('Комнаты');
		}
	}

$.fn.checkselect = function() {
  this.wrapInner('<div class="checkselect-popup-rooms"></div>');
  this.prepend(
    '<div class="checkselect-control-rooms">' +
      '<select class="form-control-rooms"><option></option></select>' +
      '<div class="checkselect-over-rooms">' + '<i class="catalog-select-arrow-rooms"></i>' + '</div>' +
    '</div>'
  );

  this.each(function(){
    setChecked(this);
  });
  this.find('input[type="checkbox"]').click(function(){
    setChecked($(this).parents('.checkselect-rooms'));
  });

  this.parent().find('.checkselect-control-rooms').on('click', function(){
    $popup = $(this).next();
    $('.checkselect-popup-rooms').not($popup).css('display', 'none');
    if ($popup.is(':hidden')) {
      $popup.css('display', 'block');
      $(this).find('select').focus();
    } else {
      $popup.css('display', 'none');
    }
  });

  $('html, body').on('click', function(e){
    if ($(e.target).closest('.checkselect-rooms').length == 0){
      $('.checkselect-popup-rooms').css('display', 'none');
    }
  });
};
})(jQuery);

$('.checkselect-rooms').checkselect();


// checkselect - scquere

  (function($) {
	function setChecked(target) {
		var checked = $(target).find("input[type='checkbox']:checked").length;
		if (checked) {
			$(target).find('select option:first').html('Выбрано: ' + checked);
		} else {
			$(target).find('select option:first').html('Площадь');
		}
	}

$.fn.checkselect = function() {
  this.wrapInner('<div class="checkselect-popup-square"></div>');
  this.prepend(
    '<div class="checkselect-control-square">' +
      '<select class="form-control-square"><option></option></select>' +
      '<div class="checkselect-over-square">' + '<i class="catalog-select-arrow-square"></i>' + '</div>' +
    '</div>'
  );

  this.each(function(){
    setChecked(this);
  });
  this.find('input[type="number"]').click(function(){
    setChecked($(this).parents('.checkselect-square'));
  });

  this.parent().find('.checkselect-control-square').on('click', function(){
    $popup = $(this).next();
    $('.checkselect-popup-square').not($popup).css('display', 'none');
    if ($popup.is(':hidden')) {
      $popup.css('display', 'block');
      $(this).find('select').focus();
    } else {
      $popup.css('display', 'none');
    }
  });

  $('html, body').on('click', function(e){
    if ($(e.target).closest('.checkselect-square').length == 0){
      $('.checkselect-popup-square').css('display', 'none');
    }
  });
};
})(jQuery);

$('.checkselect-square').checkselect();



$(document).ready(function(){
  let catalogSelecArrowFlat = false;
	$(".checkselect-control-flat").click(function(){
    $(".catalog-select-arrow-flat").toggleClass("catalog-select-arrow-rotate-flat");
    catalogSelecArrowFlat = true;
    return false;
	});
});

$(document).ready(function(){
  let catalogSelecArrowRooms = false;
	$(".checkselect-control-rooms").click(function(){
    $(".catalog-select-arrow-rooms").toggleClass("catalog-select-arrow-rotate-rooms");
    catalogSelecArrowRooms = true;
    return false;
	});
});

$(document).ready(function(){
  let catalogSelecArrowSquare = false;
	$(".checkselect-control-square").click(function(){
    $(".catalog-select-arrow-square").toggleClass("catalog-select-arrow-rotate-square");
    catalogSelecArrowSquare = true;
    return false;
	});
});

let = inputNumber = document.getElementById('catalog-form-square-input-up').onkeydown = function (e) {
  return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
}

let = inputNumber = document.getElementById('catalog-form-square-input-down').onkeydown = function (e) {
  return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
}

document.getElementById('catalog-form-square-input-up').oninput = function () {
  if (this.value.length > 6) this.value = this.value.substr(0, 6); // в поле можно ввести только 7 символов
}
document.getElementById('catalog-form-square-input-down').oninput = function () {
  if (this.value.length > 6) this.value = this.value.substr(0, 6); // в поле можно ввести только 7 символов
}



$('.checkselect-filter').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.checkselect-filter .dropdown-menu li').click(function () {
        $(this).parents('.checkselect-filter').find('span').text($(this).text());
        $(this).parents('.checkselect-filter').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
});





$(document).ready(function () {
  let headerTechnologyArrow = false;
    var cur_width = $(window).width();
    if (cur_width >= 570) {
      $(".technology").hover( function () {
        onOffLinksTechnology();
      });
    } else if (cur_width <= 570) {
      $(".technology").on("click", function () {
        onOffLinksTechnology();
      });
    }
})

function onOffLinksTechnology(){
    $(".header-technology-arrow").toggleClass("rotate");
    $(".link-list-drop-technology").toggleClass("display-flex");
    headerTechnologyArrow = true;
    return false;
};





$(document).ready(function () {
  let headerServicesArrow = false;
    var cur_width = $(window).width();
    if (cur_width >= 570) {
      $(".services").hover( function () {
        onOffLinksServices();
      });
    } else if (cur_width <= 570) {
      $(".services").on("click", function () {
        onOffLinksServices();
      });
    }
})

function onOffLinksServices(){
    $(".header-services-arrow").toggleClass("rotate");
    $(".link-list-drop-services").toggleClass("display-flex");
    headerServicesArrow = true;
    return false;
};



$(document).ready(function () {
  let headerCompanyArrow = false;
    var cur_width = $(window).width();
    if (cur_width >= 570) {
      $(".company").hover( function () {
        onOffLinksCompany();
      });
    } else if (cur_width <= 570) {
      $(".company").on("click", function () {
        onOffLinksCompany();
      });
    }
})

function onOffLinksCompany(){
    $(".header-company-arrow").toggleClass("rotate");
    $(".link-list-drop-company").toggleClass("display-flex");
    headerCompanyArrow = true;
    return false;
};


 /*fixed Header */
 $(function(){

  let nav = $(".header");
  let windowWidth = $(window).innerWidth();
  let content = $(".main");
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
});




var cur_width = $(window).width();

$(document).ready(function(){

  var cur_width = $(window).width();

  $(window).resize(function(){
      if($(window).width() <= 1300 && cur_width > 1300){
          //reload
          location.reload();

      } else if ($(window).width() > 570 && cur_width <= 570){
        //reload
        location.reload();

      } else if ($(window).width() > 320 && cur_width <= 320){
      //reload
      location.reload();
      }
  });
});


  let burger = true;

function navBig() {
      if (burger) {
        $(".burger-off").toggleClass("burder-transform");
        $(".burger-off").css({
          "opacity": "0",
          "visibility": "hidden"
        });
        $(".burger-on").toggleClass("burder-transform");
        $(".burger-on").css({
          "opacity": "1",
          "visibility": "visible"
        });
        $(".nav").slideDown();
        $(".link-list-drop-company, .link-list-drop-services, .link-list-drop-technology").fadeIn();

        burger = false;
    } else {

      $(".burger-off").toggleClass("burder-transform");
      $(".burger-off").css({
        "opacity": "1",
        "visibility": "visible"
      });
      $(".burger-on").toggleClass("burder-transform");
      $(".burger-on").css({
        "opacity": "0",
        "visibility": "hidden"
      });
      $(".nav").slideUp(200);
      $(".link-list-drop-company, .link-list-drop-services, .link-list-drop-technology").fadeOut(200);
      burger = true;
  };
};

function navMin() {
      if (burger) {
        $(".burger-off").toggleClass("burder-transform");
        $(".burger-off").css({
          "opacity": "0",
          "visibility": "hidden"
        });
        $(".burger-on").toggleClass("burder-transform");
        $(".burger-on").css({
          "opacity": "1",
          "visibility": "visible"
        });
        $(".nav").slideDown();
        // $(".link-list-drop-company, .link-list-drop-services, .link-list-drop-technology").fadeIn();

        burger = false;
    } else {

      $(".burger-off").toggleClass("burder-transform");
      $(".burger-off").css({
        "opacity": "1",
        "visibility": "visible"
      });
      $(".burger-on").toggleClass("burder-transform");
      $(".burger-on").css({
        "opacity": "0",
        "visibility": "hidden"
      });

      $(".nav").slideUp(200);
      // $(".link-list-drop-company, .link-list-drop-services, .link-list-drop-technology").fadeOut(200);
      burger = true;
  };
};


// запускает относительно ширины экрана навигационное меню

$(document).ready(function () {
  $(".header-wrap-burger").on("click", function () {
    // let width = $(window).width();
    var cur_width = $(window).width();
    if (cur_width >= 570) {
      navBig();
    } else if (cur_width <= 570) {
      navMin();
    }
  })
});


// $(document).ready(function () {
//   $(".catalog-button-parametr").on("click", function () {
//     $(".catalog-form-drop-wrap").addClass("display-block");
//   })
// });

$(document).ready(function () {
  $(".catalog-button-parametr").on("click", function () {
    $(".catalog-form-drop-wrap").fadeIn();
  });
  $(".search-burger-min").on("click", function () {
    $(".catalog-form-drop-wrap").fadeOut();
  });
  $(".catalog-button-drop").on("click", function () {
    $(".catalog-form-drop-wrap").fadeOut();
  });
});

// $(window).resize(function () {
//   // const windowWidth = $(window).width();

//   // if (windowWidth > 1200) {
//     $(".nav__burger-wrap").hide();
//     $(".burger").removeClass("burger__click");
//     $(".burger").addClass("burger__statick");
//     burger = true;
//   // }
// });

