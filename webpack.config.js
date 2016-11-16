//引入
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ProductVersion = "20161110";

//默认路径
var distPath = path.join(__dirname,'/public/dist/');

//遍历文件
var getEntry = function (path) {
	var entry = {};
	glob.sync(path).forEach(function (name) {
		var n = name.substring((name.lastIndexOf('/') + 1),name.lastIndexOf('.'));
		var name = __dirname + name.substring(1);
		if(n.indexOf('.') != 0){
			entry[n] = name;
		}
	});
	console.log(entry);
	return entry;
};

//plugins
var plugins = [];

plugins.push(new webpack.HotModuleReplacementPlugin());

plugins.push(new webpack.ProvidePlugin({
		$: 'jquery',
		React: 'react'
	})
);

plugins.push(new webpack.DefinePlugin({
		'process.env':{NODE_ENV:JSON.stringify('production')}
	})
);

plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		except: ['$', 'require']
	})
);

plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'));

module.exports = {
	devtool: 'source-map',//debug
	entry: {
		index:"./public/asset/scripts/index.js",
		vendor: ['react', 'react-dom']
	},
	output: {
		path: distPath,
		publicPath: "/public/dist/",
		filename: 'js/[name].js?v=' + ProductVersion
	},
	externals: {
		jquery: 'window.$'
	},
	//require文件时自动补全后缀
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.less$/,
				loader: "style!css!less"//从右向左读
			}   /*less to css*/
		]
	},
	plugins: plugins
	//watch: true //观察者模式
};