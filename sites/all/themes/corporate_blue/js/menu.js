jQuery(document).ready(function($){
	$('#nav_menu').mobileMenu();
});

jQuery(document).ready(function($){
		
		
	$(".es-carousel img").hover(function(){
		$(this).fadeTo("fast", 0.7); 
	},function(){
   		$(this).fadeTo("fast", 1.0); 
	});

	
});

jQuery(document).ready(function($){

	$("#gallery ul a:hover img").css("opacity", 1);
	$("#portfolio_wrap .portfolio_caption").css("opacity", 0);
	
	$("#portfolio_wrap a").hover(function(){
		$(this).children("img").fadeTo("fast", 0.3);
		
		$(this).children(".portfolio_caption").fadeTo("fast", 1.0);
		
	},function(){
   		$(this).children("img").fadeTo("fast", 1.0);
   		$(this).children(".portfolio_caption").fadeTo("fast", 0);
	});
	
	$(".featured-image img").hover(function(){
		$(this).fadeTo("fast", 0.75); 
	},function(){
   		$(this).fadeTo("fast", 1.0); 
	});
	
});

jQuery(document).ready(function($) {
	$('#nav_menu .sub-menu').hide();
	$('#nav_menu > li > .sub-menu').append('<span class="nav_arrow"/>');
	$("#nav_menu ul").find(".sub-menu").prev().addClass("parent-menu");
	
	$("#nav_menu > li").hover( function() {
		$(this).children(".sub-menu").fadeIn("slow");
	}, function () {
		$(this).find(".sub-menu").hide();
	});
	
	$("#nav_menu > li > .sub-menu li").hover( function() {
		$(this).children(".sub-menu").slideDown("slow");
	}, function () {
	});
});

jQuery(document).ready(function($) {
	$('#nav_menu .children').hide();
	$('#nav_menu > li > .children').append('<span class="nav_arrow"/>');
	$("#nav_menu ul").find(".children").prev().addClass("parent-menu");
	
	$("#nav_menu > li").hover( function() {
		$(this).children(".children").fadeIn("slow");
	}, function () {
		$(this).find(".children").hide();
	});
	
	$("#nav_menu > li > .children li").hover( function() {
		$(this).children(".children").slideDown("slow");
	}, function () {
	});
});

