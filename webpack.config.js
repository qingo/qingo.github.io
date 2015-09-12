module.exports = {
	entry: {
		index: './src/templates/index.js'
	},
	output: {
		filename: './[name].js',
		path: './dist'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?stage=0'
			}, {
				test: /\.less$/,
				loader: 'style!css!less'
			}, {
				test: /\.jade/,
				loader: 'jade?client=1'
			}, {
				test: /\.md$/,
				loader: "html!markdown"
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.coffee']
	},

	watch: true
};