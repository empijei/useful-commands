var window_cur_size = 'screen';

jQuery('document').ready(function(){

	screenSize=jQuery(".container").width();
	
	if(screenSize==null){screenSize=1024;}
	
	sliderHeight=parseInt(jQuery("#slider-wrapper").height());
	sliderWidth=parseInt(jQuery("#slider-wrapper").width());
	sliderIndex=sliderHeight/sliderWidth;
	
	
	if($(".container").hasClass("phone")){
		phone();		
	}
	else if($(".container").hasClass("tablet")){
		tablet();
	}
	else{checkMedia();}
	
	jQuery(window).resize(function(){checkMedia();});

	function checkMedia(){
		//###############################SCREEN
		if(jQuery('body').width()>=screenSize){screen();}
		//###############################TABLET
		if(jQuery('body').width()<screenSize && jQuery('body').width()>=768){tablet();}
		//################################PHONE
		if(jQuery('body').width()<768){phone(false);}
	}
	
	

	
	function screen(){
	
		if($(".container").hasClass("phone") || $(".container").hasClass("tablet"))
			jQuery('#sidebar1').after(jQuery('#blog'))
			
		jQuery(".container").width(screenSize);
		jQuery(".container").removeClass("tablet");
		jQuery(".container").removeClass("phone");
		jQuery('.container').removeClass('small_shrifts');
	    jQuery("#slideshow").css("margin-top","0px");
		jQuery(".site-title-a").removeClass("phone");
		jQuery("body > div, body header, body footer,  body nav").width("100%");
		
		sHeight=sliderIndex*parseInt(jQuery("#slider-wrapper").width());
		sliderSize(sHeight);	
		if(window_cur_size == 'phone'){
			jQuery("#header").find("#menu-button-block").remove();
			jQuery("#top-nav").css({"display":"block"});
			jQuery("#top-nav").css({"display":"block"});
			jQuery("#top-nav > div > ul  li.addedli,#top-nav > div > div > ul  li.addedli").remove();			
			jQuery("#header-top .container").append(jQuery("#social"));
			jQuery("#header-middle").prepend(jQuery("#logo"));
			jQuery("aside .sidebar-container .widget-area").removeClass("clear");
			jQuery(".top-posts-block").width("100%");
			jQuery('#content').after(jQuery('#sidebar1'));
		}
		jQuery(".top-nav-list  > li  a").removeAttr('style');
			
		window_cur_size	= 'screen';
	}
	
	function tablet(){	
		if(!($(".container").hasClass("phone") || $(".container").hasClass("tablet")))
			jQuery('#sidebar1').before(jQuery('#blog'))
		
		jQuery(".container").removeClass("phone");
		jQuery(".site-title-a").removeClass("phone");
		jQuery(".container").addClass("tablet");
		jQuery(".container").width(728);
		jQuery('.container').removeClass('small_shrifts')
		jQuery(" body nav, .container").width(728);
		jQuery("#slideshow").css("margin-top","0px");
		if(window_cur_size == 'phone'){
		
			jQuery("#header").find("#menu-button-block").remove();
			jQuery("#top-nav").css({"display":"block"});
		    jQuery("#top-nav > div > ul  li.addedli,#top-nav > div > div > ul  li.addedli").remove();
			
			jQuery("#header-top .container").append(jQuery("#social"));
			jQuery("#header-middle").prepend(jQuery("#logo"));
			jQuery("aside .sidebar-container .widget-area").removeClass("clear");
			jQuery(".top-posts-block").width("100%");
		}
		
		sHeight=sliderIndex*parseInt(jQuery("#slider-wrapper").width());
		sliderSize(sHeight);
		jQuery(".tablet .top-nav-list  > li  a").removeAttr('style')		

		$("#top-nav").css({"display":"block"});
		
		window_cur_size	= 'tablet';
	}
	
	function phone(full){
		if(!(jQuery(".container").hasClass("phone") || jQuery(".container").hasClass("tablet"))){
			jQuery('#blog').after(jQuery('#sidebar1'));
		}
		jQuery("#header-middle-block").addClass("border");
		jQuery("#header .phone-menu-block").addClass("container");
		jQuery('#blog').after(jQuery('#sidebar1'));
		jQuery(".container").removeClass("tablet");
		jQuery(".container").addClass("phone");
		jQuery(".site-title-a").addClass("phone");
		jQuery("#slideshow").css("margin-top","10px");
		jQuery('.phone .top-nav-list li:has(ul)').addClass("has-sub");
		
		if(jQuery('body').width()>320 && jQuery('body').width()<640)
			{width="98%";}
		else if(jQuery('body').width()<=320)
			{width=(jQuery('body').width()-6)+"px" ; }else{width="640px";}
		
		if(jQuery('body').width()>420)
		{ 
			jQuery('.container').removeClass('small_shrifts');
		}
		else
		{
			jQuery('.container').addClass('small_shrifts');
		}
		jQuery(".container").width(width);
		jQuery(".container").width(width);
		
		sHeight=sliderIndex*parseInt(jQuery("#slider-wrapper").width());
		sliderSize(sHeight);
		
		jQuery("#top-nav > div > ul  li.addedli,#top-nav > div.phone > div > ul  li.addedli, .phone.top-nav-list > ul li.addedli").remove();
		jQuery("#top-nav > div.phone > ul  li:has(> ul),#top-nav > div.phone > div > ul  li:has(> ul), .phone.top-nav-list > ul li:has(> ul)").each(function(){
				var strtext=jQuery(this).children("a").html();
				var strhref=jQuery(this).children("a").attr("href");
				if(jQuery(this).hasClass( "current_page_item" ))
				  var cur_class = "current_page_item current-menu-item";
				else
				  var cur_class = "";
				var strlink='<a href="'+strhref+'">'+strtext+'</a>';
				jQuery(this).children("ul").prepend('<li class="addedli '+cur_class+'">'+strlink+'</li>');
		});
		
		
		if(!jQuery("#top-nav").hasClass("open")){$("#top-nav").css({"display":"none"})};
		jQuery(".phone #site-description p").css({"width":($(".container").width()-120)+"px"});
	
		jQuery("#header").find("#menu-button-block").remove();
		
		jQuery("#header .phone-menu-block").append('<div id="menu-button-block"><a href="#">Menu</a></div>');

		jQuery("#header-top .container").prepend(jQuery("#logo"));
		
		window_cur_size	= 'phone';
	}
	
	
	function sliderSize(sHeight) {
		jQuery("#slider-wrapper").css('height',sHeight);
	}		
});

