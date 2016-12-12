var F = function() {};
F.prototype = {
	name: "cat",
	foo: function() {}
};

$ = new F();
$.name;
// jQuery并没有使用new运行符将jQuery显示的实例化，而是直接调用其函数