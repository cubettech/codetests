
$(function(){

	// Loader ----------------
	$('a').click(function(e) {

		return false;
		// Scroll click
		if(e.which=='1') {

			_=$(this);
			href=_.attr('href');
			esc='';

			if (_.parents('.onepage-pagination').length){
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
			}else if(_.attr('___')==null){
				return false;
			}

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

	$('form').submit(function(event) {
		_loader('start');
		// _=$(this);
		// setTimeout(function(){
		// 	_.submit();
		// 	return true;
		// },100);
		// return false;
	});

	$('.lf_exp_btn').click(function(e) {
		if (e.which==1) {
			_loader('stop');
			_=$(this);
			// _.next('div').fadeIn();
			_.next('div').stop().slideDown(500,'easeInOutCirc')/*.animate({
				width: 310,
				// height: _.next('div').height()
			},500,function() {
				
			});*/
			return false;
		};
		
	});

	$('.lf_exp').click(function(e) {
		e.stopPropagation();
	});

	$(document).click(function(e) {
		e.stopPropagation();
		$('.lf_exp').stop().slideUp(300,'easeInOutCirc');
	});

	// Registration ------------------------>
	// Caste Selection ----------------------------------
	$('select._jreg._jreligion').change(function(event) {
		// alert($(this).val());
		_=$(this).closest('form').find('select._jreg._jcaste');
		_.attr('disabled','disabled');

		$.get("?ajax=true&re=get_caste&cast="+$(this).val(), function( data ) {
			_.html(data);
			_.removeAttr('disabled');
		});					
			
	});

	// Selecting gender ------------------------------
	$('input._jreg._jgender').change(function(event) {
		_=$(this);
		ref=_.val();
		if (ref=='male') {
			$('._jreg._jyear option').slice(-3).remove();
		}else if(ref=='female'){
			last=$('._jreg._jyear option').last().val();
			options='';
			for (var i =parseInt(last)+1; i < parseInt(last)+4; i++) {
				options +='<option value="'+[i]+'">'+[i]+'</option>';
			};
			$('._jreg._jyear').append(options);
		};
		
	});

	// Slider age --------------------
	$('.islider._jrange.age').slider({
		range: true,
		min: 18,
		max: 60,
		step: 1,
		values: [ get_minmax($(this),'min'), get_minmax($(this),'max') ],
		slide: function( event, ui ) {
			$(this).find('input._jrange.age.__min').val(ui.values[ 0 ]);
			$(this).find('i.__min').text(ui.values[ 0 ]);

			$(this).find('input._jrange.age.__max').val(ui.values[ 1 ]);
			$(this).find('i.__max').text(ui.values[ 1 ]);
		}
	});

	// Slider height --------------------
	$('.islider._jrange.height').slider({
		range: true,
		min: 0,
		max: 500,
		step: 1,
		values: [ get_heightminmax($(this),'min'), get_heightminmax($(this),'max') ],
		slide: function( event, ui ) {
			$(this).find('input._jrange.height.__min').val(ui.values[ 0 ]);
			$(this).find('i.__min').text(ui.values[ 0 ]);

			$(this).find('input._jrange.height.__max').val(ui.values[ 1 ]);
			$(this).find('i.__max').text(ui.values[ 1 ]);
		}
	});

	// Send request --------------------
	$('a[___=send_request]').live('click', function(event) {
		// alert('send_request');
		var args = {
			'av_id'		: 'av_id',
			'heading'	: 'Send Request',
			// 'method'	: 'ajax',
			// 'req'		: 'send_request',
			'content'	: $('#send_request').html(),
			// 'buttons'	: 'Sure:_return_true red;Cancel:_close',
		};
		av_alert(args);
		return false;
	});
	
	$('._alert > i').live('click', function(event) {
		$(this).parents('._alert').slideUp(500,'easeInOutCirc',function(){
			$(this).remove();
		});
	});

	if ($('select[multiple]').length) {
			
		nn=0;
		$("select[multiple] > option").each(function() {
			// alert(this.text + ' ' + this.value);
			ff=$(this).parent('select').attr('id');
			nn=nn+1;
		});

		$('#'+ff).css({
			height: nn*20
		});

	};
	


	// Photos section -----------------------
	$(function(){
		$( ".rearrange" ).sortable();
		$( ".rearrange" ).disableSelection();
	});

	$('.photo_manage ._img ._x').live('click', function(event) {
		_=$(this).parents('._img');
		// _.slideUp(400,function(){
		// 	_.remove();
		// })

		// Change class -------
		for (i=1; i < 3; i++) { 
			_.find('input.ref'+i).attr('name','d'+i+'[]');
		}
		_.animate({
			'margin-top': 100,
			'height': 0
		},300,function(){
			_.animate({
				'border':0,
				'width':0,
				'margin':0
			},250,function(){
				// _.remove();
			})
		});
	});

	$('#av_popup.galley nav.p_nav a').live('click',function(event) {
		_=$(this);
		nth=_.index();
		$('#av_popup.galley nav.p_nav a').removeClass('__');
		_.addClass('__');

		$('#av_popup.galley .p_preview').removeClass('__');
		$('#av_popup.galley .p_preview').eq(nth).addClass('__');
		return false;
	});

	if($('.banner_imgs li').length){

		imgs=$('.banner_imgs li');
		imgs.each(function() {
			_=$(this);
			img_src=_.children('img').attr('src');
			_.attr('style','background-image:url('+img_src+')');
		});
		nxt=1;
		max=$('.banner_imgs li').length;
		$('.banner_imgs li:nth-child(1)').fadeIn(500, function donext(nxt) {
			if (nxt==null) {
				nxt=2;
			};
			if($('.banner_imgs li:nth-child('+nxt+')').length){
				imgs.delay(5000).fadeOut(2000);
				$('.banner_imgs li:nth-child('+nxt+')').delay(500).fadeIn(2000, function(){
					if (nxt==max) {
						nxt=0;
					};
					nxt=nxt+1;
					donext(nxt);
				});
				
			}
		});
	}

	// password1 		= $('input#password1'); //id of first password field
	// password2		= $('input#password2'); //id of second password field
	// passwordsInfo 	= $('#pass-info'); //id of indicator element
	// new_register	= $('input#new_register');
	// form_reg 		= $('form#reg');
	
	// passwordStrengthCheck(password1,password2,passwordsInfo); //call password check function

	// form_reg.submit(function(event) {

	// 	if (password_submit(password1,password2)==true) {

	// 		return true;

	// 	}else{
	// 		return false;
	// 	};
	// });
		
		jQuery.fn.reverse = function() {
		    return this.pushStack(this.get().reverse());
		};

		function IsEmail(email){
			var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}

		// Form Validation --------
		$('form').each(function(e) {

			// Remove the required field.
			$(this).find('input').each(function(e) {
				$(this).removeAttr('required');
			});

		});

		// Submit the form.
		$('form').live('submit',function(event) {	
					
			_loader('stop');
			er=null;

			// $(this).find('select[data-req] > option').reverse().each(function(e) {

			// 	$(this).addClass('c1212121');

			// }

			// $('select').filter(function() {
			//     return $(this).val()==='dd';
			// }).parent().addClass('warning');


			$(this).find('input[data-req]').reverse().each(function(e) {
				$(this).removeAttr('required');	
				// value
				value='';

				// For mail
				if ($(this).attr('type')=='mail') {
					if (IsEmail($(this).val())==false) {
						value=$(this).val();
					};
				};

				if ($(this).attr('data-type')=='number') {
					if ($.isNumeric($(this).val())==false) {
						value=$(this).val();
					};
				};

				// For blank field error return form
				if ($(this).val()==value) {
					er=$(this).attr('data-req');
				};
				
				// For remove error msg 
				if ($(this).val()!=value && $(this).next('div.er').length) {
					$(this).next('div.er').remove();
				};

				// For add error msg
				if ($(this).val()==value && !$(this).next('div.er').length) {
					$(this).after('<div class="er __erorr">'+er+'</div>');
					$(this).next('div.er').slideDown(100);
				};

			});

			if (er) {
				// alert(er);
				return false;
			}else{
				return true;
			};

		});
	
		if ($("input#password1").length) {
			var	password1	= $("input#password1");
			password2		= $("input#password2"); 
			passwordsInfo 	= $("#pass-info");
			fgp_pwd 		= $("form");

			passwordStrengthCheck(password1,password2,passwordsInfo); //call password check function

			fgp_pwd.submit(function(event) {

				if (password_submit(password1,password2)==true) {

					return true;

				}else{
					return false;
				};
			});
		};


}); // the end of jQuery :( 


