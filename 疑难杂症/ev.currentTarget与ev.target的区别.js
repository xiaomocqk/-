mc1.addChild(mc2);
mc1.addEventListener(MouseEvent.CLICK,doit1);
function doit1(e){
trace(e.currentTarget.name);//点击mc2,输出 mc1
trace(e.target.name);//点击mc2,输出 mc2
}

mc2.addEventListener(MouseEvent.CLICK,doit2);
function doit2(e){
trace(e.currentTarget.name);//点击mc2,输出 mc2
trace(e.target.name);//点击mc2,输出 mc2
}

// event.currentTarget 处理该click事件的对象是谁(有可能是子级没有绑定该事件，冒泡给有绑定该事件的父级来处理，所以currentTarget指的就是该父级)
// event.target 接收该click事件的对象是谁(即事件落在谁身上)
