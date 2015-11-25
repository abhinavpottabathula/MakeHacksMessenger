var screen = "login";
var aspect = 1.5;
var aspect2 = 1.7;
var username;
var password;
var myFirebaseRef = new Firebase("https://dicoapp.firebaseio.com/");

$(document).ready(function() {

  updateScreen();

  scale();

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

  $("#login").mouseenter(function() {
		$("#login").stop().animate({color: "white",backgroundColor: "#ff314f"}, 250);
	});
	$("#login").mouseleave(function() {
		$("#login").stop().animate({color: "white", backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});
  $("#sign").mouseenter(function() {
		$("#sign").stop().animate({color: "white",backgroundColor: "#ff314f"}, 250);
	});
	$("#sign").mouseleave(function() {
		$("#sign").stop().animate({color: "white", backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});
  $("#create").mouseenter(function() {
		$("#create").stop().animate({color: "white",backgroundColor: "#ff314f"}, 250);
	});
	$("#create").mouseleave(function() {
		$("#create").stop().animate({color: "white", backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});
  $("#log").mouseenter(function() {
		$("#log").stop().animate({color: "white",backgroundColor: "#ff314f"}, 250);
	});
	$("#log").mouseleave(function() {
		$("#log").stop().animate({color: "white", backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});
  $("#cancel").mouseenter(function() {
		$("#cancel").stop().animate({color: "white",backgroundColor: "#ff314f"}, 250);
	});
	$("#cancel").mouseleave(function() {
		$("#cancel").stop().animate({color: "white", backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});

  $("#login").click(function() {
    if($("#username").val() != "" && $("#password").val() != "") {
      username = $("#username").val();
      password = $("#password").val();
      $("#username").val("");
      $("#password").val("");
      myFirebaseRef.child("users").child(username).on("value", function(snapshot) {
        if(snapshot.val() == password) {
          $("#loginalert").css("display", "none");
          screen = "menu";
          $("#welcome").text("Welcome " + username);
          updateScreen();
        } else {
          $("#loginalert").slideDown();
        }
      });
    }
  });

  $(document).keypress(function(e){
    if(e.which == 13 && $("#password").val() != "") {
      if($("#username").val() != "" && $("#password").val() != "") {
        username = $("#username").val();
        password = $("#password").val();
        $("#username").val("");
        $("#password").val("");
        myFirebaseRef.child("users").child(username).on("value", function(snapshot) {
          if(snapshot.val() == password) {
            $("#loginalert").css("display", "none");
            screen = "menu";
            $("#welcome").text("Welcome " + username);
            updateScreen();
          } else {
            $("#loginalert").slideDown();
          }
        });
      }
    }
  });

  $("#sign").click(function() {
      screen = "sign";
      updateScreen();
  });
  $("#exit").click(function() {
      screen = "menu";
      updateScreen();
  });
  $("#log").click(function() {
      screen = "login";
      updateScreen();
  });
  $("#cancel").click(function() {
      screen = "login";
      $("#user").val("");
      $("#pass").val("");
      updateScreen();
  });

  $("#create").click(function() {
    if($("#user").val() != "" && $("#pass").val() != "") {
      username = $("#user").val();
      password = $("#pass").val();
      $("#user").val("");
      $("#pass").val("");
      myFirebaseRef.child("users").child(username).on("value", function(snapshot) {
        if(snapshot.val() != "") {
          $("#signalert").slideDown();
          myFirebaseRef.child("users").child(username).set(password);
          $("#signalert").css("display", "none");
          screen = "login";
          updateScreen();
        } else {
          myFirebaseRef.child("users").child(username).set(password);
          $("#signalert").css("display", "none");
          screen = "login";
          updateScreen();
        }
      });
    }
  });

  $("#dico_ch_a").click(function() {
    screen = "chat";
    updateScreen();
  });
  $("#dico_ch_b").click(function() {
    screen = "chat";
    updateScreen();
  });
  $("#dico_ch_c").click(function() {
    screen = "chat";
    updateScreen();
  });

  $(window).resize(function() {
    scale();
  });

  $("#addOp").mouseenter(function() {
    $("#addOp").attr("src", "purplemenu.png");
  });
  $("#addOp").mouseleave(function() {
    $("#addOp").attr("src", "redmenu.png");
  });
  $("#addBar").mouseenter(function() {
    $("#addBar").attr("src", "barBefore.png");
  });
  $("#addBar").mouseleave(function() {
    $("#addBar").attr("src", "barAfter.png");
  });
  $("#addPie").mouseenter(function() {
    $("#addPie").attr("src", "pieBefore.png");
  });
  $("#addPie").mouseleave(function() {
    $("#addPie").attr("src", "pieAfter.png");
  });

  $("#addOp").click(function() {
    $("#text").val($("#text").val()+"`insertanoptionhere`");
  });


});

function updateScreen() {
  $("#loginalert").css("display", "none");
  $("#signalert").css("display", "none");
  if(screen == "login") {
    $(".login").show();
    $(".chat").hide();
    $(".addConversation").hide();
    $(".menu").hide();
    $(".sign").hide();
  } else if(screen == "chat") {
    $(".menu").hide();
    $(".addConversation").hide();
    $(".login").hide();
    $(".chat").show();
    $(".sign").hide();
  } else if(screen == "menu") {
    $(".menu").show();
    $(".addConversation").hide();
    $(".login").hide();
    $(".chat").hide();
    $(".sign").hide();
  } else if(screen == "sign") {
    $(".menu").hide();
    $(".addConversation").hide();
    $(".login").hide();
    $(".chat").hide();
    $(".sign").show();
  }
  $(".viewport").css("max-height", $(window).height() - $("#chatscreen").offset().top);
}

function scale() {
  if($(window).width()/$(window).height() >= aspect) {
    $(".login").css("background-size", "100vw auto");
  } else {
    $(".login").css("background-size", "auto 100vh");
  }
  if($(window).width()/$(window).height() >= aspect) {
    $(".sign").css("background-size", "100vw auto");
  } else {
    $(".sign").css("background-size", "auto 100vh");
  }
  if($(window).width()/$(window).height() >= aspect2) {
    $("#menuheader").css("background-size", "100vw auto");
  } else {
    $("#menuheader").css("background-size", "auto 100vh");
  }
  $(".viewport").css("max-height", $(window).height() - $("#chatscreen").offset().top);
}
