import autoprefixer from 'autoprefixer';
import glob from 'glob';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import WebpackOnBuildPlugin from 'on-build-webpack';
import SWPrecache from 'sw-precache-webpack-plugin';
import PurifyCSSPlugin from 'purifycss-webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';


const htmlPath = path.resolve(__dirname, 'index.html');
const appPath = path.resolve(__dirname, 'src/index.jsx');
const buildPath = path.resolve(__dirname, 'dist');

const config = {
  entry: {
    app: appPath
  },
  output: {
    path: buildPath,
    filename: '[name].bundle.js',
    publicPath: '/github-profile-search/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              'es2015',
              'react',
              'stage-0'
            ],
            plugins: [
              ['transform-runtime', {
                helpers: false,
                polyfill: false,
                regenerator: true,
                moduleName: 'babel-runtime'
              }],
              ['transform-decorators-legacy'],
              ['transform-react-jsx', { pragma: 'h' }]
            ]
          },
        }]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new HtmlWebpackInlineSourcePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, '*.(html|js)')),
      verbose: true,
      purifyOptions: {
        minify: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: 'static',
        to: 'static'
      },
      {
        from: '404.html',
        to: '.'
      }
    ]),
    new SWPrecache({
      cacheId: 'github-profile-search',
      minify: true,
      skipWaiting: true,
      filename: 'service-worker.js',
      navigateFallback: 'index.html',
      mergeStaticsConfig: false,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.DS_Store/],
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'cacheFirst',
        }
      ]
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: 0
      },
      sourceMap: false,
      compress: {
        unused: 1,
        warnings: 1,
        comparisons: 1,
        conditionals: 1,
        negate_iife: 1,
        dead_code: 1,
        if_return: 1,
        join_vars: 1,
        evaluate: 1
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlPath,
      filename: 'index.html',
      inlineSource: 'app.bundle.js',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
    }),
    new WebpackOnBuildPlugin((stats) => !stats.compilation.errors.length && process.exit(0))
  ]
};

export default config;
