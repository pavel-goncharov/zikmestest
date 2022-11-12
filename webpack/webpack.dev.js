const {resolve} = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: resolve(__dirname, '../src'),
      watch: true
    },
    port: 3000,
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ]
};