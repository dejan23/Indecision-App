const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: 'style-loader' // creates style nodes from JS strings
            },
            {
              loader: 'css-loader' // translates CSS into CommonJS
            },
            {
              loader: 'sass-loader' // compiles Sass to CSS
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin()
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  };
};
