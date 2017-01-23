$(function() {
    var myV = document.getElementById('myV');
    listenWidthHeight();
    $(window).resize(function() {
            listenWidthHeight();
        })
        // 监听窗口的大小
    function listenWidthHeight() {
        var w = $(window).width(),
            h = $(window).height();
        $('.vid').css({
            height: h + 'px',
        })
    }

    // 首页内容逐渐进入
    setTimeout(function() {
        $('.con img').animate({
            margin: 0,
            opacity: 1,
        }, 600)
    }, 100)
    setTimeout(function() {
        $('.con .text1').animate({
            marginTop: 20 + 'px',
            opacity: 1,
        }, 600)
    }, 500)
    setTimeout(function() {
        $('.con .text2').animate({
            marginTop: 10 + 'px',
            opacity: 1,
        }, 1000, function() {
            // 蒙版层的消失
            $('.mask').animate({
                opacity: 0.6,
            }, function() {
                // 视频开始播放
                myV.play();
                $('.logo').show();
            })
        })
    }, 800)



    // （原生）自定义进度条(利用测试网速的方法)

    //前4个属性值需 自定义

    var progressBar = {

        url: "images/about/07.jpg", //用于测试的图片路径

        fileSize: 128, // 用于测试的图片的大小，单位k

        pageSize: 2000, //页面大小。

        speed: 0, //当前网速,计算单位k/s

        speedTest: function(cb) { //测试网速,接收一个cb回调函数
            var _self = this,
                oImg = new Image(),
                t0 = new Date();

            oImg.src = _self.url;

            oImg.onload = function() {
                var t1 = new Date();

                _self.speed = Math.round(_self.fileSize * 1000) / (t1 - t0);

                cb && cb();

                // console.log(t1-t0);//毫秒数
                // document.title = _self.speed; // 字节/毫秒 = k/s
            }

        }
    };

    //添加进度条至dom
    (function() {
        var newBar = document.createElement('div');
        newBar.id = 'progressBar';
        document.body.appendChild(newBar);

        //引入并执行测试网速函数，并显示进度过程
        progressBar.speedTest(showProgress);

        function showProgress() {
            var duration = progressBar.pageSize / progressBar.speed; //进度条进行时间，单位秒
            var evname = window.webkitTransitionend ? 'webkitTransitionEnd' : 'transitionend';

            newBar.style.transitionDuration = duration + 's';
            newBar.className = 'progress';

            if (duration < 0.1) { //防止时间太短，无法正常触发transitionend事件(transition与GUI渲染频率有关)
                newBar.style.width = '100%' ;
                setTimeout(function() {
                    newBar.style.display = 'none';
                    return;
                }, 100);
            };
            
            newBar.addEventListener(evname, function() {
                this.style.display = 'none';
            }, false)
        }
    })();

})