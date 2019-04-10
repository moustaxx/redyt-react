const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
	name: 'dev',
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		progress: true,
		port: 80,
		stats: 'minimal',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
