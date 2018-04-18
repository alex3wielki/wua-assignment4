const webpack = require("webpack");

var config = {
  entry: {
    main: ["babel-polyfill", "./_dev/scripts/app.js"]
  },
  output: {
    filename: "./_dev/scripts/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;