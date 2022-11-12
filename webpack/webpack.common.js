const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: resolve(__dirname, '../src/index.tsx')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: '[name][hash][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      title: 'ЗИКМЕС ТЕСТ',
      favicon: resolve(__dirname, '../public/favicon.ico'),
    }),
  ],
  stats: 'errors-only',
};