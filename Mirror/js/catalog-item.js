
$(".tabs__left").click(function() {
  $(".tabs__right").removeClass('active');
  $(this).addClass('active');
  $("#tab_02").removeClass('active');
  $('#tab_01').addClass('active');
})
$(".tabs__right").click(function() {
  $(".tabs__left").removeClass('active');
  $(this).addClass('active');
  $("#tab_01").removeClass('active');
  $('#tab_02').addClass('active');
})


jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".catalog-item-popup");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
          div.fadeOut();
		}
	});
});


// $(this).parents('.checkselect-category').find('span').text($(this).text());

// $('.tabs__left').click(function () {
//   $(this).addClass('active')
//   $('.tabs__block-left').addClass('active')
// });
// $('.tabs__right').click(function () {
//   $(this).addClass('active')
//   $('.tabs__block-right').addClass('active')
// });


// $(".tabs__left").click(function() {
//   // $(".tabs__left").preventDefault();
//   $(".tabs__block-right").removeClass('active');
//   $(".tabs__block-left").addClass('active');
// })
// $(".tabs__left").click(function() {
//   // $(".tabs__left").preventDefault();
//   $(".tabs__block-left").addClass('active');
//   $(".tabs__block-right").removeClass('active');
// })





$('.catalog-item-popup-title img').on('click', function(){
  $('.catalog-item-popup').fadeOut();
});
$('#catalog-btn-basket').on('click', function(){
  $('.catalog-item-popup').fadeIn();
});
$('.catalog-item-popup-button .btn-opacity').on('click', function(){
  $('.catalog-item-popup').fadeOut();
});



$(".mirror-size").click(function() {
  $(".mirror-size").removeClass('active');
  $(this).addClass('active');
})

$('#catalog-item-width').focus(function(){
	$('.input-size-start label').addClass('active');
	$('#catalog-item-width').attr("placeholder", "");
});
$('#catalog-item-hight').focus(function(){
	$('.input-size-end label').addClass('active');
	$('#catalog-item-hight').attr("placeholder", "");
});


$('.checkselect-count').click(function () {
	$(this).attr('tabindex', 1).focus();
	$(this).toggleClass('active');
	$(this).find('.dropdown-menu').slideToggle(300);
	$(this).find('.arrow-select').toggleClass('active');
});

$('.checkselect-count .dropdown-menu li').click(function () {
	$(this).parents('.checkselect-count').find('span').text($(this).text());
	$(this).parents('.checkselect-count').find('input').attr('value', $(this).attr('id'));
});



// закрываем при клике на не раблчую область select count
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".checkselect-count"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".checkselect-count").removeClass('active');
			$('#dropdown-menu-count').css({"display": "none"});
			$(this).find('.arrow-select').removeClass('active');
		}
	});
});