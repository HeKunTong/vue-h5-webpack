const path = require('path');
const webpack = require('webpack');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = (name) => {
    return path.resolve(__dirname, '..', name);
};

const sourceMap = process.env.NODE_ENV !== 'production';

const webpackConfig = {
    entry: {
        app: resolve('src/main.js'),
    },
    resolve: {
        modules: [ // 优化模块查找路径
            resolve('src'),
            resolve('node_modules') // 指定node_modules所在位置 当你import第三方模块式 直接从这个路径下搜寻
        ],
        extensions: ['.js', '.jsx', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader'],
            include: resolve('src'), // 指定需要加载的文件夹
            exclude: /(node_modules|bower_components)/,
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                { loader: 'css-loader', options: { sourceMap } },
                { loader: 'postcss-loader', options: { sourceMap } },
                { loader: 'px2rem-loader', options: { sourceMap, remUni: 75, remPrecision: 8 } },
            ]
        }, {
            test: /\.postcss$/,
            use: [
                'vue-style-loader',
                { loader: 'css-loader', options: { sourceMap } },
                { loader: 'postcss-loader', options: { sourceMap } },
                { loader: 'px2rem-loader', options: { sourceMap, remUni: 75, remPrecision: 8 } },
            ]
        }, {
            test: /\.less$/,
            use: [
                'vue-style-loader',
                { loader: 'css-loader', options: { sourceMap } },
                { loader: 'postcss-loader', options: { sourceMap } },
                { loader: 'px2rem-loader', options: { sourceMap, remUni: 75, remPrecision: 8 } },
                { loader: 'less-loader', options: { sourceMap } },
            ]
        }, {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                { loader: 'css-loader', options: { sourceMap } },
                { loader: 'postcss-loader', options: { sourceMap } },
                { loader: 'px2rem-loader', options: { sourceMap, remUni: 75, remPrecision: 8 } },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap,
                        sassOptions: {
                            implementation: require('sass'),
                            fiber: false
                        }
                    }
                },
            ]
        }, {
            test: /\.styl(us)?$/,
            use: [
                'vue-style-loader',
                { loader: 'css-loader', options: { sourceMap } },
                { loader: 'postcss-loader', options: { sourceMap } },
                { loader: 'px2rem-loader', options: { sourceMap, remUni: 75, remPrecision: 8 } },
                { loader: 'stylus-loader', options: { sourceMap } },
            ]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            }],
        }, {
            test: /\.(woff2?|eot|ttf|otf)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: 'fonts/[name]-[hash:6].[ext]'
                }
            }]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new NyanProgressPlugin(),
    ]
};

module.exports = webpackConfig;