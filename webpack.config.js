var path = require("path")
var webpack = require("webpack")
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var htmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    devtool: 'cheap-module-source-map',
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.jsx$/, exclude: /node_modules/, use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    // "postcss-loader",
                ]
                // loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader' })
            },
            {
                test: /\.(scss)$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: "usrl-loader",
                    options: {
                        outputPath: "images/",
                        limit: 10 * 1024
                    }
                }
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name]-[hash:5].min.[ext]",
                        limit: 5000,
                        publicPath: "fonts/",
                        utputPath: "fonts/"
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "src/index.html")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        hot: true,
        port: 8888,
        historyApiFallback: true, // react router要配置
        proxy: {
            '/api': '',
            '/blog': {
                target: 'http://localhost:7001'
            }
        }
    }
}