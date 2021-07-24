const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (name) => {
    return path.resolve(__dirname, '..', name);
};

module.exports = {
    output: {
        path: resolve('dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: resolve('src/images'),
        //         to: resolve('dist/images'),
        //         globOptions: {
        //             ignore: ['*.md'],
        //         }
        //     }, {
        //         from: resolve('public/favicon.ico'),
        //         to: resolve('dist/favicon.ico'),
        //     }],
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            favicon: resolve('public/favicon.ico'),
            chunksSortMode: 'none'
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: 'vendor',
                    name: 'vendor'
                }
            }
        },
        minimize: true
    }
};