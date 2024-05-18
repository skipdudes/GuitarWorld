'use strict';


$(function()
{
	var width=1000;
	var animationSpeed=1000;
	var pause=3000;
	var currentSlide=1;
	
	var $slider=$('section');
	var $slideContainer=$slider.find('.slides');
	var $slides=$slideContainer.find('.slide');
	
	var interval;
	
	function startSlider()
	{
		interval=setInterval(function()
		{
			$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function()
				{
					currentSlide++;
					if(currentSlide===$slides.length)
					{
						currentSlide=1;
						$slideContainer.css('margin-left', 0);
					}
					
				});
		}, pause);
	}
	
	function stopSlider()
	{
		clearInterval(interval);
	}
	
	$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);
	
	startSlider();
	
});