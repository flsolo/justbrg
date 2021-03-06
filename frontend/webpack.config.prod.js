var webpack = require('webpack');
module.exports = {
  entry: "./js/app.js",
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: "style!css"
    },
   { test: /\.json$/, loader: "json-loader" }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
