/*jslint browser: true*/ /*global  $*/
$("nav").click(function () {
  $("nav").show();
  $("#dropdown").toggle("slow", function () {

  });
});
$("#dots").show();
$("#window").show();
$("#noJsImgs").hide();
$(document).ready(function() {
  $("#window").css("overflow", "hidden");
  var x = -1;

  $("#imgs").click(function(){
    x=x+404;

    if (x>2000) {
      x = 0;
      $("#imgs").animate({left:-x},0);
      x=x+404;
    }

    $("#imgs").animate({left:-x},500);
  });

  $("#dot1").click(function(){
    if (x>0) {
      x=x-x-2;
    }

    $("#imgs").animate({left:-x},0);
  });

  $("#dot2").click(function(){
    if (x<1) {
      x=x+401;
    }else if (x>300) {
      x=x-x+401;
    }

    $("#imgs").animate({left:-x},0);
  });

  $("#dot3").click(function(){
    if (x<1) {
      x=x+806;
    } else if (x>300) {
      x=x-x+805;
    }

    $("#imgs").animate({left:-x},0);
  });

  $("#dot4").click(function(){
    if (x<1) {
      x=x+1209;
    }else if (x>300) {
      x=x-x+1209;
    }

    $("#imgs").animate({left:-x},0);
  });
});
