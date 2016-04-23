$(document).ready(function() {
	$("#scale-submit").click(function() {
	var scaleString = $("#scale").val();
	var scale = parseInt (scaleString);

	if ( scale >= 10 ) {
		$("#pluto-form").show();
		$("#scale-form").hide();
		$("#question2").show();
		$("#question1").hide();
	} else {
		$("#answer").text("Go die in the Sun :P");
		$("#planet-img").attr("src", "https://goo.gl/CSWFD4");
		$("#scale-form").hide();
		$("#question1").hide();

	}
	});

	$("#pluto-submit").click(function() {
	var plutoString = $("#pluto").val();
	var pluto = parseInt (plutoString);

	if ( pluto == 1 ) {
		$("#answer").text("Welcome to Uranus... hmm...");
		$("#planet-img").attr("src", "http://goo.gl/KHhQIS");
		$("#pluto-form").hide();
		$("#question2").hide();		
	} else {
		$("#answer").text("Go die in the Sun :P");
		$("#planet-img").attr("src", "https://goo.gl/CSWFD4");
		$("#pluto-form").hide();
		$("#question2").hide();
	}
	});

	$("img").on("mouseenter", function() {
	$(this).addClass("darken");	
	});

	$("img").on("mouseleave", function() {
	$(this).removeClass("darken");	
	});
});