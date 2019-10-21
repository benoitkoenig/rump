module.exports = {
  entry: './src/server/app.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
}
