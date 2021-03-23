/*
* Author : Ajeesh Vijay 
* Description : Main jquery and javascript functions for Innovative Marry
*
*/
var _body=$('body');
$('body')/*.on({
	selectstart: function() {
		return false;
	},
	dragstart: function() {
		return false;
	},
	contextmenu: function() {
		return false;
	}
})*/
// .removeClass('no_js');

/* ------- Loading ------- */
/* load */
_L=$('body,._-l');
// _L.addClass('____');
$(window).load(function() {
	_loader('stop');
	$('body').removeClass('after_load').addClass('before_load');
	setTimeout(function(){
		$('.fu_form_in').slideDown(200);
	}, 600);
});

// setTimeout(function(){
// 	_loader('stop');
// 	$('body').removeClass('after_load').addClass('before_load');
// }, 1000);

function _loader(func){

	if (func=='start') {
		_L.addClass('____');
		$('._loader').fadeIn(20,function(){
			$(this).addClass('____');
		}).click(function(event) {
			_L.removeClass('____');
			$(this).removeClass('____')
			.fadeOut(500);
		});
	}else if(func=='stop'){
		_L.removeClass('____');
		$('._loader').removeClass('____').fadeOut(20,function(){
			$('._alert').delay(100).slideDown(200,'easeInOutCirc')/*.delay(4000).slideUp(200,'easeInOutCirc')*/;
		});
	}

}

/* ------- Ajax contents ------- */
/* load */
function ajax(arg){
	// alert(arg.method+arg.request+arg.return);

	if (arg.method=='GET') {

		other = (arg.other!='') ? arg.other : '' ;

		url="?ajax=true&re="+arg.request+other;
		// alert(url);
		$.get(url,function(data,status){
			// values="Data: " + data + "\nStatus: " + status;
			// $('body').append('<textarea>'+values+'</textarea>');

			// alert(data);
			$('body').data(arg.request,data);
			// alert($('body').data(arg.request));
			// return data;
		});
	};
}

function sleep(func,delay){
	setTimeout(func,delay);
}

/* ------- Get minmax age ------- */
function get_minmax(that,which){
	return $(that).find('input.age.__'+which).val();
}
/* ------- Get minmax height ------- */
function get_heightminmax(that,which){
	return $(that).find('input.height.__'+which).val();
}


// show av message
function avMsg(msg, clr, close){

	if ( msg === 'close') {
		$('._alert').delay(100).slideUp(300);
		return false;
	}else{

		var clr   = clr || '';
		var $h1   = $('.contents > h1.title');
		var html  = '<div class="_alert '+clr+'">'+msg+'<i class="i i-times"></i></div>';

		$_alert = $('._alert');
		$('body').append(html);
		$('._alert').delay(100).slideDown(300);
	}

}

/* ------- Av alert ------- */
/* Show the popup */
function av_alert(obj) {

	obj.beforePopup = obj.beforePopup || false;
	var _body=$('body');
	_top_pos=50+_body.scrollTop();
	foo='';
	// _body.animate({scrollTop:0}, '500','easeInOutCirc');
	if(obj.buttons!=null){
		foo=obj.buttons;
		var str_array = foo.split(';');
		foo='';
		for(var i = 0; i < str_array.length; i++){

		   /* Trim the excess whitespace. */
		   str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
			/* Add additional code here, such as: */
		   foo=foo+'<span class="btn '+str_array[i].split(':')[1]+'">\
					'+str_array[i].split(':')[0]+'\
					</span>';
		}
	}
	
	if (obj.method=='ajax') {
		content=obj.req;
	}else{
		content=obj.content;
	};





	/* Build the ui template */
	template='<section id="av_popup" av-id="'+obj.av_id+'" class="'+obj.av_id+'">\
		<div class="_scroll">\
			<div class="_wrapper">\
				<span class="_close _x"></span>\
				<div class="_overlay _close"></div>\
					<div class="_brdr">\
						<div class="_body">\
						<header>\
							<h3>'+obj.heading+'</h3>\
						</header>\
							'+content+'\
							'+foo+'\
						</div>\
					</div>\
			</div>\
		</div>\
	</section>'


	/* Printing ui template */
	if (obj.av_id!=0 &&obj.heading!='login_or_registration') {
		_body.append(template);
	}else{
		_top_pos='10'+_body.scrollTop();
		$('#av_popup').show(0);
	}
	
	av_popup=$('#av_popup');
	_wrapper=$('#av_popup:not(.user_box) ._wrapper');
	_overlay=$('#av_popup ._overlay');

	_overlay.fadeIn(200);
	_wrapper.fadeIn(100,function(){
		$(this).animate({
			'top': _top_pos,
			'opacity' : 1
		},400,function(){
			// $(this).find('._brdr').slideDown(500,'easeInOutCirc');
			$(this).find('._brdr').animate({
				top: 0,
				opacity:1
			},800,'easeOutExpo');
			$('#av_popup ._x').animate({
				top: -45
			},800,'easeOutExpo', function(){


								

				
			});
			if (obj.beforePopup) {
				obj.beforePopup();
			};



			// $('#av_popup ._x').css('top',-40);
		});
	});

}


