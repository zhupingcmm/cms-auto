const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const ProgressBarPlugin = require('webpackbar');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { index: path.resolve(__dirname, '../../src/index.tsx') },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'),
    clean: true,
  },
  stats: "errors-warnings",
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.(scss|sass|css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      // {
      //   test: /\.(ts|tsx|json)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   options: {
      //     cache: true,
      //     quiet: true,
      //     eslintPath: 'eslint',
      //     include: [
      //       path.resolve(__dirname, '../../')
      //     ]
      //   }
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
      hash: false,
      favicon: path.resolve(__dirname, '../../static/favicon.ico'),
      filename:'index.html'
    }),
    new CleanTerminalPlugin(), 
    new ProgressBarPlugin(),
    // new ForkTsCheckerWebpackPlugin({
    //   eslint: {
    //     files: './src/**/*.{ts,tsx,js,jsx}',
    //   },
    // }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
    })
  ],
  optimization: {
    usedExports: false,
  },
};