const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              importLoaders: 1
            }
          },
        ]
      }
    ]
  },
});
