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
	__webpack_require__(13)
	__webpack_require__(15)
	__webpack_require__(17)
	__webpack_require__(19)
	__webpack_require__(21)
	__webpack_require__(24)

	// js
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);


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

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
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
/* 32 */
/***/ function(module, exports) {

	// 首屏动画在dom加载后执行
	$(function() {
		(function() {
			var isComplete = new Image();
			// 图片加载后执行
			isComplete.onload = function() {
				fadeInUpOrder([$('.page1 h1'), $('.gradient-text'), $('.page1 .scope div')]);
				$('.gradient-text').on('animationend', function() {
					$('.page1 .img').addClass('fadeInUp');
				});
			};
			isComplete.src = '../images/services/response.jpg';
		})();
	})

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 依赖services.fadeInUpOrder.js
	(function() {

		animationStrat($('.page2'));
		animationStrat($('.page3'));

		// 动画执行时机
		function animationStrat($page) {
			var iTop = $page.offset().top,
				num = -200, //滚动条提前量
				flag = false; //标志动画加载情况

			$(document).on('scroll', function() {
				if (flag) return; //优化性能，防止多次滚动触发

				var scrollTop = $(this).scrollTop();

				if (scrollTop > (iTop + num)) {
					// 公共动画
					fadeInUpOrder([$page.find('h1'), $page.find('.text'), $page.find('.scope div')]);

					$page.find('.text').on('animationend', function() {
						// page2图片动画
						$page.find('.img').addClass('fadeInLeft');
						// page3图片动画
						$page.find('.app img').each(function() {
							$(this).addClass('fadeInRight');
						});
						flag = true;
						// console.log(1)
					})
				}
			})
		}

	})();

/***/ },
/* 34 */
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