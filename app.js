$(document).ready(function(){
    var fourth = $("#fourth").position();
    var third = $("#third").position();
    var second = $("#second").position();
    var screenWidth= $(window).width();
    console.log(screenWidth);
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
            if($(window).scrollTop() > second.top - screenWidth) {
                element.addClass("animateMe");
            }

        });
    });

    $(function () {
        var element = $("#third");
        $(window).scroll(function () {
            if($(window).scrollTop() > third.top - screenWidth) {
                element.addClass("animateMe");
            }

        });
    });

    $(function () {
        var element = $("#fourth");
        $(window).scroll(function () {
            if($(window).scrollTop() > fourth.top - screenWidth) {
                element.addClass("animateMe");
            }

        });
    });

});