const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    path: __dirname + '/client',
    filename: 'index.js'
  },
  target: 'web',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/client/index.html',
    inject: 'body',
    preload: 'index.js'
  })]
}
