
  $('.form-send').submit(function(event) {
              event.preventDefault();
              $.ajax({
                  type: "POST",
                  url: "mailer/smart.php",
                  data: $(this).serialize()
              }).done(function() {
                  $(this).find("input").val("");
                  // alert("Сообщение успешно отправлено");
                  event.preventDefault();

                  $('.modal-call').fadeOut();

                  $("form").trigger("reset");
                $('.modal-thanks').fadeIn();
              });
              return false;
          });


$('form').submit(function(event) {
event.preventDefault();
$.ajax({
type: "POST",
url: "mailer/smart.php",
data: $(this).serialize()
}).done(function() {
$(this).find("input").val("");
$('.modal-thanks').fadeIn();
$('.modal-call').fadeOut();
$('.close').on('click', function(event) {
 event.preventDefault();
 $('#thanks').fadeOut();
 $('div').removeClass('modal-backdrop');
$('body').removeClass('modal-open')
$('body').removeAttr( "style" )
});
$("form").trigger("reset");
});
return false;
});
$('form').submit(function(event) {
event.preventDefault();
$.ajax({
type: "POST",
url: "mailer/smart.php",
data: $(this).serialize()
}).done(function() {
$(this).find("input").val("");
$('.modal-thanks').fadeIn();
$('.modal-gofro1').fadeOut();
$('.close').on('click', function(event) {
 event.preventDefault();
 $('#thanks').fadeOut();
 $('div').removeClass('modal-backdrop');
$('body').removeClass('modal-open')
$('body').removeAttr( "style" )
});
$("form").trigger("reset");
});
return false;
});



 jQuery(function($){

 $(".phone").mask("+7(999) 999-99-99");

});

$('.make-slider').slick({
 adaptiveHeight: true,
fade: true,
slidesToShow: 1,
      slidesToScroll: 1,
asNavFor: '.make-slider-small',
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="prev"></button>',
    nextArrow: '<button type="button" class="next"></button>'
      
    }
  }
]

});
$('.make-slider-small').slick({
slidesToShow: 4,
slidesToScroll: 1,
asNavFor: '.make-slider',
prevArrow: '<button type="button" class="prev"></button>',
nextArrow: '<button type="button" class="next"></button>',
arrows :true,
focusOnSelect: true
});

$('.feedback-slider').slick({
   infinite: true,
slidesToShow: 3,
arrows: true,
slidesToScroll: 1,
focusOnSelect: true,
 prevArrow: '<button class="feedback-arrow prev2"></button>',
      nextArrow: '<button class="feedback-arrow next2"></button>',
responsive: [

  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="feedback-arrow prev1"></button>',
      nextArrow: '<button class="feedback-arrow next1"></button>'
    }
  }
  
]
});
