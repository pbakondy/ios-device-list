const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "ios-device-list.min.js",
    library: "iosDeviceList",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
