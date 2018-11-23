const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const tsconfigPath = path.resolve(__dirname, '../../tsconfig.json');

module.exports = {
	name: 'base',
	entry: './index.tsx',
	context: path.resolve(__dirname, '../../src'),
	resolve: {
		extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
		alias: {
			Main: path.resolve(__dirname, '../../src/'),
			Components: path.resolve(__dirname, '../../src/components'),
			Shared: path.resolve(__dirname, '../../src/components/Shared'),
			Assets: path.resolve(__dirname, '../../src/assets')
		}
	},
	output: {
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					'cache-loader',
					{
						loader: 'thread-loader',
						options: {
							workers: require('os').cpus().length - 1
						}
					},
					{
						loader: 'ts-loader',
						options: {
							configFile: tsconfigPath,
							happyPackMode: true
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]'
						}
					},
					{
						loader: 'img-loader',
						options: {
							disable: true
						},
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: require('../../package.json').name,
			template: 'index.html.ejs',
			favicon: 'favicon.png',

		}),
		new ForkTsCheckerWebpackPlugin({
			checkSyntacticErrors: true,
			async: false,
			tsconfig: tsconfigPath
		}),
	]
};
