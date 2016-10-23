var StyleLintPlugin = require('stylelint-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var values = require('postcss-modules-values');

module.exports = {
  entry: './src',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    publicPath: '/build/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '{,**/}*.css',
      failOnError: false,
      quiet: false
    })
  ],
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  postcss: function () {
    return [values, autoprefixer, precss];
  }
};
