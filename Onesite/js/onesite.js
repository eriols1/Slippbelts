$(document).ready(function(){
  $( "nav" ).click(function() {
    $("nav").show();
    $( "#nav" ).toggle( "slow", function() {
      // Animation complete.
    });
  });
});
