$(document).ready(function() {

	var project_list=$('.project_list > li');

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


	
	$('body.home .pages').scroll(function() {
		
		alert();
		// _=$(this);
		// ele=_.children('section').first();
		// // h=(h==null) ? '' : win.height() ;
		// h=win.height();
		// // $('body').prepend(h+'<br>');
		// // if (true) {};
		// $(window).scrollTop($(window).scrollTop()+100);
		// return false;

	});

	/********** Home page scipts **********/
	$(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
		event.preventDefault();
		var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
		// if(!$("body").hasClass("disabled-onepage-scroll")) init_scroll(event, delta);
		home_scroll(event);
	});

	function home_scroll(event){

		if (appear($('#projects'))) {
			// $('#projects').css('background','red');
			alert('start projects animation');
		}
		// alert($('#projects').offset().top);

	}

	function appear(ele){
		if ($(ele).offset().top <= $(window).height()) {
			return true;
		}else{
			return false;
		}
	}




}); // the end of jQuery :( 

