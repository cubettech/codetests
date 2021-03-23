

function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};


// interval(function(){
//        // Code block goes here
//    }, 1000, 10);

$(window).load(function(){

	// $("body.home .pages").onepage_scroll({
	// 	sectionContainer: "section",
	// 	responsiveFallback: false ,
	// 	loop: false,
	// 	updateURL: false,
	// 	// animationTime: 1500,  
	// });

	$(".start_scroll").click(function(event) {
		// $("body.home .pages").moveTo($(this).attr("data-page"));
		var $ele = $('.pages > section').eq( parseInt($(this).attr("data-page")) - 1 );
		var off = $ele.offset();
		console.log(parseInt($(this).attr("data-page")) - 1);
		console.log($ele );
		console.log(off);
		$('body, html').stop().animate({
			scrollTop: off.top
		}, 500,'easeOutCirc');
	});
	
	list_name=["Home","Services","Projects"/*,"Process"*/,"What\'s new","Support"];

	$(".onepage-pagination li").each(function(index, el) {
		$(this).children("a").append("<span>"+list_name[index]+"</span>");
	});

	// $(".onepage-pagination li:nth-child(6) a").trigger("click");

	// $('ul.partners').slick({
	//   slidesToShow: 7,
	//   slidesToScroll: 1,
	//   // arrows: false,
	//   // dots: true,
	//   autoplay: true,
	//   autoplaySpeed: 2000,
	// });


	var $simpleGrid   = $('.simpleGrid');
	var $simpleGridLi = $('.simpleGrid > li');

	var grids = new Object();
	grids['grids'] = new Object();
	grids['length'] = $simpleGridLi.length;

	$simpleGridLi.each(function(index, el) {
		grids['grids'][index] = {
			// index     : index,
			name : $(el).attr('title'),
			src  : $(el).find('img').attr('src'),
		};
	});

	function animateGrid(max, nextStart)
	{
		$simpleGrid.empty();

		var maxGrids  = max + 1;
		nextStart     = nextStart || 0;
		var end       = nextStart + maxGrids;
		var order     = new Array();

		jI = 0;
		for (var j = nextStart; j < end; j++) {
			if (grids.length <= j) {
				order[j] = jI++;
			}else{
				order[j] = j;
			}
		}

		last = order[order.length - 1];

		/*console.log(order);
		console.log(last);
		console.log(maxGrids);
		console.log(nextStart);
		console.log(grids.length);*/

		for (var i = nextStart; i < (order.length - 1); i++) {
			// console.log(i);
			// grids['grids'][order[i]]
			// console.log(grids['grids'][order[i]].name);
			client = grids['grids'][order[i]];
			// console.log(client);
			client ? $simpleGrid.append('<li><img src="'+client.src+'"/></li>') : '';
		}

		// infinite_animate({cl:'.simpleGrid', nth:1, ele:null, speed:1000, delay:80});
		// setTimeout(function(){}, delay)

		interval(function(){
			$(".simpleGrid > li").each(function(i, el) {
				$_ = $(this);
				sleep( function(){ $(".simpleGrid > li").eq(i).addClass('_');}, i*200);
			});
		}, 500, 1);

		interval(function(){
			animateGrid(max, last);
		}, 15000, 1);
	}

	/*
	// Test grids
	for (var i = 0; i < grids.length; i++) {
		console.log(i +'.'+ grids['grids'][i].name);
	};
	*/

	// animateGrid(8, 0);
	
	// $simpleGrid


	$('.supportTbl  h1.main_title').click(function(event) {
		$(this).parents('table').find('td').removeClass('_expand');
		if ($(this).parents('td').hasClass('_expand')) {
			$(this).parents('td').removeClass('_expand');
			return ;
		}else{
			$(this).parents('td').addClass('_expand');
		}
	});


	function fixHeight(){
		var h = $(window).height();
			h = h - ($('.main_header').innerHeight() - 20 ); 
			// h = h < 600 ? 600 : h;
		$('.pages>section').height(h);
		$('.pages>section:not(.active)').addClass('active');
	}

	fixHeight();

	$(window).on('resize', function(event) {
		fixHeight();
	});
	
	
   /* Instagram */
   var feed = new Instafeed({
        get: 'user',
        userId: 'e4d08be818304cecad31f925cf6bd8de',
        filter: function(image) {
            return image.tags.indexOf('TAG_NAME') >= 0;
        }
    });
    feed.run();

});