/* ----- Close the popup ------- */
av_popup=$('#av_popup');
_wrapper=$('#av_popup ._wrapper');
_overlay=$('#av_popup ._overlay');
_close=$('#av_popup ._close');
_return_true=$('#av_popup ._return_true');

_close.live('click', function(event) {

	my=$(this);

	tval='40%';
	_overlay.fadeOut(200);
	my.parents('._wrapper').animate({
		'opacity' : 0
	},500,'easeInOutCirc',function(){
		$(this).fadeOut(100,function(){			
			my.parents('#av_popup').remove();			
		});
	});
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$('#av_popup ._close').trigger('click');
	}   
});


jQuery.fn.reverse = function() {
	return this.pushStack(this.get().reverse());
};

function IsEmail(email){
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

// Form Validation --------
$('form.dd').each(function(e) {

	// Remove the required field.
	$(this).find('input').each(function(e) {
		$(this).removeAttr('required');
	});

});

jQuery(function( $ ){
	er ='';
	$('button.sbox, input[type=submit].sbox').live('click', function(event) {	

		// _loader('start');

		var $form = $(this).parents('form');
			$dataReqFields = $form.find('*[data-req]');

		if ($form.length) {
			er = '';
			$dataReqFields.reverse().each(function(index, el) {
				er = checkDataReqFields(this);
			});

			if (er != 0 ) {
				// alert(er);
				return false;
			}else{

				rtn = ajaxForm($form);

				if (!rtn) {
					return false;
				};
			};

		}
	});

	$('*[data-req], select[data-req] option:selected').live('change keyup', function(event) {
		er = checkDataReqFields(this, true);
	});

	$('form').submit(function(event) {	


		var $form = $(this);
			$dataReqFields = $form.find('*[data-req]');

		if ($form.length) {
			er = '';
			$dataReqFields.reverse().each(function(index, el) {
				er = checkDataReqFields(this);
			});
		}

		if (er!=0) {
			// alert(er);
			return false;
		}else{
			rtn = ajaxForm($form);

			if (!rtn) {
				return false;
			};
		};
	});

});



function media(){
	return {
		width  : $(window).width(),
		height : $(window).height()
	};
}

function checkDataReqFields(that, focus){

	// alert(er)
	var $_    = $(that),
		value = '';
		focus = focus || false;

	$_.removeAttr('required');

	// For mail
	if ($_.attr('type')=='email') {
		if (IsEmail($_.val())==false) {
			value = $_.val();
		};
	};

	// For numeric
	if ($_.attr('data-type') == 'number' || $_.attr('type') == 'tel') {
		if ($.isNumeric($_.val())==false) {
			value = $_.val();
		};
	};

	// Captcha
	if ($_.attr('data-captcha')) {
		captcha = $_.attr('data-captcha');
		captcha = captcha.split("").reverse().join("");

		if (captcha != $_.val()) {
			value = $_.val();
		}

		console.log(value);
	};

	// Length
	if ($_.val().length < $_.attr('data-min')) {
		value = $_.val();
	};

	// For blank field error return form
	if ($_.val() == value) {
		er = $_.attr('data-req');
	};

	
	// For remove error msg 
	if ( $_.val() != value && $_.next('.er').length ) {

		// $_.next('.er').slideUp(100, function(){
		// 	$(this).remove();
		// });

		$_.next('.er').removeClass('___').delay(300).queue(function(next){
			$(this).remove();
			next();
		});

		$_.removeClass('err');
	};

	// For add error msg
	if ( $_.val() == value && !$_.next('.er').length ) {
		$_.after('<div class="er __erorr">'+er+'</div>');
		$_.addClass('err');
		$_.next('.er').addClass('___');
	};

	// Focus
	if ( $_.hasClass('err') && !focus) {
		$_.select().focus();
	}

	return er;
}

function ajaxForm($form){

	if ($form.attr('data-ajax') == 'true') {
		$.ajax({
			type: 'post',
			data: $form.serialize(),
			beforeSend : function(){
				_loader('start');
			},
			success: function (data) {
				// data = $.parseJSON ( data );
				// menuData[data.id] = data;
				// clearForm($('#addMenu'));
				// avMsg('Menu added succesfully');
				// addNewNest(data);
				data = eval(data);
				_loader('stop');
				$av_popup = $form.parents('#av_popup');

				if ($av_popup.length) {
					$av_popup.find('._x').eq(0).trigger('click');
				}else{
					$form.trigger("reset");
				}

				avMsg(data[0], data[1]);
				// console.log(data);
				// console.log(data[0]);
			}
		});
	}
	

	// return false;
	return $form.attr('data-ajax') == 'true' ? false : true;
}

function av_bubble(that,txt){
	// alert(txt);
	lleft=that.offset().left;
	ttop=that.offset().top;
	hgt=that.height();
	ttop=ttop+hgt;
	id=uid();
	// alert(lleft+', '+ttop);
	
	$('.av_bubble').remove();
	
	
	style='left:'+lleft+'px;top:'+ttop+'px';
	$('body').append('<div class="av_bubble" id="'+id+'">'+txt+'</div>');
	$('#'+id).css({
		left:lleft,
		top:ttop,
	}).fadeIn(200)
	.delay(3000).fadeOut(200,function(){
		$('#'+id).remove();
	});
}	

function uid(){
	return 'uid' + (new Date()).getTime();
}
function passwordStrengthCheck(password1, password2, passwordsInfo){

	// Must contain 5 characters or more
	var WeakPass = /(?=.{5,}).*/;
	
	// Must contain lower case letters and at least one digit.
	var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/; 

	// Must contain at least one upper case letter, one lower case letter and one digit.
	var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;

	// Must contain at least one upper case letter, one lower case letter and one digit.
	var VryStrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{5,}$/; 
	
	$(password1).on('keyup', function(e) {
		if(VryStrongPass.test(password1.val())){
			passwordsInfo.removeClass().addClass('vrystrongpass').html("Very Strong! (Awesome, please don't forget your pass now!)");
		}	
		else if(StrongPass.test(password1.val())){
			passwordsInfo.removeClass().addClass('strongpass').html("Strong! (Enter special chars to make even stronger");
		}	
		else if(MediumPass.test(password1.val())){
			passwordsInfo.removeClass().addClass('goodpass').html("Good! (Enter uppercase letter to make strong)");
		}
		else if(WeakPass.test(password1.val())){
			passwordsInfo.removeClass().addClass('stillweakpass').html("Still Weak! (Enter digits to make good password)");
		}
		else{
			passwordsInfo.removeClass().addClass('weakpass').html("Very Weak! (Must be 5 or more chars)");
		}
	});
	
	$(password2).on('keyup', function(e) {
		
		if(password1.val() !== password2.val()){
			passwordsInfo.removeClass().addClass('weakpass').html("Passwords do not match!");	
		}else{
			passwordsInfo.removeClass().addClass('goodpass').html("Passwords match!");	
		}
			
	});
}

function password_submit(pass1,pass2){

	if (pass1.val()==pass2.val()) {
		return true;
	}else{
		return false;
	};
}


/* ------- Capitalise ------- */
function capitalise(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/* ------- Window Viewport ------- */
function viewport() {
	return {
		sl: $(window).scrollLeft(),
		st: $(window).scrollTop(),
		ww: $(window).width(),
		wh: $(window).height()
	};
}

/* ------- Product Gallery Script ------- */
function av_product_gallery(val) {
	_gllery=$('#single_product_page_container ._gallery');
	_preview=_gllery.children('._preview');
	_image=_preview.children('img');

	// _image.attr('src',val.image_url);

	 _preview.css('background-image','url('+val.image_url+')');

	// if(!_preview.children('ul').length){
	// 	create_list='<ul>\
	// 					<li style="display:block;"></li>\
	// 					<li style="display:none;"></li>\
	// 				</ul>';
	// 	_preview.append(create_list);
	// }else{
	// 	_preview.find('li').css('background-image','url('+val.image_url+')');
	// }
}

// Smooth scroll ------------------------------------->
/*if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
	window.onmousewheel = document.onmousewheel = wheel;*/

function wheel(event) {
	delta = 0;
	if (event.wheelDelta) delta = event.wheelDelta / 250;
	else if (event.detail) delta = -event.detail / 2;
	handle(delta);
	if (event.preventDefault) event.preventDefault();
	event.returnValue = false;
}

function handle(delta) {

	time = 500;
	distance = 300;
	$('.main_contents').stop().animate({
		scrollTop: $('.main_contents').scrollTop() - (distance * delta)
	}, time,'easeOutCirc');

	
}
jQuery(document).ready(function($) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		if ($(this).scrollTop()>300) {
			$('.scroll_top').addClass('show');
		} else{
			$('.scroll_top').removeClass('show');
		};

		var st = $(this).scrollTop();

		// console.log(st);
		if (st > lastScrollTop){
		   $('body').addClass('mouseScrollDown').removeClass('mouseScrollUp');
		} else {
		  $('body').removeClass('mouseScrollDown').addClass('mouseScrollUp');
		}
		lastScrollTop = st;
	});

	$('.footer_foot .nav > li').on('click', function(event) {
		$('.footer_foot .nav > li').removeClass('active');
		$(this).addClass('active');

		$('.footer_foot .navPara > li').stop().slideUp(200);
		$('.footer_foot .navPara > li').eq($(this).index()).stop().slideDown(200);
	});

	// Menu collapse
	$('._colla_menu ol').each(function(index, el) {
		$(this).before('<i class="__colla_icon"></i>');
	});

	$(document).on('click', '.__colla_icon', function(event) {

		if ($(this).next('ol').css('display') == 'none') {
			$(this).addClass('_open');
			$(this).next('ol').slideDown(200);
		}else{
			$(this).removeClass('_open');
			$(this).next('ol').slideUp(200);
		}
	});

	$('.show_raq').on('click', function(event) {
		$('body').toggleClass('_showing_raq');
	});

});



