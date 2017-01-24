$(function() {

    (function() {
        var imgUrl = require("../images/index/bg.jpg"),
            img = new Image();

        img.onload = function() {
            // 文字的动态进入
            $('.main img').animate({
                top: -0.8 + 'rem',
                opacity: 1,
            }, 600);
            setTimeout(function() {
                $('.text1').animate({
                    top: 0 + 'rem',
                    opacity: 1,
                }, 1000)
            }, 700)
            setTimeout(function() {
                $('.text2').animate({
                    top: 0.36 + 'rem',
                    opacity: 1,
                }, 1100)
            }, 1500)
        }
        img.src = imgUrl;
    })();
})