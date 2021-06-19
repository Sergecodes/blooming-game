const path = require('path');

module.exports = {
	entry: [
		'/ui/js/index.js', '/ui/js/pre-init.js', '/ui/js/event-handlers.js', 
	],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname + '/business/build'),
	},
	mode: 'development',

	module: {
		rules: [
			{
				// test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			}
		]
	},
}
