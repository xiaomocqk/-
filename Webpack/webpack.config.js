/*	配置可参考
 * 	http://blog.csdn.net/u013291076/article/details/53812311
 */

var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 安装后引入插件。css单独打包

var autoprefixer = require('autoprefixer'); //安装插件。css添加前缀

/*var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); // 引入插件(这是一个自带的内置插件,用来将模块内重复的部分单独打包)。注意：必须把common.js也引入html中，并且在和它同时生成的模块(这里是entry.js和alert.js)之前引入。这里我们暂时先不打算开启*/

module.exports = {
	//entry:['./src/entry1.js', './src/entry2.js'], //这种写法会将这两个js文件默认 合并 成一个名为 main.js 
	entry: {
		about: './src/orangetree/entry.about.js',
		services: './src/orangetree/entry.services.js',
		index: './src/orangetree/entry.index.js',
		recruit: './src/orangetree/entry.recruit.js'
	},

	output: {
		path: './build', //打包后文件存放的目录
		filename: '[name].js' // [name] [id] [hash]可以运用这三个来给输出名字添加东西
	},

	module: {
		loaders: [

			{ // css。单独打包
				test: /\.css$/, //css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
				//loader: 'style!css' //其中css-loader用于解析，而style-loader则将解析后的样式嵌入js代码。
				loader: ExtractTextPlugin.extract(["css-loader", "postcss-loader"]) //单独提取css不需要style-loader
			},


			{ // 图片。url-loader会默认转换base url，如果不希望可以用file-loader
				test: /\.(jpg|png)$/,
				loader: "url?limit=8192&name=images/[hash:8].[ext]" //生成images文件夹，图片8位hash值
			},

			{ // 解析json
				test: /\.json$/,
				loader: "json"
			}
		]
	},

	// 添加css3前缀
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],

	plugins: [
		// new webpack.optimize.CommonsChunkPlugin('common.js'),//公用的js部分

		new ExtractTextPlugin("[name].css") //生成的css文件名
	]
}