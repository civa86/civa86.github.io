(function (module) {
    'use strict';

    //TODO upgrade to webpack 2

    var path = require('path'),
        webpack = require('webpack'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        ExtractTextPlugin = require('extract-text-webpack-plugin'),
        devtoolValue,
        entry,
        output,
        pluginsSet,
        emitLintErrors,
        ExtractStyle,
        noVendorDeps = ['bootstrap', 'octicons'],
        vendorDeps = Object.keys(require('./package.json').dependencies)
                           .filter(function (e) { return noVendorDeps.indexOf(e) === -1 });

    if (process.env.NODE_ENV === 'production') {
        //Build Configuration
        console.log('/***** APPLICATION BUILD ****/', vendorDeps);

        ExtractStyle = new ExtractTextPlugin('screen.[hash].css');

        devtoolValue = 'source-map';
        entry = {
            app: './app/src/index',
            vendor: vendorDeps
        };
        output = {
            path: path.join(__dirname, 'dist'),
            filename: 'js/bundle.[hash].min.js'
        };
        pluginsSet = [
            new webpack.optimize.CommonsChunkPlugin("vendor", "js/vendor.[hash].js"),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({ minimize: true }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'app', 'index.html'),
                inject: 'body'
            }),
            ExtractStyle,
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            })
        ];
        emitLintErrors = true;

    } else {
        //Development Configuration
        console.log('/***** APPLICATION DEVELOPMENT ****/');

        ExtractStyle = new ExtractTextPlugin('vendor.css');

        devtoolValue = 'source-map';
        entry = [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            './app/src/index'
        ];
        output = {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        };
        pluginsSet = [
            new webpack.HotModuleReplacementPlugin(),
            ExtractStyle,
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'app', 'index.html'),
                inject: 'body'
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"'
            })
        ];
        emitLintErrors = false;
    }

    module.exports = {
        devtool: devtoolValue,
        entry: entry,
        output: output,
        plugins: pluginsSet,
        resolveLoader: {
            fallback: path.join(__dirname, 'node_modules')
        },
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    loaders: ['eslint-loader'],
                    include: path.join(__dirname, 'app', 'src')
                }
            ],
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel'],
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'app', 'src')
                },
                {
                    test: /\.less$/,
                    loader: (process.env.NODE_ENV === 'production') ? ExtractStyle.extract('style', 'css!less') : 'style!css?sourceMap!less?sourceMap'
                },
                {
                    test: /\.css$/,
                    loader: ExtractStyle.extract('style', 'css')
                },
                {
                    test: /\.(txt)$/,
                    loader: 'file?name=[name].[ext]'
                },
                {
                    test: /\.(json)$/,
                    loader: 'raw'
                },
                {
                    test: /\.(woff|woff2|ttf|eot)(\?=?|$)/,
                    loader: 'file?name=assets/fonts/[name].[ext]'
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)(\?=?|$)/,
                    loader: 'file?name=assets/img/[name].[ext]'
                }
            ]
        },
        eslint: {
            emitError: emitLintErrors,
            emitWarning: !emitLintErrors,
            failOnWarning: emitLintErrors,
            failOnError: emitLintErrors
        }
    };
})(module);
