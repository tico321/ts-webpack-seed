var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './entry',
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'bundle.js'
  },
  // in order to ignore built-in modules like path, fs, etc.
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        exclude: /\.spec\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals()],
  //check rule flags at https://palantir.github.io/tslint/usage/rule-flags/
  tslint: { configFile: './tslint-custom.json' }
};
