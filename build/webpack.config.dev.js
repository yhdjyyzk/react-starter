process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommon = require('./webpack.common.js');

const port = 8080;

module.exports = webpackMerge.merge(webpackCommon, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(function (percentage, message, ...args) {
      if (percentage > 0.99) {
        console.log('open: http://localhost:' + port);
        console.log('*****************************************************');
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      title: '本地调试',
      cdnConfig: [] // cdn 配置
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    port: port,
    historyApiFallback: {
      index: '/index.html'
    }, // react router要配置
    proxy: {
    }
  }
});
