$(document).ready(function() {
  $( "nav" ).hover(function() {
    $("nav").show();
    $( "#nav" ).toggle( "slow", function() {
      // Animation complete.
    });
  });
}
