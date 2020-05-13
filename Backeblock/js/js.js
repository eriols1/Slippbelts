/*jslint browser: true*/ /*global  $*/
$(".button1").show();
$(".button2").show();
$("#window").css("overflow", "hidden");
var x = -1;
var i;

$(".button1").click(function(){
  x=x+401;

  if (x>1600) {
    x = 0;
  }

  $("#imgs").animate({left:-x},0);
});

$(".dot2").click(function(){
  x=x-401;

  if (x<0) {
    x=802;
  }

  $("#imgs").animate({left:-x},0);
});

$("#imgs").click(function(){
  x=x+403;

  if (x>1600) {
    x = 0;
  }

  $("#imgs").animate({left:-x},500);
});

$(".dot").click(function(){
  if (x>0) {
    x=x-x;
  }

  $("#imgs").animate({left:-x},0);
});

$(".dot2").click(function(){
  if (x<1) {
    x=x+401;

  }else if (x>750) {
    x=x-401;
  }

  $("#imgs").animate({left:-x},0);
});

$(".dot3").click(function(){
  if (x<1) {
    x=x+802;

  }else if (x>400) {
    x=x+401;
  }

  $("#imgs").animate({left:-x},0);
});
