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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	// css
	__webpack_require__(1)
	__webpack_require__(9)
	__webpack_require__(22)
	__webpack_require__(25)

	// js
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);


/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 9:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 22:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 25:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 27:
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

/***/ 28:
/***/ function(module, exports) {

	$(function () {
	    var h = $(window).height(),w = $(window).width() / 6, num = 0, isB = true;
	    // 第一屏
	    $('.page1').height(h);



	    // ‘用人理念’的动画
	    var a = 300;  //设置一个滚动条的临界值
	    $(window).scroll(function () {
	        if($(window).scrollTop() >= a && isB) {
	            isB = false;
	           $('.text1').fadeIn(400,function() {
	               $('.text2').fadeIn(400, function () {
	                   $('.text3').fadeIn(400,function () {
	                       $('.text4').fadeIn(400);
	                   })
	               })
	           })
	        }
	    })

	    // 图片大小的处理
	    $('.chicken, .right2, .right3').width(2*w).height(2*w);
	    $('.flower, .right1, .null, .book, .zg, .kj').width(w).height(w);
	    $('.hourse').width(2*w - 50).height(2*w - 100);
	    $('.hourse img').width(2*w - 50).height(2*w - 100);
	    $('.gl').width(2*w).height(w);
	    $('.page3').height(3*w);

	    // 鼠标hover效果的调用
	    $('.chicken').hover(function () {
	        var _this = $(this);
	        enter(_this);
	    }, function () {
	        var _this = $(this);
	        out(_this);
	    })
	    $('.flower').hover(function () {
	        var _this = $(this);
	        enter(_this);
	    }, function () {
	        var _this = $(this);
	        out(_this);
	    })
	    $('.kj').hover(function () {
	        var _this = $(this);
	        enter(_this);
	    }, function () {
	        var _this = $(this);
	        out(_this);
	    })
	    $('.gl').hover(function () {
	        var _this = $(this);
	        enter(_this);
	    }, function () {
	        var _this = $(this);
	        out(_this);
	    })
	    $('.book').hover(function () {
	        var _this = $(this);
	        enter(_this);
	    }, function () {
	        var _this = $(this);
	        out(_this);
	    })
	    $('.hourse').hover(function () {
	        var _this = $(this);
	        enter(_this);
	    }, function () {
	        var _this = $(this);
	        out(_this);
	    })


	    // 图片鼠标移入效果
	    function enter(a) {
	        a.children('em').fadeIn().siblings("img").removeClass('nor').addClass('big');
	        a.children('.l1, .l2').stop().animate({
	            width: 90 + '%',
	        })
	        a.children('.l3, .l4').stop().animate({
	            height: 90 + '%',
	        })
	    }
	    // 鼠标移除效果
	    function out(a) {
	        a.children('em').fadeOut().siblings("img").removeClass('big').addClass('nor');
	        a.children('.l1, .l2').stop().animate({
	            width: 0 + '%',
	        })
	        a.children('.l3, .l4').stop().animate({
	            height: 0 + '%',
	        })
	    }

	    // page4 banner效果
	    (function(c,b){var a=function(){var d=this;d.o={speed:500,delay:3000,init:0,pause:!b,loop:!b,keys:b,dots:b,arrows:b,prev:"←",next:"→",fluid:b,starting:b,complete:b,items:">ul",item:">li",easing:"swing"};d.init=function(i,j){d.o=c.extend(d.o,j);d.el=i;d.ul=i.find(d.o.items);d.max=[i.outerWidth()|0,i.outerHeight()|0];d.li=d.ul.find(d.o.item).each(function(l){var n=c(this),m=n.outerWidth(),k=n.outerHeight();if(m>d.max[0]){d.max[0]=m}if(k>d.max[1]){d.max[1]=k}});var j=d.o,h=d.ul,g=d.li,f=g.length;d.i=0;i.css({width:d.max[0],height:g.first().outerHeight(),overflow:"hidden"});h.css({position:"relative",left:0,width:(f*100)+"%"});g.css({"float":"left",width:(d.max[0])+"px"});setTimeout(function(){if(j.delay|0){d.play();if(j.pause){i.on("mouseover mouseout",function(k){d.stop();k.type=="mouseout"&&d.play()})}}},j.init|0);if(j.keys){c(document).keydown(function(l){var k=l.which;if(k==37){d.prev()}else{if(k==39){d.next()}else{if(k==27){d.stop()}}}})}j.dots&&e("dot");j.arrows&&e("arrow");if(j.fluid){c(window).resize(function(){d.r&&clearTimeout(d.r);d.r=setTimeout(function(){var l={height:g.eq(d.i).outerHeight()},k=i.outerWidth();h.css(l);l.width=Math.min(Math.round((k/i.parent().width())*100),100)+"%";i.css(l)},50)}).resize()}if(c.event.special.swipe||c.Event("swipe")){i.on("swipeleft swiperight swipeLeft swipeRight",function(k){k.type.toLowerCase()=="swipeleft"?d.next():d.prev()})}return d};d.to=function(j,q){if(d.t){d.stop();d.play()}var f=d.o,g=d.el,m=d.ul,p=d.li,k=d.i,l=p.eq(j);c.isFunction(f.starting)&&!q&&f.starting(g,p.eq(k));if((!l.length||j<0)&&f.loop==b){return}if(!l.length){j=0}if(j<0){j=p.length-1}l=p.eq(j);var h=q?5:f.speed|0,n=f.easing,i={height:l.outerHeight()};if(!m.queue("fx").length){g.find(".dot").eq(j).addClass("active").siblings().removeClass("active");g.animate(i,h,n)&&m.animate(c.extend({left:"-"+j+"00%"},i),h,n,function(o){d.i=j;c.isFunction(f.complete)&&!q&&f.complete(g,l)})}};d.play=function(){d.t=setInterval(function(){d.to(d.i+1)},d.o.delay|0)};d.stop=function(){d.t=clearInterval(d.t);return d};d.next=function(){return d.stop().to(d.i+1)};d.prev=function(){return d.stop().to(d.i-1)};function e(f,g){if(f=="dot"){g='<ol class="dots">';c.each(d.li,function(h){g+='<li class="'+(h==d.i?f+" active":f)+'">'+(++h)+"</li>"});g+="</ol>"}else{g='<div class="';g=g+f+'s">'+g+f+' prev">'+d.o.prev+"</div>"+g+f+' next">'+d.o.next+"</div></div>"}d.el.addClass("has-"+f+"s").append(g).find("."+f).click(function(){var h=c(this);h.hasClass("dot")?d.stop().to(h.index()):h.hasClass("prev")?d.prev():d.next()})}};c.fn.unslider=function(e){var d=this.length;return this.each(function(g){var i=c(this),h="unslider"+(d>1?"-"+(++g):""),f=(new a).init(i,e);i.data(h,f).data("key",h)})};a.version="1.0.0"})(jQuery,false);

	    $('.banner').unslider({arrows:true,dots:true});
	    $('.section4 .dots').eq(1).hide();
	    $('.banner .dot').mouseover(function(){
	        $(this).closest('.banner').find('ul').stop();
	        $(this).click();});
	    $('.banner').hover(function(){$(this).toggleClass('hover');
	    });
	    $(window).resize(function () {
	        if($('.banner').width() >= 1100) {
	            $('.banner').width(1100);
	        }
	    })
	})

/***/ },

/***/ 29:
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

/******/ });