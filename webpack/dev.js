const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const resolve = (name) => {
    return path.resolve(__dirname, '..', name);
};

app.use('/static', express.static(resolve('status')));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    hot: true,
    stats: {
        colors: true,
        chunks: false,
        children: true,
    },
    progress: true,
    inline: true
}));

//实现无刷新的替换
app.use(hotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(3001, function (error) {
    error && console.log('error-----------', error);
    console.log('Example app listening on port 3001!\n');
});