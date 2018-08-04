const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

const config = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sass|scss|css)/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})

module.exports = config
