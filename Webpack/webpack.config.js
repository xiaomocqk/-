var webpack = require('webpack');

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); // 引入插件(这是一个自带的内置插件,用来将模块内重复的部分单独打包)。注意：必须把common.js也引入html中，并且在和它同时生成的模块(这里是entry.js和alert.js)之前引入。这里我们暂时先不打算开启

/*var ExtractTextPlugin = require("extract-text-webpack-plugin");// 安装后引入插件。将css单独打包出来，这里我们暂时不开启*/

module.exports = {
	devtool: 'eval-source-map', //在学习阶段以及在小到中性的项目上，eval-source-map是一个很好的选项，不过记得只在开发阶段使用它

	entry: { //可以多个，会按照顺序进行打包。entry可以是数组或者json对象。json的方法会分别生成两个js
		entry: './src/entry.js',
		alert: './src/alert.js'
			/*,
					css: './src/css/a.css'*/
	},
	/*entry:['./src/entry.js', './src/alert.js'], //这种写法会将这两个js文件默认 合并 成一个名为 main.js */

	output: {
		path: './build',
		filename: '[name].js' // [name] [id] [hash]可以运用这三个来给输出名字添加东西
	},

	module: { //在配置文件里添加JSON loader
		loaders: [/*{//将css单独打包出来，这里我们暂时不开启
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, */{
			test: /\.css$/, //css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
			loader: 'style!css' //表示用style-loader和css-loader处理,"!"表示"和"。然后输入到 bundle.js 文件内,再由 bundle.js 运行到html中
		}, {
			test: /\.js$/, //.js 文件使用 jsx-loader 来编译处理
			loader: "jsx-loader"
		}, {
			test: /\.less$/,
			loader: "style!css!less" // 将 less 文件编译成 css 格式,然后输入到 bundle.js 文件内,再由 bundle.js 运行到html中
		}, {
			test: /\.json$/,
			loader: "json" //表示用json-loader处理
		}]
	},

	resolve: { //自动扩展文件的后缀名
		extensions: ['', '.js', '.jsx'], // 可以用来指定模块的后缀，这样在引入模块require()时就不需要写后缀，会自动补全。
		//模块别名定义，方便后续直接引用别名，无须多写长长的地址
		alias: {
			/*m1: './src/module1.js', // 后面直接引用 require(“m1”)即可引用到模块
			m2: './src/module2.js'
			m3: './src/module3.js'*/
		}
	},

	plugins: [ /*commonsPlugin,*/ /*new ExtractTextPlugin("[name].css")*/]
}