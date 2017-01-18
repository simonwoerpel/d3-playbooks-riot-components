'use strict'

const Path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = options => {

  const webpackConfig = {
    devtool: options.devtool,
    entry: [
      `webpack-dev-server/client?http://localhost:${options.port}`,
      'webpack/hot/dev-server',
      './src/main.js'
    ],
    output: {
      path: Path.join(__dirname, 'dist'),
      filename: 'd3-playbooks.riot-components.min.js'
    },
    plugins: [
      new Webpack.ProvidePlugin({
        riot: 'riot'
      }),
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
        }
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    module: {
      preLoaders: [{
        test: /\.tag$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'riotjs-loader',
        query: {
          type: 'none'
        }
      }],
      loaders: [{
        test: /\.scss$/i,
        loaders: ['style', 'css', 'sass']
      }, {
        test: /\.js|\.tag$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }]
    },
    // FIXME
    externals: {
      d3: 'd3'
    }
  }

  if (options.isProduction) {
    webpackConfig.entry = ['./src/main.js']

    webpackConfig.plugins.push(
      new Webpack.optimize.OccurenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    )

  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.ProvidePlugin({d3: 'd3'})
    )

    webpackConfig.module.loaders.push({
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    })

    webpackConfig.devServer = {
      contentBase: './dist',
      hot: true,
      port: options.port,
      inline: true,
      progress: true
    }
  }

  return webpackConfig

}
