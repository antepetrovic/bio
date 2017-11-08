$(document).ready(function(){
    $("#nav-icon").click(function(){
        $(this).toggleClass('open');
        $( "nav" ).slideToggle("slow");
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

    $(function () {
        var element = $("#second");
        $(window).scroll(function () {
            if($(window).scrollTop() > 200) {
                element.addClass("animateMe");
            }

        });
    });

    $(function () {
        var element = $("#third");
        $(window).scroll(function () {
            if($(window).scrollTop() > 700) {
                element.addClass("animateMe");
            }

        });
    });

    $(function () {
        var element = $("#fourth");
        $(window).scroll(function () {
            if($(window).scrollTop() > 1400) {
                element.addClass("animateMe");
            }

        });
    });

});
var a = $("#fourth").position();
console.log(a);

