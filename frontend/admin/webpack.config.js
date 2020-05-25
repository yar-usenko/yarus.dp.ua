const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html?$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Панель управления',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    })
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    http2: true,
    https: true,
    quiet: true,
    stats: 'errors-only'
  }
};
