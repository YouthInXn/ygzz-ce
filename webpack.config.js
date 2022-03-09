const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [ path.resolve(__dirname, 'src') ]
      }
    ]
  }
};