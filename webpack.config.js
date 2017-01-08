var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'whatwg-fetch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(woff|woff2)$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    },
    { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    },
    { test: /\.less$/,
      loader: "style!css!less"
    },
    { test: /\.css$/,
    loader: 'style-loader'
    }, {
    test: /\.css$/,
    loader: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  }]
  }
};
