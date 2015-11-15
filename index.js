var screen = "login";



$(document).ready(function() {
  //updateScreen();
});

function updateScreen() {
  if(screen == "login") {
    $(".login").show();
    $(".chat").hide();
  } else if(screen == "chat") {
    $(".login").hide();
    $(".chat").show();
  }
}
