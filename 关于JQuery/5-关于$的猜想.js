// 在javascript中实例this只跟原型有关系
var F = function() {
	return new F.prototype.init(); /*相比之前多了一个new,即产生了一个init的实例*/
};

F.prototype = {
	init: function() {
		return this;
	},

	name: "cat",
	foo: function() {
		return this.name;
	}
};
// F().foo()  //抛出错误,原因new出来的init与F类的this分离了