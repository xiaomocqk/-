//浏览器前缀
var _prefix = (function(temp) {
	var aPrefix = ['webkit', 'moz', 'o', 'ms'],
		props = '';
	for (var i in aPrefix) {
		props = aPrefix[i] + 'Transition';
		if (temp.style[props] !== undefined) {
			return '-' + aPrefix[i] + '-';
		}
	}
	return false;
})(document.createElement('div'));

if (!_prefix) {
	alert('古董浏览器');
}