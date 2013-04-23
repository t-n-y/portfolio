$(document).ready(function() {

	$('nav li a').click(function(){
	   $('nav li a').removeClass('active');
	   $('nav li a').addClass('btn-gris');
	   $(this).addClass('active');
	   $(this).removeClass('btn-gris');
	   var id = $(this).attr('href');
	   scrollTo(id);
	   return false; 
	});
	
	function scrollTo(target){
	    if($(target).length>=1){
	        height=$(target).offset().top;
	    }
	    $('html,body').animate({scrollTop:height}, 1200);
	    return false;
	}
	
	$('.touch #slider li .blocTxt').on("click", function(){
		$('.touch #slider li .blocTxt span').toggle();
		$('.touch #mainCarousel #slider .blocTxt').css({'opacity': '0.8', 'background-position': '94% 20%'});
	});
	
	$('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 210,
	    itemMargin: 5,
	    asNavFor: '#slider'
	  });
	   
	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
	  });
	  	
	  
	  $('.skillbar2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  if (isInView) {
			  // element is now visible in the viewport
			  if (visiblePartY == 'top') {
				  // top part of element is visible
			  }
			  else if (visiblePartY == 'bottom') {
				  // bottom part of element is visible
			  }
			  else {
				  // whole part of element is visible
				  $(' #animBar .skillbar').animate({'width':'90%'},1500);	
				  $(' #animBar .skillbar2').animate({'width':'80%'},1500);
				  $(' #animBar .skillbar3').animate({'width':'70%'},1500);	
				  $(' #animBar .skillbar4').animate({'width':'50%'},1500);
				  $(' #animBar .skillbar5').animate({'width':'70%'},1500);	
				  $(' #animBar .skillbar6').animate({'width':'55%'},1500);
			  }
		  }
		  else {
		 	// element has gone out of viewport
		  }
	  });
	  
		  
		  
});