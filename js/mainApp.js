var main = function(){
	var active = $('#main_menu li.active');
	var a_href = active.find('a').attr('href');
		$.get("views\\"+a_href+".html", function(data){
		$('.main').append(data);
		});
	$('#main_menu li').click(function(event){
		event.preventDefault();
		$('#main_menu li').removeClass('active');
		$(this).toggleClass('active');
		$('.main').empty();
		var href = $(this).find('a').attr('href');
		$.get("views\\"+href+".html", function(data){
		$('.main').append(data);
		});
		//var scope = angular.element($('.main')).scope();
		//scope.$apply();
		//alert ("Href is: "+a_href);
	});

};
$(document).ready(main);
