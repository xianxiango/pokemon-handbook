/*
 * @Author: xianminghui
 * @Date:   2017-12-20 17:22:18
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-21 11:49:59
 */
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname);
let ModuleConfig = {};

const svgDirs = [
	require.resolve('antd-mobile').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
	path.resolve(__dirname, 'src/images'), // 2. 自己私人的 svg 存放目录
];
const imageDirs = [
	path.resolve(__dirname, 'src/images'), // 2. 自己私人的 svg 存放目录
];

ModuleConfig.entry = require('./webpack.config/module.config.js').entry;

ModuleConfig.output = {
	path: path.join(ROOT_PATH, '/dist'),
	publicPath: '/public',
	filename: '[name].[hash].js'
};

ModuleConfig.plugins = require('./webpack.config/module.config.js').plugins;


ModuleConfig.resolve = {
	modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
	extensions: ['', '.web.js', '.js', '.json'],
};

ModuleConfig.module = {
	loaders: [{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel',
		loaders: ['react-hot', 'babel'],
		query: {
			presets: ['react', 'es2015']
		}
	}, {
		test: /\.(svg)$/i,
		loader: 'svg-sprite',
		include: svgDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
	}, {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract("style-loader", "css-loader")
	}, {
		test: /\.less$/,
		loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
	}, {
　　　　　test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
		options:{
			publicPath:'/'
		}
　　 }, { 
		test: /\.png$/, 
		loader: "file-loader?name=images/[hash:8].[name].[ext]" ,
		options:{
			publicPath:'/'
		}
	}]

};

ModuleConfig.devServer = require('./webpack.config/devServer.config.js');

module.exports = ModuleConfig;