var webpack = require('webpack');

// Options for Builds
var buildVar = process.argv.indexOf('-var') > -1;
var minify = process.argv.indexOf('-p') > -1;

// Different build types
var outputName = 'lib/simple-table';
outputName = outputName + (buildVar ? '-var' : '');
outputName = outputName + (minify ? '.min.js' : '.js');


var plugins = [
  new webpack.optimize.DedupePlugin()
].push(minify ? new webpack.optimize.UglifyJsPlugin() : null );


module.exports = {
  entry: './src/index.jsx',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  externals: {
    react: 'react'
  },

  output: {
    filename: outputName,
    libraryTarget: buildVar ? 'var' : 'umd',
    library: 'SimpleTable'
  },

  plugins: plugins,

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
