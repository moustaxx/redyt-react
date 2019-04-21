const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const rootPath = path.resolve(__dirname, '../../');
const srcPath = path.resolve(rootPath, 'src');

const tsconfigPath = path.resolve(rootPath, 'tsconfig.json');
const tslintPath = path.resolve(rootPath, 'tslint.json');

module.exports = {
	name: 'base',
	entry: './index.tsx',
	context: srcPath,
	resolve: {
		extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
		alias: {
			Main: srcPath,
			Theme: path.resolve(srcPath, 'theme'),
			Components: path.resolve(srcPath, 'components'),
			Shared: path.resolve(srcPath, 'components/Shared'),
			Assets: path.resolve(srcPath, 'assets')
		}
	},
	output: {
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					options: {
						configFile: tsconfigPath,
						transpileOnly: true
					}
				}
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
						loader: 'img-loader'
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			favicon: './assets/favicon.png',

		}),
		new ForkTsCheckerWebpackPlugin({
			async: false,
			checkSyntacticErrors: true,
			useTypescriptIncrementalApi: true,
			tsconfig: tsconfigPath,
			tslint: tslintPath
		}),
	]
};
