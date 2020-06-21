const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
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
        test: /\.(woff(2)?|eot|ttf|otf|png|jpe?g|gif|svg)$/,
        use: {
          loader: "url-loader",
          options : {
            limit: 10000
          }
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
      title: 'Интернет-магазин',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
    })
  ],
  performance: {
    hints: false,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8000,
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    http2: true,
    https: true,
    quiet: true,
    stats: {
      errorDetails: true,
      publicPath: false,
      children: false,
      warnings: true,
      version: true,
      modules: false,
      timings: true,
      reasons: false,
      colors: true,
      assets: true,
      chunks: false,
      source: false,
      errors: true,
      hash: true,
    }
  }
};
