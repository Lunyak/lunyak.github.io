
$("span.menu").click(function(){
  $(".top-nav ul").slideToggle(500, function(){
  });
});

jQuery(document).ready(function($) {
  $(".scroll").click(function(event){		
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
  });
});

$(document).ready(function() {
  $().UItoTop({ easingType: 'easeOutQuart' });
});
