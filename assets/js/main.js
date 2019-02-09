(function(){

	'use strict';

	var $slickElement = $('.slider-wrapper'),
			$status = $('.slider-paging');

	function applySlick () {
		$slickElement.slick({
			arrows: true,
			dots: true,
			prevArrow: $('.slider-buttons .prev'),
			nextArrow: $('.slider-buttons .next')
		});
	}

	function currentAndTotalSlider() {
		$status.text('1 / ' + $('.slick-slide:not(.slick-cloned)').length)
		$slickElement.on('init afterChange', function(e, slick, currentSlide){
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + ' / ' + slick.slideCount);
		});
	}

	applySlick();
	currentAndTotalSlider();

}($));