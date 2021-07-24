const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const resolve = (name) => {
    return path.resolve(__dirname, '..', name);
};

module.exports = {
    output: {
        publicPath: '/',
        path: resolve('dist'),
        filename: '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            favicon: resolve('public/favicon.ico'),
            inject: true
        }),
        new BrowserSyncPlugin({
            host: '127.0.0.1',
            port: 3000,
            proxy: 'http://127.0.0.1:3001/'
        }, {
            reload: true
        }),
    ],
};