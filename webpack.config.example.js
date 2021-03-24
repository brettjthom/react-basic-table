module.exports = {
  entry: './example/index.jsx',

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },

  output: {
    filename: './example/bundle.js',
    path: __dirname,
    libraryTarget: 'umd',
    library: 'example'
  },

  resolve: {
    extensions: ['.jsx', '.js']
  }
};
