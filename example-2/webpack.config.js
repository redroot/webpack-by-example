const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
    internal: './src/internal.js' // for signed in users
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
  }
};
