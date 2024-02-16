// const path = require('path');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
    ],
  },
  // output: {
  // path: path.resolve(__dirname, 'dist'),
  // },
  // entry: './src/index.js',
};
