const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

const config = {
  mode: 'development',
  devServer: {
    port: 3001,
    hot: true,
    open: true,
  },
  
  output: {
    filename: 'myProject.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                namedExport: false,
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);