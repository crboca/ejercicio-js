$(document).ready(function(){


// DESKTOP - Submenu Desplegado //

	$('#menu-container li').hover(function(e) {
		$(this).find('.sub-menu').slideToggle();
	});


// DESKTOP - Item Menu Seleccionado //
	
	$('#menu-container a').click(function(e) {
		$('#menu-container li').removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');
	});


// MOBILE - Icono Menu Hamburguesa

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
	
		if($(window).width() > 991) {
			$('#mobile-close').hide();
			$('#mobile-button').hide();
	
		}else{
			$('#mobile-button').show();
		}

	});

 });