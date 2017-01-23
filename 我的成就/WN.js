/*  文件来源于http://wnworld.com/archives/204.html
    这是一个【原生】的为transition事件与animation事件，自动添加前缀的功能函数。

    添加transition事件的方法：WN.addTranEvent(elem,callback,duration);

    添加animation事件的方法：WN.addAnimEvent(elem,callback);
    删除animation事件的方法：WN.removeAnimEvent(elem,callback);

    添加css3属性的方法：WN.setStyleAttribute(elem, val);  //val是一个json对象
*/
(function (root, factory) {
        if (typeof define === 'function') {
            define(factory);
        }else if (typeof exports === 'object') {
            module.exports = factory;
        } else {
            root.WN = factory();
        }
})(this,function(){
        var WN = {},
            body=document.body || document.documentElement,
            style=body.style, 
            transition="transition",
            transitionEnd,
            animationEnd,
            vendorPrefix; 
          
        transition=transition.charAt(0).toUpperCase() + transition.substr(1);
  
        vendorPrefix=(function(){//现在的opera也是webkit
            var  i=0, vendor=["Moz", "Webkit", "Khtml", "O", "ms"];
            while (i < vendor.length) {
                if (typeof style[vendor[i] + transition] === "string") {
                  return vendor[i];
                }
                i++;
            }
            return false;
        })();
        
        // 可能有多组过渡元素在执行,这个时候会发生多起transitionend事件
        transitionEnd=(function(){
            var transEndEventNames = {
              WebkitTransition : 'webkitTransitionEnd',
              MozTransition    : 'transitionend',
              OTransition      : 'oTransitionEnd otransitionend',
              transition       : 'transitionend'
            }
            for(var name in transEndEventNames){
                if(typeof style[name] === "string"){
                    return transEndEventNames[name]
                }
            }
        })();
  
        animationEnd=(function(){
            var animEndEventNames = {
              WebkitAnimation : 'webkitAnimationEnd',
              animation      : 'animationend'
            }
            for(var name in animEndEventNames){
                if(typeof style[name] === "string"){
                    return animEndEventNames[name]
                }
            }
        })();
        WN.addTranEvent=function(elem,fn,duration){
            var called=false;
            var fncallback = function(){
                    if(!called){
                        fn();
                        called=true;
                    }
            };
            function hand(){    
                elem.addEventListener(transitionEnd, function () {
                    elem.removeEventListener(transitionEnd, arguments.callee, false);//清除该过渡效果
                        fncallback();
                }, false);
            }
            setTimeout(hand,duration);//duration,单位毫秒。其值需要根据具体情况给值。如果只有一组过渡，那么给结束的时间
        };
        WN.addAnimEvent=function(elem,fn){
            elem.addEventListener(animationEnd,fn,false)
        };
  
        WN.removeAnimEvent=function(elem,fn){
            elem.removeEventListener(animationEnd,fn,false)
        };
  
        WN.setStyleAttribute=function(elem,val){
            if(Object.prototype.toString.call(val)==="[object Object]"){
                for(var name in val){
                    if(/^transition|animation|transform/.test(name)){
                        var styleName=name.charAt(0).toUpperCase() + name.substr(1);
                        elem.style[vendorPrefix+styleName]=val[name];
                    }else{
                        elem.style[name]=val[name];
                    }
                }
            }
        };
        WN.transitionEnd=transitionEnd;
        WN.vendorPrefix=vendorPrefix;
        WN.animationEnd=animationEnd;
        return WN;
    });