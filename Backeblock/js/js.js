/*jslint browser: true*/ /*global  $*/
$("nav").click(function () {
  $("nav").show();
  $("#dropdown").toggle("slow", function () {

  });
});
$("#text2").show();
$("#dots").show();
$("#window").show();
$("#noJsImgs").hide();
$("#noJsLinks").hide();
$(document).ready(function() {
  $("#window").css("overflow", "hidden");
  var x = -1;

  $("#dot1").click(function(){
    if (x>0) {
      x=x-x;
    }

    $("#imgs").animate({left:-x},0);
  });

  $("#dot2").click(function(){
      if ($(window).width() > 434) {
        if (x<1) {
          x=x+401;
        } else if (x>300) {
          x=x-x+400;
        }
      } else {
        if (x<1) {
          x=x+201;
        } else if (x>150){
          x=x-x+200;
        }
      }

    $("#imgs").animate({left:-x},0);
  });

  $("#dot3").click(function(){
    if ($(window).width() > 434) {
    if (x<1) {
      x=x+805;
    } else if (x>300) {
      x=x-x+804;
    }
  } else {
      if (x<1) {
        x=x+405;
      } else if (x>150){
        x=x-x+404;
      }
}
    $("#imgs").animate({left:-x},0);
  });

  $("#dot4").click(function(){
      if ($(window).width() > 434) {
    if (x<1) {
      x=x+1209;
    }else if (x>300) {
      x=x-x+1208;
    }
  } else {
        if (x<1) {
          x=x+609;
        } else if (x>150){
          x=x-x+608;
        }
  }

    $("#imgs").animate({left:-x},0);
  });
});
