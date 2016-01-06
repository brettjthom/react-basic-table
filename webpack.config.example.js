var webpack = require('webpack');

module.exports = {
  entry: './example/index.jsx',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, presets: ['es2015'] }
    ]
  },

  externals: {
    React: 'react'
  },

  output: {
    filename: './example/bundle.js',
    libraryTarget: 'umd',
    library: 'SimpleTable'
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
