$("document").ready(function () {
$(window).scroll(function(){
    if($(window).scrollTop()){
        $("#mainNav").addClass("white");
    }
    else {
        $("#mainNav").removeClass("white");
    } 

});//END SCROLL TOP

//    HAMBURGER MENU
$('#menu').slicknav({
    closeOnClick: true
}); //END HAMBURGER


$(window).on("scroll", function () {

    if ($(window).scrollTop() > 250) {
        $(".imgWelcome").animate({
            left: "0%",
            opacity: '1'
        }, 1500);
    }

    if ($(window).scrollTop() > 400) {
        $(".parallelogram").animate({
            left: "10%",
            opacity: '0.7'
        }, 1000);
    }

    if ($(window).scrollTop() > 450) {
        $(".kontaktTel ul li a ").animate({
            left: "0",
            opacity: '1'
        }, 1000);
    }

    if ($(window).scrollTop() > 450) {
        $(".textH").animate({
            top: "0%",
            right: "0%",
            opacity: '1'
        }, 1000);
    }

    if($(window).scrollTop() > 500) {
        $(".email p").animate({
            top: "0%", 
            left: "0%",
            opacity: '1'
        }, 1000);
    }

    if($(window).scrollTop() > 1100) {
        $(".beograd h4, .beograd iframe").animate({ 
            left: "0%"
        }, 1000);
    }

    if ($(window).scrollTop() > 900) {
        $(".cacak").animate({
            left: "0%"
        }, 1000);
    }

    if ($(window).scrollTop() > 1700) {
        $(".socialMedia").animate({
            left: "0%"
        }, 1000);
    }

    if($(window).scrollTop() > 2000) {
        $(".social a").animate({
            left: "0%"
        }, 1000);
    }

    if($(window).scrollTop() > 600) {
        $("p.para1").animate({
            top: "0%",
            left: "0%", 
            color: "#000",
            opacity: "1"
        }, 1000);
    }//END PARA1

    if($(window).scrollTop() > 1000) {
        $(".para2").animate({
            left: "0%",
            opacity: '1'
        }, 1500);
    };// END PARA2

    if($(window).scrollTop() > 1500) {
        $(".mesImg img").animate({
            top:"0%"
        }, 1000)
    };//END MES IMAGE

    if($(window).scrollTop() > 1650) {
        $(".uslugeAccordion h2").animate({
            left:"0%",
            opacity: '1'
        }, 1000)
    };//END USLUGE H2

    if($(window).scrollTop() > 1900) {
        $(".uslugeImg img").animate({
            left:"0%",
            opacity:1
        }, 1000)
    };//END USLUGE img

    if($(window).scrollTop() > 2050) {
        $(".uslugeList").animate({
            right: "0%",
            opacity: 1
        }, 1000)
    };//END ACCORDION

    if($(window).scrollTop() > 2100) {
        $(".interfoniPara p").animate({
            top: "0%"
        }, 1000)
    };//END INTERFONIPARA


});//END SCROLL TOP

$(window).scroll(function () {
    var scroll_position = $(window).scrollTop() / 7;
    $(".welcome, .contactUs").css({
        "background-position-y": -scroll_position + "px",
    })

});//END BACKGROUND IMG SCROLL
    
//   $(window).scroll(function() {
//     if ($(window).scrollTop() > 1500) {
//         $("div.uslugeAccordion").addClass("gray");
//     }//END CSS GRAY


//     if ($(window).scrollTop() > 1500) {
//         $("div.bgBlue").addClass("blue");
//     }//END CSS BLUE

// });//END SCROLL HR

// UPDATE COPYRIGHT YEAR
    
      document.querySelector('#copyrightYear').innerText = new Date().getFullYear();



});//END DOC READY