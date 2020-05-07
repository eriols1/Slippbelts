/*jslint browser: true*/ /*global  $*/
$(".button1").show();
$("#bilddub").show();
$(".button2").show();
$(".dot").show();
$(".dot2").show();
$(".dot3").show();
$(".scroll").show();
$("#window").css("overflow", "hidden");
var x = -1;
var i;

$(".button1").click(function(){
  x=x+201;

  if (x>600) {
    x = 0;
  }

  $("#imgs").animate({left:-x},750);
});

$(".button2").click(function(){
  x=x-201;

  if (x<0) {
    x=402;
  }

  $("#imgs").animate({left:-x},750);
});

$("#imgs").click(function(){
  x=x+201;

  if (x>600) {
    x = 0;
  }

  $("#imgs").animate({left:-x},750);
});

$(".dot").click(function(){
  if (x>0) {
    x=x-x;
  }

  $("#imgs").animate({left:-x},750);
});

$(".dot2").click(function(){
  if (x<1) {
    x=x+201;

  }else if (x>300) {
    x=x-201;
  }

  $("#imgs").animate({left:-x},750);
});

$(".dot3").click(function(){
  if (x<1) {
    x=x+402;

  }else if (x>200) {
    x=x+201;
  }

  $("#imgs").animate({left:-x},750);
});
