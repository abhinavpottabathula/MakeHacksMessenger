var screen = "login";
var aspect = 1.5
var username;

$(document).ready(function() {

  updateScreen();

  scale();

  $("#login").mouseenter(function() {
		$("#login").stop().animate({color: "white",backgroundColor: "#ff314f"}, 250);
	});
	$("#login").mouseleave(function() {
		$("#login").stop().animate({color: "#ff314f", backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});

  $("#login").click(function() {
    if($("#username").val() != "" && $("#password").val() != "") {
      username = $("#username").val();
      $("#username").val("");
      screen = "menu";
      updateScreen();
    }
  });

  $(window).resize(function() {
    scale();
  });

});

function updateScreen() {
  if(screen == "login") {
    $(".login").show();
    $(".chat").hide();
    $(".menu").hide();
  } else if(screen == "chat") {
    $(".menu").hide();
    $(".login").hide();
    $(".chat").show();
  } else if(screen == "menu") {
    $(".menu").show();
    $(".login").hide();
    $(".chat").hide();
  }
}

function scale() {
  if($(window).width()/$(window).height() >= aspect) {
    $(".login").css("background-size", "100vw auto");
  } else {
    $(".login").css("background-size", "auto 100vh");
  }
}
