var webpack = require('webpack');

module.exports = {
  entry: './example/index.jsx',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  externals: {
    react: 'React'
  },

  output: {
    filename: './example/bundle.js',
    libraryTarget: 'umd',
    library: 'SimpleTable'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
