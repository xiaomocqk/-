$(function () {
    if($(window).scrollTop() >50) {
        $('.nav').addClass('nav-begin');
    }
    var isB = false,
     isB2 = true,
     timer = null,
     num = 2, num2 = 2;
    // 导航条的文字向上飘
    function up() {
        clearTimeout(timer);
        timer = setInterval(function () {
            num2 --;
            if(num2 <= 0) {
                for(var i = 0; i < 4; i++) {
                    $('.nav-con li').eq(i).stop().delay(i * 90).animate({
                        top: -50 +'px',
                    },600)
                }
                isB = true;
                isB2 = false;
                num2 = 2;
                clearTimeout(timer);
                $('.nav-icon').stop().delay(800).fadeIn();
                $('.nav-icon span').eq(0).removeClass('topDown').addClass('topUp');
                $('.nav-icon span').eq(1).stop().animate({
                    opacity: 1,
                },100);
                $('.nav-icon span').eq(2).removeClass('botUp').addClass('botDown');
            }
        }, 100)

    }

    // 导航条的文字向下飘
    function down() {
        clearTimeout(timer);
        timer = setInterval(function () {
            num --;
            if(num <= 0) {
                for(var j = 0; j < 4; j++) {
                    $('.nav-con li').eq(j).stop().delay(j * 80).animate({
                        top: 0,
                    },600)
                }
                $('.nav-con li').addClass('downAct');
                isB = false;
                isB2 = true;
                num = 2;
                clearTimeout(timer);
                $('.nav-icon').hide();
            }
        }, 100)

    }

    // 导航图标收缩，且调用up()
    function navIcon() {
        $('.nav-icon span').eq(0).removeClass('topUp').addClass('topDown');
        $('.nav-icon span').eq(1).stop().animate({
            opacity: 0,
        },100);
        $('.nav-icon span').eq(2).removeClass('botDown').addClass('botUp');
        down();
    }
    // 滚动条的监听处理
    function scroll() {
        var beforeScrollTop = $(window).scrollTop();
        window.addEventListener("scroll", function() {
            var afterScrollTop = $(window).scrollTop(),
                delta = afterScrollTop - beforeScrollTop;
            if( delta === 0 ) return false;
            // 滚动条下滑超出临界值（这里的临界值设为300）
            if(delta > 0 && afterScrollTop > 50) {
                $('.nav').removeClass('nav-down nav-init').addClass('nav-begin');
                if($('.nav').hasClass('nav-up')) {
                    $('.nav').removeClass('nav-up nav-begin').addClass('nav-down');
                }
                up();
            }
            // 滚动条上滑还没超过临界值
            if(delta < 0 && afterScrollTop > 50) {
                $('.nav').removeClass('nav-down nav-begin').addClass('nav-up');
            }else if(delta < 0 && afterScrollTop < 50){   //滚动条上滑超过临界值
                $('.nav').removeClass('nav-up').addClass('nav-init');
            }
            if(delta <0 && isB) {
                navIcon();
            }
            // 控制导航文字的颜色
            if(afterScrollTop > 50) {
                $('.nav-con a').removeClass('nor').addClass('white');
            }else {
                $('.nav-con a').removeClass('white').addClass('nor');
            }
            beforeScrollTop = afterScrollTop;
        }, false);
    }
    scroll();

    // 导航图标点击功能
    $('.nav-icon').click(function () {
        navIcon();
    })

    // 页面底部功能
    $('.wechat').hover(function () {
        $('.wc').hide().next().show();
    },function () {
        $('.wc-a').hide().prev().show();
    })

    $('.sina').hover(function () {
        $('.s').hide().next().show();
    },function () {
        $('.s-a').hide().prev().show();
    })
})