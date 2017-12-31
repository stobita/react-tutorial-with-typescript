const path = require('path');

module.exports = {
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
};
