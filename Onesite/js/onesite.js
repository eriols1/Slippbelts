$(document).ready(function() {
  $( "nav" ).click(function() {
    $("nav").show();
    $( "#nav" ).toggle( "slow", function() {
      // Animation complete.
    });
  });
});
$("#belts").click(function(){
  $('html, body').animate({
    scrollTop: $("#box").offset().top
  }, 1000);
});
$("#info").click(function(){
  $('html, body').animate({
    scrollTop: $("#box1").offset().top
  }, 1000);
});
$("#slippers").click(function(){
  $('html, body').animate({
    scrollTop: $("#box2").offset().top
  }, 1000);
});
$("#rea").click(function(){
  $('html, body').animate({
    scrollTop: $("#box3").offset().top
  }, 1000);
});
$("#info").click(function(){
  $('html, body').animate({
    scrollTop: $("#box4").offset().top
  }, 1000);
});
/*jslint browser: true*/ /*global  $*/
$(".button1").show();
$("#bilddub").show();
$(".button2").show();
$(".punkt1").show();
$(".punkt2").show();
$(".punkt3").show();
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

$(".punkt1").click(function(){
  if (x>0) {
    x=x-x;
  }

  $("#imgs").animate({left:-x},750);
});

$(".punkt2").click(function(){
  if (x<1) {
    x=x+201;

  }else if (x>300) {
    x=x-201;
  }

  $("#imgs").animate({left:-x},750);
});

$(".punkt3").click(function(){
  if (x<1) {
    x=x+402;

  }else if (x>200) {
    x=x+201;
  }

  $("#imgs").animate({left:-x},750);
});

$(".scroll").click(function(){
  for(i=0;i<306;i+=1){
    x=x+2;

    if (x>610){
      x=0;
    }

    $("#imgs").animate({left:-x},10);
  }
});
