/*
 * @Author: xianminghui
 * @Date:   2017-12-20 17:33:02
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-21 16:52:26
 */

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebPackPlugin = require('clean-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname, '../');
let ModuleConfig = {};

let EntryConfig = {
	index: path.join(ROOT_PATH, '/src/index.js'),
};

let PluginsConfig = [
	new CleanWebPackPlugin(['dist']),
	new HtmlWebpackPlugin({
		title: 'Redux-cnode',
		template: path.join(ROOT_PATH, '/src/blank.html'),
		filename: 'index.html',
		//chunks这个参数告诉插件要引用entry里面的哪几个入口
		chunks: ['index', 'lib'],
		//要把script插入到标签里
		inject: 'body',
		favicon: path.join(ROOT_PATH, '/src/static/images/favicon.ico')
	}),
	new webpack.NoErrorsPlugin(),
	new webpack.optimize.UglifyJsPlugin({
		output: {
			comments: false, // remove all comments
		},
		compress: {
			warnings: false
		}
	}),
	new webpack.optimize.CommonsChunkPlugin('lib', '[name].[hash].js'),

	new ExtractTextPlugin('[name].[hash].css')
];

ModuleConfig.entry = EntryConfig;
ModuleConfig.plugins = PluginsConfig;
ModuleConfig.devtool = 'source-map';

module.exports = ModuleConfig;