module.exports = {
	entry: [
		'./index.js', './js/pre-init.js', './js/bootstrap5-beta3.bundle.min.js',
		// './css/styles.css', './css/bootstrap5-beta3.min.css',
	],
	output: {
		filename: 'app.js',
		path: __dirname + '/build',
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
