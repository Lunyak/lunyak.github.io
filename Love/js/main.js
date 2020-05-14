$(document).ready(function(){


   $('.content__top__item').click(function(event){
		event.preventDefault();
		console.log('Click!');

		$('.slider__box').hide();
		var href = $(this).attr('href'); // '#private'

		console.log(href);
		$(href).fadeIn();
	});

	$(window).scroll(function(){
		console.log($(this).scrollTop() );

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