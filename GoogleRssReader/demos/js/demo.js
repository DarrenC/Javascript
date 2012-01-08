$(function(){

	$('.accordion').accordion({
		autoHeight  : false,
		collapsible : true,
		active      : false // start compressed
	});

	

	
	$('#slider3')
	.anythingSlider({
		navigationFormatter : function(i, panel){
			return ['Top', 'Right', 'Bottom', 'Left'][i - 1];
		}
	})
	.anythingSliderFx({
		'.caption-top'    : [ 'caption-Top', '50px' ],
		'.caption-right'  : [ 'caption-Right', '130px', '1000', 'easeOutBounce' ],
		'.caption-bottom' : [ 'caption-Bottom', '50px' ],
		'.caption-left'   : [ 'caption-Left', '130px', '1000', 'easeOutBounce' ]
	})
	/* use this code to have the caption slide in and out from the bottom with each panel
	.anythingSliderFx({
		inFx: {
			'.caption-top'    : { top: 0, opacity: 0.8, duration: 400 },
			'.caption-right'  : { right: 0, opacity: 0.8, duration: 1000, easing: 'easeOutBounce' },
			'.caption-bottom' : { bottom: 0, opacity: 0.8, duration: 400 },
			'.caption-left'   : { left: 0, opacity: 0.8, duration: 1000, easing: 'easeOutBounce' }
		},
		outFx: {
			'.caption-top'    : { top: -50, opacity: 0, duration: 200 },
			'.caption-right'  : { right: -150, opacity: 0, duration: 500, easing: 'easeOutBounce' },
			'.caption-bottom' : { bottom: -50, opacity: 0, duration: 200 },
			'.caption-left'   : { left: -150, opacity: 0, duration: 500, easing: 'easeOutBounce' }
		}
	})
	*/
	// add a close button (x) to the caption
	/*.find('div[class*=caption]')
		.css({ position: 'absolute' })
		.prepend('<span class="close">x</span>')
		.find('.close').click(function(){
			var cap = $(this).parent(),
				ani = { bottom : -50 }; // bottom
			if (cap.is('.caption-top')) { ani = { top: -50 }; }
			if (cap.is('.caption-left')) { ani = { left: -150 }; }
			if (cap.is('.caption-right')) { ani = { right: -150 }; }
			cap.animate(ani, 400);
		});*/

	/* use this code if you only want the caption to appear when you hover over the panel */
	.find('.panel')
		.find('div[class*=caption]').css({ position: 'absolute' }).end()
		.hover(function(){ showCaptions( $(this) ); }, function(){ hideCaptions( $(this) ); });

	showCaptions = function(el){
		var $this = el;
		if ($this.find('.caption-top').length) { $this.find('.caption-top').show().animate({ top: 0, opacity: 1 }, 400); }
		if ($this.find('.caption-right').length) { $this.find('.caption-right').show().animate({ right: 0, opacity: 1 }, 400); }
		if ($this.find('.caption-bottom').length) { 
			$this.find('.caption-bottom').show().animate({ bottom: 0, opacity: 1 }, 400);
			$this.find('.dcTitle').show().animate({ bottom: 50, opacity: 1 }, 400);
		}
		if ($this.find('.caption-left').length) { $this.find('.caption-left').show().animate({ left: 0, opacity: 1 }, 400); }
	};
	hideCaptions = function(el){
		var $this = el;
		if ($this.find('.caption-top').length) { $this.find('.caption-top').stop().animate({ top: -50, opacity: 0 }, 400); }
		if ($this.find('.caption-right').length) { $this.find('.caption-right').stop().animate({ right: -150, opacity: 0 }, 400); }
		if ($this.find('.caption-bottom').length) { 
			$this.find('.caption-bottom').stop().animate({ bottom: -50, opacity: 0 }, 400);
			$this.find('.dcTitle').stop().animate({ bottom: 0, opacity: 1 }, 400);
		}
		if ($this.find('.caption-left').length) { $this.find('.caption-left').stop().animate({ left: -150, opacity: 0 }, 400); }
	};

	// hide all captions initially
	hideCaptions( $('#slider3 .panel') );


});