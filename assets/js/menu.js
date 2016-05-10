$(document).ready(function(){


	$('#menu-container a').click(function(e) {
		$('#menu-container li').removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');
	});


	$('#mobile-button').click(function() {
		var menu = $('#menu-container');  
		menu.show();
		$('#mobile-close').show();
		$('#mobile-button').hide();
	});


	$('#mobile-close').click(function() {
		var menu = $('#menu-container');  
		menu.hide();
		$('#mobile-close').hide();
		$('#mobile-button').show();
	});


	$(window).resize(function() {
		document.location.reload();

		if($(window).width() > 991) {
			$('#mobile-close').hide();
			$('#mobile-button').hide();

		}else{

			$('#mobile-button').show();
		}
	});


	if($(window).width() < 991) {
		$('#menu-container li').click(function(e) {
			$(this).find('.sub-menu').toggle();
		});

	}else{

		$('#menu-container li').hover(function(e) {
			$(this).find('.sub-menu').slideToggle();
		});
	}


});