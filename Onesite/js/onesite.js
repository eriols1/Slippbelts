/*jslint browser: true*/ /*global  $*/
$(document).ready(function () {
    $("nav").click(function () {
        $("nav").show();
        $("#nav").toggle("slow", function () {
      // Öppnar/stänger menyn
            var g = 1;
            g = g + 1;
//var g finns här för att annars hade inte jslint varit perfekt
        });
    });
    $("#belts").click(function () {
        $("html, body").animate({
            scrollTop: $("#box").offset().top
        }, 1000);
    });
// När man klickar går den ner till animeras den ner till id #box
    $("#info").click(function () {
        $("html, body").animate({
            scrollTop: $("#box3").offset().top
        }, 1000);
    });
    $("#slippers").click(function () {
        $("html, body").animate({
            scrollTop: $("#box2").offset().top
        }, 1000);
    });
    $("#rea").click(function () {
        $("html, body").animate({
            scrollTop: $("#box4").offset().top
        }, 1000);
    });
});
window.addEventListener("resize", function () {
//kör om funktionen varje gång du uppdaterar sidans bred

    if ($(window).width() > 1000) {
//så länge fönstret är större än 1000 kommer id och klasserna synas
        $(".slider500px").show();
        $("#box4").show();
        $("#bilddub").show();
        $("#imgs").show();
        $("#window").css("overflow", "hidden");
    }
    if ($(window).width() > 535) {
        $("#box5").show();
        $("#box6").show();
    }
    if ($(window).width() < 1135) {
//när klasserna eller id är mindre än 1135 kommer de att gömmas
        $(".slider500px").hide();
        $("#box4").hide();
    }
    if ($(window).width() < 535) {
//när klasserna eller id är mindre än 535 kommer de att gömmas
        $("#box6").hide();
        $("#box5").hide();
    }
});

if ($(window).width() > 1000) {
//så länge fönstret är större än 1000 kommer id och klasserna synas
    $(".slider500px").show();
    $("#box4").show();
    $("#bilddub").show();
    $("#imgs").show();
    $("#window").css("overflow", "hidden");
}
if ($(window).width() < 1135) {
//när klasserna eller id är mindre än 1135 kommer de att gömmas
    $(".slider500px").hide();
    $("#box4").hide();
}
if ($(window).width() < 535) {
//när klasserna eller id är mindre än 535 kommer de att gömmas
    $("#box6").hide();
    $("#box5").hide();
}
if ($(window).width() > 535) {
//när klasserna eller id är större än 535 kommer de att visas
    $("#box5").show();
    $("#box6").show();
}

var x = -1;
var i;

$(".next").click(function () {
//till slider här ändras sig bilderna beroende på hur mycket x
    x = x + 807;
// en bild är 800px bred med ett lietet mellan rum så 807 pixlar behövs

    if (x > 2400) {
        x = 0;
    }
    $("#imgs").animate({left: -x}, 0);
//animation går åt höger för att man tar minus vänster antimationen tar 0 milli
});

$(".prev").click(function () {
    x = x - 807;

    if (x < 0) {
        x = 1606;
    }
    $("#imgs").animate({left: -x}, 0);
});

$("#imgs").click(function () {
    x = x + 807;

    if (x > 2400) {
        x = 0;
    }
    $("#imgs").animate({left: -x}, 0);
});

$(".punkt1").click(function () {
    if (x > 0) {
        x = x - x;
    }
    $("#imgs").animate({left: -x}, 0);
});

$(".punkt2").click(function () {
    if (x < 1) {
        x = x + 807;

    } else if (x > 1200) {
        x = x - 807;
    }
    $("#imgs").animate({left: -x}, 0);
});

$(".punkt3").click(function () {
    if (x < 1) {
        x = x + 1606;

    } else if (x > 800) {
        x = x + 807;
    }
    $("#imgs").animate({left: -x}, 0);
});
$(".reatoffla").click(function () {
// När man trycker på knappen kommer det upp att varan är slut
    window.alert("We are unfourtunaly out of this product");
});
$(".prisbälte").click(function () {
    window.alert("We are unfourtunaly out of this product");
});
$(".pristoffla").click(function () {
    window.alert("We are unfourtunaly out of this product");
});
