const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin('bundle.css');

module.exports = [
  {
    entry: path.join(__dirname, 'src/app.tsx'),
    output: {
      path: path.join(__dirname, 'www'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: 'www',
      port: 4000,
      inline: true,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          use: 'awesome-typescript-loader',
          exclude: /node_modules/,
        },
        {
          enforce: 'pre',
          test: /\.tsx$/,
          exclude: /node_modules/,
          loader: 'tslint-loader',
        },
      ],
    },
  }, {
    entry: path.join(__dirname, 'src/styles/app.sass'),
    output: {
      path: path.join(__dirname, 'www'),
      filename: 'bundle.css',
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          }),
        },
      ],
    },
    plugins: [
      extractSass,
    ],
  }];
