$(function(){
 	$('a.scroll').click(function(e){
 	    $('html, body').animate({
 	        scrollTop: $( $.attr(this, 'href') ).offset().top
 	    }, 500);
e.preventDefault();
 	});

	$('#main_menu li').click(function(event){
		$('#main_menu li').removeClass('active');
		$(this).toggleClass('active');
	});
	
});