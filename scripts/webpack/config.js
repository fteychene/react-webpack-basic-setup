import path from "path"
import webpack from "webpack"

/**
 * Base webpack config
 */
const webpackConfig = {

  entry: {
    "index": [ "./index" ],
  },

  output: {
    publicPath: "/dist/",
    path: path.join(__dirname, "../../dist"),
    filename: "[name].js",
  },

  resolve: {
    extensions: [ "", ".js" ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("common.js"),
  ],
}

export default webpackConfig
