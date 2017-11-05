$(document).ready(function(){
    $('header div').click(function(){
        $(this).toggleClass('open');
        $( "nav" ).slideToggle("slow");
    });


});