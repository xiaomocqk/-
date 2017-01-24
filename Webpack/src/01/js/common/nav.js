$(function() {
    var isB = true;
    $('.nav-btn').on("touchend",function (e) {
        if(isB) {
            $('.nav').removeClass('nav-out').addClass('nav-in');
            $('.nav-mask').fadeIn();
            isB = false;
        } else {
            $('.nav').removeClass('nav-in').addClass('nav-out');
            $('.nav-mask').fadeOut();
            isB = true;
        }
        $('body, html').addClass('noScroll');
        e.preventDefault();
    })
    $('.nav-mask').on("touchend",function (e) {
        $('.nav').removeClass('nav-in').addClass('nav-out');
        $('.nav-mask').fadeOut();
        isB = true;
        $('body, html').removeClass('noScroll');
        e.preventDefault();
    })
})