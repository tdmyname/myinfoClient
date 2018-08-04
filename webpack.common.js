const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    filename: 'bundle-[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React简易开发环境',
      template: './src/index.html',
    }),
  ],
}

module.exports = config
