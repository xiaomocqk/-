function Slider(containerId){
    this.containerId = $(containerId);
    this.ullis =$get($get(containerId,"ul")[0],"li");
    this.num = this.ullis.length;
    this.ollis =this.createList();
    this.indexA = 1;
    this.timer;
    this.init(this.indexA);
    this.ltBtn = $("ltBtn");
    this.rtBtn = $("rtBtn");
    this.mouseenter();
    this.autoplay(this.indexA);
    console.info(this.ollis);
}
Slider.prototype.createList =function(){//创建ol
    var ol = $create("ol");
    var lis = [];
    for(var i = 0; i<this.num;i++){
        var li = $create("li");
        ol.appendChild(li);
        lis.push(li);    
    }
    this.containerId.appendChild(ol);
    var spanleft = $create("span")
    spanleft.innerHTML="&lt;"
    spanleft.id="ltBtn";
    this.containerId.appendChild(spanleft);
    var spanright =$create("span");
    spanright.innerHTML = "&gt;"
    spanright.id = "rtBtn";
    this.containerId.appendChild(spanright);
    var div = $create("div")
    div.id= "msg";
    this.containerId.appendChild(div);
    return lis;
}
Slider.prototype.init =function(index){
    this.moveto(index);
}
Slider.prototype.mouseenter =function(){
    var that = this;
    for (var i = 0; i < this.num; i++) {
        this.ollis[i].index = i; 
        this.ollis[i].onmouseenter = function(){
            that.moveto(this.index);
        }
    }
    this.ltBtn.onclick = function(){
        if(that.indexA>0){
            that.indexA--;
            that.moveto(that.indexA);
        }else{
            that.indexA=that.num-1;
            that.moveto(that.indexA);
        }
    }
    this.rtBtn.onclick = function(){
        if(that.indexA<that.num-1){
            that.indexA++;
            that.moveto(that.indexA);
        }else{
            that.indexA = 0;
            that.moveto(that.indexA);
        }
    }
}
Slider.prototype.moveto =function(index){
    for (var i = 0; i < this.num; i++) {
        this.ullis[i].style.display="none";
        this.ollis[i].style.backgroundColor="red";    
    }
    this.ullis[index].style.display="block";
    this.ollis[index].style.backgroundColor="blue";
    $("msg").innerHTML = this.ullis[index].firstChild.firstChild.alt;
}
Slider.prototype.autoplay= function(indexA){
    var that =this;
    
    that.timer = setInterval(function(){
            indexA%=that.num;
            that.moveto(indexA);    
            indexA++;
        },3000);
    that.containerId.onmouseenter =function(){
        clearInterval(that.timer);
        console.info(that.containerId);
    }
    that.containerId.onmouseleave = function(){
        that.autoplay(indexA)
    }    
    
}