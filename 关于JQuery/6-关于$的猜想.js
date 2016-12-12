// 在javascript中实例this只跟原型有关系
var F = function() {
	return new F.prototype.init();
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

// 那么,如何访问jQuery类原型上的属性与方法？答案如下：
F.prototype.init.prototype = F.prototype;
// F().foo()   cat