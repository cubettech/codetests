$(window).load(function() {

	// Screen shuffle
	$screens = $('.screen .dev > li');

	$screens.each(function(index, el) {
		// console.log();
		infinite_animate({cl:'.screen .dev > li.'+($(this).attr('class'))+' ol', nth:1, ele:null, speed:1000, delay:8000});
		// infinite_animate({cl:'.screen .dev > li.'+($(this).attr('class'))+'', nth:1, ele:null, speed:1000, delay:10000});
	});

	$sshots = $('.sshots');
	if ($sshots.length) {
		$sshots.slick({
			dots: true,
			arrows: false,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true
		});

	};


	$screens.live('click', function(event) {
		/* Act on the event */

		$('.popScreen').remove();


		var $_ = $(this);
		var id     = $_.attr('class');
		var ol     = $_.find('ol');
		var $body  = $('body');
		var ukey   = uid();

		console.log(ukey);

		var li = '';
		ol.find('li').each(function(index, el) {
			li += '<li><img src="'+$(this).attr('data-img')+'"/></li>';
		});

		o = '<div class="popScreen" data-id="'+ukey+'">';

			o += '<div class="_x"></div>';
			o += '<div class="imgZoomer">:)</div>';
			o += '<div class="imgWrapper"><ol class="slickkk">'+li+'</ol></div>';

		o += '</div>';

		$body.append(o);

		var $popScreen = $('.popScreen[data-id='+ukey+']');
		$_x = $popScreen.find('._x');
		$slickkk = $popScreen.find('.slickkk');

		// $popScreen.fadeIn(100);
		$popScreen
		.css({
			top : media().height
		})
		.animate({
			top : 0,
			opacity : 1
		}, 300, 'easeOutExpo', function(){

			$slickkk.fadeIn(200);
			$slickkk.slick({
				// dots: true,
				// arrows: false,
				infinite: true,
				// autoplay: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true
			});
			// $slickkk.slickGoTo(4);
		});

		ukey = false;

		$_x.live('click', function(event) {

			
			$popScreen.css({
				height : media().height,
				width  : media().width,
			});

			$popScreen.animate({
				top : media().height
			}, 1000, 'easeOutExpo', function(){
				$popScreen.remove();
			});
			
		});
	});


}); 

