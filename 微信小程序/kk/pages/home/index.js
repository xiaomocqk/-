Page({
	data:{
		/*array : ["1","2","3"],
		view : "MINA",
	    staffA: {firstName: 'Hulk', lastName: 'Hu'},
	    staffB: {firstName: 'Shang', lastName: 'You'},
	    staffC: {firstName: 'Gideon', lastName: 'Lin'},
	    msg:[{
	    	message:"message1"
	    },{
	    	message:"message2"
	    },{
	    	info:"info1"
	    }],*/
	    imgURL:[
	    	"/image/jd1.jpg",
	    	"/image/jd2.jpg",
	    	"/image/jd3.jpg",
	    	"/image/jd4.jpg",
	    	"/image/jd5.jpg"
	    ],
	    indicatorDots:true,
	    autoplay:true,
	    interval: 2000,
	    duration: 1000,
	    
        logos:[{
            image:"/image/logo1.png",
            title:"京东超市"
        },{
            image:"/image/logo2.png",
            title:"全球购"
        },{
            image:"/image/logo3.png",
            title:"服装城"
        },{
            image:"/image/logo4.png",
            title:"京东生鲜"
        },{
            image:"/image/logo5.png",
            title:"京东到家"
        },{
            image:"/image/logo6.png",
            title:"充值中心"
        },{
            image:"/image/logo7.png",
            title:"京东金融"
        },{
            image:"/image/logo8.png",
            title:"物流查询"
        },{
            image:"/image/logo9.png",
            title:"领券"
        },{
            image:"/image/logo10.png",
            title:"我的关注"
        }],
        quicks:[{
            image:"/image/quick1.jpg",
            price:"￥123"
        },{
            image:"/image/quick2.jpg",
            price:"￥124"
        },{
            image:"/image/quick3.jpg",
            price:"￥125"
        },{
            image:"/image/quick4.jpg",
            price:"￥126"
        },{
            image:"/image/quick5.jpg",
            price:"￥127"
        },{
            image:"/image/quick6.jpg",
            price:"￥128"
        }]

	},
	onLoad:function (e) {
		// console.log("onLoad"+new Date().getSeconds())
	},
	onReady:function (e) {
		// console.log("onReady"+new Date().getSeconds())
	},
	onShow:function (e) {
		// console.log("onShow"+new Date().getSeconds())
	},
	onHide:function (e) {
		// console.log("onHide"+new Date().getSeconds())
	},
	onUnload:function (e) {
		// console.log("onUnload"+new Date().getSeconds())
	},
	// 自定义处理函数
    handleTap1:function(e){
    	console.log('handleTap1' +','+  e.currentTarget.id +','+ e.target.id)
    },
    handleTap2:function(e){
    	console.log('handleTap2' +','+  e.currentTarget.id +','+ e.target.id)
    },
    handleTap3:function(e){
    	console.log('handleTap3' +','+  e.currentTarget.id +','+ e.target.id)
    }

})