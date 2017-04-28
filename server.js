var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    proxy: {
        '/api/*': {
            target: 'http://localhost/travel-book/rest/public/'
        }
    }

}).listen(3000, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
