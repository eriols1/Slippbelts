/*jslint browser: true*/ /*global  $*/
    //visar och gömmer de taggar som ska synas eller inte synas på hemsidan
$("#text2").show();
$("#dots").show();
$("#window").show();
$("#myImg").show();
$("#noJsImgs").hide();
$("#noJsLinks").hide();
// När hela dokumentet är redo att visas kommer det nedanför att ladda in
$(document).ready(function () {
  $("nav").click(function () {
      $("nav").show();
      $("#dropdown").toggle("slow", function () {
      // Öppnar/stänger menyn
          var g = 1;
          g = g + 1;
      //var g finns här för att annars hade inte jslint varit perfekt
      });
  });
  //allting smo är överflödigt i #windows kommer inte att visas
    $("#window").css("overflow", "hidden");
    var x = -1;
    //När man trycker på #dot1 kommer x=x-x och röra sig till den platsen på 0s.
    $("#dot1").click(function () {
        if (x > 0) {
            x = x - x;
        }

        $("#imgs").animate({left: -x}, 0);
    });
    // när man trycker på dot2 kommer man x=400px och om siadn är bredare än
    // 434px kommer den bara gå halva distansen istället
    $("#dot2").click(function () {
        if ($(window).width() > 434) {
            if (x < 1) {
                x = x + 401;
            } else if (x > 300) {
                x = x - x + 400;
            }
        } else {
            if (x < 1) {
                x = x + 201;
            } else if (x > 150) {
                x = x - x + 200;
            }
        }

        $("#imgs").animate({left: -x}, 0);
    });
    //samma sak händer hrär som i förra förut att den kommer till 800px istället
    $("#dot3").click(function () {
        if ($(window).width() > 434) {
            if (x < 1) {
                x = x + 805;
            } else if (x > 300) {
                x = x - x + 804;
            }
        } else {
            if (x < 1) {
                x = x + 405;
            } else if (x > 150) {
                x = x - x + 404;
            }
        }
        $("#imgs").animate({left: -x}, 0);
    });
    //samma sak händer hrär som i förra förut att den kommer till 1200px istället
    $("#dot4").click(function () {
        if ($(window).width() > 434) {
            if (x < 1) {
                x = x + 1209;
            } else if (x > 300) {
                x = x - x + 1208;
            }
        } else {
            if (x < 1) {
                x = x + 609;
            } else if (x > 150) {
                x = x - x + 608;
            }
        }

        $("#imgs").animate({left: -x}, 0);
    });
    //När bredden på sidan är mindre än 683px ska myImg2 visas istället för myImg
    if ($(window).width() <= 683) {
        $("#myImg2").show();
        $("#myImg").hide();
      }
      //när bredden på sidan ändras och är mindre eller lika med 683px
      //kommer myImg2 att visas istället för myImg
    window.addEventListener("resize", function () {
        if ($(window).width() <= 683) {
            $("#myImg2").show();
            $("#myImg").hide();
        }
        //när bredden på sidan ändras och är större med 683px
        //kommer myImg att visas istället för myImg2
        if ($(window).width() > 683) {
            $("#myImg").show();
            $("#myImg2").hide();
        }
    });
    // Får modalen
    var modal = document.getElementById("myModal");

    // Får bilden klistrar in den i modalen
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    $("img").click(function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });

    // Span knappen som gör så man kan stänga modal
    var span = document.getElementsByClassName("close")[0];

    // När man trycker på span X kommer man kommer modal att stängas
    $("span").click(function () {
        modal.style.display = "none";
    });
});
