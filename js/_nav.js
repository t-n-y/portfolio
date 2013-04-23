$(document).ready(function() {

	$("#lien1").click(function() {
		  
		  $(this).removeClass("btn-gris");
		  $(this).addClass("active");
		  if($("#lien2").hasClass("active")) {
		               $("#lien2").removeClass("active");
					   $("#lien2").addClass("btn-gris");}
			if($("#lien3").hasClass("active")) {
		               $("#lien3").removeClass("active");
					   $("#lien3").addClass("btn-gris");}
			if($("#lien4").hasClass("active")) {
		               $("#lien4").removeClass("active");
					   $("#lien4").addClass("btn-gris");}
		});

		$("#lien2").click(function() {  
		  
		  $(this).removeClass("btn-gris");
		  $(this).addClass("active");
		  if($("#lien1").hasClass("active")) {
		               $("#lien1").removeClass("active");
					   $("#lien1").addClass("btn-gris");}
			if($("#lien3").hasClass("active")) {
		               $("#lien3").removeClass("active");
					   $("#lien3").addClass("btn-gris");}
			if($("#lien4").hasClass("active")) {
		               $("#lien4").removeClass("active");
					   $("#lien4").addClass("btn-gris");}
		});

		$("#lien3").click(function() {
		  
		  $(this).removeClass("btn-gris");  
		  $(this).addClass("active");
		  if($("#lien1").hasClass("active")) {
		               $("#lien1").removeClass("active");
					   $("#lien1").addClass("btn-gris");}
			if($("#lien2").hasClass("active")) {
		               $("#lien2").removeClass("active");
					   $("#lien2").addClass("btn-gris");}
			if($("#lien4").hasClass("active")) {
		               $("#lien4").removeClass("active");
					   $("#lien4").addClass("btn-gris");}
		});

		$("#lien4").click(function() {  
		  
		  $(this).removeClass("btn-gris");
		  $(this).addClass("active");
		  if($("#lien1").hasClass("active")) {
		               $("#lien1").removeClass("active");
					   $("#lien1").addClass("btn-gris");}
			if($("#lien2").hasClass("active")) {
		               $("#lien2").removeClass("active");
					   $("#lien2").addClass("btn-gris");}
			if($("#lien3").hasClass("active")) {
		               $("#lien3").removeClass("active");
					   $("#lien3").addClass("btn-gris");}
		});

		$("#lien5").click(function() {  
		  
		  $(this).removeClass("btn-gris");
		  $(this).addClass("active");
		  if($("#lien1").hasClass("active")) {
		               $("#lien1").removeClass("active");
					   $("#lien1").addClass("btn-gris");}
			if($("#lien2").hasClass("active")) {
		               $("#lien2").removeClass("active");
					   $("#lien2").addClass("btn-gris");}
			if($("#lien3").hasClass("active")) {
		               $("#lien3").removeClass("active");
					   $("#lien3").addClass("btn-gris");}
			if($("#lien4").hasClass("active")) {
		               $("#lien4").removeClass("active");
					   $("#lien4").addClass("btn-gris");}
			
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
		  	
		 /* 
		  var lastScrollTop = 0;
		  $(window).scroll(function(event){
		     var st = $(this).scrollTop();
		     if (st > lastScrollTop){
		         //scroll down
		    	 $('#intro').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					  if (isInView) {
						  // element is now visible in the viewport
						   if (visiblePartY == 'bottom') {
							  // bottom part of element is visible
							  $('#lien1').addClass("btn-gris");
							  $('#lien1').removeClass("active");
							  $('#lien2').addClass("active");
							  $('#lien2').removeClass("btn-gris");
						  }
						  else {
							  // whole part of element is visible
							  $('#lien2').addClass("btn-gris");
							  $('#lien2').removeClass("active");
							  $('#lien1').addClass("active");
							  $('#lien1').removeClass("btn-gris");
						  }
					  }
				  });
		    	 $('#slider').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					  if (isInView) {
						  // element is now visible in the viewport
						  if (visiblePartY == 'bottom') {
							  // top part of element is visible
							  $('#lien2').addClass("active");
							  $('#lien2').removeClass("btn-gris");
							  $('#lien1').addClass("btn-gris");
							  $('#lien1').removeClass("active");
						  }
						  else {
							  // whole part of element is visible
							  $('#lien2').addClass("active");
							  $('#lien2').removeClass("btn-gris");
							  $('#lien1').addClass("btn-gris");
							  $('#lien1').removeClass("active");
						  }
					  }
				  });
		    	 $('.skillbar2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					  if (isInView) {
						  // element is now visible in the viewport
						  if (visiblePartY == 'top') {
							  // top part of element is visible
						  }
						  else {
							  // whole part of element is visible
							  $('#lien3').addClass("active");
							  $('#lien3').removeClass("btn-gris");
							  $('#lien2').addClass("btn-gris");
							  $('#lien2').removeClass("active");
						  }
					  }
				  });
		    	 $('#form').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					  if (isInView) {
						  // element is now visible in the viewport
						  if (visiblePartY == 'top') {
							  // top part of element is visible
							  $('#lien4').addClass("active");
							  $('#lien4').removeClass("btn-gris");
							  $('#lien3').addClass("btn-gris");
							  $('#lien3').removeClass("active");
						  }
						  else {
							  // whole part of element is visible
						  }
					  }
				  });
		     } 
		     
		     
		     
		     
		     else {
		    	 // scroll up
		    	 $('#intro').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					  if (isInView) {
						  // element is now visible in the viewport
						   if (visiblePartY == 'bottom') {
							  // bottom part of element is visible
							  $('#lien1').addClass("btn-gris");
							  $('#lien1').removeClass("active");
							  $('#lien2').addClass("active");
							  $('#lien2').removeClass("btn-gris");
						  }
						  else {
							  // whole part of element is visible
							  $('#lien2').addClass("btn-gris");
							  $('#lien2').removeClass("active");
							  $('#lien1').addClass("active");
							  $('#lien1').removeClass("btn-gris");
						  }
					  }
				  });
		    	 $('#slider').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					  if (isInView) {
						  // element is now visible in the viewport
						  if (visiblePartY == 'bottom') {
							  // top part of element is visible
							  $('#lien2').addClass("active");
							  $('#lien2').removeClass("btn-gris");
							  $('#lien3').addClass("btn-gris");
							  $('#lien3').removeClass("active");
						  }
						  else {
							  // whole part of element is visible
						  }
					  }
				  });
		    	 $('.skillbar2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					  if (isInView) {
						  // element is now visible in the viewport
						  if (visiblePartY == 'top') {
							  // top part of element is visible
							  $('#lien3').addClass("active");
							  $('#lien3').removeClass("btn-gris");
							  $('#lien4').addClass("btn-gris");
							  $('#lien4').removeClass("active");
						  }
						  else {
							  // whole part of element is visible
							  $('#lien3').addClass("active");
							  $('#lien3').removeClass("btn-gris");
							  $('#lien4').addClass("btn-gris");
							  $('#lien4').removeClass("active");
						  }
					  }
				  });
		    	 $('#form').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					  if (isInView) {
						  // element is now visible in the viewport
						  if (visiblePartY == 'top') {
							  // top part of element is visible
						  }
						  else {
							  // whole part of element is visible
							  $('#lien4').addClass("active");
							  $('#lien4').removeClass("btn-gris");
						  }
					  }
				  });
		     }
		     lastScrollTop = st;
		  });
		  */
		  
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