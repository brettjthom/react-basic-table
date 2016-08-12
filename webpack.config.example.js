var webpack = require('webpack');

module.exports = {
  entry: './example/index.jsx',

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

  externals: {
    "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
    }
  },

  output: {
    filename: './example/bundle.js',
    libraryTarget: 'umd',
    library: 'ReactBasicTable'
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
