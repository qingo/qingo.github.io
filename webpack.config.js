module.exports = {
	entry: {
		index: './src/templates/index.jsx',
		detail: './src/templates/detail.jsx'
	},
	output: {
		filename: './[name].js',
		path: './dist'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
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
		extensions: ['', '.js', '.json', '.jsx']
	},

	watch: true
};