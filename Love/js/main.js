$(document).ready(function(){
  $('.content__top__item').click(function(event){
		event.preventDefault();

		$('.slider__box').hide();
		var href = $(this).attr('href'); // '#private'

		$(href).fadeIn();
	});

	$(window).scroll(function(){

		if ($(this).scrollTop() > 1000) {
			$('#scroll').fadeIn();
		} else {
			$('#scroll').fadeOut();
		}
	});

	$('#scroll').click(function(event){
		event.preventDefault();
		$('html').animate({scrollTop:0}, 800)

	});
});

$(function(){

  let nav = $("#link__inner");
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
});
