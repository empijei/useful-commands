jQuery("document").ready(function(){
   jQuery('embed,object,iframe').wrap("<div class='video-container'></div>");
   
		$('li:has(> ul)').addClass('haschild');
					
		$("#top-nav > div > ul  li,.top-nav-list > ul li").hover(function(){
			if($(this).parents(".container").hasClass("phone") ){return false;}
			$(this).parent("ul").find("ul").slideUp(5);
			$(this).parent("ul").children().removeClass("active");
			$(this).addClass("active");
			if($(this).find("ul").length){$(this).children("ul").slideDown("slow").addClass("opensub");}
		},function(){
			if($(this).parents(".container").hasClass("phone")){return false;}
			$(this).parent("ul").children().removeClass("active");
			$(this).parent("ul").find("ul").slideUp(50);
			$(".opensub").removeClass("opensub");
		});
		

		$("#top-nav > div > ul  li.haschild > a, .top-nav-list > ul li.haschild > a").on("click",function(){
			if($(this).parents(".container").hasClass("phone")){
			if($(this).parent().hasClass("open")){
				$(this).parent().parent().find(".haschild ul").slideUp(100);
				$(this).parent().removeClass("open");
				return false;
			}
			$(this).parent().parent().find(".haschild ul").slideUp(100);
			$(this).parent().parent().find(".haschild").removeClass("open");
			$(this).next("ul").slideDown("fast");
			$(this).parent().addClass("open");
			return false;}
		});
		
		
		
		$("#header .phone-menu-block").on("click","#menu-button-block", function(){
			if($("#top-nav").hasClass("open")){
				$("#header #top-nav").slideUp("fast");
				$("#top-nav").removeClass("open");
			}
			else{
				$("#header #top-nav").slideDown("slow");
				$("#top-nav").addClass("open");
			}
		});
		
		
		//in responsive js added size of staff-list-block
		
		var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent); 
		windowsPhone = /windows phone/i.test(navigator.userAgent); 
		var clickstart = mobile ? "touchstart" : "mousedown";
		var clickend = mobile ? "touchend" : "mouseup";

		
	
});