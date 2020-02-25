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
