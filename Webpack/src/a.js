var aText = require('./json/a.json'); /* 这里的 “./” 指的就是 当前文件a.js 所在的目录,即 webpack/src/ */

module.exports = function(){
	var div = document.createElement('div');
	div.textContent = aText.somewords;

	return div;
};