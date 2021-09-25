const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin')
const path = require('path');
const glob = require('glob')
const express = require('express');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const PATHS = {
	src: path.join(__dirname, 'src')
  }
  

module.exports = {
	entry: {
		'build/bundle': ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: !prod
						},
						emitCss: prod,
						hotReload: !prod
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/inline",
			  },
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		// new PurgecssPlugin({
		//   paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
		// })
	],
	devtool: prod ? false : 'source-map',
	devServer: {
		contentBase: './public',
		hot: true,
		historyApiFallback: true,
		setup (app) {
			app.use('/assets/img/',
				express.static('/assets/img/'));
			app.use('/assets/css/',
				express.static('/assets/css/'));
			app.use('/assets/css/boxicons/',
				express.static('/assets/css/boxicons/'));
			app.use('/assets/img/portfolio',
				express.static('/assets/img/portfolio'));
			app.use('/assets/img/testimonials',
				express.static('/assets/img/testimonials'));
		/* Using this commented code will break the HMR, see edit
		  app.use('/static/js/',
			express.static(path.join(__dirname, 'dist', 'static', 'js')));
		  */
		  
		}
	  }
};
