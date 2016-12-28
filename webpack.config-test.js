var nodeExternals = require('webpack-node-externals');

module.exports = {
  // in order to ignore built-in modules like path, fs, etc.
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals()]
};