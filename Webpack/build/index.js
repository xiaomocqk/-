!function(n){function a(o){if(e[o])return e[o].exports;var t=e[o]={exports:{},id:o,loaded:!1};return n[o].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var e={};return a.m=n,a.c=e,a.p="",a(0)}({0:function(n,a,e){e(2),e(14),e(1),e(3),e(20)},1:function(n,a){},2:function(n,a){},3:function(n,a){$(function(){function n(){clearTimeout(s),s=setInterval(function(){if(d--,d<=0){for(var n=0;n<4;n++)$(".nav-con li").eq(n).stop().delay(90*n).animate({top:"-50px"},600);t=!0,i=!1,d=2,clearTimeout(s),$(".nav-icon").stop().delay(800).fadeIn(),$(".nav-icon span").eq(0).removeClass("topDown").addClass("topUp"),$(".nav-icon span").eq(1).stop().animate({opacity:1},100),$(".nav-icon span").eq(2).removeClass("botUp").addClass("botDown")}},100)}function a(){clearTimeout(s),s=setInterval(function(){if(c--,c<=0){for(var n=0;n<4;n++)$(".nav-con li").eq(n).stop().delay(80*n).animate({top:0},600);$(".nav-con li").addClass("downAct"),t=!1,i=!0,c=2,clearTimeout(s),$(".nav-icon").hide()}},100)}function e(){$(".nav-icon span").eq(0).removeClass("topUp").addClass("topDown"),$(".nav-icon span").eq(1).stop().animate({opacity:0},100),$(".nav-icon span").eq(2).removeClass("botDown").addClass("botUp"),a()}function o(){var a=$(window).scrollTop();window.addEventListener("scroll",function(){var o=$(window).scrollTop(),i=o-a;return 0!==i&&(i>0&&o>50&&($(".nav").removeClass("nav-down nav-init").addClass("nav-begin"),$(".nav").hasClass("nav-up")&&$(".nav").removeClass("nav-up nav-begin").addClass("nav-down"),n()),i<0&&o>50?$(".nav").removeClass("nav-down nav-begin").addClass("nav-up"):i<0&&o<50&&$(".nav").removeClass("nav-up").addClass("nav-init"),i<0&&t&&e(),o>50?$(".nav-con a").removeClass("nor").addClass("white"):$(".nav-con a").removeClass("white").addClass("nor"),void(a=o))},!1)}$(window).scrollTop()>50&&$(".nav").addClass("nav-begin");var t=!1,i=!0,s=null,c=2,d=2;o(),$(".nav-icon").click(function(){e()}),$(".wechat").hover(function(){$(".wc").hide().next().show()},function(){$(".wc-a").hide().prev().show()}),$(".sina").hover(function(){$(".s").hide().next().show()},function(){$(".s-a").hide().prev().show()})})},14:function(n,a){},20:function(n,a){$(function(){function n(){var n=($(window).width(),$(window).height());$(".vid").css({height:n+"px"})}var a=document.getElementById("myV");n(),$(window).resize(function(){n()}),setTimeout(function(){$(".con img").animate({margin:0,opacity:1},600)},100),setTimeout(function(){$(".con .text1").animate({marginTop:"20px",opacity:1},600)},500),setTimeout(function(){$(".con .text2").animate({marginTop:"10px",opacity:1},1e3,function(){$(".mask").animate({opacity:.6},function(){a.play(),$(".logo").show()})})},800);var e={url:"images/about/07.jpg",fileSize:128,pageSize:2e3,speed:0,speedTest:function(n){var a=this,e=new Image,o=new Date;e.src=a.url,e.onload=function(){var e=new Date;a.speed=Math.round(1e3*a.fileSize)/(e-o),n&&n()}}};!function(){function n(){var n=e.pageSize/e.speed,o=window.webkitTransitionend?"webkitTransitionEnd":"transitionend";a.style.transitionDuration=n+"s",a.className="progress",n<.1&&(a.style.width="100%",setTimeout(function(){a.style.display="none"},100)),a.addEventListener(o,function(){this.style.display="none"},!1)}var a=document.createElement("div");a.id="progressBar",document.body.appendChild(a),e.speedTest(n)}()})}});