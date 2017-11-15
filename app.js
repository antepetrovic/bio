$(document).ready(function(){

    var fourth = $("#fourth").position();
    var third = $("#third").position();
    var second = $("#second").position();
    var screenWidth= $(window).width();

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
        $(window).scroll(function () {
            if($(window).scrollTop() > second.top) {
                $("#second").addClass("animateMe");
            }
            if($(window).scrollTop() > third.top) {
                $("#third").addClass("animateMe");
            }
            if($(window).scrollTop() > fourth.top) {
                $("#fourth").addClass("animateMe");
            }

        });
    });

});