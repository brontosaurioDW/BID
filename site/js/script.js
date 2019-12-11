$(document).ready(function(){
	$('.mv-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		nextArrow:"<img class='a-right control-c next slick-next' src='img/icons/right.png'>",
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/icons/left.png'>"
	});
  });