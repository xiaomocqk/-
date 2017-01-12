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
	__webpack_require__(18)
	__webpack_require__(20)
	__webpack_require__(22)
	__webpack_require__(24)
	__webpack_require__(26)
	__webpack_require__(29)

	// js
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);


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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
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
/* 37 */
/***/ function(module, exports) {

	// 首屏动画在dom加载后执行
	(function() {
		(function() {
			var isComplete = new Image();
			// 首屏背景图片加载完毕后执行动画
			isComplete.onload = function() {
				// alert('可以加载动画了');
				var delay = 200; //第一行播放的初始延迟时间
				$('.page1 .text span').each(function() {
					$(this).addClass('fadeInUp').css('animationDelay', delay + 'ms');
					delay += 400; //播放时间的间隔
				});

				$('.flash-tree').addClass('flash'); //树形logo闪烁播放
			};
			
			isComplete.src = '../images/about/13.jpg';

		})();
	})();

/***/ },
/* 38 */
/***/ function(module, exports) {

	(function() {
		var iTop = $('.page2').offset().top,
			num = -150; //滚动提前量

		var aSpan = $('.page2 .text span');
		$(document).on('scroll', function() {
			if ($(this).scrollTop() > (iTop + num)) {
				fadeInDownOrder(aSpan);
			}
		});

		function fadeInDownOrder(obj, i) {
			i = i || 0;
			obj.eq(i).addClass('fadeInDown').on('animationend', function() {
				i++;
				if (i === obj.length) return;
				fadeInDownOrder(obj, i);
				// console.log(1)
			})
		}
	})();

/***/ },
/* 39 */
/***/ function(module, exports) {

	(function() {
		var oPage3 = $('.page3'),
			iH = oPage3.height(),
			iTop = oPage3.offset().top; //定值	page3距离文档顶部的高度

		/*与线条和文字相关的变量*/
		var num = 200, // 滚动条提前量,用于线条动画的开始
			len = $('.page3 i').length;

		/*与背景滚动相关的变量*/
		var beforeScrollTop = iTop,
			bgTop = 0,
			delta = 0; //背景图在y轴上偏移量,向下滚动值为正

		$(document).on('scroll', function() {
			var afterScrollTop = $(this).scrollTop();

			// 线条动画的加载时机
			if (afterScrollTop > (iTop - num)) lineTextAnimation();

			// 背景滚动
			if (afterScrollTop > iTop) { //当窗口位于page3及以下的时候触发背景移动
				requestAnimationFrame(function() {//使动画更为流畅
					delta = afterScrollTop - beforeScrollTop;
					// console.log('delta:' + delta);

					bgTop -= delta / 1.5; //被除数的系数值越大，表示背景一次移动的距离越小
					oPage3.css('background-position', '0 ' + bgTop + 'px');

					beforeScrollTop = afterScrollTop;
				})
			}
		});

		//线条与文字的动画
		function lineTextAnimation(i) {
			var index = i || 0;

			$('.page3 i').eq(index).addClass('lineShow').on('webkitTransitionEnd', function() { //过渡结束时回调
				$('.page3 .text').eq(index).slideDown();

				index++;
				if (index === len) return; //停止循环

				lineTextAnimation(index);
			});
		}
	})();

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 置顶
	// 依赖于jquery
	(function() {
		var getTop = $('<a>');

		getTop.attr({
			id: "getTop",
			href: "javascript:void(0);",
		}).appendTo('body');

		var iTop = 300 //设置显示的临界值

		$(document).on('scroll', function() {
			if ($(this).scrollTop() < iTop) {
				getTop.addClass('slideOutRight').removeClass('slideInLeft');
			} else {
				if (getTop.hasClass('slideInLeft')) return; //防止多次添加影响性能
				getTop.addClass('slideInLeft').removeClass('slideOutRight');
				// console.log(1)
			}
		})
		
		getTop.on('click', function up() {
			var scrollTop = $(document).scrollTop();
			scrollTop -= 100
			$(document).scrollTop(scrollTop);
			if (scrollTop <= 0) {
				$(document).scrollTop(0);
				return;
			};
			// setTimeout(up, 30);
			requestAnimationFrame(up);
			// console.log(1)
		})
	})();

/***/ }
/******/ ]);