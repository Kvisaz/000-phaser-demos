const commonConfig = require('./webpack.build.js');
module.exports = {
  ...commonConfig,
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    ...commonConfig.optimization,
    minimize: false,
  },
  devServer: {
    open: true,
    port: 8080,
  },
};
