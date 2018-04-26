$(document).ready(function(){

	// 
	// subir e descer a página
	//

	(function(){
		var previousScroll = 0;

		$('.messages_section').scroll(function(){
			var currentScroll = $('.messages_section').scrollTop();

			if(currentScroll > previousScroll){
				if(currentScroll > 0 && currentScroll <= 90){
					// Slightly move scroll
					$('.title_bar').css('margin-top' , '-' + currentScroll + 'px');
				} else {
					// Scrolling down put passed slide zone
					$('.title_bar').css('margin-top', '-90px');
				}
			} else {
				if(currentScroll <= 90){
					$('.title_bar').css('margin-top' , '-' + currentScroll + 'px');
				} else {
					$('.title_bar').css('margin-top', '-90px');
				}
			}
			previousScroll = currentScroll;
		});
	}());

	//
	// perfil reduzido ao click na imagem
	//
	$('.image_container').click(function(){
		var thisimage = $(this).children('img').attr('src');
		var thisnome  = $(this).parent().find('.nome_usuario nome').text();
		
		$('.lightbox_nome').text(thisnome);
		$('.lightbox_image img').attr('src' , thisimage);
		$('.lightbox').css('display' , 'flex');
		$('.lightbox').animate({opacity: 1}, 600);
		$('.lightbox_container').show("slow");
	});

	// esconder esse perfil
	$('.lightbox').click(function(e){
		if($(e.target).attr('class') == 'lightbox'){
			// se o elemento ao ser clicado é não filho
			var q = $(this);
			q.animate({opacity: 0}, 600);
			$('.lightbox_container').hide("slow");

			setTimeout(function(){
				q.css('display' , 'none');
			}, 700);
		}
	});

	//
	// CODE TO MAKE SEARCH WORK
	//
	$('.icon_container div:nth-child(2) img').click(function(){
		$('.barra_busca').css('display' , 'block');
		$('.ativacao_inv').css('display' , 'block');
		$('.barra_busca').animate({opacity: 1, width: '100%'}, 600);
		$('.title_bar').animate({marginTop: '-90px'}, 600);
		$('.barra_busca').focus();
	});

	$('.ativacao_inv').click(function(){
		$('.barra_busca').val('');
		$('.barra_busca').keyup();
		$('.barra_busca').animate({opacity: 0}, 600);
		$('.ativacao_inv').css('display' , 'none');
		$('.title_bar').animate({marginTop: '0px'}, 600);

		setTimeout(function(){
			$('.barra_busca').css('display' , 'none');
		}, 600);
	});

	$('body').on('change, keyup' , '.barra_busca', function(){
		var thisvalue  = $(this).val().toLowerCase();
		var thislength = $(this).val().length;

		$('.janela_chat').each(function(){
			var thischat = $(this);
			var nome 	 = $(this).find('.nome_usuario nome').text().toLowerCase();

			if(nome.indexOf(thisvalue) < 0){
				thischat.hide("slow");
			} else {
				thischat.show("slow");
			}
		});
	});

	//
	// CODE TO ENABLE MENU
	//
	$('.icon_container div:nth-child(1) img').click(function(){
		$('.menu_opcoes').animate({width: '200px', height: '210px', opacity: 1}, 400);
	});

	// Hide menu
	$('*').click(function(e){
		if($('.menu_opcoes').height() > 100){
			if($(e.target).attr('class') != 'menu_opcoes' || $(e.target).attr('class') != 'item_selecao'){
				$('.menu_opcoes').animate({width: '0px', height: '0px', opacity: 0}, 400);
			}
		}
	});


});