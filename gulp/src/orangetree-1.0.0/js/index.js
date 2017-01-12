/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// css
	__webpack_require__(1)
	__webpack_require__(9)
	__webpack_require__(11)

	// js
	__webpack_require__(13);
	__webpack_require__(14);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

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

/***/ },
/* 14 */
/***/ function(module, exports) {

	$(function() {
	    var myV = document.getElementById('myV');
	    listenWidthHeight();
	    $(window).resize(function () {
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
	    setTimeout(function () {
	        $('.con img').animate({
	            margin: 0,
	            opacity: 1,
	        }, 600)
	    },100)
	    setTimeout(function () {
	        $('.con .text1').animate({
	            marginTop: 20+'px',
	            opacity: 1,
	        }, 600)
	    },500)
	    setTimeout(function () {
	        $('.con .text2').animate({
	            marginTop: 10+'px',
	            opacity: 1,
	        }, 1000,function () {
	            // 蒙版层的消失
	            $('.mask').animate({
	                opacity: 0.6,
	            },function () {
	                // 视频开始播放
	                myV.play();
	                $('.logo').show();
	            })
	        })
	    },800)




	    // （原生）自定义进度条(利用测试网速的方法)

	//前4个属性值需 自定义

	    var progressBar = {

	        url: "images/about/07.jpg", //用于测试的图片路径

	        fileSize: 128, // 用于测试的图片的大小，单位k

	        pageSize: 1024, //页面大小。假设为1M=1024k,即加载了1M则进度条达到100%

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
	            newBar.addEventListener(evname, function() {
	                this.style.display = 'none';
	            }, false)
	        }
	    })();

	})


/***/ }
/******/ ]);