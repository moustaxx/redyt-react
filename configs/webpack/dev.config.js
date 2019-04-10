const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
	name: 'dev',
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		hot: true,
		stats: 'minimal',
		historyApiFallback: true,
		progress: true,
		port: 80,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
