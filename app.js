$(document).ready(function(){
    var third         = $("#third").position();
    var second        = $("#second").position();
    var windowHeight  = $( window ).height();

    $("#nav-icon").click(function(){
        $(this).toggleClass('open');
        $("ul").height(windowHeight).slideToggle("slow");

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
    if(second) {
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() > second.top - 400) {
                    $("#second").addClass("animateMe");
                }
                if ($(window).scrollTop() > third.top - 550) {
                    $("#third").addClass("animateMe");
                }
            });
        });
    }
    // !function() {
    //     if ($( window ).width() > 787) {
    //         $('ul').attr('style','display: flex');
    //     }
    // }()

});


