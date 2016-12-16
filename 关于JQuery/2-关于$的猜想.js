// jQuery就要看成一个类，那么$()应该是返回类的实例才对
var F = function() {
	return new F(); /* 很明显,死循环了,pass */
};
F.prototype = {
	name: "cat",
	foo: function() {}
};