/*jslint browser: true*/ /*global  $*/
$("nav").click(function () {
    $("nav").show();
    $("#dropdown").toggle("slow", function () {
    // Öppnar/stänger menyn
        var g = 1;
        g = g + 1;
    //var g finns här för att annars hade inte jslint varit perfekt
    });
});
$("#text2").show();
$("#dots").show();
$("#window").show();
$("#myImg").show();
$("#noJsImgs").hide();
$("#noJsLinks").hide();
if ($(window).width() <= 683) {
    $("#myImg2").show();
    $("#myImg").hide();
}
window.addEventListener("resize", function () {
    if ($(window).width() <= 683) {
        $("#myImg2").show();
        $("#myImg").hide();
    }
    if ($(window).width() > 683) {
        $("#myImg").show();
        $("#myImg2").hide();
    }
});
$(document).ready(function () {
    $("#window").css("overflow", "hidden");
    var x = -1;

    $("#dot1").click(function () {
        if (x > 0) {
            x = x - x;
        }

        $("#imgs").animate({left: -x}, 0);
    });

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
var spana = document.getElementsByClassName("close")[0];

// När man trycker på span X kommer man kommer modal att stängas
$("spana").click(function () {
    modal.style.display = "none";
});
