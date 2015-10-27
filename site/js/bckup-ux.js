$.ajaxSetup ({
	// Disable caching of AJAX responses
	cache: false
});

var navResponsive = true; visibilidadBloqueRecientes = true; 

$(window).load(function(){
	$("a").attr("href", "#"); 
	AnimacionNavbar(); 
	LinkNav('inicio'); 
	//$("#contenido-pagina").load("inicio.html");
});

function AnimacionNavbar(){
	//Iniciamos los valores
	$("header").css("height", "0px").css("z-index", "3");
	$("header #logotipo").css("padding-top", "0px").css("opacity", "0"); 
	$("header #menu-responsive").css("padding-left", "0px").css("opacity", "0"); 
	$("header ul#ver-recientes").css("padding-left", "0px").css("opacity", "0"); 
	$("header nav ul").css("padding-left", "0px").css("opacity", "0"); 
	//Que empiece la fiesta de la animacion! 
	$("header").animate({height: $("header").get(0).scrollHeight}, 300, function(){
		$("#logotipo").animate({"padding-top": "10px", opacity: "1"}, 300, function(){
			$("header ul#menu-responsive").animate({"padding-left": "10px", opacity: "1", "transition-duration": "0.5s"}, 300);
			$("header ul#ver-recientes").animate({"padding-left": "10px", opacity: "1", "transition-duration": "0.5s"}, 300);
			$("header nav#principal ul").animate({"padding-left": "10px", opacity: "1", "transition-duration": "0.5s"}, 300);
		});
	});
}

function NavegacionResponsive(){
	if (navResponsive) {
		$('nav#principal').css('display', 'block'); 
		navResponsive = false; 
	}
	else {
		$('nav#principal').css('display', 'none'); 
		navResponsive = true; 
	};
	$("header").css('height', 0).css('height', $("header").get(0).scrollHeight); 
	return false; 
}

function NoticiasMasRecientes(){
	if (visibilidadBloqueRecientes) {
		$('#bloque-noticias-recientes').css('display', 'block'); 
		$("#contenido-noticias-recientes").load("noticias-recientes.html"); 
		visibilidadBloqueRecientes = false; 
	}
	else {
		$('#bloque-noticias-recientes').css('display', 'none'); 
		$("#contenido-noticias-recientes").html('<div class="caja-carga"><div class="circulo-interno"></div><div class="circulo-externo"></div></div>'); 
		visibilidadBloqueRecientes = true; 
	};
	return false; 
}

function LinkNav(pagina) {
	$("#contenido-pagina").load(pagina+".html"); 
	if (pagina === 'inicio') {
		$("section#destacado").css("opacity", "0");
		$("section#mas-leidos").css("opacity", "0");
		$("section#mas-leidos").css("width", "0");
		$("section#contenido-principal").css("opacity", "0");


		//$("section#recientes").css("width", "0px");

		//$("section#recientes").animate({width: "100%"}, 300)
		$("header").animate({height: $("header").get(0).scrollHeight}, 300, function(){
			$("#logotipo").animate({"padding-top": "10px", opacity: "1"}, 300, function(){
				$("nav#principal ul").animate({"padding-left": "10px", opacity: "1", "transition-duration": "0.5s"}, 300);
				$("nav#principal ul ul").css('padding-left', 'inherit'); 
				$("section#destacado").animate({opacity: "1"}, 300, function(){
					$("section#contenido-principal").animate({opacity: "1"}, 300);
				});
			});
		});
	};
}

function VerNoticia(id) {
	$("#contenido-pagina").load("noticia.html#"+id); 
	$("section#destacado").css("opacity", "0");
	$("section#mas-leidos").css("opacity", "0");
	$("section#mas-leidos").css("width", "0");
	$("section#contenido-principal").css("opacity", "0");


	//$("section#recientes").css("width", "0px");

	//$("section#recientes").animate({width: "100%"}, 300)
	$("header").animate({height: $("header").get(0).scrollHeight}, 300, function(){
		$("#logotipo").animate({"padding-top": "10px", opacity: "1"}, 300, function(){
			$("ul").animate({"padding-left": "10px", opacity: "1", "transition-duration": "0.5s"}, 300);
			$("section#destacado").animate({opacity: "1"}, 300, function(){
				$("section#contenido-principal").animate({opacity: "1"}, 300);
			});
		});
	});
}