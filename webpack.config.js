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
      }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  }
};
