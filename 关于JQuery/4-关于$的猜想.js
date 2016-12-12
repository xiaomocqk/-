// 在javascript中实例this只跟原型有关系
var F = function() {
	return F.prototype.init();
};

F.prototype = {
	init: function() {
		this.name = 'dog'; /*this指向构造器F的实例*/
		return this;
	},

	name: "cat",  /*这个值被修改了*/
	foo: function() {}
};