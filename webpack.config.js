const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'slack-markdown-it',
    libraryTarget: 'umd',
    filename: 'main.js',
    auxiliaryComment: 'Test Comment',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};