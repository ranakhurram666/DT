"use strict"; 
/***=========== Ready function start ===========***/
$(document).ready(function() {

	/*Counter Animation*/
	var counterAnim = $('.counter-anim');
	if( counterAnim.length > 0 ){
		counterAnim.counterUp({ delay: 10,
			time: 1000});
	}
	$('.preloader-it > .la-anim-1').addClass('la-animate');
	
	applyNiceScroll("#slimScrollDiv");
	
	/*drop menu show on hover*/
	// $('ul.nav li.dropdown').hover(function() {
	// 	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	// }, function() {
	// 	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	// });

	var windowsHeight = $(window).height();
	var navbarHeight = $('.navbar-fixed-top').height();
	var footerHeight = $('#footer').height();

	//$('.content-container').css('min-height', (windowsHeight - (navbarHeight + footerHeight + 21)));
	

	var $wrapper = $(".wrapper");
	/*Sidebar Navigation*/
	$(document).on('click', '#toggle_nav_btn,#open_right_sidebar,#setting_panel_btn', function (e) {
		$(".dropdown.open > .dropdown-toggle").dropdown("toggle");
		return false;
	});
	$(document).on('click', '#toggle_nav_btn', function (e) {
		$wrapper.removeClass('open-right-sidebar open-setting-panel').toggleClass('slide-nav-toggle');
		return false;
	});

	/*show on hover*/
	$(document).on("mouseenter mouseleave",".wrapper > .fixed-sidebar-left", function(e) {
		alert('mouseenter');
		if (e.type == "mouseenter") {
			$wrapper.addClass("sidebar-hover"); 
		}
		else { 
			$wrapper.removeClass("sidebar-hover");  
		}
		return false;
	});
	
/*Document ready function*/
});


/*****Load function start*****/
$(window).on('load', function(){
	$(".preloader-it").delay(500).fadeOut("slow");
	/*Progress Bar Animation*/
	var progressAnimation = $('.progress-anim');
	if( progressAnimation.length > 0 ){
		for(var i = 0; i < progressAnimation.length; i++){
			var $this = $(progressAnimation[i]);
			$this.waypoint(function() {
				var progressBar = $(".progress-anim .progress-bar");
				for(var i = 0; i < progressBar.length; i++){
					$this = $(progressBar[i]);
					$this.css("width", $this.attr("aria-valuenow") + "%");
				}
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			});
		}
	}
});
/*****Load function* end*****/

function applyNiceScroll(scrollableDiv) {
	$(scrollableDiv).slimscroll({
		height: 'auto'
	});

}