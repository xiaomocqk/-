module.exports = {
	entry: ['./src/a.js','./src/a.css'],

	output: {
		path: './build', // 用 __dirname 可以表示生成在根目录
		filename: 'bundle.js'
	},

	module: {
		loaders: [{
			// style-loader 和 css-loader
			test: /\.css$/,
			loaders: ['style', 'css']
		}]
	}
};