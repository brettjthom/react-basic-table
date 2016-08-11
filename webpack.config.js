var webpack = require('webpack');

// Options for Builds
var buildVar = process.argv.indexOf('-var') > -1;
var minify = process.argv.indexOf('-p') > -1;

// Different build types
var outputName = 'lib/ReactBasicTable';
outputName = outputName + (buildVar ? '-var' : '');
outputName = outputName + (minify ? '.min.js' : '.js');


var plugins = [
  new webpack.optimize.DedupePlugin()
]
if (minify) plugins.push(new webpack.optimize.UglifyJsPlugin()); 


module.exports = {
  entry: './src/index.jsx',

  module: {
    preLoaders: [
      { test: /\.jsx?$/, include: /src/, loaders: ['eslint?{fix:true}']}
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {
        presets: ['react', 'es2015'],
        plugins: ["add-module-exports"]
      } }
    ]
  },

  externals: [{
    "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
    }
  }],

  output: {
    filename: outputName,
    libraryTarget: buildVar ? 'var' : 'umd',
    library: 'SimpleTable'
  },

  plugins: plugins,

  eslint: {
      failOnWarning: false,
      failOnError: true,
      configFile: './.eslintrc.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
