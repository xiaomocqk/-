// 在javascript中实例this只跟原型有关系
var F = function() {
	return F.prototype.init();
};

F.prototype = {
	init: function() {
		return this; /*this指向F的实例*/
	},

	name: "cat",
	foo: function() {}
};

// F()执行返回{init：function(){}, name:"cat", type:"animal"}