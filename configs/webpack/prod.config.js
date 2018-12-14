const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
	name: 'prod',
	extends: path.join(__dirname, 'base.config.js'),
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: 'js/bundle.min.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, '../../dist')
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../../')
		}),
		new FaviconsWebpackPlugin({
			logo: './assets/img/favicon.png',
			prefix: 'icons/',
			inject: true,
			persistentCache: false,
			icons: {
				android: true,
				appleIcon: true,
				appleStartup: true,
				coast: true,
				favicons: true,
				firefox: true,
				opengraph: true,
				twitter: true,
				yandex: true,
				windows: true
			}
		}),
		new BundleAnalyzerPlugin(),
	]
});