// Search additional functions ------------------------------->
// Checkbox ------
function add_checkbox(val){
	$('input[value="'+val+'"]').attr('checked','checked');
}


function infinite_animate(obj)
	{
		obj.ele='body ' || obj.ele;
		obj.loop=(obj.loop==false) ? false : true;

		// alert(obj.loop);
		
		nthOpen='> li:nth-child(';
		nthClose=')';
		// console.log(obj.ele+obj.cl+nthOpen+obj.nth+nthClose);
		if ($(obj.ele+obj.cl+nthOpen+obj.nth+nthClose).length) {
			prev_nth=obj.nth-2;
			nxt_nth=obj.nth+1;
			$(obj.ele+obj.cl+nthOpen+prev_nth+nthClose).removeClass("out");
			$(obj.ele+obj.cl+nthOpen+nxt_nth+nthClose).removeClass("out");
			$(obj.ele+obj.cl+nthOpen+obj.nth+nthClose).addClass("in").delay(obj.speed).queue(function(donext){
				$(this).removeClass("in");
				donext();		
			});
			$(obj.ele+obj.cl+nthOpen+obj.nth+nthClose).addClass("cur").delay(obj.delay).queue(function(next){
				$(this).removeClass("cur").addClass("out");
				next();
				obj.nth++;
				infinite_animate(obj);				
			});
		}else if(obj.loop){
			obj.nth=1;
			infinite_animate(obj);
		}
	}

	