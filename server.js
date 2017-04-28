var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(3000, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
