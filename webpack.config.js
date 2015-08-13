module.exports = {
	entry: {
		//build: './src/index.js',
		Timeline: './src/timeline/timeline.js',
		Chart: './src/charts/chart.js'

		//style: './src/theme/default/theme.less'
	},
	output: {
		filename: './[name].js',
		path: './dist/module',
		library: ["MjVI", "[name]"],
		libraryTarget: "umd"
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