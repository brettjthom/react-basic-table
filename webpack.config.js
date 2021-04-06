module.exports = (env) => {  
  // Options for Builds
  var buildVar = env.var;
  var minify = env.mini;

  // Different build types
  var outputName = 'react-basic-table';
  outputName = outputName + (buildVar ? '-var' : '');
  outputName = outputName + (minify ? '.min.js' : '.js');


  return {
    entry: './src/index.jsx',

    module: {
      rules: [
        { enforce:'pre', test: /\.jsx?$/, include: /src/, use: 'eslint-loader' },
        { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }
      ]
    },

    output: {
      filename: outputName,
      libraryTarget: buildVar ? 'var' : 'umd',
      library: 'ReactBasicTable'
    },
    mode: minify ? 'production' : 'development',

    resolve: {
      extensions: ['.jsx', '.js']
    }
  }
};
