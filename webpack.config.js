const path = require('path')
const webpack = require('webpack')
const resolve = dir => path.resolve(__dirname,dir)

const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        port: 8000,
        contentBase: './src',
        hot: true,
        host:  '192.168.125.103'
    },
    module: {
        rules: [
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                //排除node_modules目录
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]_[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // "vue": "vue/dist/vue.js"
            '@': resolve('src')
        }
    }
}


module.exports = config