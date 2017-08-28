import autoprefixer from 'autoprefixer';
import path from 'path';
import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

const htmlPath = path.resolve(__dirname, 'public/index.prod.html');
const appPath = path.resolve(__dirname, 'src/index.jsx');
const buildPath = path.resolve(__dirname, 'dist');

const config = {
  devtool: 'eval-source-map',
  entry: {
    app: appPath
  },
  output: {
    path: buildPath,
    filename: '[name].bundle.js'
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
              'react'
            ],
            plugins: [
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
    new DashboardPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlPath,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'public/logo.png'),
      prefix: 'icons-[hash]/',
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
      inject: true,
      title: 'GitHub Profile Search',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true
      }
    })
  ]
};

export default config;
