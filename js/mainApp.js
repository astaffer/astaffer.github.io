var main = function(){
	var mainhref = window.location.href;
	var n = mainhref.indexOf("#");
	if (n > 1)
	{
		var shortHref =mainhref.substr(n+1);
		var realHref = "views\\"+shortHref+".html";
		var x = $.get(realHref , function(data){
			$('.main').append(data);
			}).fail(function() {
	    			document.location.href="/#about";
				location.reload();
  			}).done(function() {
			$('#main_menu li').removeClass('active');
			$('#'+shortHref).toggleClass('active');
			if (shortHref != "productions") {
			$('.down').hide();
			}
			else
			{
				$('.down').show();
			}
			});
		
	}
	else
	{
		var active = $('#main_menu li.active');
		var a_href = active.find('a').attr('href');
			$.get("views\\"+a_href.substr(1)+".html", function(data){
			$('.main').append(data);
			});
	}
		$('#main_menu li').click(function(event){
			//event.preventDefault();
			$('#main_menu li').removeClass('active');
			$(this).toggleClass('active');
			$('.main').empty();
			var href = $(this).find('a').attr('href');
			document.location.href="/"+href;
			$.get("views\\"+href.substr(1)+".html", function(data){
			$('.main').append(data);
			});
			if (href!="#productions") {
				$('.down').hide();
			}
			else
			{
				$('.down').show();
			}
			//var scope = angular.element($('.main')).scope();
			//scope.$apply();
			//alert ("Href is: "+a_href);
			return false;
		});
		var active = $('#main_menu li.active');
		var a_href = active.find('a').attr('href');
		if (a_href!="#productions") {
			$('.down').hide();
		}
		else
		{
		$('.down').show();
		}

};
//alert(window.location.href);
$(document).ready(main);

