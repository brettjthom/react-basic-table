var webpack = require('webpack');
var minify = process.argv.indexOf('-p') > -1;

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
    react: 'React'
  },

  output: {
    filename: minify ? 'lib/simple-table.min.js' : 'lib/simple-table.js',
    libraryTarget: 'umd',
    library: 'SimpleTable'
  },

  plugins: plugins,

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
