$.ajaxSetup ({
	// Disable caching of AJAX responses
	cache: false
});
$(window).load(function(){
	$("#contenido-pagina").load("inicio.html");

	$("header").css("height", "0px").css("z-index", "3");
	$("header #logotipo").css("padding-top", "0px").css("opacity", "0");
	$("header nav ul").css("padding-left", "0px").css("opacity", "0");

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
});