const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
	name: 'prod',
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: 'bundle.min.js',
		chunkFilename: '[name].[chunkhash].bundle.js',
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
		new BundleAnalyzerPlugin(),
	]
});
