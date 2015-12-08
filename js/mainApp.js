var main = function(){
	$('#main_menu li').click(function(event){
		event.preventDefault();
		$('#main_menu li').removeClass('active');
		$(this).toggleClass('active');
		$('.main').empty();
		var a_href = $(this).find('a').attr('href');
		$.get("views\\"+a_href+".html", function(data){
		$('.main').append(data);
		});
		var scope = angular.element($('.main')).scope();
		scope.$apply();
		//alert ("Href is: "+a_href);
	});
};
$(document).ready(main);
