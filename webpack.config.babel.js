import autoprefixer from 'autoprefixer';
import path from 'path';
import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

const htmlPath = path.resolve(__dirname, 'public/index.html');
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
    overlay: true,
    hotOnly: true,
    inline: true,
    port: 3100,
    historyApiFallback: true
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
              'stage-2'
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
    new HtmlWebpackHarddiskPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlPath,
      alwaysWriteToDisk: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:3100/'
    },
    {
      reload: false
    })
  ]
};

export default config;
