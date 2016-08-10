var webpack = require('webpack');

module.exports = {
  entry: './example/index.jsx',

  module: {
    preLoaders: [
      { test: /\.jsx?$/, include: /src/, loaders: ['eslint?{fix:true}']}
    ],
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

  eslint: {
      failOnWarning: false,
      failOnError: true,
      configFile: './.eslintrc.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
