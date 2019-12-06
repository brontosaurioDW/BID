$(document).ready(function(){
	$('.mv-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/icons/left.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='img/icons/right.png'>"
	});
  });