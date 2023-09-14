const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const commonConfig = require('./webpack.build.js');
module.exports = {
  ...commonConfig,
  plugins: [
    ...commonConfig.plugins,
    new BundleAnalyzerPlugin()
  ],
};
