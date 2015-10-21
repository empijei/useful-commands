(function($) {})(jQuery);

jQuery('document').ready(function($){
	
		 /*if($("body").find(".container").hasClass("phone")){var window_cur_size ="phone";}
		 else if($("body").find(".container").hasClass("tablet")){var window_cur_size ="tablet";}
		 else{var window_cur_size ="screen";}*/
		jQuery(window).resize(function(){

			//if(window_cur_size!="screen"){
				$("#wd-categories-vertical-tabs ul.tabs li").removeClass("active");
				$("#wd-categories-vertical-tabs ul.content li.active").css({display:"none"}).removeClass("active");
					
				$("#wd-categories-vertical-tabs ul.tabs li").eq(0).addClass("active");
				$("#wd-categories-vertical-tabs ul.content li").eq(0).addClass("active").css({display:"block"});
				
				$("#wd-categories-vertical-tabs .tabs-scroll-block").css({"top":"0px"});
			//}
		});
		
		
	
		var visible=$("#wd-categories-vertical-tabs ul.tabs").attr("data-visible");
		var data_count=$("#wd-categories-vertical-tabs ul.tabs").attr("data-count");
		$("#wd-categories-vertical-tabs .tabs-block").height((visible*76-1)+"px");
		$("#wd-categories-vertical-tabs .arrows-block").height(visible*76+"px");
		$("#wd-categories-vertical-tabs .content-block").height((visible*76+10)+"px");
		$("#wd-categories-vertical-tabs .content-block .tab-content").height(visible*76+"px");
		
		
		$("#wd-categories-vertical-tabs .content-block > ul > li").height((visible*76-20)+"px");
		
		for(var i=1; i<=data_count; i++){
		if($(".content-block #categories-vertical-tabs-content-"+i+"").find(".thumbnail-block").length){
		  $(".content-block #categories-vertical-tabs-content-"+i+" .text").height((visible*76-195)+"px");
		  $(".phone .content-block #categories-vertical-tabs-content-"+i+"").css("height","360px");
		  $(".phone .content-block #categories-vertical-tabs-content-"+i+" .text").css("height","172px");
		} else{
		  $(".phone .content-block #categories-vertical-tabs-content-"+i+"").css("height","180px");
		} 
		}
		
		
		$("#wd-categories-vertical-tabs ul.content li:first-child").css({"display":"block"}).addClass("active");
		$("#wd-categories-vertical-tabs ul.tabs li a").click(function(){
			if($(this).hasClass("changing")){return false;}
			$(this).addClass("changing");
			
			tabClick($(this),"constant");
			return false;	
		});
		
		
		
		$("#wd-categories-vertical-tabs .arrow-up").click(function(){
			//if($(this).hasClass("changing")){return false;}
			$(this).addClass("changing");
			count=($("#wd-categories-vertical-tabs ul.tabs li").length-1);
			if($(this).parents(".container").hasClass("phone")){prevTab(count);}
			else{
				var gotop=true;
				if($("#wd-categories-vertical-tabs ul.tabs li.active").index()=="0"){return false;}
				else{tabClick($("#wd-categories-vertical-tabs ul.tabs li.active").prev().find("a"),gotop);return false;}
			}
		});
		
		
		$("#wd-categories-vertical-tabs .arrow-down").click(function(){
			//if($(this).hasClass("changing")){return false;}
			$(this).addClass("changing");
			count=($("#wd-categories-vertical-tabs ul.tabs li").length-1);
			if($(this).parents(".container").hasClass("phone")){nextTab(count);}
			else{
				if($("#wd-categories-vertical-tabs ul.tabs li.active").index()==count){tabClick($("#wd-categories-vertical-tabs ul.tabs li").eq(0).find("a"),false);return false;}
				else{tabClick($("#wd-categories-vertical-tabs ul.tabs li.active").next().find("a"),false);return false;}
			}
		});
		

		function tabClick(thisElem,gotop){
			if($("#wd-categories-vertical-tabs .tabs-scroll-block").css("top")=='auto')
				$("#wd-categories-vertical-tabs .tabs-scroll-block").css("top",0);
			$("#wd-categories-vertical-tabs ul.tabs li").removeClass("active");
			var id=thisElem.attr("href").replace("#","");
			thisElem.parent().addClass("active");
			
			$("#wd-categories-vertical-tabs ul.content li.active").css({display:"none"});
			$("#wd-categories-vertical-tabs ul.content li").removeClass("active");
			
			$("#categories-vertical-tabs-content-"+id).fadeIn(800).addClass("active");
			
			
			var visible=$("#wd-categories-vertical-tabs .tabs").attr("data-visible");
			var active=($("#wd-categories-vertical-tabs ul.content li.active").index()+1);
			
			//alert(visible+" "+active);
			if(active=="1" || (gotop=="constant" && active<=visible)){
				$("#wd-categories-vertical-tabs .tabs-scroll-block").css({"top":"0"});
			}
			else if(active>visible && !gotop){
				$("#wd-categories-vertical-tabs .tabs-scroll-block").css({"top":"-=76"});
			}
			else if(gotop=='constant' && active>=visible){
				return false;
			}
			else if(gotop && active>=visible){
				$("#wd-categories-vertical-tabs .tabs-scroll-block").css({"top":"+=76"});
			}
			$("#wd-categories-vertical-tabs a").removeClass("changing");
			return false;
		}
		
		/*CATEGORIES VERTICAL TABS PHONE*/
		var count=$("#wd-categories-vertical-tabs ul.tabs li").length;
		count=count-1;
		function nextTab(count){
			var isactive=$("#wd-categories-vertical-tabs ul.tabs li.active").next().index();
			
			if(isactive==-1){isactive=0;}
				$("#wd-categories-vertical-tabs ul.tabs li").removeClass("active");
				$("#wd-categories-vertical-tabs ul.tabs li").eq(isactive).addClass("active");
				
				
				$("#wd-categories-vertical-tabs ul.content > li").removeClass("active").css({display:"none"});
				$("#wd-categories-vertical-tabs ul.content > li").eq(isactive).addClass("active").css({display:"block"});
		}
		
		function prevTab(count){
			var isactive=$("#wd-categories-vertical-tabs ul.tabs li.active").prev().index();
			if(isactive==-1){isactive=count;}
				$("#wd-categories-vertical-tabs ul.tabs li").removeClass("active");
				$("#wd-categories-vertical-tabs ul.tabs li").eq(isactive).addClass("active");
				
				$("#wd-categories-vertical-tabs ul.content > li").removeClass("active").css({display:"none"});
				$("#wd-categories-vertical-tabs ul.content > li").eq(isactive).addClass("active").css({display:"block"});
		}
				

	

});
	