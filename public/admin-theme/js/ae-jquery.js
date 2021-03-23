
$(document).ready(function() {


	svgData='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve"><path id="grey" d="M151,58.556v64.426c0,4.761-2.539,9.168-6.666,11.547L88.535,166.75c-2.066,1.193-4.367,1.787-6.667,1.787 c-2.3,0-4.6-0.594-6.667-1.787L19.4,134.527c-4.126-2.379-6.666-6.785-6.666-11.545V58.556c0-4.767,2.54-9.167,6.666-11.547 l55.794-32.22c4.126-2.38,9.207-2.38,13.333,0l55.8,32.22C148.453,49.389,150.994,53.789,151,58.556z"/><path id="blue" d="M151,58.556v64.426c0,4.761-2.539,9.168-6.666,11.547L88.535,166.75c-2.066,1.193-4.367,1.787-6.667,1.787 c-2.3,0-4.6-0.594-6.667-1.787L19.4,134.527c-4.126-2.379-6.666-6.785-6.666-11.545V58.556c0-4.767,2.54-9.167,6.666-11.547 l55.794-32.22c4.126-2.38,9.207-2.38,13.333,0l55.8,32.22C148.453,49.389,150.994,53.789,151,58.556z"/><g id="duplicate"></g><linearGradient id="gradient_1_" gradientUnits="userSpaceOnUse" x1="35.2471" y1="30.3789" x2="123.2471" y2="144.3789"><stop offset="0" style="stop-color:#08AFED"/><stop offset="1" style="stop-color:#2790C3"/></linearGradient><path id="gradient" fill="url(#gradient_1_)" d="M151,58.556v64.426c0,4.761-2.539,9.168-6.666,11.547L88.535,166.75 c-2.066,1.193-4.367,1.787-6.667,1.787c-2.3,0-4.6-0.594-6.667-1.787L19.4,134.527c-4.126-2.379-6.666-6.785-6.666-11.545V58.556 c0-4.767,2.54-9.167,6.666-11.547l55.794-32.22c4.126-2.38,9.207-2.38,13.333,0l55.8,32.22 C148.453,49.389,150.994,53.789,151,58.556z"/></svg>';

	svgData2='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" enable-background="new 0 0 80 29" viewBox="0 0 78.5 32" xml:space="preserve3"><path fill-rule="evenodd" clip-rule="evenodd" fill="#2E75FF" d="M0,26.164c0-3.542,2.378-4.52,3.917-5.465	c7.868-4.834,30.569-18.965,31.919-19.837c1.907-1.234,4.725-1.059,6.462,0c1.421,0.867,24.908,15.091,33.395,20.23	c1.884,1.141,3.028,2.542,3.028,4.87c0,0.102,0,1.487,0,1.487H0C0,27.448,0,26.938,0,26.164z"/></svg>';

	// $('nav.main_menu > ul > li > a').each(function(index, el) {
	// 	txt=$(this).html();
	// 	$(this).empty().html(svgData+'<span>'+txt+'</span>');
	// 	$('nav.main_menu').css('opacity', 1);
	// });

	$('ul.rmb > li').each(function(index, el) {
		$(this).prepend(svgData2);
	});

	// Loader ----------------
	$('a').click(function(e) {
		// Scroll click
		if(e.which=='1') {

			_=$(this);
			href=_.attr('href');
			esc='';

			if (_.parents('.onepage-pagination').length || _.hasClass('escapeLoader')){
				esc=1;
			}

			if (window.location==href) {
				return false;
			}
			else if(_.attr('prompt')){

				var args = {
					'av_id'		: 'av_id',
					'heading'	: 'Alert',
					'content'	: _.attr('prompt')+'<br clear><a class="abtn red" href="'+_.attr('href')+'">Sure</a>'+'<a class="abtn _close">Cancel</a>',
				};

				// args['heading']='new heading!';

				av_alert(args);
				return false;

			}else if(_.attr('data-ajax')=='true') {
				_loader('start');
				av_id='av_id';
				if (_.attr('data-option')) {
					av_id=_.attr('data-option');
				};
				$.get(_.attr('data-href'), function( data ) {
					var args = {
						'av_id'		: av_id,
						'heading'	: _.attr('data-heading'),
						'content'	: data,
					};
					av_alert(args);
					_loader('stop');
					return false;
				});
				return false;

			}else if (_.attr('data-bubble')) {
				av_bubble(_,_.attr('data-bubble'));
				return false;

			}else if (href && href!='#' && esc=='') {
				if (e.which == 1) {
					_loader('start');
				};
			}else if(href=='#' && _.find('.hidden').length){
				var args = {
					'av_id'		: 'av_id',
					'heading'	: _.find('.hidden').attr('data-header'),
					'content'	: _.find('.hidden').html(),
				};
				av_alert(args);
				return false;
			}else if(href=='#' && _.next('.hidden').length){

				var args = {
					'av_id'		 : _.attr('av-id'),
					'heading'	 : _.next('.hidden').attr('data-header'),
					'content'	 : _.next('.hidden').html(),
					'beforePopup': window[_.attr('av-beforePopup')] || false,
				};
				av_alert(args);
				return false;
			}else if(_.attr('___')==null){
				return false;
			}

			if ($(this).attr('target')) {
				_loader('stop');
			};

			if (href && !_.attr('data-href')) {
				// clearInterval(nots_refresh);
				// window.location=href;
				_.parents('ul').find('.active').removeClass('active');
				_.parents('li').addClass('active');
				// alert('stop');
				// return false;
			};
		}
	});

	$('._alert > i').live('click', function(event) {
		$('._alert').slideUp(200,'easeInOutCirc');
	});
	
	/*MEDIA*/
	$('.mbtn.openMenu').live('click', function(event) {
		/* Act on the event */
		
		if ($('header.main_header > ._inner > .rt').hasClass('clk')) {

			$('header.main_header > ._inner > .rt').addClass('close').delay(600).queue(function(next){
			    $(this).removeClass('close');
			    $('header.main_header > ._inner > .rt').removeClass('clk');
			    next();
			});
			$(this).removeClass('clk');
		} else{
			$('header.main_header > ._inner > .rt').removeClass('close');
			$('header.main_header > ._inner > .rt').addClass('clk');
			$(this).addClass('clk');
		};
		
	});

	$('.scroll_top').live('click', function(event) {
		$(this).removeClass('show');
		$('.main_contents').stop().animate({
			scrollTop: 0
		}, 300,'easeOutCirc');
	});

	

	// project_list.hover(function(){
	// 	_=$(this);

	// 	nm=_.find('._name');
	// 	cat=_.find('._cat');

	// 	cat.css({
	// 		top : 60,
	// 		marginTop : 0
	// 	}).delay(200).queue(function(next){
	// 		nm.css({
	// 			top : 30,
	// 			marginTop : 0
	// 		})
	// 		next();
	// 	});
			
	// },function(){
	// 	nm.css({
	// 		top : '100%',
	// 		marginTop : -130
	// 	})
	// 	cat.css({
	// 		top : '100%',
	// 		marginTop : -100
	// 	})
	// });


	
	

	/********** Home page scipts **********/
	// $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
	// 	event.preventDefault();
	// 	var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
	// 	// if(!$("body").hasClass("disabled-onepage-scroll")) init_scroll(event, delta);
	// 	home_scroll(event);
	// });

	// function home_scroll(event){

	// 	if (appear($('#projects'))) {
	// 		// $('#projects').css('background','red');
	// 		alert('start projects animation');
	// 	}
	// 	// alert($('#projects').offset().top);

	// }

	// function appear(ele){
	// 	if ($(ele).offset().top <= $(window).height()) {
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }

}); // the end of jQuery :( 

