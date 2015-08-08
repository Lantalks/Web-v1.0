$(window).load(function(){
	$("header").css("height", "0px");
	$("header #logotipo").css("padding-top", "0px").css("opacity", "0");
	$("header nav ul").css("padding-left", "0px").css("opacity", "0");

	$("section#destacado").css("opacity", "0");
	$("section#recientes").css("opacity", "0");
	$("section#contenido-principal").css("opacity", "0");

	//$("section#recientes").css("width", "0px");

	//$("section#recientes").animate({width: "100%"}, 300)
	$("header").animate({height: $("header").get(0).scrollHeight}, 300, function(){
		$("#logotipo").animate({"padding-top": "10px", opacity: "1"}, 300, function(){
			$("ul").animate({"padding-left": "10px", opacity: "1", "transition-duration": "0.5s"}, 300);
			$("section#destacado").animate({opacity: "1"}, 300, function(){
				$("section#recientes").animate({opacity: "1"}, 300);
				$("section#contenido-principal").animate({opacity: "1"}, 300);
			});
		});
	});
});