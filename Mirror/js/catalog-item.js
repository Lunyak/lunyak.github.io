
$(".tabs__item span").click(function() {
  $(".tabs__item span").removeClass('tabs__item-active');
  $(this).addClass('tabs__item-active');
})

$('.catalog-item-popup-title img').on('click', function(){
  $('.catalog-item-popup').fadeOut();
});
$('#catalog-btn-basket').on('click', function(){
  $('.catalog-item-popup').fadeIn();
});
$('.catalog-item-popup-button .btn-opacity').on('click', function(){
  $('.catalog-item-popup').fadeOut();
});

