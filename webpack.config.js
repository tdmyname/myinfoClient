const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    filename: 'bundle-[hash].js',
    path: path.join(__dirname, 'dist'),
  },
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=fonts/[hash].[ext]',
      },
      {
        test: /\.(woff|woff2)(\?v=\d\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]',
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=25000&name=img/[hash].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React简易开发环境',
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = config
