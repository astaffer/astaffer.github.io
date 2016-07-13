
	
function updateScrollSpy() {
    jQuery('[data-spy="scroll"]').each(function () {
      var $spy = jQuery(this).scrollspy('refresh')
    });
	$('#main_menu li').removeClass('active');
}
$(document).ready(function() {
	$('body').scrollspy({ target: '#spy', offset:100});	
	$('a.scroll').click(function(e){
	 	    $('html, body').animate({
	 	        scrollTop: $( $.attr(this, 'href') ).offset().top
	 	    }, 500);
	e.preventDefault();
	 	});
	 setTimeout(updateScrollSpy, 1000);
});


 function submitContactForm() {
         /*var name = $('#form_name').val();
  var email = $('#form_email').val();
  var phone = $('#form_phone').val();
  var message =$('#form_message').val();*/

//this is the html template. You can also do it as used above. But is much simpler done as below

 var htmlMessage = 'Contact form<br/>' +
    'Name: '+$('#form_name').val()+'<br/>'+
    'EMail: '+$('#form_email').val()+'<br/>'+
    'Message<br/>'+
    $('#form_message').val();

//submit the form using ajax
  $.ajax({
  type: "POST",
  url: "https://api:key-c94e48276bf7e5fe8995741b6cf936d9@api.mailgun.net/v3/sandboxab4f5d1ed492484ca80bc263745aea02.mailgun.org/messages",
  data: {
    "message": {
      "from": 'Mailgun Sandbox <postmaster@sandboxab4f5d1ed492484ca80bc263745aea02.mailgun.org>',
      "to": 'astaffer@gmail.com',
      "subject": 'Hola',
      "text": 'faq'
    }
  }
});

  return false;
}