var webpack = require('webpack');

module.exports = {
  entry: './example/index.jsx',

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },

  output: {
    filename: './example/bundle.js',
    libraryTarget: 'umd',
    library: 'example'
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  eslint: {
      failOnWarning: false,
      failOnError: true,
      configFile: './.eslintrc.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
