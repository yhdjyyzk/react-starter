const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommon = require('./webpack.common.js');

module.exports = webpackMerge.merge(webpackCommon, {
  mode: 'production',
  devtool: false,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.ProgressPlugin(function (percentage, message, ...args) {
      console.info(message + (percentage * 100).toFixed(2) + '%' + '. ' + args.join(','));
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      title: 'wind',
      cdnConfig: [
        {
          url: 'https://cdn.bootcdn.net/ajax/libs/react/17.0.1/umd/react.production.min.js'
        },
        {
          url: 'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js'
        }
      ] // cdn 配置
    })
  ],
  optimization: {
    minimize: false, // webpack5 默认使用TerserWebpackPlugin压缩代码
    minimizer: [
      '...', // 扩展语法，继承默认配置
      new OptimizeCssAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        }
      }
    }
  }
});
