/*	配置可参考
 * 	http://blog.csdn.net/u013291076/article/details/53812311

	打包三步走:
		0. 注释掉 原html 中被打包的所有模块的link、script引用
		0. js内有用到图片时,改写成require形式
	 	1. 修改entry内key和value值。key值已设置会是打包后的js/css文件名称
	 	2. 修改HtmlWebpackPlugin中的template和filename
	 	3. 执行 webpack -p 命令行打包并压缩

	 	[4] 可选及注意事项: 1). 图片/css/js都自动添加了版本号
	 						2).	css3前缀采用默认值
	 						3).	打包后的文件无法在本地打开
	 						4). 是否需要引入cdn加速文件
 */

var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 安装后引入插件。css单独打包

var autoprefixer = require('autoprefixer'); //安装插件。css添加前缀

var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html文件


module.exports = {
	//entry:['./src/entry1.js', './src/entry2.js'], //这种写法会将这两个js文件默认 合并 成一个名为 main.js 
	entry: {
		index: './src/01/entry.index.js'
	},

	output: {
		path: './build/', // 打包后所有文件存放的目录，应该是说js存放的根目录(其他输出文件的相对位置，都是以这个目录为参考的)
		filename: 'js/[name].js' //  [name] [id] [hash] [path]可以运用这三个来给输出名字添加东西
	},

	module: {
		loaders: [

			{ // css。单独打包
				test: /\.css$/, //css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
				loader: ExtractTextPlugin.extract(["css-loader", "postcss-loader"]) //单独提取css不需要style-loader. postcss是用于在js中转换css样式的js插件
			},

			{ // url-loader或file-loader 处理图片
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
				loader: "file-loader?limit=8192&name=images/[hash:8].[ext]" //生成图片的位置、图片名称(8位hash值)。相对于path
			},

			{ // json-loader 读取json数据
				test: /\.json$/,
				loader: "json"
			},

			{ //html-loader 处理html中的图片
				test: /\.html$/,
				loader: "html"
			}
		]
	},

	// 添加css3前缀
	postcss: [
		autoprefixer(
			/*{
				browsers: ['last 2 versions']
			}*/
		)
	],

	plugins: [
		// new webpack.optimize.CommonsChunkPlugin('common.js'),// 单独抽出公用的js部分，暂时不开启。如果开启需要提前在html中引入

		new ExtractTextPlugin("css/[name].css"), //, 生成的css路径及文件名(css文件中包含url这种相对路径的样式，所以需要注意他的路径。相对于path)

		new HtmlWebpackPlugin({
			template: 'src/01/index.html',
			filename: 'index.html', //输出的路径及文件名。相对于path
			//favicon: 'src/images/favicon.ico',

			inject: true, //允许插件修改哪些内容，包括head与body
			hash: true, //为静态资源生成hash值
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: false //删除空白符与换行符
			}
		})
	]
};