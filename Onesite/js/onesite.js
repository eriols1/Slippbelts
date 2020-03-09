$(document).ready(function() {
  $( "nav" ).click(function() {
    $("nav").show();
    $( "#nav" ).toggle( "slow", function() {
      // Animation complete.
    });
  });
  $("#belts").click(function(){
    $('html, body').animate({
      scrollTop: $("#box").offset().top
    }, 1000);
  });// När man klickar går den ner till id #box
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
});
/*jslint browser: true*/ /*global  $*/
window.addEventListener('resize', function(event){
  // do stuff here

  if ($(window).width()>1000){

    $(".slider500px").show();
    $("#bilddub").show();
    $("#imgs").show();
    $("#window").css("overflow", "hidden");

  }
  if ($(window).width()<1000){

  $(".slider500px").hide();

  }
});

if ($(window).width()>1000){

  $(".slider500px").show();
  $("#bilddub").show();
  $("#imgs").show();
  $("#window").css("overflow", "hidden");

}

var x = -1;
var i;

$(".next").click(function(){
  x=x+807;

  if (x>2400) {
    x = 0;
  }

  $("#imgs").animate({left:-x},750);
});

$(".prev").click(function(){
  x=x-807;

  if (x<0) {
    x=1606;
  }

  $("#imgs").animate({left:-x},750);
});

$("#imgs").click(function(){
  x=x+807;

  if (x>2400) {
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
    x=x+807;

  } else if (x>1200) {
    x=x-807;
  }

  $("#imgs").animate({left:-x},750);
});

$(".punkt3").click(function(){
  if (x<1) {
    x=x+1606;

  } else if (x>800) {
    x=x+807;
  }

  $("#imgs").animate({left:-x},750);
});

// $(".scroll").click(function(){
//   for(i=0;i<686;i+=1){
//     x=x+2;
//
//     if (x>1370){
//       x=0;
//     }
//
//     $("#imgs").animate({left:-x},3);
//   }
// });
