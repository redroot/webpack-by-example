const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(elm)$/,
        exclude: [/node_modules/, /elm-stuff/],
        use: ['elm-webpack-loader?verbose=true']
      }
    ],
    noParse: /\.elm$/,
  },
  resolve: {
    extensions: ['*', '.js', '.elm']
  },
  devServer: {
    port: 3000,
  }
};
